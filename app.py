import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session,sessionmaker
from sqlalchemy import create_engine
from sqlalchemy.sql import func

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
# from config import (Password, Database)


app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL','') or f"postgres://postgres:7718bill@localhost:5432/education_db"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
basic = Base.classes.basic
metrics = Base.classes.metrics
geoloc = Base.classes.geoloc
state_fips = Base.classes.state_fips


@app.route("/")
def index():
    """Return the homepage."""
    "<h1>Check to make sure this works</h1>"
    return render_template("index.html")

@app.route("/json")
def json():
    """Return the school metadata."""
    result = db.session.query(basic.name, basic.state,metrics.tuition_in_state,metrics.tuition_out_of_state,geoloc.location_lat,geoloc.location_lon).filter(basic.id==geoloc.id).filter(basic.id==metrics.id).all()
    schools = []
    for name, state, tuition_IS,tuition_OS, lat, lon in result:
        if tuition_IS is None:
            tuition_IS = ""
        if tuition_OS is None:
            tuition_OS = ""

        
        json = {}
        json["Name"] = name
        json["State"] = state
        json["Tuition_IS"] = tuition_IS
        json["Tuition_OS"] = tuition_OS
        json["Lat"] = lat
        json["Lon"] = lon
        schools.append(json)
    return jsonify(schools)

    
@app.route("/metric")
def metric():
    """Return data for cesar."""

    result = db.session.query(basic.name, basic.state, basic.city, metrics.tuition_in_state,metrics.tuition_out_of_state,metrics.faculty_salary, metrics.instructional_expenditure_per_fte,metrics.tuition_revenue_per_fte,geoloc.location_lat,geoloc.location_lon,state_fips.description).filter(basic.id==geoloc.id).filter(basic.id==metrics.id).filter(basic.state_fips==state_fips.code).all()

    cesars_page = []
    for name, state,city, tuition_IS,tuition_OS,fsal,expen_per_fte,tuition_rev, lat, lon,fips in result:
        if tuition_IS is None:
            tuition_IS = ""
        if tuition_OS is None:
            tuition_OS = ""       
        json = {}
        json["schoolName"] = name
        json["schoolState"] = state
        json["schoolCity"] = city
        json["tuitionIn"] = tuition_IS
        json["tuitionOut"] = tuition_OS
        json["facultySalary"] = fsal
        json["expenditurePerStudent"] = expen_per_fte
        json["tuitionRevenuePerStudent"] = tuition_rev
        json["schoolLat"] = lat
        json["schoolLong"] = lon
        json["Fips"] = fips
        cesars_page.append(json)
    return jsonify(cesars_page)


@app.route("/tuition")
def names():
    """Return a dictionary of tuitions."""

    qry = db.session.query(basic.state,func.round(func.avg(metrics.tuition_in_state)),func.round(func.avg(metrics.tuition_out_of_state))).filter(basic.id==metrics.id)
    qry = qry.group_by(basic.state) 

    tuition = []
    for state,tuition_IS,tuition_OS in qry:      
        
        json = {}
        json["State"] = state
        json["tuitionIn"] = tuition_IS
        json["tuitionOut"] = tuition_OS
        tuition.append(json)

    # Return a list of the column names (sample names)
    return jsonify(tuition)


# @app.route("/metadata/<sample>")
# def sample_metadata(sample):
#     """Return the MetaData for a given sample."""
#     sel = [
#         Samples_Metadata.sample,
#         Samples_Metadata.ETHNICITY,
#         Samples_Metadata.GENDER,
#         Samples_Metadata.AGE,
#         Samples_Metadata.LOCATION,
#         Samples_Metadata.BBTYPE,
#         Samples_Metadata.WFREQ,
#     ]

#     results = db.session.query(*sel).filter(Samples_Metadata.sample == sample).all()

#     # Create a dictionary entry for each row of metadata information
#     sample_metadata = {}
#     for result in results:
#         sample_metadata["sample"] = result[0]
#         sample_metadata["ETHNICITY"] = result[1]
#         sample_metadata["GENDER"] = result[2]
#         sample_metadata["AGE"] = result[3]
#         sample_metadata["LOCATION"] = result[4]
#         sample_metadata["BBTYPE"] = result[5]
#         sample_metadata["WFREQ"] = result[6]

#     print(sample_metadata)
#     return jsonify(sample_metadata)


# @app.route("/samples/<sample>")
# def samples(sample):
#     """Return `otu_ids`, `otu_labels`,and `sample_values`."""
#     stmt = db.session.query(Samples).statement
#     df = pd.read_sql_query(stmt, db.session.bind)

#     # Filter the data based on the sample number and
#     # only keep rows with values above 1
#     sample_data = df.loc[df[sample] > 1, ["otu_id", "otu_label", sample]]

#     # Sort by sample
#     sample_data.sort_values(by=sample, ascending=False, inplace=True)

#     # Format the data to send as json
#     data = {
#         "otu_ids": sample_data.otu_id.values.tolist(),
#         "sample_values": sample_data[sample].values.tolist(),
#         "otu_labels": sample_data.otu_label.tolist(),
#     }
#     return jsonify(data)


if __name__ == "__main__":
    app.run()
