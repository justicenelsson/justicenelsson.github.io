var wms_layers = [];


        var lyr_BingAerial_0 = new ol.layer.Tile({
            'title': 'Bing Aerial',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });
var format_boundary_1 = new ol.format.GeoJSON();
var features_boundary_1 = format_boundary_1.readFeatures(json_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_1.addFeatures(features_boundary_1);
var lyr_boundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundary_1, 
                style: style_boundary_1,
                interactive: true,
                title: '<img src="styles/legend/boundary_1.png" /> boundary'
            });
var format_BUILDINGS_2 = new ol.format.GeoJSON();
var features_BUILDINGS_2 = format_BUILDINGS_2.readFeatures(json_BUILDINGS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDINGS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDINGS_2.addFeatures(features_BUILDINGS_2);
var lyr_BUILDINGS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUILDINGS_2, 
                style: style_BUILDINGS_2,
                interactive: true,
    title: 'BUILDINGS<br />\
    <img src="styles/legend/BUILDINGS_2_0.png" /> Bungalow<br />\
    <img src="styles/legend/BUILDINGS_2_1.png" /> Galery_Deck<br />\
    <img src="styles/legend/BUILDINGS_2_2.png" /> One_Deck<br />\
    <img src="styles/legend/BUILDINGS_2_3.png" /> Three_Deck<br />\
    <img src="styles/legend/BUILDINGS_2_4.png" /> Two_Deck<br />'
        });
var format_Roads_3 = new ol.format.GeoJSON();
var features_Roads_3 = format_Roads_3.readFeatures(json_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_3.addFeatures(features_Roads_3);
var lyr_Roads_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_3, 
                style: style_Roads_3,
                interactive: true,
                title: '<img src="styles/legend/Roads_3.png" /> Roads'
            });
var format_field_4 = new ol.format.GeoJSON();
var features_field_4 = format_field_4.readFeatures(json_field_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_field_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_field_4.addFeatures(features_field_4);
var lyr_field_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_field_4, 
                style: style_field_4,
                interactive: true,
                title: '<img src="styles/legend/field_4.png" /> field'
            });

lyr_BingAerial_0.setVisible(true);lyr_boundary_1.setVisible(true);lyr_BUILDINGS_2.setVisible(true);lyr_Roads_3.setVisible(true);lyr_field_4.setVisible(true);
var layersList = [lyr_BingAerial_0,lyr_boundary_1,lyr_BUILDINGS_2,lyr_Roads_3,lyr_field_4];
lyr_boundary_1.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', 'Name': 'Name', });
lyr_BUILDINGS_2.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Type': 'Type', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_Roads_3.set('fieldAliases', {'id': 'id', 'Roads': 'Roads', });
lyr_field_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_boundary_1.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', 'Name': 'TextEdit', });
lyr_BUILDINGS_2.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_Roads_3.set('fieldImages', {'id': 'TextEdit', 'Roads': 'TextEdit', });
lyr_field_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_boundary_1.set('fieldLabels', {'id': 'no label', 'ID_1': 'no label', 'Name': 'no label', });
lyr_BUILDINGS_2.set('fieldLabels', {'ID': 'no label', 'Name': 'no label', 'Type': 'no label', 'Easting': 'no label', 'Northing': 'no label', });
lyr_Roads_3.set('fieldLabels', {'id': 'no label', 'Roads': 'no label', });
lyr_field_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_field_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});