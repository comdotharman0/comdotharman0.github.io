try{
  function AddMap(){
let map=L.map('map')
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
    return map;
  }
  let mymap = AddMap();
  let marker = L.marker([0, 0]).addTo(mymap).bindPopup('Tracking your position...').openPopup();
  

let a = navigator.geolocation.getCurrentPosition(function success(position){
  
 let lat = position.coords.latitude;
 let lon = position.coords.longitude;
//alert(lat+" , "+lon);   
  mymap.setView([lat,lon],13);

   marker.setLatLng([lat, lon]);
    mymap.setView([lat, lon], 16); // Zoom in for better view

},
                                            function error(er){
                                              console.log(er);
                                            } /* ,{
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 10000
                                            }*/
                                                );
}catch(err){
  alert(err+" is the error.");
}