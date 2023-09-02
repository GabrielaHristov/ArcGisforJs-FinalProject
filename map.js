require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home"
  ], function(esriConfig, WebMap, MapView, ScaleBar, Legend,Home) {
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

   const homeBtn = new Home({
       view: view
   })

   view.ui.add(homeBtn, "top-left")

})
