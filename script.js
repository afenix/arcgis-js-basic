// Load the ArcGIS API for JavaScript modules and the Luxon library for date/time manipulation
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/config",
    "esri/Basemap",
    "esri/widgets/BasemapGallery",

    // Configure the ArcGIS API key
    esriConfig.apiKey = "AAPK83337061f79941cdbcba8ea16add7f1csWFIvmrzXU7TvesGSEbfGqhfxRivSP37KmfuCDfiec8kVrxhDCre40EzzsvFCLSB";

    // Create a map using Esri's topographic basemap
    const map = new Map({
        basemap: "arcgis-nova"
    });

    // Create a map view   
    const view = new MapView({
        map: map,
        center: [-122.6784, 45.5152], // Longitude, latitude of Portland, OR
        zoom: 11, // Zoom in to Portland City Limits 
        container: "viewDiv",
        constraints: {
            snapToZoom: false
        }
    });
    // Create a BasemapGallery widget
    let basemapGallery = new BasemapGallery({
        view: view,
        source: [
            Basemap.fromId("arcgis-colored-pencil"),
            Basemap.fromId("arcgis-human-geography-dark"),
            Basemap.fromId("arcgis-midcentury"),
            Basemap.fromId("arcgis-modern-antique"),
            Basemap.fromId("arcgis-newspaper"),
            Basemap.fromId("arcgis-nova"),
        ]
    });
    //Add widget to the top right corner of the view
    view.ui.add(basemapGallery, {
        position: "top-right"
    });

    // Wait for the map view to load
    view.when(function () {
        console.log("Map and View are ready");
    }, function (error) {
        console.error("The view failed to load: ", error);
    });
});
