(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('上思县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"450621","properties":{"name":"上思县","cp":[107.983627,22.153671],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@AA@@AA@@CAAA@BA@A@ABC@CA@@@B@BA@@D@DAD@@BB@@@BA@@@A@BBA@@@@B@B@@@@B@@@@BA@ADCBAD@B@@BB@@BB@B@@@BAB@@@B@FA@@@@BA@@@@B@@@B@@AB@@AFA@@D@@@@@B@@@B@BB@@@BBBA@DB@BB@@@BBB@B@B@@@@@@B@BBB@@B@BB@BDBD@B@@BBB@@@BB@@B@@@BB@@BBB@B@@@BD@B@BBBBB@@@@@B@@@BCB@BA@A@@@C@@@A@@B@@A@@BA@ABABA@@@@B@B@@ABA@A@C@@@C@@@C@@@ABAB@@@B@DBB@@AB@B@@BBBB@BB@@BBBAB@B@@@BB@B@@@@B@@@BB@B@@@@B@B@B@BA@A@@B@@@@AB@@@BB@@BB@@@@B@B@B@@BBB@BBF@A@A@@@@BBDBB@@FBBDB@@BDBBBBBB@BB@@BB@B@B@B@@@B@@AB@@@@AB@@AB@B@@@BABBBA@@B@@@@@BAB@@B@BB@@@BBB@B@BA@@BAB@@C@@@@@ABA@AB@@ABA@A@@@@@B@@@BB@@@B@@A@@B@@B@@@AB@@@@AB@@@@@@@@@D@@@@AB@@@B@@@@@@A@A@@BA@@B@@@@@@@@@@A@@@@@@@@@A@@@@BAB@@@@AB@@@@@@@@EB@@@@A@@@A@A@@@@@AA@@@@CF@BA@@B@@@BBDBB@D@BDF@BB@@BB@@B@D@@BBBBB@FDBAB@@@@BB@@B@@FF@B@@@@@BA@AB@BA@ABAB@@AB@B@@BD@@BB@@FF@BB@@@@BAD@@ABAD@B@BBB@B@@B@B@B@DA@@@AFC@AD@@BB@@B@BBDBHB@BBDABA@@L@BBBDABA@EDCBAB@D@D@B@@ABABAD@BBD@@BBB@DDDBB@@B@@ABADEB@@@BABB@HBB@DBB@B@BB@B@@@@ABCBCBAD@@@B@@B@D@@BD@@@B@BBBF@@BDB@BBDBDBBBB@@@BB@B@B@B@B@BDB@@@@DC@@B@@@BB@D@FADBBBB@@@@B@DB@@@BB@BBB@DBB@B@B@B@BB@B@@CF@B@@@BB@DBDBB@DD@@BB@BAF@B@B@BDFBB@@D@D@@A@@B@DBHBDD@@@BEFEF@BBBDBDB@@D@FBB@B@@@DBB@@@@A@A@CBA@ADAB@B@@BBB@@@BBFCDCHCDABAB@D@DBB@@@@B@B@B@FED@B@BBB@@B@@CBCBBDDL@@B@D@HAB@B@@@BBBBBB@@DJBDBDBDDBDDBBBBAB@@AB@@CB@AA@ECA@@@A@@@EDEFCDEF@@@@@BBB@B@D@B@@AF@@ADA@AB@@@@@B@B@@A@@B@@@@@@@B@@@@@@@@@B@@@@@@@@B@@@@B@@@@@B@@@@B@@B@@@@BBB@@@D@H@DF@B@B@BB@@@@@BBAH@@ABAB@@EBC@CAAA@@CC@@@@@@AB@@@@@B@@@AA@@@@@AAA@@B@@@@@@@@@BA@@@@B@@@B@@AAA@BB@@A@@BA@@BA@A@@@AB@@ABA@@@@@@B@@@BCB@B@@@BBB@@@B@B@BAB@B@B@BA@AB@B@B@B@@@B@@AB@B@B@@@@A@@B@@@@AD@@@@AB@@B@@BABA@BB@BA@@@@@@D@BB@@BA@@B@@@BAB@@@BAB@@BBAB@B@@ABB@AB@B@@@BB@@BA@@BADA@@BBB@@A@@BAB@@@B@BBBCDB@BFBB@@BB@@BA@@B@@@BBDABA@@BABADAB@D@B@BABBBAB@DBBADADB@ADABA@A@ABAB@@BB@BBB@@@D@DAB@B@BAFDDDH@HDF@F@HDFBD@DBD@@@D@B@FBD@J@B@@@B@B@BAB@BAB@BAD@BAB@BAB@B@BDBBDBBB@B@BAD@B@BBDB@@@@BB@@@BB@BBA@@B@B@BBDBB@@@@@B@@BD@D@@@DA@ADA@@@@BDB@B@B@@@BBBBF@DA@@HDB@B@B@@@D@DAB@B@B@FBHAB@DA@@B@B@D@BBB@D@@@B@BB@B@@D@BAB@@@B@BBB@@BB@BD@B@BBB@BD@HBBBDB@BB@B@DBB@B@@@B@@ABBBGHA@ADAD@D@B@B@F@B@B@B@B@B@BABBB@DB@@D@DA@@BA@@@AB@B@@@@@B@BAB@B@@AB@B@B@@@B@B@BBB@@@D@D@D@B@@@D@B@BBBD@BBB@@FB@BBB@@B@BD@@@@@BBAB@@@D@@@@@@AB@DABABBB@B@@@BAB@@@@A@A@A@@@@@AA@@A@@@@BA@@@A@A@@AA@@@@B@BBB@@@@@B@@@@@B@@@B@B@FB@BD@@B@@BBF@@@@BB@@B@@@BAB@@BB@@@B@B@@BB@D@@@B@B@@@BABBBAB@BFDDBBB@@@@@B@D@@BB@@@@AB@B@BA@@@@DDBBB@@@@BDABB@@B@@@@BB@@B@@BA@B@BBHBHDBBB@BAB@B@BAB@@ADBB@DA@A@AB@@ADAD@N@LB@@C@C@@@ABA@@AC@@@@BA@AB@@@B@BA@@D@@AB@B@B@@AB@B@BA@@BA@AB@B@@@BAB@BAD@B@@@@@BB@@@B@@@@BBD@@@BB@H@@B@@BBB@@BB@@BB@@BBBBB@B@@DD@B@@BB@@@@@B@@@B@A@@B@@A@BB@BB@@@@DBBBB@BAB@@BBB@@BBB@@@BB@@B@@B@@@BB@@@@@@@@A@@@ABB@@B@@@B@BB@@B@@B@@B@@B@@@@BBB@D@@@B@B@@@@B@@@@@B@@@@@@ABAB@B@@@@@@ABA@@@@@BBBB@@@@@B@B@@A@C@@@@@@B@BB@A@@@A@@AA@@@@@@@@B@@@B@@@@@B@@AB@@@@@@B@B@@@@@@@AB@@@B@@B@B@@@@@A@@BC@BB@@BBBB@@@D@@BBDBBB@@B@@@BB@BBB@@BB@@B@B@D@BB@@@B@@B@B@B@B@@@@B@@@B@@@B@BD@B@@@BBB@@BB@@@@B@B@@@BDA@@B@BAB@@B@@D@DA@@B@B@@@DBB@DAB@@@BAB@@@BABCB@@@BBFDBBD@BD@BBBB@DB@BDB@B@B@B@B@@@@BB@@BDBB@@@@@B@@B@@BBA@@D@@@B@BBBD@@@B@B@@@BABBB@@B@@@D@DBB@@@BB@AD@D@@ABA@CBAJD@C@@B@B@@@B@BA@@BAB@@B@@@B@@@@@B@@@@@@A@AB@@A@@B@@@B@@BBB@@B@B@@B@@BBABBDBB@BB@BB@DBB@@@@B@BBB@@BB@@@C@@B@BF@@@@B@B@DB@AD@@BD@@@B@B@B@@@@A@@B@@@B@BC@A@C@A@@@AA@@@A@@A@A@@B@B@@A@@@A@@@@@ABABA@@@A@AB@@ABBB@B@B@D@@@B@B@@@@BB@@@D@@@@@@A@A@@@@D@BAB@@A@@@@B@B@@@BA@ABA@@@AB@@A@AB@B@@A@@@@@@B@@@BB@@B@B@@A@@B@DADABAB@@A@@@A@A@AAA@@AC@@@A@@A@@@BA@@@AAA@A@@BAAABAB@BAB@@A@@AA@A@AA@@@@C@C@@@AB@@ABA@@@@ACAC@AA@@@@@B@B@BA@@@A@A@ABA@A@@@@@@BAB@@@B@B@D@@@B@B@AACA@@AA@@BA@@B@@@@@B@B@BA@AB@@C@A@@BA@@BC@@@AB@@AAABA@@@@B@@@@@D@B@@@@B@@B@B@BBBABBDAB@B@@@B@DA@@@A@@@@BAB@@@BA@@B@@@D@@@BA@@@A@A@@BCBAB@B@@@BA@@@ABA@@B@B@D@@BB@@AB@BBB@@@@@@AB@@ABABABA@@@BBB@@BB@@BB@BB@@@@B@@B@@BBDBBB@@BB@@@BB@B@@B@@@@BB@@B@@B@@@@BDB@B@@DB@@B@@ABABA@AB@@@DADA@BB@@BB@@DBBDBB@B@@@BA@@@AB@@A@@@AB@@@@A@@B@@@@BB@@@@@@@BBBB@@@ABAB@@@BAB@@@B@@AB@BA@ABA@AA@AA@@@AA@@@@A@@B@@A@@@ACE@ABAAA@@BA@@A@@A@AB@AA@@@ABA@ADA@C@@@AD@B@@B@A@@B@B@@@BAB@BA@AB@B@BA@@@@BA@A@@CACA@@@AA@@@BA@@@AB@@A@@AA@ABA@ABA@@@A@A@AB@BC@@B@BA@@BAB@BA@@@A@A@@B@@@B@@B@D@@BB@@@@BA@@@@B@BED@BA@@@@@C@A@A@@@@@ABA@A@@B@@@BBBB@@@BD@@@BBB@B@@@@A@A@A@@@@@@D@BCB@BAB@@A@@@@BA@@BB@@B@BABB@@BA@@@A@AAA@A@@BA@A@A@C@A@@@A@@@@A@@@@@A@@A@@@@@@A@@BAA@@@@@@@@E@@@@@@@@@@AA@@@@AA@@@A@@@@AA@@@@@A@@@AA@@A@@@@AA@AA@@@@A@@AA@@@A@@@A@A@AA@@@@A@@@A@A@@@@@AA@@A@@@@@@@A@@A@@@A@@@AAC@@@@A@A@AAA@A@ABA@AAA@@@AA@@@@A@@@@A@@@@ABA@A@@@AA@@A@@@AAA@AAA@AC@@A@@@A@@@@@@@AA@@AA@@@@B@@A@@@@AAAAAA@@@@@A@@@A@@A@A@@@A@@@ABA@AAA@AAA@AA@@@AA@A@@@A@A@A@@@A@@AA@@A@@AC@A@@B@@AB@@@B@@@@@@@BA@A@@@A@@A@@@CCA@@@A@@@CC@@A@@@AA@@A@A@@@AA@@@@A@@@@@A@@@A@@B@@@@A@A@@@AAA@@@@AAA@@@@@A@AA@@@@A@@@A@C@@AA@A@@AA@@@AA@@A@@@A@@@AA@A@@@@@C@@AAAAA@@@@BA@@@@@ABA@@@C@A@@BAB@@AB@BAB@@@B@@@@@BABA@A@@@@AAA@@AB@@ABA@@B@B@@ABB@@B@@A@@@A@A@A@A@@BBB@@@@A@@@A@@@@BA@@@@@AAA@C@@@A@A@@A@@@@A@A@AA@@@BADA@@@@B@B@@@B@@A@@B@B@@@B@BAB@@@B@@@B@B@@@B@B@B@@A@@B@@@@@B@@@B@@@@AAABC@C@AAA@@A@@@@A@@@A@@@@AAAA@@@A@AA@@ACAAA@@C@A@@@@B@@A@CBA@A@@@@B@@AB@@B@@B@@CBAB@@@@@@A@@AAAAE@A@@@@B@@@@@BB@AB@@@@@B@@@BB@@@AA@@A@A@CAAB@@@@AB@@CA@@@@A@@@A@@AA@AB@B@BABA@@BA@A@@AA@A@AA@@@AAA@@@A@@@AA@A@@@C@@@A@@@A@@BAB@BA@@@@B@@@B@@A@@BA@A@@@A@@@A@@@@@A@CB@@@B@@@BA@@B@@@B@BAB@@@@@B@BAB@@@BA@A@@F@@@B@BCB@@@@@B@B@@@@@@@B@B@@@BAA@@@@AAA@AAAAA@@A@A@AAA@@@A@@@AAA@@AA@@A@@AAA@BACA@@A@@@AA@@@@@C@@CA@@@ACAA@AE@A@@@A@@@@@A@@@@A@A@@@@@@A@AB@@A@ABA@AB@@A@CB@B@@ABA@A@@@@@@AA@@@@A@@AB@@A@AA@AA@@@@@A@A@AA@@@@A@@@@@@@A@@AA@@A@@@A@@@@A@@@A@@@AA@@@@@AA@@@@@AA@A@A@AC@@A@A@@A@@@@@A@A@@AAAA@AA@@A@A@@@A@A@A@@AA@AA@A@@A@@@@@A@@@@@A@@BA@A@@CAAAA@@@@@AAAA@A@@A@@@@@@B@@@BC@AB@@A@A@E@@@A@@B@@@B@@@B@BA@@@@@BB@BA@CBA@ABAB@@AB@@@B@@BBC@@AAC@A@AAAA@AA@@@A@@A@@AA@@@AA@@@A@@AA@AA@AA@@@@@AA@@AA@@@@ABCA@@AAA@@AA@AA@AA@@CC@@AA@AA@A@CBA@CC@@CAAAABAAABA@A@@@A@@@A@CAA@AA@A@@AA@@@A@@AAAA@BA@AAAA@A@@AA@@@AC@AA@BAA@AA@@@@@@C@@CC@@A@AA@@AAA@@AAB@@A@A@@AC@@@@AAA@AC@A@@AA@@ACAABAAAB@AACAA@@@C@@@CC@CB@@AAAA@@A@AA@@A@AA@AA@@A@AA@A@@AA@@@A@AA@A@CA@AAA@@AAAA@@A@@AAAAA@@@CEE@C@@@A@AA@BAAA@@@@AA@CAAAAAAAAB@@AAA@@@CD@@AAA@C@A@A@EC@@A@AA@BCAC@A@ABCA@B@CA@AA@AA@@CAAABC@AA@AC@@@A@AA@@C@A@@@A@AA@AA@BA@@C@@@AA@@ABCB@@@@@@AA@@@@@@A@@@ABA@@@@@@BA@@@@B@@A@@@@@A@A@@@@@A@@@@A@@A@@@A@AB@@A@A@AA@@A@@AA@A@@AA@@AA@@@@@A@A@A@@@@@@@A@@@A@AA@BA@AAA@@@@BA@@AAC@@A@@AAC@@AC@AA@A@CAABAAA@C@AA@@ABC@A@ABA@AAABCA@@A@@@A@A@EBA@A@AA@@A@@A@@A@@@G@AA@@A@A@@A@@A@@@A@ABAAA@ECC@@@A@AA@@@@@AC@ABA@@AA@A@AA@A@@A@A@@@A@A@@A@@A@AA@@AAA@@A@AAAA@@AC@@@AAA@E@@@AA@@EBC@C@AB@@@AA@@A@@@A@@@@@A@AB@@C@ABA@CBEBC@A@A@@@C@ADC@ABE@ABCA@@ABAAA@AC@A@AAABA@@@A@AAIEA@@@A@@AAAA@@@A@@@A@A@AB@@A@A@AB@@G@A@@A@@CBA@@AA@AAAAA@@@CAA@@A@@@@A@@@AACEA@A@ACE@@AA@@AA@A@@AEACB@AA@AAA@A@CAAAABC@@BA@@ACBAAA@@A@@@A@AA@A@ABCAABCBC@A@@@C@CBEBAB@@A@@B@@@@AB@BA@A@A@@@AAECA@@A@@A@@@@AA@@BE@A@A@AA@@AAC@CBAACBA@CB@@CBA@EB@AA@@@ABC@@AA@AACB@@ABAAA@@C@@@@CA@A@A@ABCCA@@@AA@AB@CA@@@@A@@CACBAA@@A@A@AA@@A@AAABAC@AC@EA@A@A@@AAAB@ACDA@A@@@CAA@A@AA@@CDA@ABACA@@@A@A@@@@@AA@A@@@A@@@A@@A@CAAAAAA@A@@@A@@AAA@@B@@EA@A@@A@@AA@@@C@A@@@ADC@@B@@ADCD@DG@AAAAAAC@A@AAAEACCA@E@A@ACEAA@AAA@C@C@A@AAC@CBAAAB@@CBA@A@AAEC@@C@A@@BAAAAEEA@AA@@GC@@A@A@A@AAAAEBCAC@CA@@@B@@@BCDA@@@@BGHA@ABAB@BC@CD@@AAC@C@C@AAA@AAABAA@A@A@A@@A@CAEA@AC@@A@AAAC@@AA@@AC@A@@BA@AA@BCAAAAAC@C@AAB@ACA@AAAAA@A@CCA@@@@AA@A@@@A@@AA@MACA@@@AA@AB@@A@@@A@A@@@C@@A"],"encodeOffsets":[[110154,22250]]}}],"UTF8Encoding":true});}));