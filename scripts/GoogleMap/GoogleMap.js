(function (window, google, Collection, MarkerClusterer) {

    'use strict';

    var GoogleMap = (function () {

        function GoogleMap(element, options) {
            this.map = new google.maps.Map(element, options);

            this.markers = Collection.create();

            if (options.cluster) {
                this.markerClusterer = new MarkerClusterer(this.map, [], options.cluster.options);
            }
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
                var self = this;

                self.markers.find(callback, function (markers) {
                    markers.forEach(function (marker) {
                        if (self.markerClusterer) {
                            self.markerClusterer.removeMarker(marker);
                        } else {
                            marker.setMap(null);
                        }
                    });
                });
            },

            _createMarker: function (options) {
                options.map = this.map;

                // Create marker and add it to collection and clustering system
                var marker = new google.maps.Marker(options);
                this.markers.add(marker);
                if (this.markerClusterer) {
                    this.markerClusterer.addMarker(marker);
                }

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

}(window, window.google, window.Collection, window.MarkerClusterer));
