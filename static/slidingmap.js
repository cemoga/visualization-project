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
          "maxvalue": "14835",
          "displayvalue": "Average",
          "code": "#f8bd19"
        }, {
          "maxvalue": "60000",
          "code": "#6baa01"
        }]
      },
      "data": [{
        "id": "HI",
        "value": "3189"
      }, {
        "id": "DC",
        "value": "2879"
      }, {
        "id": "MD",
        "value": "33592"
      }, {
        "id": "DE",
        "value": "4607"
      }, {
        "id": "RI",
        "value": "4890"
      }, {
        "id": "WA",
        "value": "34927"
      }, {
        "id": "OR",
        "value": "65798"
      }, {
        "id": "CA",
        "value": "61861"
      }, {
        "id": "AK",
        "value": "58911"
      }, {
        "id": "ID",
        "value": "42662"
      }, {
        "id": "NV",
        "value": "78041"
      }, {
        "id": "AZ",
        "value": "41558"
      }, {
        "id": "MT",
        "value": "62942"
      }, {
        "id": "WY",
        "value": "78834"
      }, {
        "id": "UT",
        "value": "50512"
      }, {
        "id": "CO",
        "value": "73026"
      }, {
        "id": "NM",
        "value": "78865"
      }, {
        "id": "ND",
        "value": "50554"
      }, {
        "id": "SD",
        "value": "35922"
      }, {
        "id": "NE",
        "value": "43736"
      }, {
        "id": "KS",
        "value": "32681"
      }, {
        "id": "OK",
        "value": "79038"
      }, {
        "id": "TX",
        "value": "97344"
      }, {
        "id": "MN",
        "value": "43485"
      }, {
        "id": "IA",
        "value": "46515"
      }, {
        "id": "MO",
        "value": "63715"
      }, {
        "id": "AR",
        "value": "34497"
      }, {
        "id": "LA",
        "value": "70706"
      }, {
        "id": "WI",
        "value": "42382"
      }, {
        "id": "IL",
        "value": "73202"
      }, {
        "id": "KY",
        "value": "79118"
      }, {
        "id": "TN",
        "value": "44657"
      }, {
        "id": "MS",
        "value": "66205"
      }, {
        "id": "AL",
        "value": "75873"
      }, {
        "id": "GA",
        "value": "76895"
      }, {
        "id": "MI",
        "value": "67695"
      }, {
        "id": "IN",
        "value": "920"
      }, {
        "id": "OH",
        "value": "32960"
      }, {
        "id": "PA",
        "value": "54346"
      }, {
        "id": "NY",
        "value": "42828"
      }, {
        "id": "VT",
        "value": "77411"
      }, {
        "id": "NH",
        "value": "51403"
      }, {
        "id": "ME",
        "value": "64636"
      }, {
        "id": "MA",
        "value": "51767"
      }, {
        "id": "CT",
        "value": "57353"
      }, {
        "id": "NJ",
        "value": "80788"
      }, {
        "id": "WV",
        "value": "95890"
      }, {
        "id": "VA",
        "value": "83140"
      }, {
        "id": "NC",
        "value": "75425"
      }, {
        "id": "SC",
        "value": "88234"
      }, {
        "id": "FL",
        "value": "88234"
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


