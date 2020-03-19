window.onload = function() {

  var descAN = "<h1 style=\"margin-bottom: 20px;\">Andaman and Nicobar Islands</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descAP = "<h1 style=\"margin-bottom: 20px;\">Andhra Pradesh</h1><h2>Confirmed: 1</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 1</h2>";
  var descAS = "<h1 style=\"margin-bottom: 20px;\">Assam</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descAR = "<h1 style=\"margin-bottom: 20px;\">Arunachal Pradesh</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descBR = "<h1 style=\"margin-bottom: 20px;\">Bihar</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descCH = "<h1 style=\"margin-bottom: 20px;\">Chandigarh</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descCT = "<h1 style=\"margin-bottom: 20px;\">Chhattisgarh</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descDD = "<h1 style=\"margin-bottom: 20px;\">Daman and Diu</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descDL = "<h1 style=\"margin-bottom: 20px;\">Delhi</h1><h2>Confirmed: 7</h2><h2>Recovered: 2</h2><h2>Deaths: 1</h2><h2>Active: 4</h2>";
  var descDN = "<h1 style=\"margin-bottom: 20px;\">Dadra and Nagar Haveli</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descGA = "<h1 style=\"margin-bottom: 20px;\">Goa</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descGJ = "<h1 style=\"margin-bottom: 20px;\">Gujarat</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descHP = "<h1 style=\"margin-bottom: 20px;\">Himachal Pradesh</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descHR = "<h1 style=\"margin-bottom: 20px;\">Haryana</h1><h2>Confirmed: 14</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 14</h2>";
  var descJH = "<h1 style=\"margin-bottom: 20px;\">Jharkhand</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descJK = "<h1 style=\"margin-bottom: 20px;\">Jammu and Kashmir</h1><h2>Confirmed: 5</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 5</h2>";
  var descKA = "<h1 style=\"margin-bottom: 20px;\">Karnataka</h1><h2>Confirmed: 8</h2><h2>Recovered: 0</h2><h2>Deaths: 1</h2><h2>Active: 7</h2>";
  var descKL = "<h1 style=\"margin-bottom: 20px;\">Kerala</h1><h2>Confirmed: 27</h2><h2>Recovered: 3</h2><h2>Deaths: 0</h2><h2>Active: 24</h2>";
  var descLD = "<h1 style=\"margin-bottom: 20px;\">Lakshadweep</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descMH = "<h1 style=\"margin-bottom: 20px;\">Maharashtra</h1><h2>Confirmed: 38</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 38</h2>";
  var descML = "<h1 style=\"margin-bottom: 20px;\">Meghalaya</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descMN = "<h1 style=\"margin-bottom: 20px;\">Manipur</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descMP = "<h1 style=\"margin-bottom: 20px;\">Madhya Pradesh</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descMZ = "<h1 style=\"margin-bottom: 20px;\">Mizoram</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descNL = "<h1 style=\"margin-bottom: 20px;\">Nagaland</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descOR = "<h1 style=\"margin-bottom: 20px;\">Odisha</h1><h2>Confirmed: 1</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 1</h2>";
  var descPB = "<h1 style=\"margin-bottom: 20px;\">Punjab</h1><h2>Confirmed: 1</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 1</h2>";
  var descPY = "<h1 style=\"margin-bottom: 20px;\">Puducherry</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descRJ = "<h1 style=\"margin-bottom: 20px;\">Rajasthan</h1><h2>Confirmed: 4</h2><h2>Recovered: 3</h2><h2>Deaths: 0</h2><h2>Active: 1</h2>";
  var descSK = "<h1 style=\"margin-bottom: 20px;\">Sikkim</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descTG = "<h1 style=\"margin-bottom: 20px;\">Telangana</h1><h2>Confirmed: 3</h2><h2>Recovered: 1</h2><h2>Deaths: 0</h2><h2>Active: 2</h2>";
  var descTN = "<h1 style=\"margin-bottom: 20px;\">Tamil Nadu</h1><h2>Confirmed: 1</h2><h2>Recovered: 1</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descTR = "<h1 style=\"margin-bottom: 20px;\">Tripura</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descUP = "<h1 style=\"margin-bottom: 20px;\">Uttar Pradesh</h1><h2>Confirmed: 13</h2><h2>Recovered: 4</h2><h2>Deaths: 0</h2><h2>Active: 9</h2>";
  var descUT = "<h1 style=\"margin-bottom: 20px;\">Uttarakhand</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";
  var descWB = "<h1 style=\"margin-bottom: 20px;\">West Bengal</h1><h2>Confirmed: 0</h2><h2>Recovered: 0</h2><h2>Deaths: 0</h2><h2>Active: 0</h2>";

  var indiaMap = AmCharts.makeChart( "indiaMapDiv", {

  "type": "map",
  "theme": "dark",

  "dataProvider": {
    "map": "indiaLow",
    "getAreasFromMap": true,
    "areas":[
      { "id":"IN-AN", "color": "#FFFFFF", "description": descAN },
      { "id":"IN-AP", "color": "#FFC100", "description": descAP },
      { "id":"IN-AR", "color": "#FFFFFF", "description": descAR },
      { "id":"IN-AS", "color": "#FFFFFF", "description": descAS },
      { "id":"IN-BR", "color": "#FFFFFF", "description": descBR },
      { "id":"IN-CH", "color": "#FFFFFF", "description": descCH },
      { "id":"IN-CT", "color": "#FFFFFF", "description": descCT },
      { "id":"IN-DD", "color": "#FFFFFF", "description": descDD },
      { "id":"IN-DL", "color": "#FFC100", "description": descDL },
      { "id":"IN-DN", "color": "#FFFFFF", "description": descDN },
      { "id":"IN-GA", "color": "#FFFFFF", "description": descGA },
      { "id":"IN-GJ", "color": "#FFFFFF", "description": descGJ },
      { "id":"IN-HP", "color": "#FFFFFF", "description": descHP },
      { "id":"IN-HR", "color": "#FF7400", "description": descHR },
      { "id":"IN-JH", "color": "#FFFFFF", "description": descJH },
      { "id":"IN-JK", "color": "#FFC100", "description": descJK },
      { "id":"IN-KA", "color": "#FFC100", "description": descKA },
      { "id":"IN-KL", "color": "#FF7400", "description": descKL },
      { "id":"IN-LD", "color": "#FFFFFF", "description": descLD },
      { "id":"IN-MH", "color": "#FF0000", "description": descMH },
      { "id":"IN-ML", "color": "#FFFFFF", "description": descML },
      { "id":"IN-MN", "color": "#FFFFFF", "description": descMN },
      { "id":"IN-MP", "color": "#FFFFFF", "description": descMP },
      { "id":"IN-MZ", "color": "#FFFFFF", "description": descMZ },
      { "id":"IN-NL", "color": "#FFFFFF", "description": descNL },
      { "id":"IN-OR", "color": "#FFC100", "description": descOR },
      { "id":"IN-PB", "color": "#FFC100", "description": descPB },
      { "id":"IN-PY", "color": "#FFFFFF", "description": descPY },
      { "id":"IN-RJ", "color": "#FFC100", "description": descRJ },
      { "id":"IN-SK", "color": "#FFFFFF", "description": descSK },
      { "id":"IN-TG", "color": "#FFC100", "description": descTG },
      { "id":"IN-TN", "color": "#FFC100", "description": descTN },
      { "id":"IN-TR", "color": "#FFFFFF", "description": descTR },
      { "id":"IN-UP", "color": "#FF7400", "description": descUP },
      { "id":"IN-UT", "color": "#FFC100", "description": descUT },
      { "id":"IN-WB", "color": "#FFFFFF", "description": descWB },
    ]
  },

  "areasSettings": {
    "autoZoom": false,
    "selectedColor": undefined,
    "rollOverColor": undefined,
    "rollOverOutlineColor": "#000",
    "outlineColor": "#888",
    "outlineThickness": 1,
    "selectedOutlineColor": "#000",
    "color": "#FFF",
    // "descriptionWindowY": 20,
    // "descriptionWindowX": 550,
    "descriptionWindowTop": 400,
    "descriptionWindowRight": 20,
    "descriptionWindowWidth": 300,
    "descriptionWindowHeight": 500,
  },

  "legend": {
    "divId": "mapBox",
    "backgroundColor": "#fff",
    "backgroundAlpha": 0.4,
    "color": "#000",
    "fontSize": 22,
    "position": "absolute",
    "width": 120,
    "align": "center",
    "bottom": 20,
    "left": 10,
    "markerSize": 32,
    "data": [{
      "title": "1-10",
      "color": "#FFC100"
    }, {
      "title": "10-30",
      "color": "#FF7400"
    }, {
      "title": " >30",
      "color": "#FF0000",
    }]
  },


  "zoomDuration": 0.5,
  "mouseWheelZoomEnabled": false,
  "showDescriptionOnHover": true,

  "smallMap": {
    "enabled": false,
  }
  } );

  var worldMap = AmCharts.makeChart( "worldMapDiv", {

  "type": "map",
  "theme": "dark",

  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true,
    // "areas":[
    //   { "id":"IN-AN", "color": "#B9D5D5", "description": descAN },
    //   { "id":"IN-AP", "color": "#A8756E", "description": descAP },
    //   { "id":"IN-AR", "color": "#133123", "description": descAR },
    // ]
  },

  "areasSettings": {
    "autoZoom": false,
    "selectedColor": undefined,
    "rollOverColor": undefined,
    "rollOverOutlineColor": "#000",
    "outlineColor": "#AAA",
    "outlineThickness": 1,
    "selectedOutlineColor": "#000",
    "color": "#FFF",
    // "descriptionWindowY": 20,
    // "descriptionWindowX": 550,
    // "descriptionWindowWidth": 300,
    // "descriptionWindowHeight": 500,
  },

  "legend": {
    "backgroundColor": "#fff",
    "backgroundAlpha": 0.4,
    "color": "#000",
    "fontSize": 22,
    "position": "absolute",
    "width": 120,
    "align": "center",
    "bottom": 20,
    "left": 10,
    "markerSize": 32,
    "data": [{
      "title": "1-10",
      "color": "#FFC100"
    }, {
      "title": "10-30",
      "color": "#FF7400"
    }, {
      "title": " >30",
      "color": "#FF0000",
    }]
  },


  "zoomDuration": 0.5,
  "mouseWheelZoomEnabled": false,

  "smallMap": {
    "enabled": false,
  }
  } );

}
