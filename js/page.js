function BalanceMainList(){var e;emptyItem=$("#empty").self,640<=$(win).width?emptyItem||(e=$("article",mainList).all).length&&e.length%2==1&&((emptyItem=doc.createElement("li")).setAttribute("id","empty"),emptyItem.innerHTML="<aside></aside>",mainList.appendChild(emptyItem)):emptyItem&&mainList.removeChild(emptyItem)}function CreateList(e,t,i,s,l,r){var a="คอร์ดเพลง "+t,o="";if("object"==typeof l){var n=[t];/\s*[\(|\?]/.test(t)&&(n.push(t.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(t)&&n.push(t.match(/\((.*)\)/)[1]));for(var d=0;d<l.length;d++){var c=l[d];-1===ignoreLabels.indexOf(c)&&-1===n.indexOf(c)&&(o+='<a href="'+mechords+"/search/label/"+encodeURIComponent(c)+'" title="คอร์ดเพลง '+c+'">'+c+"</a>")}}else o+='<a href="'+i+'" title="คอร์ดเพลง '+l+'">'+l+"</a>";var v=r?"<time>"+r+"</time>":"",h=CanUseStorage()&&0!=e?'<button class="btn-like"></button>':"",f="";return s.match(/vi\/(.*)\/(0|default|maxresdefault)/)&&(f='class="-ytimg"'),'<article class="post-'+e+'"><a class="thumbnail" href="'+i+'" title="'+a+'"><img '+f+' src="'+(s=s.replace("/s72-c/","/s120/"))+'" alt="'+a+'" /></a><div class="details"><a class="title" href="'+i+'" title="'+a+'"><h3>'+t+'</h3></a><div class="lbls">'+o+"</div></div>"+v+h+"</article>"}function BrowserIs(e){var t=navigator.userAgent,i=-1!=(t.indexOf("Opera")||t.indexOf("OPR"))?"opera":-1!=t.indexOf("Chrome")?"chrome":-1!=t.indexOf("Safari")?"safari":-1!=t.indexOf("Firefox")?"firefox":-1!=t.indexOf("MSIE")||1==!!doc.documentMode?"ie":void 0;return i===e}function CanUseWebP(){var e=doc.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}function CanUseSpeech(){return"SpeechRecognition"in window||"webkitSpeechRecognition"in window}function CanUseStorage(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function AreYouReady(){return!!("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach)}function Stope(e){(e=e||window.event).cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}function Shuffler(e){if(e&&1<e.length){for(var t=e.length-1;0<t;t--){var i=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[i],e[i]=s}return e}}function WriteScript(e){var t;scriptBox&&((t=document.createElement("script")).src=mechords+e,scriptBox.appendChild(t))}function ScrollbarWidth(){var e=doc.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",body.appendChild(e);var t=doc.createElement("div");e.appendChild(t);var i=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),i+"px"}function CopyToClipboard(e){var t;e&&extens&&((t=doc.createElement("textarea")).value=e,extens.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),extens.removeChild(t))}function M01(){var e=win.location.search;return/[\?\&]m=1/.test(e)}function LoadTime(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;e&&console.log("ระยะเวลาในการโหลดหน้าเว็บ "+e/1e3+" วินาที")}function ResetQ(){win.scrollTo(0,0),qNotFound=!1,iQ=0,qIDs=[],qListA=[],qListB=[],qListC=[],lightBox||(lightBox=doc.createElement("div"),extens.appendChild(lightBox)),lightBox.innerHTML=postHolder,lightBox.classList.remove("_none")}var win=window,doc=document,html=doc.documentElement,body=doc.body||doc.querySelector("body");function $(e,t){var e=e,i=void 0!==win.pageYOffset,s="CSS1Compat"===(doc.compatMode||""),l={all:0,self:0,width:0,height:0,top:0,left:0,topScroll:0,bottomScroll:0,leftScroll:0,rightScroll:0};if(e.self==window)return{width:win.innerWidth||body.clientWidth,height:win.innerHeight||body.clientHeight,scrollTop:i?win.pageYOffset:s?body.scrollTop:0,scrollLeft:i?win.pageXOffset:s?body.scrollLeft:0};if(e==document)return{width:window.innerWidth||body.clientWidth||html.clientWidth,height:window.innerHeight||body.clientHeight||html.clientHeight};if("string"==typeof e){if((e=t?t.querySelectorAll(e):document.querySelectorAll(e)).length){var r=e[0].getBoundingClientRect();return{all:e,self:e[0],width:e[0].innerWidth||e[0].clientWidth,height:e[0].innerHeight||e[0].clientHeight,top:e[0].offsetTop,left:e[0].offsetLeft,topScroll:r.top,bottomScroll:r.bottom,leftScroll:r.left,rightScroll:r.right}}return l}if(e){r=e.getBoundingClientRect();return{all:0,self:e,width:e.innerWidth||e.clientWidth,height:e.innerHeight||e.clientHeight,top:e.offsetTop,left:e.offsetLeft,topScroll:r.top,bottomScroll:r.bottom,leftScroll:r.left,rightScroll:r.right}}return l}function ResetThePage(){header&&(header.classList.remove("-search"),header.classList.remove("_none"),header.removeAttribute("style")),lightBox&&(lightBox.classList.add("_none"),lightBox.innerHTML="",lightBox.removeAttribute("style")),search_txt&&(search_txt.value=""),search_cls&&search_cls.classList.add("_none"),shareBox&&shareBox.classList.add("_none"),body&&0==$("#chord-scroll").self&&body.classList.remove("_disable-scroll")}var mechords="https://www.mechords.com",pageURL=win.location.href,searchLabel=(searchLabel=pageURL.match(/search\/label\/(.*)/))?"-/"+searchLabel[1].split("?")[0]:"",searchQuery=pageURL.match(/[\?\&]q=(.*)/);searchQuery=!!(searchQuery=!!searchQuery&&searchQuery[1].split("&")[0])&&decodeURI(searchQuery);var ignoreLabels=["คอร์ดเพลง","recently","trending","สตริง","เพื่อชีวิต","ลูกกรุง","ลูกทุ่ง","ลูกทุ่งเพื่อชีวิต","หมอลำ","อีสาน","ใต้","คำเมือง","ลาว","สากล","เพลงคู่","Cover","คนโสด","เพลงจีบ","ชิลๆ","อินเลิฟ","อกหัก","เหงา","เศร้า","คิดถึง","ฤดูร้อน","ฤดูฝน","ฤดูหนาว","ปีใหม่","วันพ่อ","วันแม่","new","shorten-data","visiting-data","0.0","โควิด-19","เร็กเก้/สกา","อินดี้โฟล์ก","แร็พ"],XL=1035.98<$(doc).width,fullScreen=1279.98<$(doc).width&&719.98<$(doc).height,scriptBox=$(".script-box").self,header=$("#header").self,footer=$("#footer").self,theTitle=$("#header h1").self,brand=$("#header .brand").self,searchBox=$("#header .search-box").self,search_txt=$(".search-box>.-txt").self,search_cls=$(".search-box>.-clear").self,search_btn=$(".search-box>.-submit").self,search_mic=$(".search-box>.-speech").self,lightBox=$("#extensions .light-box").self,alertBox=$("#extensions .alert-box").self,extens=$("#extensions").self,mainList=$("#main-list").self,mostList=$("#most-list").self,mostList1=$("#most-list-1").self,mostList2=$("#most-list-2").self,similarList=$("#similar .post-list").self,emptyItem=$("#empty").self,postItem=$("#post-item").self,itemTitle=$("#post-item header h3").self,navigation=$("#navigation").self,bottomSpace=200,chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self,btnFav=$("#category .btn-fav").self,favRes=$("#extensions .favorite-res").self;function ChordTb(){chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self}var fixAutoHeightInterval,shareBox=$(".share-box").self,keySelector=$(".select.-key>select").self,defaultSelectIndex=0,btn_share=$(".btn.-share").self,btn_switch=$(".btn.-switch").self,btn_lightbox=$(".btn.-lightbox").self,btn_like=$(".btn.-like").self,chk_gc=$(".chk.-gc > input").self,chk_simplify=$(".chk.-simplify > input").self,chk_cr=$(".chk.-cr > input").self,accordion=$(".accordion").self,a_pr=$(".accordion>.-pr").self,a_ps=$(".accordion>.-ps").self,a_gc=$(".accordion>.-gc").self,a_cr=$(".accordion>.-cr").self,fixAutoHeightTime=0,postHolder='<div class="wrapper"><ul class="post-list -wide -placeholder"><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li></ul></div>',iQ=0,qByTitle=!1,qNotFound=!1,qListA=[],qListB=[],qListC=[],qIDs=[];function MostReq(){if(mostList&&($("#most-list").topScroll+$(win).scrollTop-$(win).height-$(win).scrollTop<=0&&0<$(".-lazy",mostList).all.length)){var e=$("#most-list article").all;if(e.length)for(var t=0;t<e.length;t++){var i,s=e[t];$("img",s).self||(i=s.className.match(/post\-(\d+)\s\-lazy/))&&WriteScript("/feeds/posts/default/?alt=json-in-script&max-results=1&q="+i[1]+"&callback=MostRes")}}}!function(e){var t,i,s;e&&(!BrowserIs("ie")||(t=e.childNodes[0])&&(s="https://src.mechords.com/img/",(i=doc.createElement("div")).innerHTML='<div class="wrapper alert">คุณกำลังใช้เว็บบราวเซอร์ที่ล้าสมัย เพื่อการใช้งานเว็บไซต์อย่างเต็มประสิทธิภาพ ขอแนะนำให้ใช้หนึ่งในเบราว์เซอร์ฟรีที่ทันสมัยเหล่านี้แทนเถิด<br/><ul><li><a href="https://www.google.com/chrome/browser/desktop/" rel="nofollow" target="_blank"><img src="'+s+'chrome.png"/></a></li><li><a href="https://opera.com/" rel="nofollow" target="_blank"><img src="'+s+'opera.png"/></a></li><li><a href="https://www.microsoftedgeinsider.com/" rel="nofollow" target="_blank"><img src="'+s+'edge.png"/></a></li><li><a href="https://www.mozilla.com/firefox/" rel="nofollow" target="_blank"><img src="'+s+'firefox.png"/></a></li></ul></div><br/>',e.insertBefore(i,t)))}($("#billboard").self),function(l){var r,a,o,e;l&&((r=l.getAttribute("data-dropdown"))&&(a=doc.createElement("li"),(o=$(".btn-down",l).self)&&(o.classList.remove("_none"),o.addEventListener("click",function(e){e.preventDefault();var t=$(".-dropdown",l).self;if(!t){(t=doc.createElement("ul")).setAttribute("class"," -dropdown"),r=r.split("|");for(var i=0;i<r.length;i++){var s=r[i];t.innerHTML+='<li><a href="/search/label/'+encodeURIComponent(s)+'">'+s.replace(/อารมณ์|เพลง|เทศกาล/g,"")+"</a></li>"}a.innerHTML='<a class="_i" href="#" ><svg style="margin:4px auto;"><path d="M18 15l-6-6-6 6h12z"/></svg></a>',a.setAttribute("class","btn-up"),t.appendChild(a),l.appendChild(t)}this.classList.add("_none"),t.classList.remove("_none"),a&&a.addEventListener("click",function(e){e.preventDefault(),o.classList.remove("_none"),t.classList.add("_none")})}))),(e=$(".btn-fav a",l).self)&&e.addEventListener("click",function(e){e.preventDefault()}))}($("#category").self),function(){function i(){""!==search_txt.value&&("คอร์ดเพลงที่ถูกใจ"==search_txt.value?FavoriteRes():searchQuery?gcseReq():(ResetQ(),SearchReq(search_txt.value)))}var s,e,t;AreYouReady()&&searchBox&&header&&search_txt&&search_cls&&search_btn&&search_mic&&extens&&(search_txt.addEventListener("focus",function(){header.classList.add("-search")}),search_txt.addEventListener("keyup",function(e){27==(e.which||e.keycode)&&ResetThePage(),""!==this.value?search_cls.classList.remove("_none"):ResetThePage()}),search_cls.addEventListener("click",function(){ResetThePage(),search_txt.focus()}),searchBox.addEventListener("click",function(e){Stope(e)}),searchBox.addEventListener("submit",function(e){e.preventDefault(),i()}),CanUseSpeech()&&(search_mic.classList.remove("_none"),(s=new webkitSpeechRecognition).continuous=!1,s.interimResults=!1,s.lang="th-TH",search_mic.addEventListener("click",function(){search_txt.value="",search_mic.classList.add("-active"),s.start(),s.onresult=function(e){var t=e.results[0][0].transcript;search_txt.value=t,s.stop(),i()},s.onspeechend=function(){s.stop(),search_mic.classList.remove("-active")},s.onerror=function(){s.stop(),search_mic.classList.remove("-active")}})),e=$("#header .rnd.-q").self,t=$("#header .rnd.-x").self,e&&t&&e.addEventListener("click",function(e){Stope(e),ResetQ(),SearchReq("สุ่มคอร์ดเพลง")}))}();var mostIDs=[];function MostRes(e){if(e.feed)if(e.feed.entry){var t=e.feed.entry;if(t.length)for(var i=0;i<t.length;i++){var s=t[i];if((y=$("#most-list .post-"+(_=s.id.$t.split(".post-")[1])).self)&&-1==mostIDs.indexOf(_)){mostIDs.push(_);var l,r,a=$(".thumbnail",y).self,o=$(".title",y).self,n=o.getAttribute("href"),d=o.innerText,c=(a.getAttribute("data-img"),s.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/)),v="";if(c?(r=(c=c[1]).match(/vi\/(.*)\/0|default|maxresdefault/))&&(v='class="-ytimg"'):c=!!(l=s.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(v='class="-ytimg"',!!(r=(c=l[1]).match(/embed\/(.*)(\/\?)*/))&&"https://i.ytimg.com/vi/"+r[1]+"/0.jpg"),n&&d&&a){y.removeAttribute("data-link"),y.removeAttribute("data-title"),c&&(c=c.replace("/s72-c/","/s120/"),a.innerHTML="<img "+v+' src="'+c+'" alt="หน้าปก เพลง '+d+'" />'),y.classList.remove("-lazy");var h=[d];/\s*[\(|\?]/.test(d)&&(h.push(d.split(/\s*[\(|\?]/)[0]),h.push(d.match(/\((.*)\)/)[1]));var f=s.category,m="";if(f.length)for(var p=0;p<f.length;p++){var g=f[p].term;/recently|trending/.test(g)?y.parentNode.setAttribute("class",g):h.indexOf(g)<0&&ignoreLabels.indexOf(g)<0&&(m+="<a href='"+mechords+"/search/label/"+encodeURIComponent(g)+"' title='คอร์ดเพลง "+g+"'>"+g+"</a>")}var u=$(".lbls",y).self;u&&(u.classList.remove("-loading"),u.innerHTML=m);var b,L=s.published.$t,x=$("time",y).self;L&&!x&&(b=(L=L.split("T")[0].split("-"))[2]+"/"+parseInt(L[1])+"/",b+=(parseInt(L[0])+543).toString().substr(2),x.innerHTML=b)}}}Favorite()}else{var S=e.feed.link;if(S.length)for(var _,y,p=0;p<S.length;p++){"self"===(n=S[p]).rel&&(_=n.href.split("&q="))&&(y=$(".post-"+_[1]).self)&&WriteScript("/feeds/posts/default/-/"+(d=$(".title",y).self.innerText)+"?alt=json-in-script&max-results=10&callback=MostRes")}}scriptBox.innerHTML=""}var totalPost=1500;function TotalRes(e){e.feed&&e.feed.entry&&(totalPost=e.feed.openSearch$totalResults.$t)}WriteScript("/feeds/posts/default/-/คอร์ดเพลง?alt=json-in-script&callback=TotalRes&max-results=1");var rndList=!1,q_string="";function SearchReq(e){var t=1;"สุ่มคอร์ดเพลง"==e?(q_string=e,e="",t=Math.floor(Math.random()*(totalPost-150))+1):-1<e.indexOf("rnd:")?(e=e.split("rnd:")[1],e="&q="+(q_string=e),rndList=!0):-1<e.indexOf("default:")?(e=e.split("default:")[1],e="&q="+(q_string=e),qNotFound=!(rndList=!1)):(e="&q=title%3A"+(q_string=e),rndList=!1),search_txt.value=q_string,search_cls.classList.remove("_none"),header.classList.add("-search"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),body.classList.add("_disable-scroll"),WriteScript("/feeds/posts/default/?alt=json-in-script&start-index="+t+"&max-results=150&callback=SearchRes"+e)}function SearchRes(e){var t;if(e.feed&&e.feed.entry){var i=e.feed.entry;if((i=rndList&&18<i.length?Shuffler(i):i).length){for(var s="สุ่มคอร์ดเพลง"==q_string?18:17,l=i.length>s-iQ?s-iQ:i.length,r=[],a=0;a<l;a++){var o=i[a],n=o.link;if(n.length)for(var d=0;d<n.length;d++)if("alternate"===n[d].rel){var c=o.id.$t.split(".post-")[1];if(-1==qIDs.indexOf(c)){qIDs.push(c);var v=o.title.$t;if(-1==["shorten","visiting"].indexOf(v)){var h,f,m=n[d].href,p=o.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/);p=p?p[1]:(h=o.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(f=(p=h[1]).match(/embed\/(.*)(\/\?)*/))?"https://i.ytimg.com/vi/"+f[1]+"/0.jpg":"";for(var g=[],u=0;u<o.category.length;u++)g.push(o.category[u].term);var b="",L=o.published.$t;L&&(L=L.split("T")[0].split("-"))[1]&&L[2]&&(b=L[2]+"/"+parseInt(L[1])+"/",b+=(parseInt(L[0])+543).toString().substr(2));var x=-1<g.indexOf("recently")?"recently":-1<g.indexOf("trending")&&"trending";rndList?r.push([x,CreateList(c,v,m,p,g,b)]):v===search_txt.value?qListA.push([x,CreateList(c,v,m,p,g,b)]):-1<v.indexOf(search_txt.value)?qListB.push([x,CreateList(c,v,m,p,g,b)]):qListC.push([x,CreateList(c,v,m,p,g,b)])}}}}l<s&&!qNotFound?SearchReq("default:"+q_string):rndList||(r=qListA.concat(qListB,qListC));var S=$(".post-list",lightBox).self;if(S&&r.length){for(var _=$("li",S).all,y=r.length>s?s:r.length,u=0;u<y;u++){var w=r[u][0],T=r[u][1];if(_[u]&&(_[u].innerHTML=T,w&&_[u].classList.add(w),u==y-1)){_[y]&&r.length>s-1&&(_[y].innerHTML=CreateList(0,"ดูผลการค้นหาเพิ่มเติม..","/search?q="+search_txt.value,"https://src.mechords.com/img/G.jpg",search_txt.value));for(var k=$("li>div",S).all,B=0;B<k.length;B++)S.removeChild(k[B].parentNode)}}S.removeEventListener("click",Stope),S.addEventListener("click",Stope)}Favorite()}}else{qNotFound?(Alert("ว้า.. ยังไม่มีคอร์ดเพลงนี้เลย<br/>แต่ยังสามารถแนะนำเพลงผ่านทาง<br/> <a href='https://www.facebook.com/mechords' target='_blank'>เฟซบุ๊คแฟนเพจ</a> ได้อยู่นะจ๊ะ"),t=setInterval(function(){-1<alertBox.className.indexOf("_none")&&(clearInterval(t),ResetThePage(),search_txt.focus())},300)):SearchReq("default:"+q_string)}scriptBox.innerHTML=""}function SearchReqRnd(e){ResetQ(),SearchReq("rnd:"+e)}var favStorage,oldFav=localStorage.getItem("favorites");if(oldFav&&(oldFav=JSON.parse(oldFav),Object.keys(oldFav).length)){var items=Object.keys(oldFav);if(items.length){for(var li="",i=0;i<items.length;i++){var id=items[i],data=oldFav[id],title=data[1],link=mechords+"/"+data[0]+".html";link=(link=data[0].match(/(\d{4}\/\d{2}\/[^.]*)/))?mechords+"/"+link[1]+".html":"";var img="https://i.ytimg.com/vi/"+data[3]+"/default.jpg",lbls=data[2];"object"==typeof lbls&&(lbls=lbls.join("|")),FavFind(id=id.substr(1))||FavSet("add",id,link,title,lbls,img)}localStorage.removeItem("favorites"),BtnFav(),Favorite()}}function BtnFav(){var e;CanUseStorage()&&btnFav&&(favStorage=localStorage.getItem("mechords_favorite"),(e=$("a",btnFav).self)&&(favStorage&&Object.keys(JSON.parse(favStorage)).length?e.classList.add("-active"):e.classList.remove("-active"),e.removeEventListener("click",FavoriteRes),e.addEventListener("click",FavoriteRes)))}function FavFind(e){return!!(favStorage=localStorage.getItem("mechords_favorite"))&&!!(favStorage=JSON.parse(favStorage))[e]}function FavListener(e){Stope(e=e||window.event);var t=e.target.parentNode,i=t.className.match(/post\-(\d+)/);if(i=!!i&&i[1]){if(FavFind(i))FavSet("del",i);else{var s=$(".thumbnail",t).self,l=$(".title",t).self,r=l.getAttribute("href"),a=l.innerText,o=(o=$("img",s).self).getAttribute("src"),n=$(".lbls a",t).all;if(n.length){for(var d=[],c=0;c<n.length;c++)d.push(n[c].innerHTML);d=d.join("|")}r&&a&&d&&o&&FavSet("add",i,r,a,d,o)}BtnFav()}}function Favorite(){if(CanUseStorage()){favStorage=localStorage.getItem("mechords_favorite");var e=$(".post-list .btn-like").all;if(e.length)for(var t=startFav=0;t<e.length;t++){var i=e[t];i.classList.remove("_none");var s=i.parentNode.className.match(/post\-(\d+)/);(s=s?s[1]:0)&&FavFind(s)&&i.classList.add("-active"),i.removeEventListener("click",FavListener),i.addEventListener("click",FavListener)}}}function FavSet(e,t,i,s,l,r){var a,o=$(".post-"+t).all;if(o.length)for(var n=0;n<o.length;n++){var d=$(".btn-like,.btn.-like",o[n]).all;if(d.length)for(var c=0;c<d.length;c++)"add"==e?d[c].classList.add("-active"):"del"==e&&d[c].classList.remove("-active")}favStorage=localStorage.getItem("mechords_favorite"),t&&(a=(a=JSON.parse(favStorage))||{},"add"==e?i&&s&&l&&r&&(a[t]=[i,s,l,r]):"del"==e&&delete a[t],localStorage.setItem("mechords_favorite",JSON.stringify(a)))}function FavoriteRes(e){if((e=e||window.event).preventDefault(),Stope(e),t=localStorage.getItem("mechords_favorite"),win.scrollTo(0,0),t&&Object.keys(JSON.parse(t)).length){var t=JSON.parse(t),i=Object.keys(t);if(i.length){for(var s="",l=0;l<i.length;l++){var r=i[l],a=t[r];s+="<li>"+CreateList(r,a[1],a[0],a[3],a[2].split("|"))+"</li>"}body.classList.add("_disable-scroll"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),search_txt.value="คอร์ดเพลงที่ถูกใจ",search_cls.classList.remove("_none"),lightBox.classList.remove("_none"),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide">'+s+"</ul></div>";var o=$(".post-list",lightBox).self;o&&(o.removeEventListener("click",Stope),o.addEventListener("click",Stope)),Favorite(),search_txt.focus()}}}function FavItem(e,t){if(e&&t){if(FavFind(e))FavSet("del",e),t.classList.remove("-active");else{var i=pageURL.split(/[\#\?\&]/)[0],s=$("h3",postItem).self.innerHTML,l=$(".item-tags a",postItem).all,r="";if(l.length)for(var a=0;a<l.length;a++)r+=(0!=a?"|":"")+l[a].innerText;var o=$("img",postItem).self,n=$(".vdo",postItem).self,d=$("iframe",n).self;FavSet("add",e,i,s,r,o=o?o.getAttribute("src"):d&&(o=!!(o=d.src.match(/embed\/(.*)/))&&o[1].split(/\?/)[0])?"https://i.ytimg.com/vi/"+o+"/default.jpg":""),t.classList.add("-active")}BtnFav()}}function ScrollPos(){var e,t,i,s;me_scroll=$(".me-scroll"),me_scroll.self&&(e=$("#body").left,t=$("#body").width+2*me_scroll.width,i=$("#body").width,s=$(win).height/2-me_scroll.height/2,me_scroll.self.style.top=s+"px",$(win).width>t+36?(me_scroll.self.style.right="",me_scroll.self.style.left=e+i+18+"px"):(me_scroll.self.style.left="",me_scroll.self.style.right=0))}BtnFav(),function(l){if(l){var e=l.querySelector("select"),r=l.querySelectorAll("ol>li"),t=doc.getElementById("strum");function a(e){t||((t=doc.createElement("audio")).type="audio/mpeg",t.id="strum",t.loop=!0,t.hidden=!0,extens.appendChild(t)),o(),e=e.replace("#","s"),t.src="https://src.mechords.com/audios/acoustic-guitar-tuning/"+e+".mp3",t.play()}e.onchange=function(){o();for(var e=(this.value||this.options[this.selectedIndex].value).split("|"),t=0;t<e.length;t++)r[t].innerHTML=e[t]};for(var i=0;i<r.length;i++)r[i].addEventListener("click",function(){var e=this.innerText;e?(a(e),this.classList.add("strumming")):o()});function o(){if(t&&(t.pause(),t.currentTime=0),r)for(var e=0;e<r.length;e++)r[e].classList.remove("strumming")}doc.addEventListener("keyup",function(e){var t,i,s;!l.querySelector(".strumming")||null!=(t={96:"stop",97:5,98:4,99:3,100:2,101:1,102:0}[e.which||e.keyCode])&&("stop"!=t&&(s=(i=r[t]).innerText)?(a(s),i.classList.add("strumming")):o())})}}($("#guitar-tuning").self);var btn_scroll=$(".me-scroll button").all;if(btn_scroll.length){for(var g_scroll=$(".me-scroll>._global").self,c_scholl=$(".me-scroll>._chord").self,i=0;i<btn_scroll.length;i++)btn_scroll[i].addEventListener("click",function(e){Stope(e);var t,i=this.value;"up"==i?SmoothScroll(0):"down"==i?(ChordTb(),chordTb?g_scroll&&c_scholl&&(g_scroll.classList.add("_none"),c_scholl.classList.remove("_none"),(t=$("button",c_scholl).self)&&(CloseTooltip(),ChordScrollStart(t.value),ActiveScrollBtn(t)),ScrollPos()):SmoothScroll($("body").height+bottomSpace-$(win).height)):"stop"==i?(g_scroll.classList.remove("_none"),c_scholl.classList.add("_none"),ChordScrollStop(),ScrollPos()):(ChordScrollStart(i),ActiveScrollBtn(this))});var svg_down='<svg><path d="M16.59,10.942L12,15.522l-4.59-4.58L6,12.353l6,6l6-6L16.59,10.942z" /><path d="M16.59,5.647L12,10.228l-4.59-4.58L6,7.058l6,6l6-6L16.59,5.647z" /></svg>';function ActiveScrollBtn(e){var t=$(".me-scroll>._chord>button").all;if(t.length)for(var i=0;i<t.length;i++){var s=t[i];s.classList.remove("-active"),-1==s.value.indexOf("stop")&&(s.innerHTML="")}e&&"stop"!=e.value&&(e.innerHTML=svg_down,e.classList.add("-active"))}function SmoothScroll(e){var s=window.pageYOffset,l=e-s,r=1e3,a=null;window.requestAnimationFrame(function e(t){a=a||t;var i=t-a;window.scrollTo(0,EaseInOutCubic(i,s,l,r));i<r&&window.requestAnimationFrame(e)})}function EaseInOutCubic(e,t,i,s){return(e/=s/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t}}function Alert(e){var t;alertBox&&e&&(t='<div class="-inner"><pre>'+e+'</pre><button type="button" onclick="Xlert(event);">OK</button></div>',alertBox.innerHTML=t,alertBox.classList.remove("_none"))}function Xlert(e){Stope(e),alertBox&&(alertBox.innerHTML="",alertBox.classList.add("_none"))}var fbComment=!1;function FBPlugin(){var e;$("#fb-comments").self&&200<=$(win).scrollTop&&!fbComment&&((e=doc.createElement("script")).async=!0,e.defer=!0,e.src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v8.0&appId=1458156584324917&autoLogAppEvents=1",body.appendChild(e),fbComment=!0)}function FncBundle(){MostReq(),ScrollPos(),FBPlugin()}doc.addEventListener("click",function(){ResetThePage()}),doc.addEventListener("DOMContentLoaded",function(e){FncBundle()}),win.addEventListener("scroll",function(){FncBundle()}),win.addEventListener("resize",function(){FncBundle()}),window.onload=LoadTime;