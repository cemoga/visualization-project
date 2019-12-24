import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session,sessionmaker
from sqlalchemy import create_engine, distinct
from sqlalchemy.sql import func

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL','') or f"postgres://postgres:password@localhost:5432/education_db"
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
detail = Base.classes.detail
institutional_characteristics_level = Base.classes.institutional_characteristics_level



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
def tuition():
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

    
@app.route("/yen")
def yen():
    """Return a dictionary of tuitions."""

    qry = db.session.query(basic.state,metrics.tuition_in_state,metrics.tuition_out_of_state,geoloc.location_lon, geoloc.location_lat,basic.name, basic.city,basic.school_url,detail.ownership, institutional_characteristics_level.description,metrics.instructional_expenditure_per_fte).filter(basic.id==metrics.id).filter(basic.id==detail.id).filter(basic.id==geoloc.id).filter(detail.institutional_characteristics_level == institutional_characteristics_level.code).all()

    yen = []
    for state,tuition_IS,tuition_OS, lon, lat, name, city, url, ownership,term, spend_fte in qry:      
        
        json = {}
        json["State"] = state
        json["tuitionIn"] = tuition_IS
        json["tuitionOut"] = tuition_OS
        json["lon"] = lon
        json["lat"] = lat
        json["name"] = name
        json["city"] = city
        json["url"] = url
        json["ownership"] = ownership
        json["term"] = term
        json["spend_fte"] = spend_fte
        yen.append(json)

    # Return a list of the column names (sample names)
    return jsonify(yen)


@app.route('/<string:page_name>/')
def render_static(page_name):
    return render_template('%s.html' % page_name)


if __name__ == "__main__":
    app.run()
