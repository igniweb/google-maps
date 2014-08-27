(function (window, google) {

    'use strict';

    var googleMap = (function () {
        function googleMap(element, options) {
            this.map = new google.maps.Map(element, options);
        }

        googleMap.prototype = {
            zoom: function (level) {
                if (level) {
                    this.map.setZoom(level);
                } else {
                    return this.map.getZoom();
                }
            }
        };

        return googleMap;
    }());

    googleMap.create = function (element, options) {
        return new googleMap(element, options);
    };

    window.googleMap = googleMap;

}(window, google));
