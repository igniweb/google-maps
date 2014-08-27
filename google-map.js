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
            },

            on: function (event, callback) {
                // Listen event and run callback in the context of this instance
                var self = this;
                google.maps.event.addListener(this.map, event, function (event) {
                    callback.call(self, event);
                });
            }
        };

        return googleMap;
    }());

    googleMap.create = function (element, options) {
        return new googleMap(element, options);
    };

    window.googleMap = googleMap;

}(window, google));
