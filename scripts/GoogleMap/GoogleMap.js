(function (window, google, Collection) {

    'use strict';

    var GoogleMap = (function () {

        function GoogleMap(element, options) {
            this.map = new google.maps.Map(element, options);

            this.markers = Collection.create();
        }

        GoogleMap.prototype = {

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

            findMarkerBy: function (callback) {
                return this.markers.find(callback);
            },

            removeMarkerBy: function (callback) {
                return this.markers.find(callback, function (markers) {
                    markers.forEach(function (marker) {
                        marker.setMap(null);
                    });
                });
            },

            _createMarker: function (options) {
                options.map = this.map;

                var marker = new google.maps.Marker(options);
                this.markers.add(marker);

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

        return GoogleMap;
        
    }());

    GoogleMap.create = function (element, options) {
        return new GoogleMap(element, options);
    };

    window.GoogleMap = GoogleMap;

}(window, google, window.Collection));
