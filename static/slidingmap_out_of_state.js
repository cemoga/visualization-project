var data;

fetch('/tuition')
	.then(response => response.json())
  .then(json => {
  	data = json.map(el => {
    	return {
      	id: el.State,
        value: el.tuitionOut
      }
    })
  });

FusionCharts.ready(function() {
  var chart = new FusionCharts({
    type: 'maps/usa',
    renderAt: "chart-container",
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "College/University Out-of-State Tuition Information",
        "subcaption": "2017",
        "entityFillHoverColor": "#cccccc",
        "numberPrefix": "$",
        "showLabels": "1",
        "theme": "fusion"
      },
      "colorrange": {
        "minvalue": "0",
        "startlabel": "Low",
        "endlabel": "High",
        "code": "#e44a00",
        "gradient": "1",
        "color": [{
          "maxvalue": "18858",
          "displayvalue": "Average",
          "code": "#f8bd19"
        }, {
          "maxvalue": "36000",
          "code": "#6baa01"
        }]
      },
      "data": [{
        "id": "HI",
        "value": "12861"
      }, {
        "id": "DC",
        "value": "27169"
      }, {
        "id": "MD",
        "value": "22279"
      }, {
        "id": "DE",
        "value": "20274"
      }, {
        "id": "RI",
        "value": "33500"
      }, {
        "id": "WA",
        "value": "16721"
      }, {
        "id": "OR",
        "value": "21113"
      }, {
        "id": "CA",
        "value": "18972"
      }, {
        "id": "AK",
        "value": "14279"
      }, {
        "id": "ID",
        "value": "15771"
      }, {
        "id": "NV",
        "value": "16355"
      }, {
        "id": "AZ",
        "value": "14361"
      }, {
        "id": "MT",
        "value": "13142"
      }, {
        "id": "WY",
        "value": "8784"
      }, {
        "id": "UT",
        "value": "15612"
      }, {
        "id": "CO",
        "value": "18464"
      }, {
        "id": "NM",
        "value": "9909"
      }, {
        "id": "ND",
        "value": "10148"
      }, {
        "id": "SD",
        "value": "13235"
      }, {
        "id": "NE",
        "value": "15553"
      }, {
        "id": "KS",
        "value": "13387"
      }, {
        "id": "OK",
        "value": "15399"
      }, {
        "id": "TX",
        "value": "15246"
      }, {
        "id": "MN",
        "value": "17120"
      }, {
        "id": "IA",
        "value": "19713"
      }, {
        "id": "MO",
        "value": "17054"
      }, {
        "id": "AR",
        "value": "11240"
      }, {
        "id": "LA",
        "value": "15115"
      }, {
        "id": "WI",
        "value": "19146"
      }, {
        "id": "IL",
        "value": "19859"
      }, {
        "id": "KY",
        "value": "20206"
      }, {
        "id": "TN",
        "value": "20501"
      }, {
        "id": "MS",
        "value": "10492"
      }, {
        "id": "AL",
        "value": "14111"
      }, {
        "id": "GA",
        "value": "15706"
      }, {
        "id": "MI",
        "value": "18707"
      }, {
        "id": "IN",
        "value": "24943"
      }, {
        "id": "OH",
        "value": "19395"
      }, {
        "id": "PA",
        "value": "25127"
      }, {
        "id": "NY",
        "value": "21194"
      }, {
        "id": "VT",
        "value": "35514"
      }, {
        "id": "NH",
        "value": "25670"
      }, {
        "id": "ME",
        "value": "21631"
      }, {
        "id": "MA",
        "value": "31049"
      }, {
        "id": "CT",
        "value": "26264"
      }, {
        "id": "NJ",
        "value": "19566"
      }, {
        "id": "WV",
        "value": "14690"
      }, {
        "id": "VA",
        "value": "20754"
      }, {
        "id": "NC",
        "value": "16325"
      }, {
        "id": "SC",
        "value": "18552"
      }, {
        "id": "FL",
        "value": "17252"
      }]
    },
  "events": {
      "renderComplete": function() {
        //Function that gets invoked when entity is clicked.
        function drillDownState(stateName) {
          //Get the name of state that was clicked
          var names = stateName && stateName.split('|'),
            sn = names && names[0],
            ln = names && names[1];
          //If Washington, do special case (just for example)
          if ((sn === 'WA' && ln === 'Washington')) {
            window.open("https://www.google.com/maps/place/USA-" + sn);
          } else {
            window.open("https://www.google.com/maps/place/USA-" + ln);
          }
    
        }
        //expose to the window scope
        window.drillDownState = drillDownState;
      }
    }
  }).render();
});


