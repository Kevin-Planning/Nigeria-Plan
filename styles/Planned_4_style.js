var size = 0;
var placement = 'point';
function categories_Planned_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '30 Racks':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(250,139,57,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(250,176,124,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(250,176,124,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '24 Racks':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(72,123,182,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '12 Racks':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(219,30,42,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6 Racks':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.6 + size, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Planned_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("SS Size");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Planned_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
