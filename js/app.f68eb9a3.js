(function(e){function t(t){for(var c,l,r=t[0],i=t[1],s=t[2],b=0,p=[];b<r.length;b++)l=r[b],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],c=!0,r=1;r<o.length;r++){var i=o[r];0!==n[i]&&(c=!1)}c&&(a.splice(t--,1),e=l(l.s=o[0]))}return e}var c={},n={app:0},a=[];function l(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=c,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(o,c,function(t){return e[t]}.bind(null,c));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/pokemontv/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var d=i;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},2061:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);var c=o("7a23");const n={id:"app"},a=Object(c["createTextVNode"])("Loading..."),l=Object(c["createTextVNode"])("Main Menu"),r=Object(c["createTextVNode"])("Back to language Selection"),i=Object(c["createTextVNode"])("Back to Channels"),s=Object(c["createTextVNode"])("Back to Episodes"),d=Object(c["createTextVNode"])(" Select Language "),b=Object(c["createTextVNode"])(" No description provided. "),p=Object(c["createTextVNode"])("Watch"),u=Object(c["createTextVNode"])("Watch"),j=["src"];function O(e,t,o,O,h,m){const f=Object(c["resolveComponent"])("b-alert"),k=Object(c["resolveComponent"])("b-col"),g=Object(c["resolveComponent"])("b-row"),C=Object(c["resolveComponent"])("b-button"),w=Object(c["resolveComponent"])("b-list-group-item"),y=Object(c["resolveComponent"])("b-list-group"),x=Object(c["resolveComponent"])("b-card"),_=Object(c["resolveComponent"])("b-card-img"),B=Object(c["resolveComponent"])("b-card-text"),N=Object(c["resolveComponent"])("b-card-body"),V=Object(c["resolveComponent"])("b-container");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[Object(c["createVNode"])(V,{class:"bv-example-row"},{default:Object(c["withCtx"])(()=>[h.loading?(Object(c["openBlock"])(),Object(c["createBlock"])(g,{key:0},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(k,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(f,{show:""},{default:Object(c["withCtx"])(()=>[a]),_:1})]),_:1})]),_:1})):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(g,{class:"mb-5"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(k,null,{default:Object(c["withCtx"])(()=>[0==h.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(C,{key:0,disabled:"",variant:"primary"},{default:Object(c["withCtx"])(()=>[l]),_:1})):Object(c["createCommentVNode"])("",!0),1==h.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(C,{key:1,variant:"primary",onClick:t[0]||(t[0]=e=>m.goBackToMenu(0))},{default:Object(c["withCtx"])(()=>[r]),_:1})):Object(c["createCommentVNode"])("",!0),2==h.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(C,{key:2,variant:"primary",onClick:t[1]||(t[1]=e=>m.goBackToMenu(1))},{default:Object(c["withCtx"])(()=>[i]),_:1})):Object(c["createCommentVNode"])("",!0),3==h.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(C,{key:3,variant:"primary",onClick:t[2]||(t[2]=e=>m.goBackToMenu(2))},{default:Object(c["withCtx"])(()=>[s]),_:1})):Object(c["createCommentVNode"])("",!0)]),_:1})]),_:1}),0==h.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(g,{key:1,class:"mb-5"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(k,{cols:"12",md:"6","offset-md":"3"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(x,{class:"shadow"},{header:Object(c["withCtx"])(()=>[d]),default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(y,null,{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(h.pokemonAPIMapping,(e,t)=>(Object(c["openBlock"])(),Object(c["createBlock"])(w,{button:"",key:t,disabled:h.loading,onClick:e=>m.downloadPokemonApi(t)},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.langText),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})):Object(c["createCommentVNode"])("",!0),1==h.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(g,{key:2},{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(m.sortChannels,e=>(Object(c["openBlock"])(),Object(c["createBlock"])(k,{key:e.channel_id,cols:"12",md:"4",class:"d-flex align-items-stretch"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(x,{"img-alt":"Image","img-top":"",tag:"article",class:"mb-4 shadow","no-body":"","header-class":"channelCard"},{header:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.channel_name),1)]),footer:Object(c["withCtx"])(()=>[Object(c["createVNode"])(C,{squared:"",variant:"primary",class:"fullWidth",onClick:t=>m.setChannel(e.channel_id)},{default:Object(c["withCtx"])(()=>[p]),_:2},1032,["onClick"])]),default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(_,{src:e.channel_images.dashboard_image_1125_1500,class:"noBorderRadius"},null,8,["src"]),Object(c["createVNode"])(N,null,{default:Object(c["withCtx"])(()=>[""!=e.channel_description?(Object(c["openBlock"])(),Object(c["createBlock"])(B,{key:0},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.channel_description),1)]),_:2},1024)):(Object(c["openBlock"])(),Object(c["createBlock"])(B,{key:1},{default:Object(c["withCtx"])(()=>[b]),_:1}))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):Object(c["createCommentVNode"])("",!0),2==h.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(g,{key:3},{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(m.sortEpisodes,e=>(Object(c["openBlock"])(),Object(c["createBlock"])(k,{key:e.id,cols:"12",class:"d-flex align-items-stretch"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(x,{"no-body":"",class:"mb-3 shadow fullWidth"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(g,{"no-gutters":""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(k,{md:"6"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(_,{src:e.images.large,alt:"Image",class:"rounded-0"},null,8,["src"])]),_:2},1024),Object(c["createVNode"])(k,{md:"6"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(N,{title:e.title},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(B,null,{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.description),1)]),_:2},1024),Object(c["createVNode"])(C,{squared:"",variant:"primary",class:"fullWidth",onClick:t=>m.setEpisode(e)},{default:Object(c["withCtx"])(()=>[u]),_:2},1032,["onClick"])]),_:2},1032,["title"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):Object(c["createCommentVNode"])("",!0),3==h.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(g,{key:4},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(k,{cols:"12"},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("iframe",{class:"iframePlayer",src:m.getPlayerUrl()},null,8,j)]),_:1})]),_:1})):Object(c["createCommentVNode"])("",!0)]),_:1})])}var h={name:"App",components:{},data(){return{pokemonAPI:!1,pokemonAPIMapping:!1,selectedLanguage:!1,selectedChannel:!1,selectedEpisode:!1,menu:0,loading:!1,player:{offline_url:!1,stream_url:!1,playerId:!1,playerUrl:!1}}},mounted(){this.downloadApiMappings()},computed:{sortChannels(){return this.pokemonAPI.slice().sort((e,t)=>e.watch_now_order-t.watch_now_order)},sortEpisodes(){for(let e in this.pokemonAPI)if(this.selectedChannel==this.pokemonAPI[e]["channel_id"])return this.pokemonAPI[e]["media"];return[]}},methods:{downloadApiMappings(){console.log("downloadApiMappings"),fetch("https://raw.githubusercontent.com/Slluxx/pokemontv/api/mappings.json").then(e=>e.json()).then(e=>{this.pokemonAPIMapping=e,console.log("api downloaded")})},downloadPokemonApi(e){this.loading=!0,console.log("downloadPokemonApi"),this.selectedChannel=!1,this.selectedEpisode=!1,this.pokemonAPI=!1,this.selectedLanguage=e,fetch("https://raw.githubusercontent.com/Slluxx/pokemontv/api/apiData/"+this.selectedLanguage+".json").then(e=>e.json()).then(e=>{this.pokemonAPI=e,this.menu=1,this.loading=!1})},goBackToMenu(e){console.log("goBackToMenu",e),0==e?(this.selectedLanguage=!1,this.selectedChannel=!1,this.selectedEpisode=!1,this.pokemonAPI=!1,this.menu=e):1==e?(this.selectedChannel=!1,this.selectedEpisode=!1,this.menu=e):2==e?(this.selectedEpisode=!1,this.menu=e):3==e&&(this.menu=e)},setChannel(e){console.log("setChannel"),this.selectedChannel=e,this.menu=2,this.scrollToTop()},setEpisode(e){console.log("setEpisode"),this.selectedEpisode=e.id,this.player.offline_url=e.offline_url,this.player.stream_url=e.stream_url,this.player.playerId=e.id,this.player.playerUrl=this.pokemonAPIMapping[this.selectedLanguage].playerUrl,this.menu=3,this.scrollToTop()},getPlayerUrl(){return console.log(this.player.playerUrl+this.player.playerId),this.scrollToTop(),this.player.playerUrl+this.player.playerId},scrollToTop(){window.scrollTo(0,0)}}},m=(o("d782"),o("6b0d")),f=o.n(m);const k=f()(h,[["render",O]]);var g=k,C=o("b80d");o("f9e3"),o("1a26");const{createApp:w}=o("7a23"),y=w(g);y.use(C["a"]),y.mount("#app")},d782:function(e,t,o){"use strict";o("2061")}});
//# sourceMappingURL=app.f68eb9a3.js.map