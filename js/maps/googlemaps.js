var myCenter=new google.maps.LatLng(-20.292222, -40.301643);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:18,
  scrollwheel: false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"<b>Halley Sistemas</b><br/>Av. Nossa Sra. da Penha nº 2190 (Dentro da Emescam) <br/>Bela Vista - Vitória - ES - Brasil<br/>CEP: 29027-502"
  });

infowindow.open(map,marker);
marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);