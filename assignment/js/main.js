/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */
//var downloadData = $.ajax("https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-solar-installations.json");

/*$.ajax(phillySolarInstallationDataUrl).done(function(phillySolarInstallationDataUrl) {

var computedValue = JSON.parse(phillySolarInstallationDataUrl);

console.log(computedValue);
createMarkers(computedValue);
});*/

var parseData = function(data){ return JSON.parse(data);};


var makeMarkers = function(data) {
  return _.map(data, function(obj){ return L.marker([obj.Y, obj.X]);});

};

var plotMarkers = function(data) {
  return  _.each(data, function(obj){  obj.addTo(map); });

};



/* =====================
  Define the function removeData so that it clears the markers you've written
  from the map. You'll know you've succeeded when the markers that were
  previously displayed are immediately removed from the map.

  In Leaflet, the syntax for removing one specific marker looks like this:

  map.removeLayer(marker);

  In real applications, this will typically happen in response to changes to the
  user's input.
===================== */

var removeMarkers = function(data) {
  return _.each(data, function(obj) {map.removeLayer(obj); });

};



/* =====================
  Optional, stretch goal
  Write the necessary code (however you can) to plot a filtered down version of
  the downloaded and parsed data.

  Note: You can add or remove from the code at the bottom of this file.
===================== */
/* =====================
 CODE EXECUTED DOWN HERE!
===================== */
/*
downloadData.done(function(data) {
  var parsed = parseData(data);
  var markers = makeMarkers(parsed);
  plotMarkers(markers);
  //removeMarkers(markers);
});

/* =====================
 Leaflet setup
===================== */

var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


$(document).ready(function() {
  $('#text-label1').text('URL');
  $('#text-label2').text('Longitude Key');
  $('#text-label3').text('Latitude Key');
  $('#text-input1').val('URL');
  $('#text-input2').val('LNG');
  $('#text-input3').val('LAT');
  $("#text-input1").prop("disabled",false);
  $("#text-input2").prop("disabled",false);
  $("#text-input3").prop("disabled",false);
  $('#button1').text('Go');
  $( "#button1" ).click(function() {
    var myObj = {"URL": $('#text-input1').val(),
    "Lat": $('#text-input2').val(),
    "Long": $('#text-input3').val(),
  };
  console.log(myObj);
    var ajaxURL = $.ajax(myObj.URL);
    var parseData = function(data){ return JSON.parse(data);};
    var makeMarkers = function(data) {
      return _.map(data, function(obj){return L.marker([obj[myObj.Long], obj[myObj.Lat]]);});
    };
    var plotMarkers = function(data) {
      return  _.each(data, function(obj){  obj.addTo(map); });
    };
    ajaxURL.done(function(data) {
      var parsed = parseData(data);
      var markers = makeMarkers(parsed);
      plotMarkers(markers);
      $( "#button2" ).click(function() { removeMarkers(markers);});
      //removeMarkers(markers);
    });

/*
    var geojsonMarkerOptions = {
      radius: 8,
      fillColor: "#000"
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
  };
  console.log(myObj);
  L.circleMarker([myObj.Lat,myObj.Long],geojsonMarkerOptions).addTo(map).bindPopup(myObj.Job)
*/
});



});
