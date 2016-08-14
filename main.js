function main() {
  var map = L.map('map', { 
    zoomControl: false,
    center : [40.65, -73.925],
    zoom: 14
  });

  L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);
  
  var popupContent = '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206779438&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';
  
  var popup = L.popup({
    minWidth: 300
  }).setContent(popupContent);

  L.circleMarker([40.648119, -73.952376], {
    opacity: 1,
    color: '#ece7f2',
    fillColor: '#2b8cbe',
    fillOpacity: 1,
    radius: 10
  }).bindPopup(popup).addTo(map);
  
}



window.onload = main;
// L.tileLayer('HTTP://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', { attribution: 'Stamen'})
//   .addTo(map);
