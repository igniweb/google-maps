(function (window, googleMap) {

    'use strict';

    // DOM canvas for the map
    var element = document.getElementById('map_canvas');

    // Actual map object
    var map = googleMap.create(element, googleMap.MAP_OPTIONS);

    map.zoom(18);
    map.addMarker({
        lat: 37.791350,
        lng: -122.435883,
        icon: 'markers/fire.png', // http://mapicons.nicolasmollet.com/
        draggable: true,
        // Custom options
        id: 1,
        event: {
            name: 'click',
            callback: function (event) {
                alert('Clicked!');
                console.log(event);
                console.log(this);
            }
        }
    });
    
}(window, window.googleMap));
