(function(e){function t(t){for(var r,a,i=t[0],l=t[1],p=t[2],c=0,d=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,p||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,i=1;i<s.length;i++){var l=s[i];0!==o[l]&&(r=!1)}r&&(n.splice(t--,1),e=a(a.s=s[0]))}return e}var r={},o={app:0},n=[];function a(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=r,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(s,r,function(t){return e[t]}.bind(null,r));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),o=s("5f5b"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-content",[s("router-view")],1)],1)},a=[],i={name:"App"},l=i,p=s("2877"),u=s("6544"),c=s.n(u),d=s("7496"),f=s("a75b"),v=Object(p["a"])(l,n,a,!1,null,null,null),m=v.exports;c()(v,{VApp:d["a"],VContent:f["a"]});var _=s("8c4f"),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("body",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-9 col-md-7 col-lg-5 mx-auto"},[s("div",{staticClass:"card card-signin my-5"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title text-center"},[e._v("Connexion")]),s("form",{staticClass:"form-signin"},[e._m(0),e._m(1),e._m(2),s("button",{staticClass:"btn btn-lg btn-primary btn-block text-uppercase",attrs:{type:"submit"},on:{click:e.redirect}},[e._v("Commencer le test")]),s("hr",{staticClass:"my-4"})])])])])])])])},b=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-label-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""}}),s("label",{attrs:{for:"inputEmail"}},[e._v("Prenom")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-label-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",id:"inputPassword",placeholder:"Password",required:""}}),s("label",{attrs:{for:"inputPassword"}},[e._v("Nom")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-label-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",id:"inputPassword",placeholder:"Password",required:""}}),s("label",{attrs:{for:"inputPassword"}},[e._v("Nom de votre société")])])}],h={methods:{redirect:function(){U.push({name:"Question"})}}},y=h,x=Object(p["a"])(y,g,b,!1,null,null,null),C=x.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[s("v-toolbar",{attrs:{dark:"",prominent:"",height:"100px",color:"#33AEFF"}},[s("v-toolbar-title",[e._v("Questionnaire")])],1)],1),s("div",[s("v-stepper",{attrs:{id:"AHQuestionnaire"},model:{value:e.stepper,callback:function(t){e.stepper=t},expression:"stepper"}},[s("v-stepper-header",[e._l(e.myJson.question,(function(t,r){return s("v-stepper-step",{key:t.question,attrs:{complete:e.stepper>r+1,step:r+1}})})),s("v-divider")],2),s("v-stepper-items",e._l(e.myJson.question,(function(t,r){return s("v-stepper-content",{key:t.question,attrs:{step:r+1}},[s("v-card",{staticClass:"mb-12",attrs:{color:"grey",height:"230px"}},[s("v-card-text",[e._v(" "+e._s(t.texte)+" "),e._l(t.reponse,(function(t){return s("v-checkbox",e._b({key:t.reponse,attrs:{label:t.reponse,height:"0px"}},"v-checkbox",t.status,!1))}))],2)],1),e.stepper<10?s("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.stepper=e.stepper+1}}},[e._v("Valider ")]):e._e(),10==e.stepper?s("div",{staticClass:"text-center"},[s("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[s("v-btn",e._g({attrs:{color:"red lighten-2",dark:""}},r),[e._v(" Envoyer ")])]}}],null,!0),model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[s("v-card",[s("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v(" Validation ")]),s("v-card-text",[e._v(" Etes-vous sûr d'envoyer vos réponses ? ")]),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{to:"/",color:"primary",text:""},on:{click:function(t){e.alert=!1}}},[e._v(" Oui ")])],1)],1)],1)],1):e._e()],1)})),1)],1)],1)])},O=[],V=(s("4160"),s("159b"),s("5bda")),k={name:"AHQuestionnaire",data:function(){return{myJson:V,stepper:1}},methods:{calcul_score:function(){this.myJson.question.forEach((function(e){e.reponse.forEach((function(e){if(e.status,e.good_reponse,score=0,response.status===response.good_response)return score+=1,console.log(score),score}))}))}}},P=k,q=s("8336"),E=s("b0af"),S=s("99d9"),j=s("ac7c"),T=s("169a"),M=s("ce7e"),A=s("2fa4"),J=s("7e85"),L=s("e516"),$=s("9c54"),Q=s("56a4"),B=s("71d9"),N=s("2a7f"),H=Object(p["a"])(P,w,O,!1,null,null,null),D=H.exports;c()(H,{VBtn:q["a"],VCard:E["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VCheckbox:j["a"],VDialog:T["a"],VDivider:M["a"],VSpacer:A["a"],VStepper:J["a"],VStepperContent:L["a"],VStepperHeader:$["a"],VStepperItems:$["b"],VStepperStep:Q["a"],VToolbar:B["a"],VToolbarTitle:N["a"]}),r["default"].use(_["a"]);var F=[{path:"/",name:"Login",component:C},{path:"/questionnaire",name:"Question",component:D}],G=new _["a"]({routes:F}),U=G,I=(s("ddb8"),s("f9e3"),s("2dd8"),s("8bcd"),s("f309"));r["default"].use(I["a"]);var R=new I["a"]({});r["default"].config.productionTip=!1,r["default"].use(o["a"]),new r["default"]({router:U,vuetify:R,render:function(e){return e(m)}}).$mount("#app")},"5bda":function(e){e.exports=JSON.parse('{"question":[{"texte":"Comment ce mot s\'ecrit t-il?","reponse":[{"reponse":"Mississippi","status":false,"good_reponse":true},{"reponse":"Missisipi","status":false,"good_reponse":false},{"reponse":"Misissipi","status":false,"good_reponse":false}]},{"texte":"Le Premier ministre du Royaume-Uni est en 2010 : ","reponse":[{"reponse":"Gordon Brown","status":false,"good_reponse":true},{"reponse":"Tony Blair","status":false,"good_reponse":false},{"reponse":"Margaret Tatcher","status":false,"good_reponse":false}]},{"texte":"On doit l’expression « rideau de fer » à :","reponse":[{"reponse":"Charles de Gaulle","status":false,"good_reponse":false},{"reponse":"Winston Churchill","status":false,"good_reponse":true},{"reponse":"Mr Braux","status":false,"good_reponse":false}]},{"texte":"OTAN signifie :","reponse":[{"reponse":"Organisme transatlantique d\'avancement nordique","status":false,"good_reponse":false},{"reponse":"Organe temporaires des armées unis","status":false,"good_reponse":false},{"reponse":"Organisation du traité de l\'atlantique nort","status":false,"good_reponse":true}]},{"texte":"Le produit est le résultat : ","reponse":[{"reponse":"d\'une addition","status":false,"good_reponse":false},{"reponse":"d\'une soustraction","status":false,"good_reponse":false},{"reponse":"d\'une multiplication","status":false,"good_reponse":true}]},{"texte":"La somme des angles d’un carré est égale à : ","reponse":[{"reponse":"360°","status":false,"good_reponse":true},{"reponse":"180°","status":false,"good_reponse":false},{"reponse":"125°","status":false,"good_reponse":false}]},{"texte":" Quel est le plus grand diviseur commun de 52, 84, 108 et 140 ?  ?","reponse":[{"reponse":"4","status":false,"good_reponse":true},{"reponse":"2","status":false,"good_reponse":false},{"reponse":"7","status":false,"good_reponse":false}]},{"texte":"Lequel de ces bienfaits ne peut être attribué au thé ? ","reponse":[{"reponse":"Prevention des caries","status":false,"good_reponse":false},{"reponse":"Pouvoir aphrodisiaque","status":false,"good_reponse":false},{"reponse":"Lutte contre le veillissement","status":false,"good_reponse":true}]},{"texte":"Lequel de ces fruits a davantage de vitamine C ? ","reponse":[{"reponse":"l\'orange","status":false,"good_reponse":true},{"reponse":"la banane","status":false,"good_reponse":false},{"reponse":"le kiwi","status":false,"good_reponse":false}]},{"texte":"Une tasse de thé ou de café représente :","reponse":[{"reponse":"30 calories","status":false,"good_reponse":true},{"reponse":"10 calories","status":false,"good_reponse":false},{"reponse":"0 calorie","status":false,"good_reponse":false}]}]}')},"8bcd":function(e,t,s){},ddb8:function(e,t){}});
//# sourceMappingURL=app.9a04d958.js.map