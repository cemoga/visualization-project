<h1>Cost of American College Visualization Project</h1>

<h2>Description</h2>
<h4>The purpose of this project is to display working knowledge in the areas of data collection, database design, and data visualization</h4>
<h4>Tools used in this project: </h4>
<ol>
    <li>Python</li>
    <ul type = "none"><li>Libraries: </li>
    <ol type = "i">
        <li>Pandas</li>
        <li>SQLAlchemy</li>
        <li>Flask</li>
        <li>Flask_SQLAlchemy</li>
        <li>OS</li>
    </ol></ul>
    <li>SQL</li>
    <li>javascript</li>
    <ul type = "none"><li>Libraries:</li> 
    <ol type = "i">
        <li>D3.js</li>
        <li>Plotly.js</li>
        <li>Google Charts</li>
        <li>Leaflet.js</li>
    </ol></ul>
</ol>


## Instructions
<p> To run this code, ensure that all the above libraries are installed in your environment</p>

#### Steps
1. - Enter your API key and PostgreSQL password in `config.js`
```JS
const API_KEY = 'ENTER YOUR API';
```
2. - Run the `RUNME.ipynb` `Python Notebook`. 
3. - Run the `Flask` server by running the `app.py` file.
4. - Run the IP address created by the `Flask` server which should look like http://127.0.0.1:5000/ or similar. This renders the index.html file containing the visualizations.

# File Description

## API Python
<b> Important Note:</b>
It is only necessary to run the `RUNME.ipynb` `Python Notebook`.
This folder contains files that:

1. Create the `Postgres` Database and the `Tables` that will store the information from the queries.
2. Query API from the Department of Education: [College Scorecard](https://collegescorecard.ed.gov/data/documentation/ "API's Documentation Page")
3. Upload the API's queried information to the tables created in step 1.
4. Upload auxiliar tables created as CSV files (from the API's documentation) to the database and tables created in step 1.

### Files in Folder
0. `0_RUN_ME.ipynb` is the master notebook that runs all the other notebooks.
1. `1_ Entity Relation Diagram.png` shows the Diagram used to create the database and tables.
1. `1_create_tables.ipynb` contains the necessary code to create the Database and Tables.
2. `2_education_api.ipynb` contains the necessary code to query the Department of Education API: [College Scorecard](https://collegescorecard.ed.gov/data/documentation/ "API's Documentation Page").
3. `3_upload_to_db_main_tables.ipynb` contains the necessary code to upload the information obtained in the API to the database.
4. `4_upload_to_db_auxiliar_tables.ipynb` contains the necessary code to load the CSV files in the `data` folder to the database.
5. `5_query_db.ipynb` contains the necessary code to query the database and creates test outputs to the `output` folder, in CSV, JSON, and TXT formats.
6. `data` This folder contains the auxiliar information collected using the API's documentation. These additional tables are used to add descriptions to the codes extracted through the API.
7. `Output` This folder contains files in CSV, JSON, and TXT formats obtained in the query to the database described in file 5.
8. `queries` This folder contains files with `SQL` code used to create the database and tables described in files 1. It also contains the `SQL` code used to query the database as described in files 5.
9. `CollegeScorecardDataDictionary.xlsx` This is a file downloaded the Department-of-Education API's Documentation: [College Scorecard](https://collegescorecard.ed.gov/data/documentation/ "API's Documentation Page"). This contains the metadata explanation used in the visualizations and the information used to create the CSV files int the `data` folder.

## app.py
This file contains the `Python` code necessary to create a `Flask` development server to deploy the visualizations created using `Javascript` libraries.

## static
This folder contains all the `Javascript` code used to create the visualizations displayed through the HTMl files.

## templates
This folder contains all the `HTMl` code used to display all the visualizations generated by using the `Javascript` code and `libraries`.
