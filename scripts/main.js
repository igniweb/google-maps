(function (window, GoogleMap) {

    'use strict';

    // DOM canvas for the map
    var element = document.getElementById('map_canvas');
    // Actual map object
    var map = GoogleMap.create(element, GoogleMap.MAP_OPTIONS);

    // Create marker with events
    map.addMarker({
        lat: 37.781350,
        lng: -122.485883,
        draggable: true,
        events: [{
            name: 'click',
            callback: function () {
                alert('Clicked!');
            }
        }, {
            name: 'dragend',
            callback: function () {
                alert('Dragend!');
            }
        }]
    });

    /*
    // Create markers
    var icons = ['abduction', 'blast', 'bomb', 'crimescene', 'fire', 'pirates', 'rape', 'robbery', 'shooting', 'theft', 'torture', 'war'];
    for (var i = 0 ; i < 80 ; i++) {
        var icon = icons[Math.floor(Math.random() * icons.length)];
        map.addMarker({
            id: i + 1,
            lat: 37.781350 + Math.random(),
            lng: -122.485883 + Math.random(),
            content: '<h3>' + icon.toUpperCase() + '</h3><p>Lorem ipsum</p>',
            icon: 'markers/' + icon + '.png'
        });
    }
    */

    /*
    // Use collection related functions
    var found = map.findMarkerBy(function (marker) {
        return marker.id === 1;
    });
    map.removeMarkerBy(function (marker) {
        return marker.id === 1;
    });
    */
    
}(window, window.GoogleMap));
