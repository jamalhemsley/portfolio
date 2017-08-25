// Define all the settings for the parts of the component.
let mapComponentSettings = {
    mapConfig: {
        mapSelectorId: 'map-canvas',
        mapOptions: {
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
        itemFilters: {
            storeType: ['sales', 'distributor', 'representative'],
            storeCountry: ['United States', 'Canada'],
            storeBanner: ['distributor', 'corporate', 'sales']
        },
        itemMeta: {
            storeType: '',
            storeName: '',
            storeBanner: '',
            storeAddress: '',
            storeCountry: '',
            storeLat: '',
            storeLng: ''
        },
        itemContainer: '#store-listings-js',
        itemTemplate: '#store-item-template',
        itemMetaPrefix: '',
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
            anchor: new google.maps.Point(9.81, 28)
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

// Setup settings shortname.
const set = mapComponentSettings;

// Launch function on page load.
$(document).ready(function() {
    renderStoreTypes();
    renderCountryTypes();
    renderBannerTypes();

    initItems();

    let mapItem = mapItems[0];

    mapObject.init(mapItem[set.markerConfig.markerAddressLat], mapItem[set.markerConfig.markerAddressLng], mapItems);

    let afterFilter = function(result) {
        mapObject.updateMarkers(result);

        infoBubble.close();
    };

    afterFilter(mapItems);

    let FJS = FilterJS(mapItems, `${set.itemConfig.itemContainer}`, {
        template: `${set.itemConfig.itemTemplate}`,
        callbacks: {
            afterFilter: afterFilter
        },
        pagination: {
            container: '#pagination',
            visiblePages: 5,
            perPage: {
                values: [3],
                container: '#per_page'
            },
        }
    });

    FJS.addCriteria({field: 'storeType', ele: '#filter-storetype input:checkbox'});
    FJS.addCriteria({field: 'storeCountry', ele: '#filter-storecountry input:checkbox'});
    FJS.addCriteria({field: 'storeBanner', ele: '#filter-storebanner input:checkbox', all: 'all'});

    window.FJS = FJS;
});

function renderStoreTypes() {
    const types = set.itemConfig.itemFilters.storeType;
    let html = $('#filter-storetype-input').html();
    let templateFn = FilterJS.templateBuilder(html);
    let container = $('#filter-storetype');

    $.each(types, function(i, c) {
        container.append(templateFn({storeType: c, value: c}));
    });
}

function renderCountryTypes() {
    const types = set.itemConfig.itemFilters.storeCountry;
    let html = $('#filter-storecountry-input').html();
    let templateFn = FilterJS.templateBuilder(html);
    let container = $('#filter-storecountry');

    $.each(types, function(i, c) {
        container.append(templateFn({storeCountry: c, value: c}));
    });
}

function renderBannerTypes() {
    const types = set.itemConfig.itemFilters.storeBanner;
    let html = $('#filter-storebanner-input').html();
    let templateFn = FilterJS.templateBuilder(html);
    let container = $('#filter-storebanner');

    $.each(types, function(i, c) {
        container.append(templateFn({storeBanner: c, value: c}));
    });
}

function initItems() {
    $('.filter-storetype .filter-button').each(function() {
        $(this).find(':checkbox').prop('checked', true).parent().attr('data-filter-active', '');

        $(this).find('.marker').css('background-color', set.itemConfig.itemTypes[$(this).data('filter-markers')].color);

        $(this).click(function() {
            if ($(this).find(':checkbox').prop('checked')) {
                $(this).find('.marker').css('background-color', set.itemConfig.itemTypes[$(this).data('filter-markers')].color);
            } else {
                $(this).find('.marker').css('background-color', set.itemConfig.itemTypes.default.color);
            }
        })
    });

    $('.filter-button label :checkbox').change(function() {
        if (this.checked) {
            $(this).parent().attr('data-filter-active', '');
        } else {
            $(this).parent().removeAttr('data-filter-active');
        }
    });

    $('.filter-all label :checkbox', '#filter-storebanner').change(function() {
        if (this.checked) {
            $(this).parent().attr('data-filter-active', '');
            $('#filter-storebanner').find('.filter-button label').attr('data-filter-active', '');
        } else {
            $(this).parent().removeAttr('data-filter-active');
            $('#filter-storebanner').find('.filter-button label').removeAttr('data-filter-active', '');
        }
    });
}

// Setup marker array to hold marker objects.
let markers = [];

// Setup the infoBubble outside of the map object to prevent duplicates.
let infoBubble = new InfoBubble(set.infoBubbleConfig);

let mapObject = {
    map: null,

    init: function(lat, lng, mapItems) {
        let self = this;

        set.mapConfig.mapOptions.center = new google.maps.LatLng(lat, lng);

        this.map = new google.maps.Map(document.getElementById(set.mapConfig.mapSelectorId), set.mapConfig.mapOptions);

        $.each(mapItems, function() {
            self.addMarker(this);
        });

        this.setCenterPoint();
    },

    // Add markers to the map.
    addMarker: function(mapItem) {
        let self = this;

        // Setup base marker.
        let marker = new google.maps.Marker({
            title: mapItem[set.markerConfig.markerTitle],
            position: new google.maps.LatLng(mapItem[set.markerConfig.markerAddressLat], mapItem[set.markerConfig.markerAddressLng]),
            icon: set.markerConfig.markerIcon,
            map: self.map
        });

        // Merge new marker object with the mapItem to create a complete marker.
        Object.assign(marker, mapItem);

        // Set the fill color of the marker icon to match the type of marker.
        marker.icon.fillColor = set.itemConfig.itemTypes[marker[set.markerConfig.markerType]].color;

        // Setup content for the infoBubble.
        marker.infoBubbleContent = `\
                        <div class="marker-type">\
                                <div class="marker-icon" style="background-color: ${marker.icon.fillColor};"></div> ${marker[set.markerConfig.markerType]}\
                            </div>\
                        <div class="marker-info">\
                                <p class="marker-title">${marker.title}</p>\
                                <p class="marker-address">${marker[set.markerConfig.markerAddress]}</p>\
                                <a class="marker-directions" href="https://google.com/maps/">Obtain Directions</a>\
                            </div>`;

        // Push the marker to the markers array.
        markers.push(marker);

        // Add click functions to the markers.
        marker.addListener('click', function() {
            // Close any open infoBubbles.
            infoBubble.close();

            // Since infoBubbles aren't dynamically resized, we'll do it live.
            const heightCalcId = 'map-infobubble-height-calc';

            // Remove the current calculation div on the page, if there is one.
            $(`#${heightCalcId}`).remove();

            // Set up calculation div for the resized numbers.
            $('body').append(`<div id="map-infobubble-height-calc"></div>`);

            // Setting the max width is necessary to have uniform infoBubble content widths.
            $(`#${heightCalcId}`).css(`width`, `${set.infoBubbleConfig.maxWidth}px`).append(marker.infoBubbleContent);

            // Catch the infoBubble object before it's launched and then (pseudo-)dynamically set the the height.
            infoBubble.minWidth = $(`#${heightCalcId}`).outerWidth();
            infoBubble.minHeight = $(`#${heightCalcId}`).outerHeight();

            // Set content of a new infoBubble.
            infoBubble.setContent(marker.infoBubbleContent);

            // Open up the new marker infoBubble.
            infoBubble.open(self.map, marker);

            // Pan to clicked marker.
            this.map.panTo(this.getPosition());
        });

        // Don't forget to close any infoBubbles if anywhere else on the map is clicked.
        this.map.addListener('click', function() {
            infoBubble.close();
        });
    },

    // Update the markers when filters are changed.
    updateMarkers: function(records, i) {
        let self = this;

        $.each(markers, function(i) {
            markers[i].setVisible(false);
        });

        $.each(records, function() {
            markers[this.id].setVisible();
        });

        if(records.length) self.setCenterPoint();
    },

    // Set the centerpoint for new filters.
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