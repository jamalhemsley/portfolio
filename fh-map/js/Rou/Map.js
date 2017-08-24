// Establish Global Map Variable
let mapObject = '';

// Start to initialize everything.
$(function() {
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
                zoom: 8
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

    // Setup function shortname.
    const mc = mapComponent(mapComponentSettings);

    // Set Colors for individual elements.
    $(`[data-${mapComponentSettings.toggleConfig.dataSelector}="storeType"]`).each(function() {
        let thisEl = $(this);

        thisEl.find('.marker').css('background-color', mapComponentSettings.itemConfig.itemTypes[thisEl.data('filter-markers')].color);

        thisEl.click(function() {
            if (thisEl.is('[data-filter-active]')) {
                thisEl.find('.marker').css('background-color', mapComponentSettings.itemConfig.itemTypes[thisEl.data('filter-markers')].color);
            } else {
                thisEl.find('.marker').css('background-color', mapComponentSettings.itemConfig.itemTypes.default.color);
            }
        });
    });
});

/**
 *      Build and render the map component.
 *      @param {object} settings - Load in the settings passed into mapComponent().
 *      @returns {{filterCtrl: filterCtrl}} - Functions to be called outside of mapComponent().
 */
function mapComponent(settings) {
    // Shorten the settings parameter.
    let set = settings;

    // Set up filters and set them to off by default.
    let filters = {};

    // Create the filtering object.
    let filterMap = {};

    // Populate the filters object with filters from the itemConfig > itemFilters key.
    if (!!set.itemConfig.itemFilters) {
        for (let i = 0; i < set.itemConfig.itemFilters.length; i++) {
            filters[set.itemConfig.itemFilters[i]] = [];
        }
    } else {
        console.log('No filters have been made available.');
        return;
    }

    // Setup object/array containers for map items and markers.
    let mapItems = []; // Holds the initialized mapItems.
    let filteredMapItems = []; // Holds the filtered mapItems.
    let markers = {}; // Holds the markers.

    // Setup the map component initialization function.
    function initMap() {
        // Create map with defined options.
        mapObject =  new google.maps.Map(document.getElementById(set.mapConfig.mapSelectorId), set.mapConfig.mapOptions);

        // Initialize all of the items that we'll use on the map.
        initMapItems();

        // Add the markers to the map.
        loadMapMarkers();

        // Initialize filter toggles.
        filterToggle();
    }

    // Initialize the array of all map items.
    function initMapItems() {
        $(set.itemConfig.itemSelector).each(function(i) {
            const item = $(this);
            const itemId = i + 0; // Assign a unique ID to each item.
            const itemMeta = Object.keys(set.itemConfig.itemMeta); // Objects can be used like arrays, so we get the keys.
            let mapItem = {};

            mapItem['id'] = itemId;

            for(let j = 0; j < itemMeta.length; j++) {
                // Convert key names to lowercase first.
                let itemMetaValue = `${set.itemConfig.itemMetaPrefix}-${itemMeta[j].toLowerCase()}`;

                // Check this element for all data attributes for the item.
                mapItem[itemMeta[j]] = item.find(`[data-${itemMetaValue}]`).data(itemMetaValue);
            }

            // Push map item to mapItems array.
            mapItems.push(mapItem);
        });
    }

    function filterToggle() {
       const toggle = $(`*[data-${set.toggleConfig.dataSelector}]`);

       toggle.each(function() {
           $(this).attr('data-filter-active', '');
       });

       toggle.click(function() {
           if ($(this).is('[data-filter-active]')) {
               $(this).removeAttr('data-filter-active');
           } else {
               $(this).attr('data-filter-active', '');
           }


          filterCtrl($(this).data(`${set.toggleConfig.dataSelector}`), $(this).data(`${set.toggleConfig.dataValue}`));
       });
    }

    function loadMapMarkers(mapMarkerItems) {
        // Check if modified map item list has been passed in.
        let mapMarkers = !!mapMarkerItems ? mapMarkerItems : mapItems;

        if (mapMarkers.length < 1) {
            console.log('There are no items to place on the map!');
            return;
        }

        // Setup infoBubble for the map.
        const infoBubble = new InfoBubble(set.infoBubbleConfig);

        for (let i = 0; i < mapMarkers.length; i++) {
            let mapMarkerItem = mapMarkers[i];

            // If the marker is already on the map, don't place it again.
            if (filteredMapItems.indexOf(mapMarkerItem.id) !== -1) continue;

            // Create base marker.
            let marker = new google.maps.Marker({
                title: mapMarkerItem[set.markerConfig.markerTitle],
                position: new google.maps.LatLng(mapMarkerItem.storeLat, mapMarkerItem.storeLng),
                icon: set.markerConfig.markerIcon,
                map: mapObject
            });

            // Merge new marker object with the mapMarkerItem to create a complete marker.
            Object.assign(marker, mapMarkerItem);

            console.log(marker);

            // Set fillColor for the marker.

            marker.icon.fillColor = set.itemConfig.itemTypes[marker[set.markerConfig.markerType]].color;

            // Template for infoBubble content.
            const infoBubbleContent = `\
                            <div class="marker-type">\
                                <div class="marker-icon" style="background-color: ${marker.icon.fillColor};"></div> ${marker[set.markerConfig.markerType]}\
                            </div>\
                            <div class="marker-info">\
                                <p class="marker-title">${marker.title}</p>\
                                <p class="marker-address">${marker[set.markerConfig.markerAddress]}</p>\
                                <a class="marker-directions" href="https://google.com/maps/">Obtain Directions</a>\
                            </div>`;

            // Add click functions to the markers.
            marker.addListener('click', function() {
                // Since infoBubbles aren't dynamically resized, we'll do it live.
                const heightCalcId = 'map-infobubble-height-calc';
                // const calcSelector = $(`#${heightCalcId}`);

                // Remove the current calculation div on the page, if there is one.
                $(`#${heightCalcId}`).remove();

                $('body').append(`<div id="map-infobubble-height-calc"></div>`);

                // Setting the max width is necessary to have uniform infoBubble content widths.
                $(`#${heightCalcId}`).css(`width`, `${set.infoBubbleConfig.maxWidth}px`).append(infoBubbleContent);

                // Catch the infoBubble object before it's launched and then (pseudo-)dynamically set the the height.
                infoBubble.minWidth = $(`#${heightCalcId}`).outerWidth();
                infoBubble.minHeight = $(`#${heightCalcId}`).outerHeight();

                // Close any open infoBubbles.
                infoBubble.close();

                // Set content of a new infoBubble.
                infoBubble.setContent(infoBubbleContent);

                infoBubble.open(mapObject, marker);

                // Pan to clicked infoBubbles.
                mapObject.panTo(this.getPosition());
            });

            // Close any infoBubbles if anywhere else on the map is clicked.
            mapObject.addListener('click', function() {
                infoBubble.close();
            });

            // Add marker to markers object container.
            markers[mapMarkerItem.id] = marker;

            // Add ID of marker to filteredMapItems for later use.
            filteredMapItems.push(mapMarkerItem.id);
        }
    }

    /**
     *      Helper function to break down filtering arrays.
     *      @param a (array of arrays).
     *      @return array (common elements from all arrays).
     */
    function reduceArray(a) {
        a.shift().reduce(function(res, v) {
            if (res.indexOf(v) === -1 && a.every(function(a) {
                    return a.indexOf(v) !== -1;
                })) res.push(v);
            return res;
        }, []);
        return a;
    }

    /**
     *      Decides which filter function to call and stacks all the filters together.
     *      @param filterType (string, the property that will be filtered upon).
     *      @param value (string, selected filter value).
     */
    function filterCtrl(filterType, value) {
        // Create the temporary result array.
        let results = [];

        // Get the index of the values passed into the function.
        let valueIndex = filters[filterType].indexOf(value);

        // If the index of the passed in value is > -1 (i.e. exists already), remove it from filters.
        if (valueIndex > -1) {
            filters[filterType].splice(valueIndex, 1);
        } else {
            filters[filterType].push(value);
        }

        for (let k in filters) {
            if (!filters.hasOwnProperty(k) && !(filters[k].length !== 0)) {
                loadMapMarkers();
                return false;
            } else if (filters[k].length !== 0) {
                // Call the filterMap function and append it to the concat array.
                results.push(filterMap[k](filters[k]));
            } else {
                // fail silently
            }
        }

        if (filters[filterType].length === 0) results.push(mapItems);

        /*
         *      If there is just one array/filter applied, set it.
         *      Otherwise, find markers common to every results array.
        */
        if (results.length === 1) {
            results = results[0];
        } else {
            results = reduceArray(results);
        }

        loadMapMarkers(results);
    }

    for (let m in filters) {
        filterMap[m] = function(value) {
            return filterByString(`${m}`, value);
        }
    }

    function filterByString(dataProperty, value) {
        let filteredMarkers = [];

        for (let i = 0; i < mapItems.length; i++) {
            let mapItem = mapItems[i];

            if (value.indexOf(mapItem[dataProperty]) === -1) {
                filteredMarkers.push(mapItem);
            } else {
                removeMarker(mapItem.id);
            }
        }

        return filteredMarkers;
    }

    /**
     *      Remove marker from our map + list of current markers.
     *      @param id (of marker element).
     *      @return undefined
     */
    function removeMarker(id) {
        if (markers[id]) {
            let index = filteredMapItems.indexOf(id);

            markers[id].setMap(null);

            if (index > -1) {
                filteredMapItems.splice(index, 1);
            }

            delete markers[id];
        }
    }

    initMap();

    // Return functions from the inside, so they can be called from the outside.
    return {
        filterCtrl: filterCtrl
    };
}