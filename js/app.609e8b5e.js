(function(e){function t(t){for(var c,n,r=t[0],s=t[1],i=t[2],b=0,p=[];b<r.length;b++)n=r[b],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(p.length)p.shift()();return l.push.apply(l,i||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],c=!0,r=1;r<o.length;r++){var s=o[r];0!==a[s]&&(c=!1)}c&&(l.splice(t--,1),e=n(n.s=o[0]))}return e}var c={},a={app:0},l=[];function n(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=c,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/pokemontv/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var d=s;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"2abb":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);var c=o("7a23");const a={id:"app"},l=Object(c["createTextVNode"])("Loading..."),n=Object(c["createElementVNode"])("p",null," The pokemon API returns data specific to the country it was fetched from. Since all data is fetched from GitHub, it needs to use a proxy to mask the location. Sometimes a proxy doesnt work or a country has no proxy available. ",-1),r=Object(c["createTextVNode"])(" All OK"),s=Object(c["createTextVNode"])(" Data was successfully fetched through a proxy "),i=Object(c["createTextVNode"])("Most OK"),d=Object(c["createTextVNode"])(" No proxy was available. Some episodes may not be available. "),b=Object(c["createTextVNode"])("Main Menu"),p=Object(c["createTextVNode"])("Back to language Selection"),u=Object(c["createTextVNode"])("Back to Channels"),O=Object(c["createTextVNode"])("Back to Episodes"),j=Object(c["createTextVNode"])(" Select Country "),h=Object(c["createTextVNode"])("?"),m=Object(c["createTextVNode"])("All OK"),f=Object(c["createTextVNode"])("Most OK"),k=Object(c["createTextVNode"])(" No description provided. "),C=Object(c["createTextVNode"])("Watch"),y=Object(c["createTextVNode"])("Watch"),x=["src"];function g(e,t,o,g,w,_){const N=Object(c["resolveComponent"])("b-alert"),V=Object(c["resolveComponent"])("b-col"),v=Object(c["resolveComponent"])("b-row"),B=Object(c["resolveComponent"])("b-badge"),T=Object(c["resolveComponent"])("b-card"),P=Object(c["resolveComponent"])("b-button"),I=Object(c["resolveComponent"])("b-list-group-item"),A=Object(c["resolveComponent"])("b-list-group"),E=Object(c["resolveComponent"])("b-card-img"),M=Object(c["resolveComponent"])("b-card-text"),S=Object(c["resolveComponent"])("b-card-body"),L=Object(c["resolveComponent"])("b-container");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createVNode"])(L,{class:"bv-example-row"},{default:Object(c["withCtx"])(()=>[w.loading?(Object(c["openBlock"])(),Object(c["createBlock"])(v,{key:0},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(V,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(N,{show:""},{default:Object(c["withCtx"])(()=>[l]),_:1})]),_:1})]),_:1})):Object(c["createCommentVNode"])("",!0),!w.loading&&0==w.menu&&w.showCountryInfo?(Object(c["openBlock"])(),Object(c["createBlock"])(v,{key:1,class:"mb-5"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(V,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(T,{class:"text-left"},{default:Object(c["withCtx"])(()=>[n,Object(c["createElementVNode"])("p",null,[Object(c["createVNode"])(B,{variant:"success"},{default:Object(c["withCtx"])(()=>[r]),_:1}),s]),Object(c["createElementVNode"])("p",null,[Object(c["createVNode"])(B,{variant:"info"},{default:Object(c["withCtx"])(()=>[i]),_:1}),d])]),_:1})]),_:1})]),_:1})):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(v,{class:"mb-5"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(V,null,{default:Object(c["withCtx"])(()=>[0==w.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(P,{key:0,disabled:"",variant:"primary"},{default:Object(c["withCtx"])(()=>[b]),_:1})):Object(c["createCommentVNode"])("",!0),1==w.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(P,{key:1,variant:"primary",onClick:t[0]||(t[0]=e=>_.goBackToMenu(0))},{default:Object(c["withCtx"])(()=>[p]),_:1})):Object(c["createCommentVNode"])("",!0),2==w.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(P,{key:2,variant:"primary",onClick:t[1]||(t[1]=e=>_.goBackToMenu(1))},{default:Object(c["withCtx"])(()=>[u]),_:1})):Object(c["createCommentVNode"])("",!0),3==w.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(P,{key:3,variant:"primary",onClick:t[2]||(t[2]=e=>_.goBackToMenu(2))},{default:Object(c["withCtx"])(()=>[O]),_:1})):Object(c["createCommentVNode"])("",!0)]),_:1})]),_:1}),0==w.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(v,{key:2,class:"mb-5"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(V,{cols:"12",md:"6","offset-md":"3"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(T,{class:"shadow"},{header:Object(c["withCtx"])(()=>[j,Object(c["createVNode"])(P,{pill:"",size:"sm",variant:"primary",style:{float:"right"},class:"m-0 p-0 px-2",onClick:t[3]||(t[3]=e=>_.toggleCountyInfo())},{default:Object(c["withCtx"])(()=>[h]),_:1})]),default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(A,null,{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(w.pokemonAPIMapping,(e,t)=>(Object(c["openBlock"])(),Object(c["createBlock"])(I,{button:"",key:t,disabled:w.loading,onClick:e=>_.downloadPokemonApi(t)},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.langText)+" ",1),e.lastProxyFetchSuccess?(Object(c["openBlock"])(),Object(c["createBlock"])(B,{key:0,variant:"success",style:{float:"right"}},{default:Object(c["withCtx"])(()=>[m]),_:1})):(Object(c["openBlock"])(),Object(c["createBlock"])(B,{key:1,variant:"info",style:{float:"right"}},{default:Object(c["withCtx"])(()=>[f]),_:1}))]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})):Object(c["createCommentVNode"])("",!0),1==w.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(v,{key:3},{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(_.sortChannels,e=>(Object(c["openBlock"])(),Object(c["createBlock"])(V,{key:e.channel_id,cols:"12",md:"4",class:"d-flex align-items-stretch"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(T,{"img-alt":"Image","img-top":"",tag:"article",class:"mb-4 shadow","no-body":"","header-class":"channelCard"},{header:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.channel_name),1)]),footer:Object(c["withCtx"])(()=>[Object(c["createVNode"])(P,{squared:"",variant:"primary",class:"fullWidth",onClick:t=>_.setChannel(e.channel_id)},{default:Object(c["withCtx"])(()=>[C]),_:2},1032,["onClick"])]),default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(E,{src:e.channel_images.dashboard_image_1125_1500,class:"noBorderRadius"},null,8,["src"]),Object(c["createVNode"])(S,null,{default:Object(c["withCtx"])(()=>[""!=e.channel_description?(Object(c["openBlock"])(),Object(c["createBlock"])(M,{key:0},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.channel_description),1)]),_:2},1024)):(Object(c["openBlock"])(),Object(c["createBlock"])(M,{key:1},{default:Object(c["withCtx"])(()=>[k]),_:1}))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):Object(c["createCommentVNode"])("",!0),2==w.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(v,{key:4},{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(_.sortEpisodes,e=>(Object(c["openBlock"])(),Object(c["createBlock"])(V,{key:e.id,cols:"12",class:"d-flex align-items-stretch"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(T,{"no-body":"",class:"mb-3 shadow fullWidth"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(v,{"no-gutters":""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(V,{md:"6"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(E,{src:e.images.large,alt:"Image",class:"rounded-0"},null,8,["src"])]),_:2},1024),Object(c["createVNode"])(V,{md:"6"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(S,{title:e.title},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(M,null,{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.description),1)]),_:2},1024),Object(c["createVNode"])(P,{squared:"",variant:"primary",class:"fullWidth",onClick:t=>_.setEpisode(e)},{default:Object(c["withCtx"])(()=>[y]),_:2},1032,["onClick"])]),_:2},1032,["title"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):Object(c["createCommentVNode"])("",!0),3==w.menu?(Object(c["openBlock"])(),Object(c["createBlock"])(v,{key:5},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(V,{cols:"12"},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("iframe",{class:"iframePlayer",src:_.getPlayerUrl(),allowfullscreen:""},null,8,x)]),_:1})]),_:1})):Object(c["createCommentVNode"])("",!0)]),_:1})])}var w={name:"App",components:{},data(){return{pokemonAPI:!1,pokemonAPIMapping:!1,selectedLanguage:!1,selectedChannel:!1,selectedEpisode:!1,showCountryInfo:!1,menu:0,loading:!1,player:{offline_url:!1,stream_url:!1,playerId:!1,playerUrl:!1}}},mounted(){this.downloadApiMappings()},computed:{sortChannels(){return this.pokemonAPI.slice().sort((e,t)=>e.watch_now_order-t.watch_now_order)},sortEpisodes(){for(let e in this.pokemonAPI)if(this.selectedChannel==this.pokemonAPI[e]["channel_id"])return this.pokemonAPI[e]["media"];return[]}},methods:{downloadApiMappings(){console.log("downloadApiMappings"),fetch("https://raw.githubusercontent.com/Slluxx/pokemontv/api/mappings.json").then(e=>e.json()).then(e=>{this.pokemonAPIMapping=e,console.log("api downloaded")})},downloadPokemonApi(e){this.loading=!0,console.log("downloadPokemonApi"),this.selectedChannel=!1,this.selectedEpisode=!1,this.pokemonAPI=!1,this.selectedLanguage=e,fetch("https://raw.githubusercontent.com/Slluxx/pokemontv/api/apiData/"+this.selectedLanguage+".json").then(e=>e.json()).then(e=>{this.pokemonAPI=e,this.menu=1,this.loading=!1,this.scrollToTop()})},goBackToMenu(e){console.log("goBackToMenu",e),0==e?(this.selectedLanguage=!1,this.selectedChannel=!1,this.selectedEpisode=!1,this.pokemonAPI=!1,this.menu=e):1==e?(this.selectedChannel=!1,this.selectedEpisode=!1,this.menu=e):2==e?(this.selectedEpisode=!1,this.menu=e):3==e&&(this.menu=e),this.scrollToTop()},setChannel(e){console.log("setChannel"),this.selectedChannel=e,this.menu=2,this.scrollToTop()},setEpisode(e){console.log("setEpisode"),this.selectedEpisode=e.id,this.player.offline_url=e.offline_url,this.player.stream_url=e.stream_url,this.player.playerId=e.id,this.player.playerUrl=this.pokemonAPIMapping[this.selectedLanguage].playerUrl,this.menu=3,this.scrollToTop()},getPlayerUrl(){return console.log(this.player.playerUrl+this.player.playerId),this.scrollToTop(),this.player.playerUrl+this.player.playerId},scrollToTop(){window.scrollTo(0,0)},toggleCountyInfo(){this.scrollToTop(),this.showCountryInfo=!this.showCountryInfo}}},_=(o("c0e2"),o("6b0d")),N=o.n(_);const V=N()(w,[["render",g]]);var v=V,B=o("b80d");o("f9e3"),o("1a26");const{createApp:T}=o("7a23"),P=T(v);P.use(B["a"]),P.mount("#app")},c0e2:function(e,t,o){"use strict";o("2abb")}});
//# sourceMappingURL=app.609e8b5e.js.map