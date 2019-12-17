(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('沈阳市铁西区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"210106","properties":{"name":"铁西区","cp":[123.333968,41.820807],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@A@ABCBCB@@@@@@AA@@@@@@AA@AAAAA@ICEAIAOCE@@A@@BAB@@A@@@AB@@AB@@@BA@@@AA@@@C@A@AA@@@A@@AAAAAA@AAC@CAA@ACAABC@EFA@@B@@@@@B@@@B@@@B@@A@A@A@@@AACA@@@A@@@@BA@A@AB@@AB@B@@A@@BA@A@@AC@A@C@ABC@AACKGECGGAC@AA@AAECEA@C@@BA@@BCAC@@@AAC@@AAA@A@AAAA@A@@DC@A@@@@AA@A@@@AA@@@A@A@@A@A@A@@@AA@@AAA@@@AB@@@B@B@@ABA@@AA@@CAC@AA@@ACA@CACAA@C@GAA@AAA@AAC@E@I@CAEAA@@CA@AAAAAC@A@ABA@@ACCC@AAC@AAAAE@A@AA@AAAAACAC@A@A@A@@@AAAA@AA@@@AAAA@AA@@@@AAA@@A@@AAA@@CA@AAA@CAC@@@C@@@A@A@A@@BEFCBAB@DABC@ABCAKAGCA@GA[@DFHBBB@P@JBj@F@Jg@YLQHqLUEBDR\\HL@NBFDnLD\\JVHoTeMGHpNTCVClZp^fA@@@@@BBBB@@@@ADAB@B@@@@@@@@@@BA@@@@B@@@@@DDBAB@@@@@BB@@@@A@@@@@@BBBBA@@@@@@B@@B@@@@@@@B@@@@@BDFBB@@@B@@B@@@@@@@@@@A@@AA@@@@@@B@@@@@@@@BBB@@BB@B@@B@BB@B@@@@BB@@@@@@@@@@C@A@A@@@@@@@BFBB@B@BBB@@@@A@@@CBA@A@@@AB@@B@BB@@@@@@@@BA@B@@B@@@@@AB@@@@DBCD@BA@AB@@A@@B@@A@ABABCBABA@@@@@@BAB@@@@BB@@BBB@DBDBB@D@H@F@B@B@H@@@B@B@B@F@B@DBB@B@B@@AB@B@@@@@B@@B@@B@LAD@B@BD@@@@@@DABABAFAB@F@H@D@@@B@@@B@D@D@BD@B@@B@B@BADA@@@@F@D@ABDDB@B@B@@@@@BA@@@@B@@@@@@A@@B@@@@A@@@@@@BA@@D@@@@@@@@@@AA@@A@@AA@@@@@A@@@A@@@@DC@A@@@@BA@@@BB@B@@@D@B@D@FAB@@@B@BD@@@@@@B@@@@A@@H@BD@BB@@@@@BA@@B@@@@@B@BABAB@B@@AB@BBD@@@@@@@@@@B@@@@JHFF@@@@@@A@@@A@@@@B@@FB@B@@@@A@CBAB@@A@@@@B@@@@@@@BDDBB@@@BA@@BA@@@@B@@@@@BB@@B@B@B@@@@@@B@@A@@B@@@@@@@A@@@@@@@@@@@@@BAA@@C@@B@B@B@F@@@BA@@@@@@D@B@@@@B@@@@@@A@A@@B@@@@@@@BBB@@@@@@D@B@@@@@@@@B@BBBBDDF@@@@@@A@@@@@@@AD@@@@@@BBB@@@B@@@D@@@@@@D@@@@@@A@@A@@A@@@A@A@A@AB@@EBFDDBFBDBDBDBDBB@DBJBFBH@B@BBFBB@B@B@DBB@B@B@@DB@D@B@@@@DD@@BB@@BB@@@D@D@HA@@@B@@BD@B@@@@D@@@@BB@@B@@@@BBB@@@BBDA@@B@@@@DBBFDFBB@BBD@BBB@B@DBD@B@B@D@F@JBF@D@D@B@B@@@@@BAB@@@B@@A@AAA@A@A@@@A@@@@@A@@@A@A@@@@BABCBA@A@ABA@@D@@@@@@@@@D@B@@@@@@@@@H@H@D@B@J@D@FAB@F@@@@@D@B@B@DAB@@@B@B@B@B@BAB@B@@@B@@@@@@@@@AB@@A@@B@BA@@B@@@@@B@@@B@B@B@@@@@D@B@@@@@@@B@@@@@F@B@@@@@D@B@@@D@B@B@B@@@B@D@B@D@B@D@@@B@D@B@@@B@@@D@@@B@B@B@@@B@D@@@F@D@F@B@@@@@B@BB@B@@@BBB@B@D@DBD@F@D@D@B@@@B@B@@AB@BABA@@B@@@@@@@B@FELE@@@AB@B@BA@@@@@@BAB@@@@AB@@@B@@@@@@AB@B@B@B@@AH@BAH@@AB@@@B@FA@@D@HABA@@D@@@B@@@DAB@B@B@BAFA@@B@B@DAB@@@@@B@@@@A@@@@BA@@@@@@@@@@@A@@@AB@@A@@@@@@@@@@@@@A@@@@@@@@@A@@@@B@@AA@@@@A@@@@AAAA@AA@@AA@@@@AAA@@@@@@AACC@A@@@@@@AAAA@@@AAA@@ACAC@@A@@@AC@@CC@AA@@A@@@@AA@@@AAC@@AA@C@@AA@AAC@AA@@@@A@AAA@CA@@@@@@@@A@@AA@A@AA@@@@@@B@@@@@@@@@B@@@@A@@@@BA@@@@@A@@@A@A@A@@BA@@@@@C@C@CBA@@@C@@@A@A@ABA@@@A@@@A@@@ABA@A@@@ABC@@BEBC@@@CB@@CB@@A@CBCBGBA@@@A@ACCC@@A@@A@@A@A@@@CA@@AA@@A@@@AAEC@@@@CA@@CAA@@@A@C@@@AAC@A@@@EAE@A@A@@@AA@@AAA@A@@@@@@@A@A@CA@C@@BA@@@@BC@A@ABABA@@@ABADEDEBABE@@DC@ADE@@BCBCBA@ABEDCBE@@BECAK@QDIBEBG@A@A@AA@@@ABCBEHGHIDG@@@EAACCE@MASEG@KBMDMF@@CBG@CACC@A@ACCC@@@@@AC@@AA@@@@AAA@@@@@@@@A@@A@@@@@@@A@@@@A@@@A@@AAEBCBE@C@C@A@CA@@A@A@@@A@@A@@AA@AACAIAAACAA@C@A@A@A@@@@A@A@C@@@A@@@@@@AB@BAA@@@@@AB@@@A@@@@B@D@@@@A@@@@B@@A@@@@@@@@A@@@CBA@A@@@C@A@CBABCAAAA@AAA@A@@@A@EAC@CAA@@A@@AA@@@A@@@@BAB@@AB@B@B@B@@@@A@A@A@@@@@ABABA@@@@@AA@@A@@A@@@@A@@A@A@C@@@CBA@@@ABA@@BAB@DA@@B@@@@AA@@@@@@A@@@@BAB@@@@B@@@@@@@@BABAFABABA@@@A@A@A@A@EAAAAAAA"],"encodeOffsets":[[126106,42655]]}}],"UTF8Encoding":true});}));