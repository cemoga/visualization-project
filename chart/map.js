Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv', function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) { return row[key]; });
  }
  var cityName = unpack(rows, 'name'),
    cityPop = unpack(rows, 'pop'),
    cityLat = unpack(rows, 'lat'),
    cityLon = unpack(rows, 'lon'),
    color = [, "rgb(255,65,54)", "rgb(133,20,75)", "rgb(255,133,27)", "lightgrey"],
    citySize = [],
    hoverText = [],
    scale = 50000;

  for (var i = 0; i < cityPop.length; i++) {
    var currentSize = cityPop[i] / scale;
    var currentText = cityName[i] + "<br>Population: " + cityPop[i];
    citySize.push(currentSize);
    hoverText.push(currentText);
  }

  var data = [{
    type: 'scattergeo',
    locationmode: 'USA-states',
    lat: cityLat,
    lon: cityLon,
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

  var layout = {
    title: '2014 US City Populations',
    showlegend: false,
    geo: {
      scope: 'usa',
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

  Plotly.plot(myDiv_2, data, layout, { showLink: false, showSendToCloud: true });
});

///////////////// sample filter

function makeTrace(i) {
  return {
    y: Array.apply(null, Array(10)).map(() => Math.random()),
    line: {
      shape: 'spline',
      color: 'red'
    },
    visible: i === 0,
    name: 'Data set ' + i,
  };
}

Plotly.plot('myDiv_1', [0, 1, 2, 3].map(makeTrace), {
  updatemenus: [
    {
      y: 1,
      yanchor: 'top',
      buttons: [{
        method: 'restyle',
        args: ['visible', [true, false, false, false]],
        label: 'Data set 0'
      }, {
        method: 'restyle',
        args: ['visible', [false, true, false, false]],
        label: 'Data set 1'
      }, {
        method: 'restyle',
        args: ['visible', [false, false, true, false]],
        label: 'Data set 2'
      }, {
        method: 'restyle',
        args: ['visible', [false, false, false, true]],
        label: 'Data set 3'
      }]
    }],
});





/////////////////// end sample filter

// Second Plot

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

  var schoolName = unpack(rows, 'name')
  tuitionOut = unpack(rows, 'tuition_out_of_state'),
    tuitionIn = unpack(rows, 'tuition_in_state'),
    schoolLat = unpack(rows, 'location_lat'),
    schoolLong = unpack(rows, 'location_lon'),
    schoolState = unpack(rows, 'state_fips_dec'),
    color = [, "rgb(255,65,54)", "rgb(133,20,75)", "rgb(255,133,27)", "lightgrey"],
    listLat = [],
    listLong = [],
    listofStates = [],
    citySize = [],
    hoverText = [],
    scale = 3000;

  for (var i = 0; i < schoolState.length; i++) {
    if (listofStates.indexOf(schoolState[i]) === -1) {
      listofStates.push(schoolState[i]);
    }
  }

  function getStateData(chosenState) {
    console.log(chosenState)
    for (var i = 0; i < schoolState.length; i++) {
      if (schoolState[i] === chosenState) {
        currentSize = tuitionOut[i] / scale;
        var currentText = "<b>" + schoolName[i] + "</b>" + "<br><b> Out of State Tuition: </b>" + "$" + thousands_separators(tuitionOut[i])
          + "<br><b> Tuition in State: </b>" + "$" + thousands_separators(tuitionIn[i]);
        currentLat = schoolLat[i];
        currentLong = schoolLong[i];
        citySize.push(currentSize);
        hoverText.push(currentText);
        listLat.push(currentLat);
        listLong.push(currentLong);
      }
    }
  };




  // // Out of State Tuition
  // for (var i = 0; i < tuitionOut.length; i++) {
  //   var currentSize = tuitionOut[i] / scale;
  //   var currentText = "<b>" + schoolName[i] + "</b>" + "<br><b> Out of State Tuition: </b>" + "$" + thousands_separators(tuitionOut[i])
  //     + "<br><b> Tuition in State: </b>" + "$" + thousands_separators(tuitionIn[i]);
  //   citySize.push(currentSize);
  //   hoverText.push(currentText);
  // }

  setBubblePlot('Alabama')

  function setBubblePlot(chosenState) {
    getStateData(chosenState);

    var data = [{
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

    var layout = {
      title: 'Tuition Out of State',
      showlegend: true,
      geo: {
        scope: 'usa',
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
      lonaxis: {
        'range': [-70, -55]
      },
      lataxis: {
        'range': [60, 70]
      },

    };

    Plotly.newPlot('plotdiv', data, layout, { showLink: false, showSendToCloud: true })
  };

  var innerContainer = document.querySelector('[data-num="0"'),
    stateSelector = innerContainer.querySelector('.statedata');

  function assignOptions(textArray, selector) {
    for (var i = 0; i < textArray.length; i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
    }
  }

  listofStates = listofStates.sort()

  assignOptions(listofStates, stateSelector);

  function updateState() {

    setBubblePlot(stateSelector.value);
  }

  stateSelector.addEventListener('change', updateState, false);

});