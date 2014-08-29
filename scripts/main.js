(function (window, GoogleMap) {

    'use strict';

    // DOM canvas for the map
    var element = document.getElementById('map_canvas');
    // Actual map object
    var map = GoogleMap.create(element, GoogleMap.MAP_OPTIONS);

    // Create markers
    var icons = ['abduction', 'blast', 'bomb', 'crimescene', 'fire', 'pirates', 'rape', 'robbery', 'shooting', 'theft', 'torture', 'war'];
    for (var i = 0 ; i < 80 ; i++) {
        var index = Math.floor(Math.random() * icons.length);
        var icon  = icons[index];
console.log('Icon ' + i, index, icon);
        map.addMarker({
            id: i + 1,
            lat: 37.781350 + Math.random(),
            lng: -122.485883 + Math.random(),
            content: '<h3>' + icon.toUpperCase() + '</h3><p>Lorem ipsum</p>',
            icon: 'markers/' + icon + '.png'
        });
    }

    /*
    // Use collection related functions
    var found = map.findMarkerBy(function (marker) {
        return marker.id === 2;
    });
    map.removeMarkerBy(function (marker) {
        return marker.id === 2;
    });
    */
    
}(window, window.GoogleMap));
