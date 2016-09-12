function main() {
  var map = L.map('map', { 
    zoomControl: false,
    center : [40.64, -73.955],
    zoom: 13
  });

  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);
  
  soundz.forEach(function(s){
    var popup = L.popup({
      minWidth: 500
    }).setContent(s.popup);

    L.circleMarker(s.geo, {
      opacity: 1,
      color: '#ece7f2',
      fillColor: '#2b8cbe',
      fillOpacity: 1,
      radius: 10
    }).bindPopup(popup).addTo(map);
  });
}

window.onload = main;
// L.tileLayer('HTTP://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', { attribution: 'Stamen'})
//   .addTo(map);
