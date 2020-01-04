var states = [];
var filter_by = d3.select("#filter-by");
var markers = [];
var layerGroup = L.layerGroup();

// format numbers to show thousands w/ a comma
function comma(x){
  var number = x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  return number
}

var myMap = L.map("map", {
  center: [40.29,-74.52],
  zoom: 5
});

var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 10,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 10,
    id: "mapbox.dark",
    accessToken: API_KEY
  });
  var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 10,
    id: "mapbox.light",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap,
    "Light Map": lightmap
  };


L.control.layers(baseMaps).addTo(myMap);


function f(State){
  // document.getElementById(body).innerHTML = "";
  // Remove previous
  // var container = L.DomUtil.get('map');
  // if(container != null){
  //   container._leaflet_id = null;
  // }
  var myCenter = center(State);
  // console.log(myCenter);
  // Center view on new location and zoom
  myMap.setView(myCenter, 7)
  d3.json(link).then(function (data){
    // console.log(data)
    data.forEach(response=>{ 
      // console.log(response.state)
      var state = response.state;
      // console.log("actual state:",state);
      if (state==State){
        // console.log(state);
        // console.log("lat",lat);
        // console.log("lon",lon);
        var lat = response.location_lat;
        var lon = response.location_lon;
        if (lat){
         L.marker([lat,lon])
            .bindPopup("<h1>" + response.name 
            + "</h1> <h2>" + response.city + ", " 
            + response.state + "</h3> <hr> "
            + "<p> <b>Ownership Description: </b>"
            + response.ownership_desc +"<br/>"
            + "<b>Level: </b>"
            + response.institutional_characteristics_leveldesc+"<br/>"
            + "<b>Tuition in State: </b>"
            + "$"+response.tuition_in_state+"<br/>"
            + "<b>Tutition out of State: </b>"
            + "$"+response.tuition_out_of_state+"<br/>"
            + "<b>Instructional Expenditure per FTE: </b>"
            + "$"+response.instructional_expenditure_per_fte+"<br/>"
            + "<b>School URL: </b>"
            + `<a href=https://${response.school_url} target = "__blank">${response.school_url}</a> </p>`
            // +"<iframe src='https://www.google.com'>Iframe</iframe>"
          ).addTo(layerGroup);
        }
      }
    });
    layerGroup.addTo(myMap);
  });
  
}



//function to populate arays used for filter lists
function dropdownList(arr){
  //iterate through items in each array and push unique values to arrays
      if (!states.includes(arr.state)){
          states.push(arr.state);
      }
}

var link = "/yen";
function init(){
  d3.json(link).then(function (data){
    // console.log(data)
    data.forEach(response=>{ 
      // console.log(response.state)
      dropdownList(response)
    });
    states.sort().forEach(state=>{
      filter_by
      .append("option")
      .text(state)
      .property("value",state)
    });
    
    var first_state = "NJ"
    f(first_state)




  });
};

// function to update map whith new location 
function optionChanged(newSample){
  layerGroup.clearLayers();
  f(newSample);
}

//Initialize the map
init();




