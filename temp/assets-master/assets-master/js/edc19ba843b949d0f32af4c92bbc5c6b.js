(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('清原满族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"210423","properties":{"name":"清原满族自治县","cp":[124.924083,42.100538],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@@B@@A@A@EBA@AB@@@@AB@@@B@BABA@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@B@@@@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@B@@@A@@BA@CBA@@BABCB@DAB@BAD@BAB@B@B@@@@@B@@@@BB@@@@@BA@@B@@@@@@AB@@@@@@AA@@A@@@@@@@A@@B@B@B@D@B@@@@@@A@@@CAA@@A@@@@@@@A@AAAB@@@A@@@@@@@@@@AA@@@A@@AA@@@A@@@AA@@@@A@@A@@A@@CAA@AAAAACA@@AA@A@A@A@@@A@A@@AA@@A@@@@AA@@@A@A@@@AB@@@@A@@@@@A@@@@B@@A@@@AB@@@@@B@@@@@B@@A@@@@@A@@@A@@B@@A@@@A@@B@@@BABAB@B@@@@@@AB@@A@@@A@@@A@@@A@A@AB@@A@@@C@C@AA@@@A@@CAAAC@@@A@@@AAAA@C@A@@@AA@@AA@A@@A@AA@@@@@@B@@@B@B@@@B@B@B@@@BA@@@@B@B@BA@@B@B@@AB@@@B@B@@AB@@@@@B@@AB@@@BA@@B@@@BAB@DABA@@B@@@B@B@B@@@@@B@@@BA@@@@DB@@B@@@@@@A@A@@B@@@@@B@@@B@B@@@@A@@@@A@@@@A@@@@A@A@@AA@@AA@@A@@@AA@@@A@@A@@A@@AA@@@A@@@A@@@@@@AA@@@A@A@@@AAA@A@AA@@@@@A@@@@B@@@B@B@@@DB@@B@BB@@B@B@B@B@@@BA@@@A@A@A@@@@@A@@BA@@@A@@@AA@@@A@@@@@A@@AA@@@@@AA@@@@@@A@@@A@@@@@@@A@@@A@@@AA@@BA@@@AB@@A@@@AA@@@@@@@@@@@@AA@@@@@A@@@A@A@@@A@@@AA@@A@@A@@@@@A@@@AA@BA@@@A@@BA@@AA@@@@AAA@A@@A@@@@@AB@BA@@@@@@@A@@A@@@A@@@AAA@@@@@AAAA@AA@@A@@@A@@@AA@@@A@A@@@A@@A@@@@@@BA@@B@@@@A@@@A@@@@B@B@@@B@@@B@BB@@BB@BB@@@B@@@@@B@@@B@BB@@BAB@B@@@B@BB@@BBBB@DDBBDDB@B@@BD@DB@@B@@@@B@@@@BBB@@@@BB@B@@@@@BB@@@B@@B@@@BBB@@@@@B@@@@B@@BB@@BB@@B@BB@@B@@BB@@B@@@@B@@A@@@@BA@@@A@@@@B@@@@@@BB@@@@BAB@@ABA@A@@@@@A@@A@@@@@AA@@A@@AAA@@@AAA@@@@@A@@BA@@B@@@BA@@@@@A@@@AAA@@@@@A@@@A@A@@AA@@@@AA@@A@A@@A@@A@@A@@AC@A@@@A@@BC@@@ABA@A@@@A@@@AA@@AAAA@@A@@@AB@B@@A@@B@@@@@@AB@@ABA@A@@@AA@@AA@@@AA@@@@AA@@@AA@@@A@@AA@@@@A@@AA@AB@@A@@@@@A@@@@AA@@@@@A@@@@@@@A@@A@@A@@@@@A@@@@A@@A@@@@B@@@@A@@@@@@@A@@@@@A@@B@@@BA@@@@B@@BB@@@@@BA@@@A@@B@@A@@@@B@@B@@@@@@BB@@@AB@@@BA@@BA@@B@B@B@@@B@B@B@@@@@D@B@@@B@B@B@B@B@B@@@@@BB@@B@@@@@B@@B@@B@@B@@@@@BB@@@@@BA@@@@B@@@B@@@B@BA@@B@@@BA@@@@B@B@B@B@@BB@@@B@B@B@@@B@@BD@@@B@B@@@BB@@@@B@@B@@@@BB@@@D@@@BBB@@@@A@A@@@A@A@A@@@ABA@A@@B@@@B@@@B@@BB@@@@BB@@@B@@@@BB@@@@@B@@@B@@BB@@@B@@@B@@@B@@B@@B@@@@@@@B@@@B@@@B@@@@@B@@@B@@@@AB@@@B@@@@@B@@@@@B@@A@@B@@A@@B@@@BA@B@@B@@@@B@@@@A@@B@@@@@@B@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@B@@@@@@BB@@@@@B@@@B@@@BB@@B@@@@@@@B@@@@@@@@@BBBABAB@BAB@@@BAB@@@B@@AB@@@B@B@B@B@BAB@@@B@@@@@@@BA@@BA@AB@@@@@BA@@@A@ABA@@@AA@@@@@B@@A@@@@B@@@BA@@B@BA@@B@@@B@B@B@B@@@@@@AB@@A@@BA@AB@@@BAB@@@B@@@BA@@B@@@@@@A@@@AB@@@B@B@@@B@DA@@B@@AB@@@BA@@@@B@@@B@@@B@BA@@B@B@@@B@@@B@BAB@@@B@B@B@B@B@@AB@BAB@B@@@@@BBB@@@B@B@B@B@B@@@B@B@B@BAB@B@@BB@@@BBB@B@DBB@@@@BB@@BBB@@BBBBB@@B@@B@@@@@@@@A@@B@B@@@B@@@@@@@B@@A@AB@@@B@BA@@B@@ABA@@@@DABA@@@A@@@@@@BA@@B@B@@@BA@@BA@@@A@@AA@A@@@@B@@@@@B@@@B@B@B@B@@ABA@@B@@AB@BA@@@@@A@@@A@@@ABA@@B@BAB@B@BA@@@@@A@@@@A@@A@A@AAAAA@@A@@@@AA@A@@@A@AAA@@AA@@@AAA@@@A@@A@@AAB@@A@@@@BA@@@A@@@AA@@@A@@@@@A@@BA@@@AA@@A@AA@@@@@@A@@AA@A@A@@AA@@@@@@A@@@AAA@@@A@A@@@A@@A@@@A@@@A@@@A@@@A@@@@@ABA@AB@@A@@@@@@A@@@@BA@A@@@A@@@AA@@A@@A@@A@@@@@A@A@@@A@@@AA@@@AA@@A@@@A@A@@A@@@AA@A@@AA@A@@@AA@@A@@BA@A@A@AB@@@@AA@@A@@@@BA@@BA@A@@@AB@BAA@@A@@@A@@AA@A@@@A@@@A@A@A@A@@@A@@@AAAB@@@@@@ABA@@@A@@@A@A@A@@@A@A@@@A@AAA@@A@@@@@AB@@AB@@@BA@@@A@A@A@@@@@AB@@A@@@AB@@@@@FA@@B@DA@A@@BA@@A@@A@@@@BC@@@A@@@A@AA@@A@@BA@@@A@@@@@A@@A@AA@@@@A@@AA@@@@A@@@AAA@@@A@@@@BA@A@@@@AA@@@AA@@@@A@@@A@@@@@AA@@@AA@@@@A@A@@@A@AAA@A@AA@@@@@A@AAA@@@AA@A@AA@@@@AA@@@AB@@AAA@A@@@@AA@@AA@@AA@@@@A@@A@@A@@AA@@AA@@@AA@@A@@A@@@@AA@@@@@@CCA@AA@@@AA@AAA@@A@@AC@@AA@@@@A@A@AAA@AA@@A@@A@@AA@@@@@AA@@@@A@@A@@A@@A@@AA@@@AA@@@@AA@@@@@@AA@@@AAAA@AAA@AAAACA@A@@@@@@@AB@B@@AB@@C@A@A@A@@BA@A@@@@@A@A@@@A@@@A@@@@@@BA@@B@@@@A@@@@@@A@C@CAA@EAA@IACACA@@A@ABCBAB@@E@A@A@@AA@@C@@@A@C@CA@@@@AAAAC@AAAC@EACACAA@C@A@AACAAAAC@@@A@@@@AAC@CACBC@C@@@CCA@C@IA@@@@A@@AB@@A@@AA@C@A@AAACAA@AC@GA@@AA@AAA@@A@@@AAAAAA@@AIEA@AA@AA@C@ACCA@@AACAAAA@E@@@CAA@AAA@AAAA@AC@@@A@@A@@A@@@@A@@A@A@@@@A@@@@A@@@A@@@AB@@A@@@A@@@A@@BA@@@@@@@IAUECCECIEKIOMMEOKQIIMKGGCGAEAGBMDKBKBMOAGCCGGKESISMICKAK@M@Q@MGCAIAIAK@IBKDGDIAECECIGMIOG]@EBIBCJABCBIEKGQIUCYEWEUFKRG@I@A@G@QASBQHKBGAGA@@A@@AAACCCA@@AAAA@AA@AAGA@@E@ABA@A@@@@A@AC@@AAA@@CAA@@@@B@@ABA@@B@B@DAD@@A@A@E@A@A@@@A@EB@@@@BB@@A@@@G@@@AB@@C@A@AB@AA@@ABA@@@@AA@@@@ACA@AA@@AAAA@@A@@@BA@@@@@AA@AA@AAAA@@@@AAA@@AA@@@@@A@@EAUKIEIEIAKAI@QBEB]HOFCBEDMH@LCXAF@HADIDIDGDGBFLHHHFFH@LMLQAE@MCMAO@OBE@YEOGSC[BQFIDUDOD]DQD@BCB@@C@A@A@AB@BAB@@A@@@A@AAA@C@@@@DA@A@ABAD@B@B@B@@@BC@@BA@A@CB@BABA@AB@@@@@BBB@@@B@@@B@@BB@@A@@BABA@@@A@A@A@@AA@ABC@ADA@@BC@C@@BA@@@CCA@@@A@@BABCB@BAB@BEA@@A@@@C@@B@@@@@B@@BBBB@@BBDBB@BBB@@@@B@BAD@@AB@DA@AB@@@BB@AD@BABABABA@AB@@BB@D@DA@AB@@@B@B@B@@@@@@@D@@BDABABA@CB@@@D@BCDAD@@AB@@C@@BA@@BBB@BBB@BABA@@@A@A@A@A@C@@@A@@B@@CB@@@@ABAB@@A@@@ABA@AB@B@B@@A@A@@B@B@@@BADAA@@A@C@A@CB@@@@CAA@A@@@@@@@@B@BC@A@A@C@A@@@@B@@C@AACB@@@AA@A@@@AA@@C@AA@@A@EBAAA@A@@B@@AD@@BBB@B@B@@BA@A@CA@B@AC@A@C@A@@C@@AAAA@AA@ABA@@H@@@@ABA@C@A@A@@@@AA@@A@@A@C@ABABA@@@@@DGCB@@@A@@B@BAB@IAC@@@@@C@C@AADC@A@AA@A@AAAA@AE@A@A@G@CBADA@@@A@MAA@A@@B@@@B@@@B@BA@@B@@@BA@KDCH@B@FAHCJEJIHAD@@AB@@@BFBD@BBB@B@B@BBBBDBB@@@B@@BB@B@@@BBB@DBDBBBB@@@FB@@@B@@A@AB@@ABA@A@@B@BBD@B@B@@BB@@@B@B@@@@@@B@B@@ABB@@DABBDB@@D@@@D@DBB@D@@AB@BBBBDBFBBBB@D@BB@@BBBBD@DBFBD@DBB@BB@B@@@B@@@@B@@BB@@BDBB@@@B@B@B@DBD@BB@@DBDDPJFFHDLFTDXFXFTFNBZJH@LFNNJJRTHFFFFHCHEFGLDLHLJFFFJLBJ@HEFKHONINERCD@@ADKLEPANCFEREPDHHHLHRTTNFFHDFJJPDV@FBHLNFJFHDJAFELCJCNDB@B@@@B@@@B@@@B@@@B@BB@@@@BBB@B@@B@@@B@DABAB@B@@@BBBB@@BAD@B@@@@@D@B@DBD@B@DA@@B@@ABAB@DAB@@@BADAB@BBD@B@B@@@B@B@D@B@D@B@DBB@@BB@B@DAB@@BB@@@B@DA@@B@B@B@BA@@@CA@@@BAAA@@@A@@AA@@AAC@A@@A@@ACAAAA@AB@@C@A@@@AAC@@@@DAB@@@BAB@B@BAB@BAB@B@@@B@BA@C@AF@F@B@BABA@ABABBB@BAB@B@BB@@B@@@B@DA@@B@D@B@BBD@D@B@FBB@@@D@B@DBB@BBB@H@@@@AB@@AB@JAB@B@D@B@B@DBFDBBDBBBDB@@B@B@@@B@DBB@B@B@B@D@BBB@B@B@B@@@B@B@BA@@B@@@BB@BB@BB@BB@@B@B@@@B@B@@DB@@@@@B@BB@BB@@DBB@@BB@B@@@B@B@D@B@B@B@BBD@@@DA@@B@B@B@@BD@BBB@DBB@@B@BB@B@B@B@BAB@@ADC@@B@DADAD@@AB@@@BBH@DBB@B@BBB@BB@@@D@BBBB@BBBD@@ABBB@BBB@B@@@B@B@B@@BBBBBBBBBB@@CBABEB@BABC@AB@@@@DF@B@@A@A@BB@LADA@@BBB@@A@@BAB@@C@CA@@CA@@A@A@AB@@ED@@B@B@BB@@@B@@@@C@@@ADABAD@B@BBBBB@B@@@B@@BB@BBD@BB@B@B@B@@@@B@B@@@@BBDBBB@@B@@BB@@B@@@B@B@@B@BBB@FDNF@@B@B@B@@@B@@@B@BBBA@@BB@@B@@ABA@@B@B@BAB@B@@@B@B@B@DABA@A@@B@BB@B@@@B@BBB@@@FB@JCH@BATCD@DAH@F@DAHAJE@@FBBBF@D@LBD@F@BADB@A@@@A@@B@@@@@BA@@@@DC@A@@@AA@BCA@@AB@B@BABADAB@DB@@DA@@D@BB@@BAB@B@BBB@@@@A@@BAD@@@B@@@FBB@@@@@@A@@B@@@D@B@B@B@B@B@@@B@B@@@@BB@@DD@@BB@B@@BBB@@B@B@B@D@B@BAB@@@B@B@@@B@BAD@@ABABAB@@AB@B@@A@A@@BC@@@AB@@A@ABA@@@@F@@@@AD@@@@AB@BADC@@@AA@@@AC@AA@@@@EAAA@@AA@BAAAB@@A@A@@B@B@@AD@DAB@BBB@BA@@B@@@BBBAB@B@B@@AB@BABB@@@BBB@B@@@B@@B@@B@@@@DD@@F@DB@@BD@B@@HAFA@@@@@A@A@A@@@AA@@@@@@A@@DBDBB@@@BBFBB@@AD@BA@@BBB@@@@B@B@BB@A@ABAD@@@BAB@B@BAB@@@BA@@@@BA@@@@B@@AB@@BBABA@@BBB@@BB@B@@@B@BB@@BB@BBBBBBB@@@BAB@BBB@B@BB@@D@@@B@@@BB@@D@BAB@B@B@BA@@D@BBDDD@@BB@D@B@B@B@D@@@BBBBB@@B@@@B@@@BBBB@@B@B@@@BAD@@A@@@@BAD@@A@AB@@@@@D@@AB@BB@AB@@BB@@A@@B@@BB@@@@AB@@BBAB@@@B@B@@AD@@@BB@BD@BD@B@BA@@@BDB@@@BBB@B@@B@B@B@@@BA@@BBLDHB@@DB@@@BDB@BB@@BD@B@B@@@BBF@FB@@DBBD@BB@DB@D@B@B@B@@AD@@@BFDLHDB@@@@BBBB@@B@B@BB@BB@B@@@@BBB@@@@D@B@@AB@B@@@BBB@B@B@@@@@BB@@B@@@@@@AB@@AB@B@@AB@@@@@B@B@B@@@B@B@@@B@@@@@B@BA@@B@@@@@B@@@@@B@@@BAB@B@B@B@@@B@B@BAB@B@B@DABA@@B@@AB@@@@A@@@@@@@A@@@A@@BABABA@@B@BC@@@@BA@@B@BA@@B@BAB@@@B@@@@A@@@A@A@@A@@A@A@@@C@@@@@A@@@@A@AAA@A@CCAA@@A@AA@@@A@@@@@AB@@@@@BAB@B@@@B@DAB@@@B@BADA@@B@@@DAB@B@@AB@BAB@@@@@B@B@@AB@@@B@B@@@B@DA@@BAB@BAB@B@@@B@@@B@B@B@@@B@@@B@@@BAB@@@B@@A@@@@BAB@@@@A@@B@@ABAB@@@@AB@@A@A@@@A@@@A@@@@@AB@@A@@@@@A@@B@@AA@@A@@@@@A@@A@@@@A@A@@@@@A@@@@@@@@@@BA@@@@BA@@B@@@@@B@@@@A@@B@B@BA@@B@@@B@@@@@@@@@B@@A@@@@@@@A@@BA@@@@@AA@@@@AAA@@@A@@AAB@@A@AA@@@@AA@@@@A@AAA@@@AA@A@A@AAAA@@@@@AA@@AA@@@@A@@@ABAB@@A@A@@@@@AAA@@AA@A@@@A@@@AB@DAB@BADA@@B@@@B@D@BAB@B@@@@@BA@A@@@A@@@@@@BABA@@@@BA@A@@@@@A@@@A@@@@@A@@@A@@@@A@@ACAA@CA@@AAAA@AA@A@@A@@A@A@@@EB@@A@@@A@A@@@@@AA@@A@@AA@@@@@A@A@AAA@A@AAA@A@A@AA@@A@@AA@A@@BA@A@@BA@@A@@@A@@@A@A@@@A@@@@B@@@@@BA@@@@B@B@@A@@@@@A@@@@BA@@@@B@@@B@BAB@B@@A@@@A@A@@@@@A@A@@@@@A@@@A@A@@@AA@@A@@@@BA@@@A@@@@BA@A@@BA@@BAB@@A@@@AB@@A@AA@AAA@@@AA@@BAA@AC@ACAAA@@AA@@@@@A@A@@@C@ABC@A@@@A@ABA@@@@B@B@B@B@@@B@B@@@B@@@B@@AB@@@@AB@@@@@BB@@B@@@@@B@@@B@BAB@B@B@B@@AF@D@@AB@BA@@BAB@@@@@B@D@B@B@B@BAD@BA@@B@B@@BB@@B@@BB@@@AB@BAB@@AB@B@B@BBB@B@@BBB@@@DB@@B@@DB@@B@B@B@DB@@B@BBB@DDDBBB@@@@BAB@BA@@BAF@BADAB@B@F@@@B@@@@BB@BB@BB@@BBBB@@@@@B@"],"encodeOffsets":[[128270,43329]]}}],"UTF8Encoding":true});}));