var schoolName = [],
  tuitionOut = [],
  tuitionIn = [],
  tuitionIn = [],
  schoolLat = [],
  schoolLong = [],
  schoolState = [],
  schoolCity = [],
  facultySalary = [],
  expenditurePerStudent = [],
  tuitionRevenuePerStudent = [];

var url = `/metric`;
// console.log("url: ", url)

d3.json(url).then((data) => {
  // console.log(data)
  data.forEach((item) => {
    // console.log(item.Fips)
    schoolName.push(item.schoolName)
    tuitionOut.push(item.tuitionOut)
    tuitionIn.push(item.tuitionIn)
    schoolLat.push(item.schoolLat)
    schoolLong.push(item.schoolLong)
    schoolState.push(item.Fips)
    schoolCity.push(item.schoolCity)
    facultySalary.push(item.facultySalary)
    expenditurePerStudent.push(item.expenditurePerStudent)
    tuitionRevenuePerStudent.push(item.tuitionRevenuePerStudent)
  });





  // // Function for thousands formatting
  // function thousands_separators(num) {
  //   num.toString()
  //   var num_parts = num.toString().split(".");
  //   num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   // return num_parts.join(".");
  //   return num_parts[0];
  // }

  var listofStates = [], // Stores all the State names
    citySizeInState = [], // 1. Size of Marker "In-State Tuition"
    citySizeOutState = [], // 2. Size of Marker "Out-of-State Tuition"
    tuitionInState = [], // 3. Tuition in State $
    tuitionOutState = [], // 4 Tuition out of State $
    listofCities = [], // 5. Stores the list of the cities
    hoverText = [], // 6. Information for presenting in the hover
    listLat = [], // 7. Longitude
    listLong = [], // 8. Latitude
    citySize = [], // 9. Variable to be use depending the user selection
    expPerStudent = [], // 10. Variable to bring the expenditure per student
    facSalary = [], // 11. Faculty Salary
    tuRevPerStudent = [], // 12. Tuition Revenue per Student
    scaleTuition = 3000, // 
    scaleExp = 3000,
    scaleFac = 1000,
    scaleRev = 3000,
    scaleVar = 0; // Used to store the variable scales

  // Loop for getting all State Names
  for (var i = 0; i < schoolState.length; i++) {
    if (listofStates.indexOf(schoolState[i]) === -1) {
      listofStates.push(schoolState[i]);
    }
  }



  // Function to get the data of a specific State or City
  function getStateData(chosenVariable, chosenState, chosenCity) {

    // Initialize list to store the data variables
    citySizeInState = [], // 1. Size of Marker "In-State Tuition"
      citySizeOutState = [], // 2. Size of Marker "Out-of-State Tuition"
      tuitionInState = [], // 3. Tuition in State $
      tuitionOutState = [], // 4 Tuition out of State $
      listofCities = [], // 5. Stores the list of the cities
      hoverText = [], // 6. Information for presenting in the hover
      listLat = [], // 7. Longitude
      listLong = [], // 8. Latitude
      citySize = [], // 9. Variable to be use depending the user selection
      expPerStudent = [], // 10. Variable to bring the expenditure per student
      facSalary = [], // 11. Faculty Salary
      tuRevPerStudent = []; // 12. Tuition Revenue per Student

    // The function Stores all the data to the lists
    function dataToList() {
      currentSizeOut = tuitionOut[i] / scaleTuition; //  1. Placeholder for the loop - "Out-of-State Tuition" - Marker Size
      currentSizeIn = tuitionIn[i] / scaleTuition; //  2. Placeholder for the loop - "In-State Tuition" - Marker Size
      currentTuitionIn = tuitionOut[i] // 3. Placeholder for the loop - "Out-of-State Tuition" - Actual Value in $
      currentTuitionOut = tuitionIn[i] // 4. Placeholder for the loop - "In-State Tuition" - Actual Value in $

      currentCity = schoolCity[i]; // 5. Stores the list of the cities for the chosen State

    

      // 6. Information for the hoover text
      var currentText = "<b> Name: " + schoolName[i] + "</b>"
        + "<br><b> City: </b>" + schoolCity[i]
        + "<br><b> State: </b>" + schoolState[i]
        + "<br><b> Geolocation: </b>(" + schoolLat[i] + "," + schoolLong[i] + ")"
        + "<br><b> Out of State Tuition: </b>"+ "$"+tuitionOut[i]
        + "<br><b> Tuition in State: </b>"+ "$"+tuitionIn[i]
        + "<br><b> Expenditure per Student: </b>" + "$"+expenditurePerStudent[i]
        + "<br><b> Tuition Revenue per Student: </b>" + "$"+tuitionRevenuePerStudent[i];
      currentLat = schoolLat[i]; // 7. Placeholder for the loop - Latitude"
      currentLong = schoolLong[i]; // 8. Placeholder for the loop - Longitude

      currentExpen = expenditurePerStudent[i] / scaleExp; // B. 10. Placeholder for the loop - "Expendiure per Student - Marker Size
      currentFacSal = facultySalary[i] / scaleFac; // 11. Placeholder for the loop - Faculty Salary - Marker Size
      currentRevStu = tuitionRevenuePerStudent[i] / scaleRev // 12. Placeholder for the loop - Tuition Revenue per Student - Marker Size

      // Stores all the placeholder values to the lists
      citySizeOutState.push(currentSizeOut); // 1.
      citySizeInState.push(currentSizeIn); // 2. 
      tuitionInState.push(currentTuitionIn); // 3. 
      tuitionOutState.push(currentTuitionOut); // 4. 
      listofCities.push(currentCity); // 5.

      hoverText.push(currentText); // 6.
      listLat.push(currentLat); // 7. 
      listLong.push(currentLong); //8.
      expPerStudent.push(currentExpen) // 10.
      facSalary.push(currentFacSal) // 11.
      tuRevPerStudent.push(currentRevStu) // 12.
    }

    // 
    for (var i = 0; i < schoolState.length; i++) { // Loops all the dataset
      if (chosenState === "All") { // if Chosen State is "All" bring that information and
        dataToList() // Stores the data that fullfill the condition of all States
        listofCities = [] // if Chosen State All, clear the list of cities
      } else if (schoolState[i] === chosenState) { // Extracts information only for the state chosen by the user
        if (chosenCity == "All") { // if it user choose all the cities, bring information of all cities
          dataToList()
        } else if (schoolCity[i] === chosenCity) {  // If user choose only one city, bring information from that city
          dataToList() // Stores the data that fullfill the condition of chosenState
        }
      }
    }

    switch (chosenVariable) {
      case "Tuition in State":
        citySize = citySizeInState;
        document.querySelector('.textmap').innerText = "In-state tuition and fees"
        scalevar = scaleTuition
        break;
      case "Tuition Out of State":
        citySize = citySizeOutState;
        document.querySelector('.textmap').innerText = "Out-of-state tuition and fees"
        scalevar = scaleTuition
        break;
      case "Expenditure per Student":
        citySize = expPerStudent;
        document.querySelector('.textmap').innerText = "Instructional expenditures divided by the number of FTE students (undergraduates and graduate students) (http://nces.ed.gov/ipeds/glossary/index.asp?id=854). Instructional expenditures are included in the IPEDS Finance component and FTE enrollment is included in the IPEDS 12-Month Enrollment component. This metric includes graduate students."
        scalevar = scaleExp
        break;
      case "Faculty Salary":
        citySize = facSalary;
        document.querySelector('.textmap').innerText = "Average faculty salary per month, calculated from the IPEDS Human Resources component. This metric is calculated as the total salary outlays divided by the number of months worked for all full-time nonmedical instructional staff. Prior to the 2011-12 academic year, when months worked were reported in groups, the value for 9-10 months is estimated as 9.5 months and the value for 11-12 months is estimated as 11.5 months. Values prior to the 2003-04 academic year are limited to degree-granting institutions for consistency with values in subsequent academic years."
        scalevar = scaleFac
        break;
      case "Tuition Revenue per Student":
        document.querySelector('.textmap').innerText = "Net tuition revenue (tuition revenue minus discounts and allowances) divided by the number of FTE students (undergraduates and graduate students) (http://nces.ed.gov/ipeds/glossary/index.asp?id=854). Net tuition revenue is included in the IPEDS Finance component and FTE enrollment is included in the IPEDS 12-Month Enrollment component. This metric includes graduate students."
        citySize = tuRevPerStudent;
        scalevar = scaleRev
        break;
    };
  };
  // Initial Values for the user selection with the dropdown
  setBubblePlot("Expenditure per Student", 'All', "All")

  // Function that creates the plots
  function setBubblePlot(chosenVariable, chosenState, chosenCity) {
    // Calls the function that brings the data depending on the user selection
    getStateData(chosenVariable, chosenState, chosenCity);
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
      title: chosenVariable,
      font: {
        family: 'Droid Serif, serif',
        size: 24
      },
      showlegend: false,
      geo: {
        scope: 'usa',
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
    Plotly.newPlot('plotdivmap', data_map, layout_map, { responsive: true })

    // Plotly setup for the Gauge

    function averageIfValue(array) {
      var sum = 0,
        count = 0;
      for (var i = 0; i < array.length; i++) {
        if (array[i] !== null && array[i] !== '') {
          sum += parseFloat(array[i]);
          count += 1
        }
      }
      return sum / (count)
    }

    var data_gauge = [
      {
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          shape: "bullet", axis: { range: [null, 20000] },
          steps: [
            { range: [0, 10000], color: "white" },
            { range: [10000, 20000], color: "lightgray" }
          ],
          threshold: {
            line: { color: "red", width: 4 },
            thickness: 0.75,
            value: averageIfValue(citySize) * scalevar
          }
        },
        value: averageIfValue(citySize) * scalevar,
        domain: { x: [0, 1], y: [0, 0.5] },
        title: {
          text: "State: " + chosenState + "<br>" + "City: " + chosenCity,
          font: {
            family: 'Droid Serif, serif',
            size: 15
          }
        },
      }
    ];

    // Layout for the map
    // var layout_gauge = // { width: 700, height: 220 };

    var layout_gauge = {
      title: chosenVariable + "<br>" + "(Average)",
      autosize: false,
      width: 700,
      height: 100,
      margin: {
        l: 175,
        r: 0,
        b: 20,
        t: 50,
        pad: 5
      },
      yanchor: 'middle',
      xanchor: 'middle'

    }




    // Plot Gauge
    Plotly.newPlot('plotdivgauge', data_gauge, layout_gauge, { responsive: true });

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
  var variableInfoSelector = document.querySelector('.variabledata'),
    stateSelector = document.querySelector('.statedata'),
    citySelector = document.querySelector('.citydata');

  // Funciton that fills the a dropdown  
  function assignOptions(textArray, selector, addAll, unique) {
    // Clear previous dropdown contents
    // selector.innerHTML = ""
    // selector.options.length = 0
    selector.innerText = null
    // Sort the content in the list
    textArray.sort()
    // Adds all at the beginning
    if (addAll == true) { textArray.unshift("All") }
    // Brings only unique elements
    if (unique == true) { textArray = (unique = [...new Set(textArray)]) }
    // Creates the element in the dropdown in the html page
    for (var i = 0; i < textArray.length; i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
    }
  }

  assignOptions(listofStates, stateSelector, true, true),
    assignOptions([], citySelector, true, true),
    assignOptions([
      "Tuition in State",
      "Tuition Out of State",
      "Expenditure per Student",
      "Faculty Salary",
      "Tuition Revenue per Student"
    ], variableInfoSelector, false, true);

  function updateState() {
    setBubblePlot(variableInfoSelector.value, stateSelector.value, citySelector.value)
    assignOptions(listofCities, citySelector, true, true)
  };

  function updateCity() {
    setBubblePlot(variableInfoSelector.value, stateSelector.value, citySelector.value)
  }

  variableInfoSelector.addEventListener('change', updateState, false),
    stateSelector.addEventListener('change', updateState, false),
    citySelector.addEventListener('change', updateCity, false);
});


