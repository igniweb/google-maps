(function (window, google, Collection, MarkerClusterer) {

    'use strict';
// https://developers.google.com/maps/documentation/javascript/styling?hl=fr#style_syntax
    var GoogleMap = (function () {

        function GoogleMap(element, options) {
            this.map = new google.maps.Map(element, options);

            this.markers = Collection.create();

            if (options.cluster) {
                this.markerClusterer = new MarkerClusterer(this.map, [], options.cluster.options);
            }

            if (options.geocoder) {
                this.geocoder = new google.maps.Geocoder();
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

            geocode: function (options) {
                if (this.geocoder) {
                    this.geocoder.geocode({
                        address: options.address
                    }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            options.success.call(this, results, status);
                        } else {
                            options.error.call(this, status);
                        }
                    });
                }
            },

            getCurrentPosition: function (callback) {
                if (navigator.geolocation) {
                    var self = this;

                    navigator.geolocation.getCurrentPosition(function (position) {
                        callback.call(self, position);
                    });
                }
            },

            setPanorama: function (element, options) {
                var panorama = new google.maps.StreetViewPanorama(element, options);

                if (options.events) {
                    this._attachEvents(panorama, options.events);
                }

                this.map.setStreetView(panorama);
            },

            addMarker: function (options) {
                var self = this;

                options.position = {
                    lat: options.lat,
                    lng: options.lng
                };

                var marker = this._createMarker(options);

                if (options.events) {
                    this._attachEvents(marker, options.events);
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
                var self = this;

                // Listen event and run callback in the context of this instance
                google.maps.event.addListener(options.element, options.event, function (event) {
                    options.callback.call(self, event, options.element);
                });
            },

            _attachEvents: function (element, events) {
                var self = this;
                
                // Attach all events to target element
                events.forEach(function (event) {
                    self._on({
                        element: element,
                        event: event.name,
                        callback: event.callback
                    });
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
