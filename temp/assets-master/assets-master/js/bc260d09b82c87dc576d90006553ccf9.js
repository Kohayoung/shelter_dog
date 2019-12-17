(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('红旗区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410702","properties":{"name":"红旗区","cp":[113.875245,35.30385],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAACA@AAC@AACC@@EDBBABEECDCACF@@B@@D@@AB@@BBOHME@@GCEBA@EADEA@@@EJ@@KBAB@BABA@ADA@ABEJ@B@@ELCHABC@GAAF@@ENB@@LBBAFEL@J@F@B@B@D@B@D@BE@C@@@W@@J@@@B@D@D@@@F@H@F@D@D@B@@@F@@@B@@@BBB@@@D@@@B@D@D@@B@@CHCB@@@B@@@B@DBB@BADAD@@@FAB@BDB@D@FAB@@@B@@@BBB@DCB@D@B@BB@B@BB@B@B@DB@DBDB@@A@ADA@@@AD@VA@G@@N@@@@BH@@D@@D@@BB@@CDA@A@BB@DAD@L@@GB@BBB@BFFABD@@HA@@B@@BD@@BB@@@BBA@@BBDBHBB@@BBDBBBBBB@BHF@B@H@@BB@F@BBBABFB@BDFAFH@BB@AB@@BB@ADBLC@@DN@@D@B@BBB@DDFA@BHA@@BDD@DF@@BC@CFHF@HG@B@@DA@A@@@AB@AABC@ACG@AA@AA@@C@EAB@CIA@B@ACB@HABE@A@@DELAA@@IBB@@@@@A@@B@@A@@BA@@H@@@DA@B@@DA@@@@DAAA@@AAB@RGB@FB@EB@BB@ABB@@D@@@D@@@BB@@DAHBJCDBABDFD@@AD@@i@EMCQEAE@AA@@AA@@AA@B@AACA@@@FA@AC@BAB@@A@@BOCE@CBA@CGCBAA@@@@IBA@CEKFAABAAABAAAA@@@A@@AA@BB@@EE@@@@C@AAB@@ACBA@@BEHAC@@A@@BBDA@BDA@ACA@BD@BCCA@@@CBBBA@@@AB@BCBA@CB@CA@CBIBA@@A@@@BA@ID@CID@@@AAB@AA@ACEBCB@D@@AA@A@@A@@C@EB@AMB@@CFD@AAEB@AE@A@@FAAE@@@@A@@CC@@E@@A@@CA@@@@@@A@CAB@G@CA@@I@@CBACE@CB@A@ABABBD@@AH@@A@A@@@BE@@AFA@@BA@AF@@CE@ACC@GCBAACAAB@A@@AA@@@@@C@@@A@CBA@A@AAAA"],"encodeOffsets":[[116703,36054]]}}],"UTF8Encoding":true});}));