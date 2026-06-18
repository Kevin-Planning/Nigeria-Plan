var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google (Satellite)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_ConnectivityStations_1 = new ol.format.GeoJSON();
var features_ConnectivityStations_1 = format_ConnectivityStations_1.readFeatures(json_ConnectivityStations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConnectivityStations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConnectivityStations_1.addFeatures(features_ConnectivityStations_1);
var lyr_ConnectivityStations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConnectivityStations_1, 
                style: style_ConnectivityStations_1,
                popuplayertitle: 'Connectivity Stations',
                interactive: true,
                title: '<img src="styles/legend/ConnectivityStations_1.png" /> Connectivity Stations'
            });
var format_NigerianMappingMAXNONMAX2_2 = new ol.format.GeoJSON();
var features_NigerianMappingMAXNONMAX2_2 = format_NigerianMappingMAXNONMAX2_2.readFeatures(json_NigerianMappingMAXNONMAX2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NigerianMappingMAXNONMAX2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NigerianMappingMAXNONMAX2_2.addFeatures(features_NigerianMappingMAXNONMAX2_2);
var lyr_NigerianMappingMAXNONMAX2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NigerianMappingMAXNONMAX2_2, 
                style: style_NigerianMappingMAXNONMAX2_2,
                popuplayertitle: 'Nigerian Mapping-MAX & NON MAX (2)',
                interactive: true,
    title: 'Nigerian Mapping-MAX & NON MAX (2)<br />\
    <img src="styles/legend/NigerianMappingMAXNONMAX2_2_0.png" /> Active<br />\
    <img src="styles/legend/NigerianMappingMAXNONMAX2_2_1.png" /> Charging Hub<br />\
    <img src="styles/legend/NigerianMappingMAXNONMAX2_2_2.png" /> Planned<br />\
    <img src="styles/legend/NigerianMappingMAXNONMAX2_2_3.png" /> WIP<br />' });
var format_Maxcluster_3 = new ol.format.GeoJSON();
var features_Maxcluster_3 = format_Maxcluster_3.readFeatures(json_Maxcluster_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maxcluster_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maxcluster_3.addFeatures(features_Maxcluster_3);
var lyr_Maxcluster_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maxcluster_3, 
                style: style_Maxcluster_3,
                popuplayertitle: 'Max cluster',
                interactive: true,
                title: '<img src="styles/legend/Maxcluster_3.png" /> Max cluster'
            });
var format_Planned_4 = new ol.format.GeoJSON();
var features_Planned_4 = format_Planned_4.readFeatures(json_Planned_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planned_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planned_4.addFeatures(features_Planned_4);
var lyr_Planned_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planned_4, 
                style: style_Planned_4,
                popuplayertitle: 'Planned',
                interactive: true,
    title: 'Planned<br />\
    <img src="styles/legend/Planned_4_0.png" /> 30 Racks<br />\
    <img src="styles/legend/Planned_4_1.png" /> 24 Racks<br />\
    <img src="styles/legend/Planned_4_2.png" /> 12 Racks<br />\
    <img src="styles/legend/Planned_4_3.png" /> 6 Racks<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_ConnectivityStations_1.setVisible(true);lyr_NigerianMappingMAXNONMAX2_2.setVisible(true);lyr_Maxcluster_3.setVisible(true);lyr_Planned_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ConnectivityStations_1,lyr_NigerianMappingMAXNONMAX2_2,lyr_Maxcluster_3,lyr_Planned_4];
lyr_ConnectivityStations_1.set('fieldAliases', {'id': 'id', 'SS Name': 'SS Name', });
lyr_NigerianMappingMAXNONMAX2_2.set('fieldAliases', {'fid': 'fid', 'S/N': 'S/N', 'State': 'State', 'Location': 'Location', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', });
lyr_Maxcluster_3.set('fieldAliases', {'Planned Sites': 'Planned Sites', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Planned_4.set('fieldAliases', {'id': 'id', 'SS Size': 'SS Size', 'Lat': 'Lat', 'Long': 'Long', });
lyr_ConnectivityStations_1.set('fieldImages', {'id': 'TextEdit', 'SS Name': 'Range', });
lyr_NigerianMappingMAXNONMAX2_2.set('fieldImages', {'fid': '', 'S/N': 'Range', 'State': 'TextEdit', 'Location': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', });
lyr_Maxcluster_3.set('fieldImages', {'Planned Sites': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Planned_4.set('fieldImages', {'id': 'TextEdit', 'SS Size': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_ConnectivityStations_1.set('fieldLabels', {'id': 'no label', 'SS Name': 'no label', });
lyr_NigerianMappingMAXNONMAX2_2.set('fieldLabels', {'fid': 'no label', 'S/N': 'no label', 'State': 'no label', 'Location': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Status': 'inline label - always visible', });
lyr_Maxcluster_3.set('fieldLabels', {'Planned Sites': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Planned_4.set('fieldLabels', {'id': 'no label', 'SS Size': 'inline label - always visible', 'Lat': 'no label', 'Long': 'no label', });
lyr_Planned_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});