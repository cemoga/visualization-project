
// Function for thousands formatting
function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}


// Function to plot 
Plotly.d3.csv('../output_charts/full_query.csv', function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) { return row[key]; });
  }
  // Variables declared
  var schoolName = unpack(rows, 'name'),
    tuitionOut = unpack(rows, 'tuition_out_of_state'),
    tuitionIn = unpack(rows, 'tuition_in_state'),
    tuitionIn = unpack(rows, 'tuition_in_state'),
    schoolLat = unpack(rows, 'location_lat'),
    schoolLong = unpack(rows, 'location_lon'),
    schoolState = unpack(rows, 'state_fips_dec'),
    schoolCity = unpack(rows, 'city'),
    listofStates = [], // Stores all the State names
    citySizeInState = [], // 1. Size of Marker "In-State Tuition"
    citySizeOutState = [], // 2. Size of Marker "Out-of-State Tuition"
    tuitionInState = [], // 3. Tuition in State $
    tuitionOutState = [], // 4 Tuition out of State $
    listofCities = [], // 5. Stores the list of the cities
    hoverText = [], // 6. Information for presenting in the hover
    listLat = [], // 7. Longitude
    listLong = [], // 8. Latitude
    citySize = [], // 9. Variable to be use depending the user selection
    scale = 3000;

  // Loop for getting all State Names
  for (var i = 0; i < schoolState.length; i++) {
    if (listofStates.indexOf(schoolState[i]) === -1) {
      listofStates.push(schoolState[i]);
    }
  }

  // Function to get the data of a specific State
  function getStateData(chosenTuition, chosenState, chosenCity) {

    // Initialize list to store the data variables
    citySizeInState = [], // 1. Size of Marker "In-State Tuition"
      citySizeOutState = [], // 2. Size of Marker "Out-of-State Tuition"
      tuitionInState = [], // 3. Tuition in State $
      tuitionOutState = [], // 4 Tuition out of State $
      listofCities = [], // 5. Stores the list of the cities
      hoverText = [], // 6. Information for presenting in the hover
      listLat = [], // 7. Longitude
      listLong = [], // 8. Latitude
      citySize = []; // 9. Variable to be use depending the user selection

    // The function Stores all the data to the lists
    function dataToList() {
      currentSizeOut = tuitionOut[i] / scale; // 1. Placeholder for the loop - "Out-of-State Tuition" - Marker Size
      currentSizeIn = tuitionIn[i] / scale; // 2. Placeholder for the loop - "In-State Tuition" - Marker Size

      currentTuitionIn = tuitionOut[i] // 3. Placeholder for the loop - "Out-of-State Tuition" - Actual Value in $
      currentTuitionOut = tuitionIn[i] // 4. Placeholder for the loop - "In-State Tuition" - Actual Value in $

      currentCity = schoolCity[i]; // 5. Stores the list of the cities for the chosen State
      // 6. Information for the hoover text
      var currentText = "<b>" + schoolName[i] + "</b>" + "<br><b> Out of State Tuition: </b>" + "$" + thousands_separators(tuitionOut[i])
        + "<br><b> Tuition in State: </b>" + "$" + thousands_separators(tuitionIn[i]);
      currentLat = schoolLat[i]; // 7. Placeholder for the loop - Latitude
      currentLong = schoolLong[i]; // 8. Placeholder for the loop - Longitude

      // Stores all the placeholder values to the lists
      citySizeOutState.push(currentSizeOut); // 1.
      citySizeInState.push(currentSizeIn); // 2. 
      tuitionInState.push(currentTuitionIn); // 3. 
      tuitionOutState.push(currentTuitionOut); // 4. 
      listofCities.push(currentCity); // 5.

      hoverText.push(currentText); // 6.
      listLat.push(currentLat); // 7. 
      listLong.push(currentLong); //8.
    }

    // 
    for (var i = 0; i < schoolState.length; i++) { // Loops all the dataset
      if (schoolState[i] === chosenState) { // Extracts information only for the state chosen by the user
        dataToList() // Stores the data that fullfill the condition of chosenState
      }
      if (chosenState === "All") {
        dataToList() // Stores the data that fullfill the condition of all States
      }
    }
    // Assigns the data depending on the user selection: In State Tuition or Out of State Tuition
    if (chosenTuition === "In State") { citySize = citySizeInState }
    else if (chosenTuition === "Out of State") { citySize = citySizeOutState }

  };

  // Initial Values for the user selection with the dropdown
  setBubblePlot("In State", 'All', "All")

  // Function that creates the plots
  function setBubblePlot(chosenTuition, chosenState, chosenCity) {
    // Calls the function that brings the data depending on the user selection
    getStateData(chosenTuition, chosenState, chosenCity);

    // Plotly setup for the map
    var data_map = [{
      type: 'scattergeo',
      locationmode: 'USA-states',
      lat: listLat,
      lon: listLong,
      text: hoverText,
      hoverinfo: 'text',
      marker: {
        size: citySize,
        line: {
          color: 'black',
          width: 2
        },
      }
    }];

    // Layout for the map
    var layout_map = {
      title: 'Tuition Out of State',
      showlegend: false,
      geo: {
        scope: 'usa',
        // scope: 'north america',
        resolution: 50,
        lonaxis: {
          'range': [-180, -55]
        },
        lataxis: {
          'range': [40, 70]
        },
        projection: {
          type: 'albers usa'
        },
        showland: true,
        landcolor: 'rgb(217, 217, 217)',
        subunitwidth: 1,
        countrywidth: 1,
        subunitcolor: 'rgb(255,255,255)',
        countrycolor: 'rgb(255,255,255)'
      },
    };

    // Plot Map
    Plotly.newPlot('plotdivmap', data_map, layout_map, { showLink: false, showSendToCloud: true })

    // Plotly setup for the Gauge
    var data_gauge = [
      {
        type: "indicator",
        mode: "number+gauge+delta",
        gauge: { shape: "bullet" },
        delta: { reference: 300 },
        value: 220,
        domain: { x: [0, 1], y: [0, 1] },
        title: { text: "Profit" }
      }
    ];

    // Layout for the map
    var layout_gauge = { width: 600, height: 250 };

    // Plot Gauge
    Plotly.newPlot('plotdivgauge', data_gauge, layout_gauge);

    // Plotly setup for the Table
    var trace1_table = {
      type: 'scatter',
      x: tuitionIn,
      y: listofStates,
      mode: 'markers',
      name: 'Tuition In State',
      marker: {
        color: 'rgba(156, 165, 196, 0.95)',
        line: {
          color: 'rgba(156, 165, 196, 1.0)',
          width: 1,
        },
        symbol: 'circle',
        size: 16
      }
    };

    var trace2_table = {
      x: tuitionOut,
      y: listofStates,
      mode: 'markers',
      name: 'Tuition Out of State',
      marker: {
        color: 'rgba(204, 204, 204, 0.95)',
        line: {
          color: 'rgba(217, 217, 217, 1.0)',
          width: 1,
        },
        symbol: 'circle',
        size: 16
      }
    };

    var data = [trace1_table, trace2_table];

    // Layout for the Table
    var layout = {
      title: 'Metrics for State',
      xaxis: {
        showgrid: false,
        showline: true,
        linecolor: 'rgb(102, 102, 102)',
        titlefont: {
          font: {
            color: 'rgb(204, 204, 204)'
          }
        },
        tickfont: {
          font: {
            color: 'rgb(102, 102, 102)'
          }
        },
        autotick: false,
        dtick: 10,
        ticks: 'outside',
        tickcolor: 'rgb(102, 102, 102)'
      },
      margin: {
        l: 140,
        r: 40,
        b: 50,
        t: 80
      },
      legend: {
        font: {
          size: 10,
        },
        yanchor: 'middle',
        xanchor: 'right'
      },
      width: 600,
      height: 600,
      paper_bgcolor: 'rgb(254, 247, 234)',
      plot_bgcolor: 'rgb(254, 247, 234)',
      hovermode: 'closest'
    };

    // Plot Table
    Plotly.newPlot('plotdivtable', data, layout);
  };

  // Select html dropdown containing the information
  var tuitionSelector = document.querySelector('.tuition'),
    stateSelector = document.querySelector('.statedata'),
    citySelector = document.querySelector('.citydata');

  // Funciton that fills the a dropdown  
  function assignOptions(textArray, selector) {
    for (var i = 0; i < textArray.length; i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
    }
  }

  // Bring the list of the states created at the beginning of the code
  listofStates = listofStates.sort()
  listofStates.unshift("All")


  listofCities = listofCities.sort(),
    listofCities.unshift("All"),
    listofCities = (unique = [...new Set(listofCities)]),



    assignOptions(listofStates, stateSelector);
  assignOptions(listofCities, citySelector);
  assignOptions(["In State", "Out of State"], tuitionSelector);

  function updateState() {
    setBubblePlot(tuitionSelector.value, stateSelector.value, citySelector.value);
  }

  stateSelector.addEventListener('change', updateState, false);
  citySelector.addEventListener('change', function () {
    updateState()
    getStateData(tuitionSelector.value, stateSelector.value, citySelector.value);
  }, false);
  tuitionSelector.addEventListener('change', updateState, false);

});