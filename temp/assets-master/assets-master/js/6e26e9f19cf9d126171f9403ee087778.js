(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('望德堂区', {"type":"FeatureCollection","features":[{"id":"820003","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@EGOB@DNLHE@C"],"encodeOffsets":[[116285,22729]]},"properties":{"cp":[113.550252,22.193791],"name":"望德堂区","childNum":1}}],"UTF8Encoding":true});}));