$(document).ready(function(){
		var mapObj = new GMaps({
		  div: "#map",
		  lat: 38.237162,
		  lng: -85.727320,
		  zoom: 13
		});

		var m = mapObj.addMarker({
  			lat: 38.237162,
		  	lng: -85.727320,
  			title: 'WaxWorks'
  			
		});
		
});
