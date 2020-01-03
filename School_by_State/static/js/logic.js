
function init(){
  // Remove previous map:
  var container = L.DomUtil.get('map');
  if(container != null){
      container._leaflet_id = null;
  }

// Creating map object
var myMap = L.map("map", {
  center: [37.0902, -95.7129],
  zoom: 4
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Store API query variables
var link = "static/full_query_json.json";

// Grab the data with d3
d3.json(link, function(response) {


  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable

    var lat = response[i].location_lat;
    var lon = response[i].location_lon;

    // Check for location property
    if (lat) {

      // Add a new marker to the cluster group and bind a pop-up
      L.marker([lat,lon])
      .bindPopup("<h1>" + response[i].name 
      + "</h1> <h3>" + response[i].city + ", " 
      + response[i].state + "</h3> <hr> "
      + "<p> <b>Ownership Description: </b>"
      + response[i].ownership_desc +"<br/>"
      + "<b>Level: </b>"
      + response[i].institutional_characteristics_leveldesc+"<br/>"
      + "<b>Tuition in State: </b>" + "$" 
      + response[i].tuition_in_state+"<br/>"
      + "<b>Tutition out of State: </b>" + "$"
      + response[i].tuition_out_of_state+"<br/>"
      + "<b>Instructional Expenditure per FTE: </b>" + "$"+
      + response[i].instructional_expenditure_per_fte+"<br/>"
      + "<b>School URL: </b>"
      + response[i].school_url + "</p>"
      // +"<iframe src='https://www.google.com'>Iframe</iframe>"
      )
      .addTo(myMap);
    }
  
  }


})
};

init();

function map_id(id){
  if (id=="satellite"){
    return("mapbox.satellite");
  }
  else if (id=="dark"){
    return("mapbox.dark");
  }
  else if (id=="light"){
    return("mapbox.light");
  }  
  else {
    return("mapbox.streets");
  }
};
var Map_id="light";



function optionChanged(State){
  // Remove previous map:
  var container = L.DomUtil.get('map');
  if(container != null){
      container._leaflet_id = null;
  }

  var myCenter = center(State);
  //var id=map_id(Map_id);

// Creating map object
var myMap = L.map("map", {
  center: myCenter,
  zoom: 8
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Store API query variables
var link = "static/full_query_json.json";

// Grab the data with d3
d3.json(link, function(response) {


  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var state = response[i].state;
    if(state==State){
    var lat = response[i].location_lat;
    var lon = response[i].location_lon;

    // Check for location property
    if (lat) {

      // Add a new marker to the cluster group and bind a pop-up
      L.marker([lat,lon])
      .bindPopup("<h1>" + response[i].name 
      + "</h1> <h3>" + response[i].city + ", " 
      + response[i].state + "</h3> <hr> "
      + "<p> <b>Ownership Description: </b>"
      + response[i].ownership_desc +"<br/>"
      + "<b>Level: </b>"
      + response[i].institutional_characteristics_leveldesc+"<br/>"
      + "<b>Tuition in State: </b>" + "$"
      + response[i].tuition_in_state+"<br/>"
      + "<b>Tutition out of State: </b>" + "$"
      + response[i].tuition_out_of_state+"<br/>"
      + "<b>Instructional Expenditure per FTE: </b>" + "$"+
      + response[i].instructional_expenditure_per_fte+"<br/>"
      + "<b>School URL: </b>"
      + response[i].school_url + "</p>"
      // +"<iframe src='https://www.google.com'>Iframe</iframe>"
      )
      .addTo(myMap);
    }
  }
  }


})
};
