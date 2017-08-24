// Define all the settings for the parts of the component.
const mapComponentSettings = {
    mapConfig: {
        mapSelectorId: 'map-canvas',
        mapOptions: {
            center: {lat: 46.082340, lng: -72.883422},
            disableDefaultUI: true,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#707070"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#707070"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#f8f8f8"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#88b04b"
                        },
                        {
                            "weight": 0.5
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                }
            ],
            zoom: 5
        }
    },
    itemConfig: {
        itemFilters: ['storeType', 'storeBanner', 'storeCountry'],
        itemMeta: {
            storeType: '',
            storeName: '',
            storeBanner: '',
            storeAddress: '',
            storeCountry: '',
            storeLat: '',
            storeLng: ''
        },
        itemMetaPrefix: 'mc',
        itemSelector: '.store-listings .store',
        itemTypes: {
            default: {
                color: '#f2f2f2'
            },
            distributor: {
                color: '#9c9e9f'
            },
            representative: {
                color: '#88b04b'
            },
            sales: {
                color: '#0f0708'
            }
        }
    },
    markerConfig: {
        markerAddress: 'storeAddress',
        markerAddressLat: 'storeLat',
        markerAddressLng: 'storeLng',
        markerCountry: 'storeCountry',
        markerTitle: 'storeName',
        markerType: 'storeType',
        markerIcon: {
            path: 'M16.75,2.87a9.82,9.82,0,0,0-13.88,0A11.18,11.18,0,0,0,2,16.66L9.81,28l7.85-11.34a11.18,11.18,0,0,0-.91-13.81ZM9.9,13.3',
            fillColor: '#f2f2f2',
            fillOpacity: 1,
            strokeWeight: 0,
            scaledSize : new google.maps.Size(32, 48),
            anchor: new google.maps.Point(10, 0)
        }
    },
    infoBubbleConfig: {
        arrowSize: 16,
        arrowStyle: 0,
        backgroundClassName: 'map-infobubble',
        borderRadius: 0,
        borderWidth: 0,
        content: '',
        disableAutoPan: true,
        hideCloseButton: true,
        maxWidth: 344,
        minHeight: 1,
        shadowStyle: 0,
        padding: 0
    },
    toggleConfig: {
        dataSelector: 'filter-marker-type',
        dataValue: 'filter-markers'
    }
};
const set = mapComponentSettings;

$(document).ready(function() {

    renderStoreType();
    renderCountryType();

    initInputs();

    let mapItem = mapItems[0];

    mapObject.init(mapItem.storeLat, mapItem.storeLng, mapItems);

    let afterFilter = function(result) {
        mapObject.updateMarkers(result);
    };

    afterFilter(mapItems);

    let FJS = FilterJS(mapItems, '#store-listings-js', {
        template: '#store-item-template',
        callbacks: {
            afterFilter: afterFilter
        }
    });

    FJS.addCriteria({field: 'storeType', ele: '#store-filters input:checkbox', all: 'all'});
    FJS.addCriteria({field: 'storeCountry', ele: '#country-filters input:checkbox', all: 'all'});

    window.FJS = FJS;
});

function renderStoreType() {
    const types = ['sales', 'distributor', 'representative'];
    let html = $('#store-filter-template').html();
    let templateFn = FilterJS.templateBuilder(html);
    let container = $('#store-filters');

    $.each(types, function(i, c) {
        container.append(templateFn({storeType: c, value: c}));
    });
}

function renderCountryType() {
    const types = ['United States', 'Canada'];
    let html = $('#country-filter-template').html();
    let templateFn = FilterJS.templateBuilder(html);
    let container = $('#country-filters');

    $.each(types, function(i, c) {
        container.append(templateFn({storeCountry: c, value: c}));
    });
}

function initInputs() {
    $('#store-filters').find(':checkbox').prop('checked', true);
}
let markers = [];

let infoBubble = new InfoBubble(set.infoBubbleConfig);

let mapObject = {
    map: null,

    init: function(lat, lng, mapItems) {
        let self = this;
        let newMapOptions = {
            center: new google.maps.LatLng(lat, lng),
            disableDefaultUI: true,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#707070"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#707070"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#f8f8f8"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#88b04b"
                        },
                        {
                            "weight": 0.5
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                }
            ],
            zoom: 5
        };

        this.map = new google.maps.Map(document.getElementById(set.mapConfig.mapSelectorId), newMapOptions);

        $.each(mapItems, function() {
            self.addMarker(this);
        });

        this.setCenterPoint();
    },

    addMarker: function(mapItem) {
        let self = this;

        let marker = new google.maps.Marker({
            title: mapItem.storeName,
            position: new google.maps.LatLng(mapItem.storeLat, mapItem.storeLng),
            icon: set.markerConfig.markerIcon,
            map: self.map
        });

        // Merge new marker object with the mapMarkerItem to create a complete marker.
        Object.assign(marker, mapItem);

        marker.icon.fillColor = set.itemConfig.itemTypes[marker[set.markerConfig.markerType]].color;

        marker.infoBubbleContent = `\
                        <div class="marker-type">\
                                <div class="marker-icon" style="background-color: ${marker.icon.fillColor};"></div> ${marker[set.markerConfig.markerType]}\
                            </div>\
                        <div class="marker-info">\
                                <p class="marker-title">${marker.title}</p>\
                                <p class="marker-address">${marker[set.markerConfig.markerAddress]}</p>\
                                <a class="marker-directions" href="https://google.com/maps/">Obtain Directions</a>\
                            </div>`;

        markers.push(marker);

        // Add click functions to the markers.
        marker.addListener('click', function() {
            // Since infoBubbles aren't dynamically resized, we'll do it live.
            const heightCalcId = 'map-infobubble-height-calc';

            // Remove the current calculation div on the page, if there is one.
            $(`#${heightCalcId}`).remove();

            $('body').append(`<div id="map-infobubble-height-calc"></div>`);

            // Setting the max width is necessary to have uniform infoBubble content widths.
            $(`#${heightCalcId}`).css(`width`, `${set.infoBubbleConfig.maxWidth}px`).append(marker.infoBubbleContent);

            // Catch the infoBubble object before it's launched and then (pseudo-)dynamically set the the height.
            infoBubble.minWidth = $(`#${heightCalcId}`).outerWidth();
            infoBubble.minHeight = $(`#${heightCalcId}`).outerHeight();

            // Close any open infoBubbles.
            infoBubble.close();

            // Set content of a new infoBubble.
            infoBubble.setContent(marker.infoBubbleContent);

            infoBubble.open(self.map, marker);

            // Pan to clicked infoBubbles.
            this.map.panTo(this.getPosition());
        });
    },

    updateMarkers: function(records, i) {
        let self = this;
        console.log(records);

        $.each(markers, function(i) {
            markers[i].setMap(null);
        });

        $.each(records, function() {
            markers[this.id].setMap(self.map);
        });

        if(records.length) self.setCenterPoint();
    },

    setCenterPoint: function() {
        let lat,
            lng,
            count = 0;

        for (id in this.markers) {
            let m = this.markers[id];

            if (m.map) {
                lat += m.getPosition().lat();
                lng += m.getPosition().lng();
                count++;
            }
        }

        if (count > 0) {
            this.map.setCenter(new google.maps.LatLng(lat/count, lng/count));
        }
    }
};