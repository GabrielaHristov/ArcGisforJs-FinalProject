require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Search"
  ], function(esriConfig, WebMap, MapView, ScaleBar, Legend,Home,LayerList,BasemapToggle,BasemapGallery,Search) {
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

   view.ui.add(homeBtn, "top-left");

    const legend = new Legend({
        view: view
    })
  
    view.ui.add(legend, "bottom-left");

    const scalebar = new ScaleBar({
        view: view,
        unit: "metric",
        style: "ruler"
    })

    view.ui.add(scalebar, "bottom-right");

    view.ui.add("basemap-btn", "top-right");
    view.ui.add("layerlist-btn", "top-right");

    const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery"
    })

    const basemapGallery = new BasemapGallery({
        view: view,
        source: {
            query: {

            }
        },
    })

    view.ui.add(basemapGallery, "top-right");

    view.ui.add(basemapToggle, "bottom-right");

    const layerlist = new LayerList({
        view: view
    })

    view.ui.add(layerlist, "top-right");

    document
    .getElementById("layerlist-btn")
    .addEventListener("click", function() {
        toggleButton("layerlist");
    })

    document
    .getElementById("basemap-btn")
    .addEventListener("click", function() {
        toggleButton("gallery");
    })

    const searchWidget = new Search( {
        view: view
    })

    view.ui.add(searchWidget, "top-left");

    function toggleButton (item) {
        const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
        const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
        let currentProp;

        if(item == "layerlist") {
          currentProp =layerListEl.style.getPropertyValue("display");
          layerListEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
          galleryEl.style.setProperty("display", "none");
        }else if(item == "gallery"){
           currentProp = galleryEl.style.getPropertyValue("display");
           galleryEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
           layerListEl.style.setProperty("display", "none");
        }
    }
})


