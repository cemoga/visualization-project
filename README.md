<h1>Cost of American College Visualization Project</h1>

![App Running](screenshot/screenshot.gif "App Running")

---

<h2>Description</h2>
<h4>The purpose of this project is to query an API with College Metric Data, upload it to a Postgress Database and create multiple and interactive visualizations.</h4>
<h4>Tools used in this project: </h4>
<ol>
    <li>Python</li>
    <ul type = "none"><li>Libraries: </li>
    <ol type = "i">
        <li>Pandas</li>
        <li>Numpy</li>
        <li>Requests</li>
        <li>SQLAlchemy</li>
        <li>Flask</li>
        <li>Flask_SQLAlchemy</li>
        <li>SQLAlchemy</li>
        <li>SQLAlchemy_utils</li>
        <li>OS</li>
        <li>Math</li>
        <li>Psycopg2</li>
    </ol></ul>
    <li>PostgreSQL</li>
    <li>Javascript</li>
    <ul type = "none"><li>Libraries:</li> 
    <ol type = "i">
        <li>D3.js</li>
        <li>Plotly.js</li>
        <li>Google Charts</li>
        <li>Leaflet.js</li>
        <li>FusionCharts.js</li>
    </ol></ul>
</ol>


## Instructions
<p> To run this code, ensure that all the above libraries are installed in your environment.</p>

#### Steps
1. Sign up for [Data.gov](https://api.data.gov/signup/ "Data.gov") API key. 
2. Sign up for [Mapbox](https://account.mapbox.com/auth/signup/ "Mapbox") API key.
3. Enter your Mapbox API in `config.js` located in the static folder.
```JS
const API_KEY = 'ENTER YOUR API';
```
4. Enter your data.gov API key AND PostgreSQL info in `config.py`
```PY
api_key = " ENTER YOUR API"
UserName = "YOUR POSTGRESQL USERNAME"
Password = "YOUR POSTGRESQL PASSWORD"
```
5. Run the `RUNME.ipynb` `Python Notebook`. 
6. Run the `Flask` server by running the `app.py` file.
7. Run the IP address created by the `Flask` server which should look like http://127.0.0.1:5000/ or similar. This renders the index.html file containing the visualizations.

---

# File Description

## API Python
<b> Important Note:</b>
It is only necessary to run the `RUNME.ipynb` `Python Notebook`.
This folder contains files that:

1. Create the `Postgres` Database and the `Tables` that will store the information from the queries.
2. Query API from the Department of Education: [College Scorecard](https://collegescorecard.ed.gov/data/documentation/ "API's Documentation Page")
3. Upload the API's queried information to the tables created in step 1.
4. Upload auxiliary tables created as CSV files (from the API's documentation) to the database and tables created in step 1.

### Files in Folder

0. `0_RUN_ME.ipynb` is the master notebook that runs all the other notebooks.
1. `1_ Entity Relation Diagram.png` shows the Diagram used to create the database and tables.
2. `1_create_tables.ipynb` contains the necessary code to create the Database and Tables.
3. `2_education_api.ipynb` contains the necessary code to query the Department of Education API: [College Scorecard](https://collegescorecard.ed.gov/data/documentation/ "API's Documentation Page").
4. `3_upload_to_db_main_tables.ipynb` contains the necessary code to upload the information obtained in the API to the database.
5. `4_upload_to_db_auxiliar_tables.ipynb` contains the necessary code to load the CSV files in the `data` folder to the database.
6. `5_query_db.ipynb` contains the necessary code to query the database and creates test outputs to the `output` folder, in CSV, JSON, and TXT formats.
7. `data` This folder contains the auxiliary information collected using the API's documentation. These additional tables are used to add descriptions to the codes extracted through the API.
8. `Output` This folder contains files in CSV, JSON, and TXT formats obtained in the query to the database described in file 5.
9. `queries` This folder contains files with `SQL` code used to create the database and tables described in files 1. It also contains the `SQL` code used to query the database as described in files 5.
10. `CollegeScorecardDataDictionary.xlsx` This is a file downloaded the Department-of-Education API's Documentation: [College Scorecard](https://collegescorecard.ed.gov/data/documentation/ "API's Documentation Page"). This contains the metadata explanation used in the visualizations and the information used to create the CSV files int the `data` folder.

---

#### SQL Schema created by running `Run_Me.ipynb`

![Schema](API_Python/1_Entity_Relation_Diagram.png "Schema")

---

### app.py
This file contains the `Python` code necessary to create a `Flask` development server to deploy the visualizations created using `Javascript` libraries.

### static
This folder contains all the `Javascript` code used to create the visualizations displayed through the HTML files.
#### Contents of Static
0. `CSS` Folder containing CSS for html files.
1. `dashboard.js` file that populates metrics on `index.html`.
2. `metrics.js` loads data for College Financial Info visualization.
3. `state_centers.js` contains coordinates for the center of each state and US territory.
4. `slidingmap.js` loads data for in-state tuition average by state for sliding scale map.
5. `slidingmap_out_of_state.js` loads data for out-of-state tuition average by state for sliding scale map.
6. `fusioncharts-suite-xt` contains FusionCharts.js library documentation.
7. `fusioncharts-xt-definition` contains FusionCharts.js maps definitions.


### templates
This folder contains all the `HTML` code used to display all the visualizations generated by using the `Javascript` code and `libraries`.
#### Contents of templates
0. `template.html` Flask template file that provides framework for all other `HTML` files.
1. `index.html` landing page of the website
2. `metrics.html` webpage to display College Financial Info.
3. `school_state.html` webpage to display school locations by state.
4. `references.html` webpage displaying libraries used in this project.
5. `sliding_scale.html` webpage to display schools by sliding scale.
