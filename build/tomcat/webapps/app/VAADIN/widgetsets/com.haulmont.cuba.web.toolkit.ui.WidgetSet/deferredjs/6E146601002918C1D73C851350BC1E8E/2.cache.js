$wnd.com_haulmont_cuba_web_toolkit_ui_WidgetSet.runAsyncCallback2("function ogg(){}\nfunction rMc(a){this.b=a}\nfunction uMc(a){this.b=a}\nfunction xMc(a){this.b=a}\nfunction ZLc(){guc.call(this)}\nfunction oMc(a,b,c){this.b=a;this.d=b;this.c=c}\nfunction kMc(){$wnd.historyBackListener=undefined}\nfunction cMc(a){$wnd.historyBackListener=function(){a.dc()}}\nfunction fMc(a){a.d.fi('>>> Init handler');cMc(new uMc(a))}\nfunction YLc(a){var b;b=_C(a.c,287);return !!b&&!!b.ze()&&b.ze().be()}\nfunction iIg(){VHg();if(UHg.c!=0){return _C(Lmh(UHg,UHg.c-1),346)}return null}\nfunction jMc(e,a,b,c){var d={state:a,timestamp:a,rand:2};e.History.pushState(d,b,c)}\nfunction mMc(a){this.b=a;this.d=ZNc(l3h)?new XNc(l3h):new UNc;this.c=new Sph;hMc(this)}\nfunction XLc(a){iIg()?ZHg(iIg()):vld(_C(_C(_rc(a,cM),187),277).b,new xtg(new Otg(cM),gYh),RC(D4b,eAh,0,[]))}\nfunction hMc(c){var a=c;if(!$wnd.jQuery||!$wnd.importHistoryJsLibrary){var b=$wnd.setInterval(function(){if($wnd.jQuery&&$wnd.importHistoryJsLibrary){$wnd.clearInterval(b);a._h()}},100)}else{a._h()}}\nfunction dMc(a){var b,c,d,e;c=$doc.title;a.d.fi(h3h+c);b=Bih(n5b((new aA).q.getTime()));Pph(a.c,b);d=$doc.URL;a.d.fi(i3h+d+YFh);e=j3h;d.indexOf(j3h)!=-1&&(e=k3h);a.d.fi('>>> Push history step: '+b+dDh+e);jMc(a,b,c,e);a.d.fi('>>> Call history back handler');XLc(a.b)}\nfunction gMc(a){$wnd.importHistoryJsLibrary();a.History=$wnd.History;if(!$wnd.callHistoryBackListener){$wnd.callHistoryBackListener=function(){$wnd.historyBackListener&&$wnd.historyBackListener()};a.History.Adapter.bind($wnd,'statechange',$wnd.callHistoryBackListener)}}\nfunction iMc(a){var b,c,d;c=$doc.URL;a.d.fi(i3h+c+YFh);b=$doc.title;a.d.fi(h3h+b);d=j3h;c.indexOf(j3h)!=-1&&(d=k3h);if((nbd(),!mbd&&(mbd=new Dbd),nbd(),mbd).b.i){a.d.fi('>>> Push base state for IE');jMc(a,Bih(n5b((new aA).q.getTime())),b,d+QKh)}Nid((uk(),tk),new oMc(a,b,d))}\nfunction eMc(a){var b;if(!YLc(a.b)){a.d.fi('>>> Disabled history handler');kMc();return}b=a.History.getState().data.timestamp;a.d.c&&(b?a.d.fi('>>> Check step: '+D5b(b.b)):a.d.fi('>>> Check step: undefined'));if(!!b&&Qph(a.c,Bih(b.b))){a.d.fi('>>> Skip fake history step');Rph(a.c,b)}else{(nbd(),!mbd&&(mbd=new Dbd),nbd(),mbd).b.i?Nid((uk(),tk),new xMc(a)):dMc(a)}}\nvar i3h=\">>> Current location: '\",h3h='>>> Current title: ',j3h='?a',k3h='?b',l3h='HistoryJsApi';O5b(662,577,qBh,ZLc);_.Sf=function $Lc(a){this.c=a;this.b=new mMc(this)};_.rf=function _Lc(){kMc(this.b)};_.b=null;_.c=null;O5b(664,1,{});_._h=function lMc(){var a;a=$wnd.onbeforeunload;this.d.fi('>>> Init history');gMc(this);this.d.fi('>>> Init start state');iMc(this);$wnd.onbeforeunload=a};O5b(663,664,{},mMc);_.b=null;O5b(665,1,wAh,oMc);_.oc=function pMc(){this.b.d.fi('>>> Init start step');jMc(this.b,Bih(n5b((new aA).q.getTime())),this.d,this.c);Nid((uk(),tk),new rMc(this))};_.b=null;_.c=null;_.d=null;O5b(666,1,wAh,rMc);_.oc=function sMc(){fMc(this.b.b)};_.b=null;O5b(667,1,{},uMc);_.dc=function vMc(){eMc(this.b)};_.b=null;O5b(668,1,wAh,xMc);_.oc=function yMc(){dMc(this.b)};_.b=null;O5b(4236,1,sCh);_.mc=function mgg(){Vtg(this.c,STh,bM);Ztg(this.c,bM,hUh,new ogg);dug(this.c,bM,EJh,new Otg(q$b));Zqd((!Uqd&&(Uqd=new _qd),Uqd),this.b.e)};O5b(4237,1,tCh,ogg);_.sk=function pgg(a,b){return new ZLc};var bM=Ahh(J2h,nZh,662),$Mb=Ahh(s1h,'ConnectorBundleLoaderImpl$3$1$1',4237),hM=Ahh(J2h,l3h,664),aM=Ahh(J2h,'CubaHistoryControlConnector$1',663),eM=Ahh(J2h,'HistoryJsApi$1',665),dM=Ahh(J2h,'HistoryJsApi$1$1',666),fM=Ahh(J2h,'HistoryJsApi$2',667),gM=Ahh(J2h,'HistoryJsApi$3',668);_Ch(tj)(2);\n//@ sourceURL=2.js\n")