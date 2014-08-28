(function (window, googleMap) {

    'use strict';

    // DOM canvas for the map
    var element = document.getElementById('map_canvas');

    // Actual map object
    var map = googleMap.create(element, googleMap.MAP_OPTIONS);

    map.zoom(15);

    var marker1 = map.addMarker({
        lat: 37.791350,
        lng: -122.435883,
        icon: 'markers/fire.png', // http://mapicons.nicolasmollet.com/
        draggable: true,
        // Custom options
        id: 1,
        content: '<div style="">I like food</div>'
    });

    var marker2 = map.addMarker({
        lat: 37.781350,
        lng: -122.455883,
        icon: 'markers/blast.png', // http://mapicons.nicolasmollet.com/
        draggable: true,
        // Custom options
        id: 2,
        event: {
            name: 'click',
            callback: function (evt) {
                alert('Clicked!');
                console.log(evt);
                console.log(this);
            }
        }
    });
    map.delMarker(marker2);

    var found = map.findMarkerByLat(37.791350);
    console.log(found);
    
}(window, window.googleMap));
