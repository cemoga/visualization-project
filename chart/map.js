
// Function for thousands formatting

function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}



Plotly.d3.csv('../output_charts/full_query.csv', function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) { return row[key]; });
  }

  var schoolName = unpack(rows, 'name'),
    tuitionOut = unpack(rows, 'tuition_out_of_state'),
    tuitionIn = unpack(rows, 'tuition_in_state'),
    tuitionIn = unpack(rows, 'tuition_in_state'),
    schoolLat = unpack(rows, 'location_lat'),
    schoolLong = unpack(rows, 'location_lon'),
    schoolState = unpack(rows, 'state_fips_dec'),
    schoolCity = unpack(rows, 'city'),
    color = [, "rgb(255,65,54)", "rgb(133,20,75)", "rgb(255,133,27)", "lightgrey"],
    listofStates = [],
    listofCities = [],
    listLat = [],
    listLong = [],
    citySize = [],
    hoverText = [],
    scale = 2000;

  for (var i = 0; i < schoolState.length; i++) {
    if (listofStates.indexOf(schoolState[i]) === -1) {
      listofStates.push(schoolState[i]);
    }
  }

  function getStateData(chosenTuition, chosenState, chosenCity) {


    listLat = [],
      listLong = [],
      citySizeInState = [],
      citySizeOutState = [],
      citySize = [],
      hoverText = [],
      listofCities = [];

    for (var i = 0; i < schoolState.length; i++) {
      if (schoolState[i] === chosenState) {
        currentSizeOut = tuitionOut[i] / scale;
        currentSizeIn = tuitionIn[i] / scale;

        currentTuitionIn = tuitionIn[i]
        currentTuitionOut = tuitionOut[i]

        currentCity = schoolCity[i];
        var currentText = "<b>" + schoolName[i] + "</b>" + "<br><b> Out of State Tuition: </b>" + "$" + thousands_separators(tuitionOut[i])
          + "<br><b> Tuition in State: </b>" + "$" + thousands_separators(tuitionIn[i]);
        currentLat = schoolLat[i];
        currentLong = schoolLong[i];
        citySizeInState.push(currentSizeIn);
        citySizeOutState.push(currentSizeOut);
        listofCities.push(currentCity)
        hoverText.push(currentText);
        listLat.push(currentLat);
        listLong.push(currentLong);
      }
      if (chosenState === "All") {
        currentSizeOut = tuitionOut[i] / scale;
        currentSizeIn = tuitionIn[i] / scale;

        currentTuitionIn = tuitionIn[i]
        currentTuitionOut = tuitionOut[i]

        currentCity = schoolCity[i];
        var currentText = "<b>" + schoolName[i] + "</b>" + "<br><b> Out of State Tuition: </b>" + "$" + thousands_separators(tuitionOut[i])
          + "<br><b> Tuition in State: </b>" + "$" + thousands_separators(tuitionIn[i]);
        currentLat = schoolLat[i];
        currentLong = schoolLong[i];
        citySizeInState.push(currentSizeIn);
        citySizeOutState.push(currentSizeOut);
        listofCities.push(currentCity)

        hoverText.push(currentText);
        listLat.push(currentLat);
        listLong.push(currentLong);
      }
    }
    if (chosenTuition === "In State") { citySize = citySizeInState }
    else if (chosenTuition === "Out of State") { citySize = citySizeOutState }

  };





  setBubblePlot("In State", 'All', "All")

  function setBubblePlot(chosenTuition, chosenState, chosenCity) {
    getStateData(chosenTuition, chosenState, chosenCity);

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

    Plotly.newPlot('plotdiv', data_map, layout_map, { showLink: false, showSendToCloud: true })

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

    var layout_gauge = { width: 600, height: 250 };

    Plotly.newPlot('myDiv_1.5', data_gauge, layout_gauge);

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

    Plotly.newPlot('myDiv_1.6', data, layout);

  };

  var innerContainer = document.querySelector('[data-num="0"'),
    tuitionSelector = innerContainer.querySelector('.tuition'),
    stateSelector = innerContainer.querySelector('.statedata'),
    citySelector = innerContainer.querySelector('.citydata');

  function assignOptions(textArray, selector) {
    for (var i = 0; i < textArray.length; i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
    }
  }


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
  citySelector.addEventListener('change', function() {
    updateState() 
    getStateData(tuitionSelector.value, stateSelector.value, citySelector.value);
  }, false);
  tuitionSelector.addEventListener('change', updateState, false);

});