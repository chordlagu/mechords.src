function BalanceMainList(){var e;emptyItem=$("#empty").self,640<=$(win).width?emptyItem||(e=$("article",mainList).all).length&&e.length%2==1&&((emptyItem=doc.createElement("li")).setAttribute("id","empty"),emptyItem.innerHTML="<aside></aside>",mainList.appendChild(emptyItem)):emptyItem&&mainList.removeChild(emptyItem)}function CreateList(e,t,i,l,r,s){var a="คอร์ดเพลง "+t,o="";if("object"==typeof r){var n=[t];/\s*[\(|\?]/.test(t)&&(n.push(t.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(t)&&n.push(t.match(/\((.*)\)/)[1]));for(var d=0;d<r.length;d++){var c=r[d];-1===ignoreLabels.indexOf(c)&&-1===n.indexOf(c)&&(o+='<a href="'+mechords+"/search/label/"+encodeURIComponent(c)+'" title="คอร์ดเพลง '+c+'">'+c+"</a>")}}else o+='<a href="'+i+'" title="คอร์ดเพลง '+r+'">'+r+"</a>";var v=s?"<footer><time>"+s+"</time></footer>":"",h=CanUseStorage()&&0!=e?'<button type="button"></button>':"",f="";return l.match(/vi\/(.*)\/(0|default|maxresdefault)/)&&(f='class="-ytimg"'),'<article class="post-'+e+'"><figure><a href="'+i+'" title="'+a+'"><img '+f+' src="'+(l=l.replace("/s72-c/","/s120/"))+'" alt="'+a+'" /></a></figure><header><a href="'+i+'" title="'+a+'"><h3>'+t+"</h3></a><span>"+o+"</span></header>"+v+h+"</article>"}function BrowserIs(e){var t=navigator.userAgent,i=-1!=(t.indexOf("Opera")||t.indexOf("OPR"))?"opera":-1!=t.indexOf("Chrome")?"chrome":-1!=t.indexOf("Safari")?"safari":-1!=t.indexOf("Firefox")?"firefox":-1!=t.indexOf("MSIE")||1==!!doc.documentMode?"ie":void 0;return i===e}function CanUseWebP(){var e=doc.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}function CanUseSpeech(){return"SpeechRecognition"in window||"webkitSpeechRecognition"in window}function CanUseStorage(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function AreYouReady(){return!!("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach)}function Stope(e){(e=e||window.event).cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}function Shuffler(e){if(e&&1<e.length){for(var t=e.length-1;0<t;t--){var i=Math.floor(Math.random()*(t+1)),l=e[t];e[t]=e[i],e[i]=l}return e}}function WriteScript(e){var t;scriptBox&&((t=document.createElement("script")).src=mechords+e,scriptBox.appendChild(t))}function ScrollbarWidth0(){return lightBox?lightBox.offsetWidth-lightBox.clientWidth+"px":0}function ScrollbarWidth(){var e=doc.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",body.appendChild(e);var t=doc.createElement("div");e.appendChild(t);var i=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),i+"px"}function CopyToClipboard(e){var t;e&&extens&&((t=doc.createElement("textarea")).value=e,extens.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),extens.removeChild(t))}function M01(){var e=win.location.search;return/[\?\&]m=1/.test(e)}function LoadTime(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;e&&console.log("Page load time is "+e/1e3+" second")}var win=window,doc=document,html=doc.documentElement,body=doc.body||doc.querySelector("body");function $(e,t){var e=e,i=void 0!==win.pageYOffset,l="CSS1Compat"===(doc.compatMode||""),r={all:0,self:0,width:0,height:0,top:0,left:0,topScroll:0,bottomScroll:0,leftScroll:0,rightScroll:0};if(e.self==window)return{width:win.innerWidth||body.clientWidth,height:win.innerHeight||body.clientHeight,scrollTop:i?win.pageYOffset:l?body.scrollTop:0,scrollLeft:i?win.pageXOffset:l?body.scrollLeft:0};if(e==document)return{width:window.innerWidth||body.clientWidth||html.clientWidth,height:window.innerHeight||body.clientHeight||html.clientHeight};if("string"==typeof e){if((e=t?t.querySelectorAll(e):document.querySelectorAll(e)).length){var s=e[0].getBoundingClientRect();return{all:e,self:e[0],width:e[0].innerWidth||e[0].clientWidth,height:e[0].innerHeight||e[0].clientHeight,top:e[0].offsetTop,left:e[0].offsetLeft,topScroll:s.top,bottomScroll:s.bottom,leftScroll:s.left,rightScroll:s.right}}return r}if(e){s=e.getBoundingClientRect();return{all:0,self:e,width:e.innerWidth||e.clientWidth,height:e.innerHeight||e.clientHeight,top:e.offsetTop,left:e.offsetLeft,topScroll:s.top,bottomScroll:s.bottom,leftScroll:s.left,rightScroll:s.right}}return r}function ResetThePage(){header&&(header.classList.remove("-search"),header.classList.remove("_none"),header.removeAttribute("style")),lightBox&&(lightBox.classList.add("_none"),lightBox.innerHTML="",lightBox.removeAttribute("style")),search_txt&&(search_txt.value=""),search_cls&&search_cls.classList.add("_none"),shareBox&&shareBox.classList.add("_none"),body&&0==$("#chord-scroll").self&&body.classList.remove("_disable-scroll")}var mechords="https://www.mechords.com",pageURL=win.location.href,searchLabel=(searchLabel=pageURL.match(/search\/label\/(.*)/))?"-/"+searchLabel[1].split("?")[0]:"",searchQuery=pageURL.match(/[\?\&]q=(.*)/);searchQuery=!!(searchQuery=!!searchQuery&&searchQuery[1].split("&")[0])&&decodeURI(searchQuery);var ignoreLabels=["คอร์ดเพลง","recently","trending","สตริง","เพื่อชีวิต","ลูกกรุง","ลูกทุ่ง","ลูกทุ่งเพื่อชีวิต","หมอลำ","อีสาน","ใต้","คำเมือง","ลาว","สากล","เพลงคู่","Cover","คนโสด","เพลงจีบ","อารมณ์ชิลๆ","อารมณ์อินเลิฟ","อารมณ์อกหัก","อารมณ์เหงา","อารมณ์เศร้า","อารมณ์คิดถึง","เพลงปลุกใจ","ฤดูร้อน","ฤดูฝน","ฤดูหนาว","เทศกาลปีใหม่","วันพ่อ","วันแม่","new","shorten-data","visiting-data","0.0","โควิด-19","เร็กเก้/สกา","อินดี้โฟล์ก"],XL=1035.98<$(doc).width,fullScreen=1279.98<$(doc).width&&719.98<$(doc).height,scriptBox=$(".script-box").self,header=$("#header").self,footer=$("#footer").self,brand=$("#header .brand").self,searchBox=$("#header .search-box").self,search_txt=$(".search-box>.-txt").self,search_cls=$(".search-box>.-clear").self,search_btn=$(".search-box>.-submit").self,search_mic=$(".search-box>.-speech").self,lightBox=$("#extensions .light-box").self,alertBox=$("#extensions .alert-box").self,extens=$("#extensions").self,mainList=$("#main-list").self,mostList=$("#most-list").self,mostList1=$("#most-list-1").self,mostList2=$("#most-list-2").self,similarList=$("#similar .post-list").self,emptyItem=$("#empty").self,postItem=$("#post-item").self,itemTitle=$("#post-item header h3").self,navigation=$("#navigation").self,bottomSpace=200,chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self,btnFav=$("#category .btn-fav").self,favRes=$("#extensions .favorite-res").self;function ChordTb(){chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self}var fixAutoHeightInterval,shareBox=$(".share-box").self,keySelector=$(".select.-key>select").self,defaultSelectIndex=0,btn_share=$(".btn.-share").self,btn_switch=$(".btn.-switch").self,btn_lightbox=$(".btn.-lightbox").self,btn_like=$(".btn.-like").self,chk_gc=$(".chk.-gc > input").self,chk_simplify=$(".chk.-simplify > input").self,chk_cr=$(".chk.-cr > input").self,accordion=$(".accordion").self,a_pr=$(".accordion>.-pr").self,a_ps=$(".accordion>.-ps").self,a_gc=$(".accordion>.-gc").self,a_cr=$(".accordion>.-cr").self,fixAutoHeightTime=0;function MostReq(){if(mostList&&($("#most-list").topScroll+$(win).scrollTop-$(win).height-$(win).scrollTop<=0&&0<$(".-lazy",mostList).all.length)){var e=$("#most-list article").all;if(e.length)for(var t=0;t<e.length;t++){var i,l=e[t];$("img",l).self||(i=l.className.match(/post\-(\d+)\s\-lazy/))&&WriteScript("/feeds/posts/default/?alt=json-in-script&max-results=1&q="+i[1]+"&callback=MostRes")}}}!function(e){var t,i,l;e&&(!BrowserIs("ie")||(t=e.childNodes[0])&&(l="https://src.mechords.com/img/",(i=doc.createElement("div")).innerHTML='<div class="wrapper alert">คุณกำลังใช้เว็บบราวเซอร์ที่ล้าสมัย เพื่อการใช้งานเว็บไซต์อย่างเต็มประสิทธิภาพ ขอแนะนำให้ใช้หนึ่งในเบราว์เซอร์ฟรีที่ทันสมัยเหล่านี้แทนเถิด<br/><ul><li><a href="https://www.google.com/chrome/browser/desktop/" rel="nofollow" target="_blank"><img src="'+l+'chrome.png"/></a></li><li><a href="https://opera.com/" rel="nofollow" target="_blank"><img src="'+l+'opera.png"/></a></li><li><a href="https://www.microsoftedgeinsider.com/" rel="nofollow" target="_blank"><img src="'+l+'edge.png"/></a></li><li><a href="https://www.mozilla.com/firefox/" rel="nofollow" target="_blank"><img src="'+l+'firefox.png"/></a></li></ul></div><br/>',e.insertBefore(i,t)))}($("#billboard").self),function(r){var s,a,o,e;r&&((s=r.getAttribute("data-dropdown"))&&(a=doc.createElement("li"),(o=$(".btn-down",r).self)&&(o.classList.remove("_none"),o.addEventListener("click",function(e){e.preventDefault();var t=$(".-dropdown",r).self;if(!t){(t=doc.createElement("ul")).setAttribute("class"," -dropdown"),s=s.split("|");for(var i=0;i<s.length;i++){var l=s[i];t.innerHTML+='<li><a href="/search/label/'+encodeURIComponent(l)+'">'+l.replace(/อารมณ์|เพลง|เทศกาล/g,"")+"</a></li>"}a.innerHTML='<a class="_i" href="#" ><svg style="margin:4px auto;"><path d="M18 15l-6-6-6 6h12z"/></svg></a>',a.setAttribute("class","btn-up"),t.appendChild(a),r.appendChild(t)}this.classList.add("_none"),t.classList.remove("_none"),a&&a.addEventListener("click",function(e){e.preventDefault(),o.classList.remove("_none"),t.classList.add("_none")})}))),(e=$(".btn-fav a",r).self)&&e.addEventListener("click",function(e){e.preventDefault()}))}($("#category").self),function(){function i(){""!==search_txt.value&&("คอร์ดเพลงที่ถูกใจ"==search_txt.value?FavoriteRes:searchQuery?gcseReq:SearchReq)()}var l,e,t;AreYouReady()&&searchBox&&header&&search_txt&&search_cls&&search_btn&&search_mic&&extens&&(search_txt.addEventListener("focus",function(){header.classList.add("-search")}),search_txt.addEventListener("keyup",function(e){27==(e.which||e.keycode)&&ResetThePage(),""!==this.value?search_cls.classList.remove("_none"):ResetThePage()}),search_cls.addEventListener("click",function(){ResetThePage(),search_txt.focus()}),searchBox.addEventListener("click",function(e){Stope(e)}),searchBox.addEventListener("submit",function(e){e.preventDefault(),i()}),CanUseSpeech()&&(search_mic.classList.remove("_none"),(l=new webkitSpeechRecognition).continuous=!1,l.interimResults=!1,l.lang="th-TH",search_mic.addEventListener("click",function(){search_txt.value="",search_mic.classList.add("-active"),l.start(),l.onresult=function(e){var t=e.results[0][0].transcript;search_txt.value=t,l.stop(),i()},l.onspeechend=function(){l.stop(),search_mic.classList.remove("-active")},l.onerror=function(){l.stop(),search_mic.classList.remove("-active")}})),e=$("#header .rnd.-q").self,t=$("#header .rnd.-x").self,e&&t&&e.addEventListener("click",function(e){Stope(e),SearchReq("สุ่มคอร์ดเพลง")}))}();var mostIDs=[];function MostRes(e){if(e.feed)if(e.feed.entry){var t=e.feed.entry;if(t.length)for(var i=0;i<t.length;i++){var l=t[i];if((_=$("#most-list .post-"+(S=l.id.$t.split(".post-")[1])).self)&&-1==mostIDs.indexOf(S)){mostIDs.push(S);var r,s,a=_.getAttribute("data-link"),o=_.getAttribute("data-title"),n=$("figure",_).self,d=l.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/),c="";if(d?(s=(d=d[1]).match(/vi\/(.*)\/0|default|maxresdefault/))&&(c='class="-ytimg"'):d=!!(r=l.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(c='class="-ytimg"',!!(s=(d=r[1]).match(/embed\/(.*)(\/\?)*/))&&"https://i.ytimg.com/vi/"+s[1]+"/0.jpg"),a&&o&&n){_.removeAttribute("data-link"),_.removeAttribute("data-title"),d&&(d=d.replace("/s72-c/","/s120/"),n.innerHTML='<a href="'+a+'" title="คอร์ดเพลง '+o+'"><img '+c+' src="'+d+'" alt="หน้าปก เพลง '+o+'" /></a>'),_.classList.remove("-lazy");var v=[o];/\s*[\(|\?]/.test(o)&&(v.push(o.split(/\s*[\(|\?]/)[0]),v.push(o.match(/\((.*)\)/)[1]));var h=l.category,f="";if(h.length)for(var m=0;m<h.length;m++){var p=h[m].term;/recently|trending/.test(p)?_.parentNode.setAttribute("class",p):v.indexOf(p)<0&&ignoreLabels.indexOf(p)<0&&(f+="<a href='"+mechords+"/search/label/"+encodeURIComponent(p)+"' title='คอร์ดเพลง "+p+"'>"+p+"</a>")}var g=$(".-loading",_).self;g&&(g.classList.remove("-loading"),g.innerHTML=f);var u,b=l.published.$t,L=$("time",_).self;b&&!L&&(u=(b=b.split("T")[0].split("-"))[2]+"/"+parseInt(b[1])+"/",u+=(parseInt(b[0])+543).toString().substr(2),(L=doc.createElement("footer")).innerHTML="<time>"+u+"</time>",_.appendChild(L))}}}Favorite()}else{var x=e.feed.link;if(x.length)for(var S,_,m=0;m<x.length;m++){"self"===(a=x[m]).rel&&(S=a.href.split("&q="))&&(_=$(".post-"+S[1]).self)&&WriteScript("/feeds/posts/default/-/"+(o=_.getAttribute("data-title"))+"?alt=json-in-script&max-results=10&callback=MostRes")}}scriptBox.innerHTML=""}var postHolder='<div class="wrapper"><ul class="post-list -wide -placeholder"><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li></ul></div>',totalPost=1500;function TotalRes(e){e.feed&&e.feed.entry&&(totalPost=e.feed.openSearch$totalResults.$t)}WriteScript("/feeds/posts/default/-/คอร์ดเพลง?alt=json-in-script&callback=TotalRes&max-results=1");var rndList=!1,rnd_str="";function SearchReq(e){win.scrollTo(0,0),lightBox||((lightBox=doc.createElement("div")).classList.add("search-res"),extens.appendChild(lightBox)),lightBox.innerHTML=postHolder,lightBox.classList.remove("_none"),e?(rndList=!0,search_txt.value=e):(rndList=!1,e=search_txt.value),rnd_str=e,search_cls.classList.remove("_none");var t=1;"สุ่มคอร์ดเพลง"==e?(e="",t=Math.floor(Math.random()*(totalPost-150))+1):e="&q="+e,header.classList.add("-search"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),body.classList.add("_disable-scroll"),WriteScript("/feeds/posts/default/?alt=json-in-script&start-index="+t+"&max-results=150&callback=SearchRes"+e)}function SearchRes(e){var t=e.feed&&e.feed.entry;if(t){var i=e.feed.entry;if((i=rndList&&18<i.length?Shuffler(i):i).length){for(var l="",r=[],s=[],a=[],o="สุ่มคอร์ดเพลง"==rnd_str?18:17,n=i.length>o?o:i.length,d=0;d<n;d++){var c=i[d],v=c.link;if(v.length)for(var h=0;h<v.length;h++)if("alternate"===v[h].rel){var f=c.id.$t.split(".post-")[1],m=c.title.$t;if(-1==["shorten","visiting"].indexOf(m)){var p,g,u=v[h].href,b=c.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/);b=b?b[1]:(p=c.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(g=(b=p[1]).match(/embed\/(.*)(\/\?)*/))?"https://i.ytimg.com/vi/"+g[1]+"/0.jpg":"";for(var L=[],x=0;x<c.category.length;x++)L.push(c.category[x].term);var S="",_=c.published.$t;_&&(_=_.split("T")[0].split("-"))[1]&&_[2]&&(S=_[2]+"/"+parseInt(_[1])+"/",S+=(parseInt(_[0])+543).toString().substr(2));var y=-1<L.indexOf("recently")?' class="recently"':-1<L.indexOf("trending")?' class="trending"':"";rndList?l+="<li"+y+">"+CreateList(f,m,u,b,L,S)+"</li>":m===search_txt.value?r.push("<li"+y+">"+CreateList(f,m,u,b,L,S)+"</li>"):-1<m.indexOf(search_txt.value)?s.push("<li"+y+">"+CreateList(f,m,u,b,L,S)+"</li>"):a.push("<li"+y+">"+CreateList(f,m,u,b,L,S)+"</li>")}}}if(!rndList)for(var w=r.concat(s,a),T=18<w.length?18:w.length,k=0;k<T;k++)l+=w[k];var B="<li>"+CreateList(0,"ดูผลการค้นหาเพิ่มเติม..","/search?q="+search_txt.value,"https://src.mechords.com/img/G.jpg",search_txt.value)+"</li>";lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide">'+l+("สุ่มคอร์ดเพลง"==rnd_str?"":B)+"</ul></div>";var C=$(".post-list",lightBox).self;C&&(C.removeEventListener("click",Stope),C.addEventListener("click",Stope)),Favorite()}}setTimeout(function(){t||win.location.replace("/search?q="+search_txt.value)},3e3),scriptBox.innerHTML=""}var favStorage,oldFav=localStorage.getItem("favorites");if(oldFav&&(oldFav=JSON.parse(oldFav),Object.keys(oldFav).length)){var items=Object.keys(oldFav);if(items.length){for(var li="",i=0;i<items.length;i++){var id=items[i],data=oldFav[id],title=data[1],link=mechords+"/"+data[0]+".html";link=(link=data[0].match(/(\d{4}\/\d{2}\/[^.]*)/))?mechords+"/"+link[1]+".html":"";var img="https://i.ytimg.com/vi/"+data[3]+"/default.jpg",lbls=data[2];"object"==typeof lbls&&(lbls=lbls.join("|")),FavFind(id=id.substr(1))||FavSet("add",id,link,title,lbls,img)}localStorage.removeItem("favorites"),BtnFav(),Favorite()}}function BtnFav(){var e;CanUseStorage()&&(favStorage=localStorage.getItem("mechords_favorite"),(e=$("a",btnFav).self)&&(favStorage&&Object.keys(JSON.parse(favStorage)).length?e.classList.add("-active"):e.classList.remove("-active"),e.removeEventListener("click",FavoriteRes),e.addEventListener("click",FavoriteRes)))}function FavFind(e){return!!(favStorage=localStorage.getItem("mechords_favorite"))&&!!(favStorage=JSON.parse(favStorage))[e]}function FavListener(e){Stope(e=e||window.event);var t=e.target.parentNode,i=t.className.match(/post\-(\d+)/);if(i=!!i&&i[1]){if(FavFind(i))FavSet("del",i);else{var l=(l=$("header a",t).self)?l.getAttribute("href"):"",r=(r=$("h3",t).self)?r.innerHTML:"",s=(s=$("img",t).self)?s.getAttribute("src"):"",a=$("span a",t).all;if(a.length){for(var o=[],n=0;n<a.length;n++)o.push(a[n].innerHTML);o=o.join("|")}l&&r&&o&&s&&FavSet("add",i,l,r,o,s)}BtnFav()}}function Favorite(){if(CanUseStorage()){favStorage=localStorage.getItem("mechords_favorite");var e=$(".post-list button").all;if(e.length)for(var t=startFav=0;t<e.length;t++){var i=e[t];i.classList.remove("_none");var l=i.parentNode.className.match(/post\-(\d+)/);(l=l?l[1]:0)&&FavFind(l)&&i.classList.add("-active"),i.removeEventListener("click",FavListener),i.addEventListener("click",FavListener)}}}function FavSet(e,t,i,l,r,s){var a,o=$(".post-"+t).all;if(o.length)for(var n=0;n<o.length;n++){var d=$("button,.btn.-like",o[n]).all;if(d.length)for(var c=0;c<d.length;c++)"add"==e?d[c].classList.add("-active"):"del"==e&&d[c].classList.remove("-active")}favStorage=localStorage.getItem("mechords_favorite"),t&&(a=(a=JSON.parse(favStorage))||{},"add"==e?i&&l&&r&&s&&(a[t]=[i,l,r,s]):"del"==e&&delete a[t],localStorage.setItem("mechords_favorite",JSON.stringify(a)))}function FavoriteRes(e){if(Stope(e=e||window.event),t=localStorage.getItem("mechords_favorite"),win.scrollTo(0,0),t&&Object.keys(JSON.parse(t)).length){var t=JSON.parse(t),i=Object.keys(t);if(i.length){for(var l="",r=0;r<i.length;r++){var s=i[r],a=t[s];l+="<li>"+CreateList(s,a[1],a[0],a[3],a[2].split("|"))+"</li>"}body.classList.add("_disable-scroll"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),search_txt.value="คอร์ดเพลงที่ถูกใจ",search_cls.classList.remove("_none"),lightBox.classList.remove("_none"),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -light">'+l+"</ul></div>";var o=$(".post-list",lightBox).self;o&&(o.removeEventListener("click",Stope),o.addEventListener("click",Stope)),Favorite(),search_txt.focus()}}}function FavItem(e,t){if(e&&t){if(FavFind(e))FavSet("del",e),t.classList.remove("-active");else{var i=pageURL.split(/[\#\?\&]/)[0],l=$("h3",postItem).self.innerHTML,r=$(".item-tags a",postItem).all,s="";if(r.length)for(var a=0;a<r.length;a++)s+=(0!=a?"|":"")+r[a].innerText;var o=$("img",postItem).self,n=$(".vdo",postItem).self,d=$("iframe",n).self;FavSet("add",e,i,l,s,o=o?o.getAttribute("src"):d&&(o=!!(o=d.src.match(/embed\/(.*)/))&&o[1].split(/\?/)[0])?"https://i.ytimg.com/vi/"+o+"/default.jpg":""),t.classList.add("-active")}BtnFav()}}function ScrollPos(){var e,t,i,l;me_scroll=$(".me-scroll"),me_scroll.self&&(e=$("#body").left,t=$("#body").width+2*me_scroll.width,i=$("#body").width,l=$(win).height/2-me_scroll.height/2,me_scroll.self.style.top=l+"px",$(win).width>t+36?(me_scroll.self.style.right="",me_scroll.self.style.left=e+i+18+"px"):(me_scroll.self.style.left="",me_scroll.self.style.right=0))}BtnFav(),function(r){if(r){var e=r.querySelector("select"),s=r.querySelectorAll("ol>li"),t=doc.getElementById("strum");function a(e){t||((t=doc.createElement("audio")).type="audio/mpeg",t.id="strum",t.loop=!0,t.hidden=!0,extens.appendChild(t)),o(),e=e.replace("#","s"),t.src="https://src.mechords.com/audios/acoustic-guitar-tuning/"+e+".mp3",t.play()}e.onchange=function(){o();for(var e=(this.value||this.options[this.selectedIndex].value).split("|"),t=0;t<e.length;t++)s[t].innerHTML=e[t]};for(var i=0;i<s.length;i++)s[i].addEventListener("click",function(){var e=this.innerText;e?(a(e),this.classList.add("strumming")):o()});function o(){if(t&&(t.pause(),t.currentTime=0),s)for(var e=0;e<s.length;e++)s[e].classList.remove("strumming")}doc.addEventListener("keyup",function(e){var t,i,l;!r.querySelector(".strumming")||null!=(t={96:"stop",97:5,98:4,99:3,100:2,101:1,102:0}[e.which||e.keyCode])&&("stop"!=t&&(l=(i=s[t]).innerText)?(a(l),i.classList.add("strumming")):o())})}}($("#guitar-tuning").self);var btn_scroll=$(".me-scroll button").all;if(btn_scroll.length){for(var g_scroll=$(".me-scroll>._global").self,c_scholl=$(".me-scroll>._chord").self,i=0;i<btn_scroll.length;i++)btn_scroll[i].addEventListener("click",function(e){Stope(e);var t,i=this.value;"up"==i?SmoothScroll(0):"down"==i?(ChordTb(),chordTb?g_scroll&&c_scholl&&(g_scroll.classList.add("_none"),c_scholl.classList.remove("_none"),(t=$("button",c_scholl).self)&&(CloseTooltip(),ChordScrollStart(t.value),ActiveScrollBtn(t)),ScrollPos()):SmoothScroll($("body").height+bottomSpace-$(win).height)):"stop"==i?(g_scroll.classList.remove("_none"),c_scholl.classList.add("_none"),ChordScrollStop(),ScrollPos()):(ChordScrollStart(i),ActiveScrollBtn(this))});var svg_down='<svg><path d="M16.59,10.942L12,15.522l-4.59-4.58L6,12.353l6,6l6-6L16.59,10.942z" /><path d="M16.59,5.647L12,10.228l-4.59-4.58L6,7.058l6,6l6-6L16.59,5.647z" /></svg>';function ActiveScrollBtn(e){var t=$(".me-scroll>._chord>button").all;if(t.length)for(var i=0;i<t.length;i++){var l=t[i];l.classList.remove("-active"),-1==l.value.indexOf("stop")&&(l.innerHTML="")}e&&"stop"!=e.value&&(e.innerHTML=svg_down,e.classList.add("-active"))}function SmoothScroll(e){var l=window.pageYOffset,r=e-l,s=1e3,a=null;window.requestAnimationFrame(function e(t){a=a||t;var i=t-a;window.scrollTo(0,EaseInOutCubic(i,l,r,s));i<s&&window.requestAnimationFrame(e)})}function EaseInOutCubic(e,t,i,l){return(e/=l/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t}}function Alert(e){var t;alertBox&&e&&(t='<div class="-inner"><pre>'+e+'</pre><button type="button" onclick="Xlert(event);">OK</button></div>',alertBox.innerHTML=t,alertBox.classList.remove("_none"))}function Xlert(e){Stope(e),alertBox&&(alertBox.innerHTML="",alertBox.classList.add("_none"))}var fbComment=!1;function FBPlugin(){var e;$("#fb-comments").self&&200<=$(win).scrollTop&&!fbComment&&((e=doc.createElement("script")).async=!0,e.defer=!0,e.src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v8.0&appId=1458156584324917&autoLogAppEvents=1",body.appendChild(e),fbComment=!0)}function FncBundle(){MostReq(),ScrollPos(),FBPlugin()}doc.addEventListener("click",function(){ResetThePage()}),doc.addEventListener("DOMContentLoaded",function(e){FncBundle()}),win.addEventListener("scroll",function(){FncBundle()}),win.addEventListener("resize",function(){FncBundle()}),window.onload=LoadTime;