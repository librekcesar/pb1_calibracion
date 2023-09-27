var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_pb1_volumen_zipcod_1 = new ol.format.GeoJSON();
var features_pb1_volumen_zipcod_1 = format_pb1_volumen_zipcod_1.readFeatures(json_pb1_volumen_zipcod_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pb1_volumen_zipcod_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pb1_volumen_zipcod_1.addFeatures(features_pb1_volumen_zipcod_1);
var lyr_pb1_volumen_zipcod_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pb1_volumen_zipcod_1, 
                style: style_pb1_volumen_zipcod_1,
                interactive: false,
                title: '<img src="styles/legend/pb1_volumen_zipcod_1.png" /> pb1_volumen_zipcod'
            });
var format_pb1_zonas_volumen_2 = new ol.format.GeoJSON();
var features_pb1_zonas_volumen_2 = format_pb1_zonas_volumen_2.readFeatures(json_pb1_zonas_volumen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pb1_zonas_volumen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pb1_zonas_volumen_2.addFeatures(features_pb1_zonas_volumen_2);
var lyr_pb1_zonas_volumen_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pb1_zonas_volumen_2, 
                style: style_pb1_zonas_volumen_2,
                interactive: true,
                title: '<img src="styles/legend/pb1_zonas_volumen_2.png" /> pb1_zonas_volumen'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_pb1_volumen_zipcod_1.setVisible(true);lyr_pb1_zonas_volumen_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_pb1_volumen_zipcod_1,lyr_pb1_zonas_volumen_2];
lyr_pb1_volumen_zipcod_1.set('fieldAliases', {'zipcodes_vol_pb_cda_zipcode': 'zipcodes_vol_pb_cda_zipcode', 'zipcodes_vol_pb_tag': 'zipcodes_vol_pb_tag', });
lyr_pb1_zonas_volumen_2.set('fieldAliases', {'zonificacion': 'zonificacion', 'volumen': 'volumen', });
lyr_pb1_volumen_zipcod_1.set('fieldImages', {'zipcodes_vol_pb_cda_zipcode': 'TextEdit', 'zipcodes_vol_pb_tag': 'TextEdit', });
lyr_pb1_zonas_volumen_2.set('fieldImages', {'zonificacion': 'TextEdit', 'volumen': 'TextEdit', });
lyr_pb1_volumen_zipcod_1.set('fieldLabels', {'zipcodes_vol_pb_cda_zipcode': 'no label', 'zipcodes_vol_pb_tag': 'no label', });
lyr_pb1_zonas_volumen_2.set('fieldLabels', {'zonificacion': 'header label', 'volumen': 'header label', });
lyr_pb1_zonas_volumen_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});