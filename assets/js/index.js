$(document).ready(function() {
	$('.insta-badge').hover(
	  function() {
			$('.insta-hover-badge').css('right', '2.9%');
			$('.insta-hover-badge span').css({
				'opacity': '1',
				'right': '1%'
			});
	  }, function() {
			$('.insta-hover-badge').css('right', '2.5%');
			$('.insta-hover-badge span').css({
				'opacity': '0',
				'right': '10%'
			});
	  }
	);
});


function myMap() {
	// Create Map options
  var mapOptions = {
    center: new google.maps.LatLng(47.611366, -122.193130),
    zoom: 15
  }

	// Create map
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	// Make marker
	var marker = new google.maps.Marker({
	  position: mapOptions.center,
	  map: map
	});
}
