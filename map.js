require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
  ], function(esriConfig, WebMap, MapView, ScaleBar, Legend) {
    esriConfig.apiKey = "AAPKba72e0ab5a174570a5d7166a8626a797Rd6BTFGhgavDcZZV9osrEfz6Q4U0Dxu4y4Z7CTX6pgovODIt6ttFxwcQTXWMXvTB"

   const webMap = new WebMap({
    portalItem: {
        id: "232b4d297d054b2a831a3ce629ac8495"
    }
   })

   const view = new MapView({
   container: "viewDiv",
   map: webMap 
   });

})
