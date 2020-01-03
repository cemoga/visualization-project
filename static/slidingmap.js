var data;

fetch('/tuition')
	.then(response => response.json())
  .then(json => {
  	data = json.map(el => {
    	return {
      	id: el.State,
        value: el.tuitionIn
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
        "caption": "College/University In-State Tuition Information",
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
          "maxvalue": "15679",
          "displayvalue": "Average",
          "code": "#f8bd19"
        }, {
          "maxvalue": "32000",
          "code": "#6baa01"
        }]
      },
      "data": [{
        "id": "HI",
        "value": "9250"
      }, {
        "id": "DC",
        "value": "26641"
      }, {
        "id": "MD",
        "value": "18156"
      }, {
        "id": "DE",
        "value": "15830"
      }, {
        "id": "RI",
        "value": "30470"
      }, {
        "id": "WA",
        "value": "13189"
      }, {
        "id": "OR",
        "value": "16292"
      }, {
        "id": "CA",
        "value": "14694"
      }, {
        "id": "AK",
        "value": "8789"
      }, {
        "id": "ID",
        "value": "10922"
      }, {
        "id": "NV",
        "value": "11885"
      }, {
        "id": "AZ",
        "value": "9533"
      }, {
        "id": "MT",
        "value": "7629"
      }, {
        "id": "WY",
        "value": "3385"
      }, {
        "id": "UT",
        "value": "12172"
      }, {
        "id": "CO",
        "value": "12754"
      }, {
        "id": "NM",
        "value": "6153"
      }, {
        "id": "ND",
        "value": "7550"
      }, {
        "id": "SD",
        "value": "12305"
      }, {
        "id": "NE",
        "value": "14316"
      }, {
        "id": "KS",
        "value": "11736"
      }, {
        "id": "OK",
        "value": "10952"
      }, {
        "id": "TX",
        "value": "11644"
      }, {
        "id": "MN",
        "value": "16132"
      }, {
        "id": "IA",
        "value": "18308"
      }, {
        "id": "MO",
        "value": "15069"
      }, {
        "id": "AR",
        "value": "9056"
      }, {
        "id": "LA",
        "value": "11393"
      }, {
        "id": "WI",
        "value": "16605"
      }, {
        "id": "IL",
        "value": "16082"
      }, {
        "id": "KY",
        "value": "16242"
      }, {
        "id": "TN",
        "value": "16552"
      }, {
        "id": "MS",
        "value": "7822"
      }, {
        "id": "AL",
        "value": "10506"
      }, {
        "id": "GA",
        "value": "12650"
      }, {
        "id": "MI",
        "value": "15636"
      }, {
        "id": "IN",
        "value": "22204"
      }, {
        "id": "OH",
        "value": "16637"
      }, {
        "id": "PA",
        "value": "22803"
      }, {
        "id": "NY",
        "value": "19325"
      }, {
        "id": "VT",
        "value": "29989"
      }, {
        "id": "NH",
        "value": "21005"
      }, {
        "id": "ME",
        "value": "18607"
      }, {
        "id": "MA",
        "value": "28567"
      }, {
        "id": "CT",
        "value": "19927"
      }, {
        "id": "NJ",
        "value": "16760"
      }, {
        "id": "WV",
        "value": "11413"
      }, {
        "id": "VA",
        "value": "16588"
      }, {
        "id": "NC",
        "value": "11977"
      }, {
        "id": "SC",
        "value": "13940"
      }, {
        "id": "FL",
        "value": "14118"
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


