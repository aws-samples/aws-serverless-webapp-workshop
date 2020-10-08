<template>
    <div  id="viewDiv"></div>
</template>

<script>

import { loadModules } from 'esri-loader';
import { loadCss } from 'esri-loader';
import axios from 'axios'
var config = require('../config.js')

    export default {
        name: 'mapView',
        props:{
            token:String
        },
        data () {
            return{
                 webmap:{},
                 authToken:this.token
            }
        },
        mounted(){

                //alias this
                var self = this
                loadModules([ 'esri/views/MapView', 'esri/WebMap', 'esri/symbols/TextSymbol','esri/Graphic','esri/symbols/PictureMarkerSymbol','esri/geometry/support/webMercatorUtils','esri/geometry/Point','esri/core/watchUtils'])
                .then(([MapView, WebMap, TextSymbol, Graphic, PictureMarkerSymbol, webMercatorUtils,Point, watchUtils]) => {
                    // then we load a web map from an id

                    self.webmap = new WebMap(
                            { basemap: 'gray-vector' }
                        )

                    // and we show that map in a container id #viewDiv
                     var view = new MapView({
                        center: [-122.31, 47.60],
                        container: 'viewDiv',
                        map: self.webmap,
                        zoom: 12
                    });

                    var pinSymbol = new TextSymbol({
                        color: '#f50856',
                        text: '\ue61d',
                        font: {
                            size: 20,
                            family: 'CalciteWebCoreIcons'
                        }
                    });

                    var unicornSymbol = new PictureMarkerSymbol({
                        url: '/images/unicorn-icon.png',
                        width: '25px',
                        height: '25px'
                    });

                    var pinGraphic;
                    var unicornGraphic;

                    function updateCenter(newValue) {
                        self.webmap.center = {
                            latitude: newValue.latitude,
                            longitude: newValue.longitude
                        };
                    }
                    
                    function updateExtent(newValue) {
                        var min = webMercatorUtils.xyToLngLat(newValue.xmin, newValue.ymin);
                        var max = webMercatorUtils.xyToLngLat(newValue.xmax, newValue.ymax);
                        self.webmap.extent = {
                            minLng: min[0],
                            minLat: min[1],
                            maxLng: max[0],
                            maxLat: max[1]
                        };
                    }


                     self.webmap.watchHandle = watchUtils.watch(view,'center',(center)=>{
                         self.webmap.center = center.clone().toJSON()
                         updateCenter(self.webmap.center)
                     });

                     self.webmap.watchHandle = watchUtils.watch(view,'extent',(extent)=>{
                         self.webmap.extent = extent.clone().toJSON()
                         updateExtent(self.webmap.extent)
                     });

                   

                    view.on('click', function handleViewClick(event) {
                        self.webmap.selectedPoint = event.mapPoint;
                        view.graphics.remove(pinGraphic);
                        pinGraphic = new Graphic({
                            symbol: pinSymbol,
                            geometry: self.webmap.selectedPoint
                        });
                        view.graphics.add(pinGraphic); 
                        
                        self.enableRequest(self.webmap)

                        
                    })


                    self.webmap.animate = function animate(origin, dest, callback) {
                        console.log(origin)
                        var startTime
                        var step = function animateFrame(timestamp) {
                            var progress
                            var progressPct
                            var point
                            var deltaLat
                            var deltaLon
                            if (!startTime) startTime = timestamp
                            progress = timestamp - startTime
                            progressPct = Math.min(progress / 2000, 1)
                            deltaLat = (dest.latitude - origin.latitude) * progressPct
                            deltaLon = (dest.longitude - origin.longitude) * progressPct
                            point = new Point({
                                longitude: origin.longitude + deltaLon,
                                latitude: origin.latitude + deltaLat
                            });
                            view.graphics.remove(unicornGraphic)
                            unicornGraphic = new Graphic({
                                geometry: point,
                                symbol: unicornSymbol
                            });
                            view.graphics.add(unicornGraphic)
                            
                            if (progressPct < 1) {
                                requestAnimationFrame(step)
                            } else {
                                callback();
                                return 1
                            }
                        }
                        requestAnimationFrame(step)
                    }
                })
                .catch(err => {
                    // handle any errors
                    console.error(err);
                })
            
        },
        methods:{
                enableRequest: function(ev){
                    this.$parent.enableButton(ev)
                },
                go: function (event){
                    this.webmap = event
                    this.requestUnicorn(this.webmap.selectedPoint);
                },
                requestUnicorn: function(pickupLocation){
                        self = this
                        axios({
                            method: 'POST',
                            url: config.api.invokeUrl + "/ride",
                            headers: {
                                Authorization: self.token,
                            },
                            data: JSON.stringify({
                                PickupLocation: {
                                    Latitude: pickupLocation.latitude,
                                    Longitude: pickupLocation.longitude
                                }
                            }),
                            contentType: 'application/json',
                        }).then(function (response) {
                            // handle success
                            self.completeRequest(response.data)
                           
                        })
                        .catch(function (error) {
                            // handle error
                            console.error('Error requesting ride: ', error);
                            alert('An error occured when requesting your unicorn:\n' + error);
                        })

                },
                completeRequest: function (unicornResponse) {
                    console.log('Response received from API: ', unicornResponse);
                    var unicorn;
                    var pronoun;
                    unicorn = unicornResponse.Unicorn;
                    pronoun = unicorn.Gender === 'Male' ? 'his' : 'her';
                    this.displayUpdate(unicorn.Name + ', your ' + unicorn.Color + ' unicorn, is on ' + pronoun + ' way.');
                    this.animateArrival(function animateCallback() {
                        self.displayUpdate(unicorn.Name + ' has arrived. Giddy up!');
                        //self.webmap.unsetLocation();
                    });
                },
                displayUpdate: function(text) {
                    this.$parent.addItem(text)
                    console.log(text);
                },
                animateArrival: function(callback) {
                var dest = this.webmap.selectedPoint;
                var origin = {};
                if (dest.latitude > this.webmap.center.latitude) {
                    origin.latitude = this.webmap.extent.minLat;
                } else {
                    origin.latitude = this.webmap.extent.maxLat;
                }

                if (dest.longitude > this.webmap.center.longitude) {
                    origin.longitude = this.webmap.extent.minLng;
                } else {
                    origin.longitude = this.webmap.extent.maxLng;
                }

                this.webmap.animate(origin, dest, callback);
            }
        }
    }
</script>