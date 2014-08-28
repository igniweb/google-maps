(function (window, google) {

    'use strict';

    var googleMap = (function () {

        function googleMap(element, options) {
            this.map = new google.maps.Map(element, options);

            this.markers = [];
        }

        googleMap.prototype = {

            zoom: function (level) {
                if (level) {
                    this.map.setZoom(level);
                } else {
                    return this.map.getZoom();
                }
            },

            addMarker: function (options) {
                var self = this;

                options.position = {
                    lat: options.lat,
                    lng: options.lng
                };

                var marker = this._createMarker(options);

                if (options.event) {
                    this._on({
                        element: marker,
                        event: options.event.name,
                        callback: options.event.callback
                    });
                }

                if (options.content) {
                    this._on({
                        element: marker,
                        event: 'click',
                        callback: function () {
                            var infoWindow = new google.maps.InfoWindow({
                                content: '<div style="height: 200px;">' + options.content + '</div>'
                            });
                            infoWindow.open(self.map, marker);
                        }
                    });
                }

                return marker;
            },

            delMarker: function (marker) {
                var indexOf = this.markers.indexOf(marker);
                if (indexOf !== -1) {
                    this.markers.splice(indexOf, 1);
                    marker.setMap(null);
                }
            },

            findMarkerByLat: function (lat) {
                for (var i = 0 ; i < this.markers.length ; i++) {
                    var marker = this.markers[i];
                    if (marker.position.lat() === lat) {
                        return marker;
                    }
                }

                return false;
            },

            _createMarker: function (options) {
                options.map = this.map;

                var marker = new google.maps.Marker(options);
                this.markers.push(marker);

                return marker;
            },

            _on: function (options) {
                // Listen event and run callback in the context of this instance
                var self = this;
                google.maps.event.addListener(options.element, options.event, function (event) {
                    options.callback.call(self, event);
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
