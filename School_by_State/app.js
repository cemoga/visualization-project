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


function f(State,Map_id){
  // document.getElementById(body).innerHTML = "";
  // Remove previous
  var container = L.DomUtil.get('map');
  if(container != null){
    container._leaflet_id = null;
  }
  var myCenter = center(State);
  var id=map_id(Map_id);
  console.log(myCenter);
  var myMap = L.map("map", {
    center: myCenter,
    zoom: 7
  });

  
  // Adding tile layer to the map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: id,
    accessToken: API_KEY
  }).addTo(myMap);
  
  var link = "./static/full_query_json.json"
  d3.json(link,function(response){   
    for (var i = 0; i < 100; i++){
      var state = response[i].state;
      // console.log("actual state:",state);
      if (state==State){
        // console.log(state);
        // console.log("lat",lat);
        // console.log("lon",lon);

        var lat = response[i].location_lat;
        var lon = response[i].location_lon;
        if (lat){
          L.marker([lat,lon])
            .bindPopup("<h1>" + response[i].name 
            + "</h1> <h2>" + response[i].city + ", " 
            + response[i].state + "</h3> <hr> "
            + "<p> <b>Ownership Description: </b>"
            + response[i].ownership_desc +"<br/>"
            + "<b>Level: </b>"
            + response[i].institutional_characteristics_leveldesc+"<br/>"
            + "<b>Tuition in State: </b>"
            + response[i].tuition_in_state+"<br/>"
            + "<b>Tutition out of State: </b>"
            + response[i].tuition_out_of_state+"<br/>"
            + "<b>Instructional Expenditure per FTE: </b>" + "$"+
            + response[i].instructional_expenditure_per_fte+"<br/>"
            + "<b>School URL: </b>"
            + "<a href= '" + response[i].school_url + "'>" +response[i].school_url+"</a> </p>"
            // +"<iframe src='https://www.google.com'>Iframe</iframe>"
            )
            .addTo(myMap);
        }
      }
    }
  })

}


