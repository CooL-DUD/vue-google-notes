(function(){"use strict";var e={7152:function(e,t,o){var n=o(9242),s=o(3396);function a(e,t){const o=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(o)}var l=o(89);const r={},d=(0,l.Z)(r,[["render",a]]);var c=d,i=o(2483);function u(e,t,o,n,a,l){const r=(0,s.up)("header-keep"),d=(0,s.up)("note-form"),c=(0,s.up)("note-list");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r,{onDelete:l.deleteSelectedNotes},null,8,["onDelete"]),(0,s.Wm)(d,{onCreate:l.createNote},null,8,["onCreate"]),(0,s.Wm)(c,{notes:e.searchNotes,onSelect:l.selectNote,onEdit:l.returnNote},null,8,["notes","onSelect","onEdit"])],64)}var p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABbUlEQVR4Ae3aAUQEQRQG4OUmwiEAQIQQIAQIAQGCgICQkJAACUAAQkEQAAJEu11cSSldOlWR4hBJp90ozdt53QSgs/e09v70fh4YzPuWmbeYQIMergTGRmapVRc2NJxHva4Hc4UBPsOeWb9pnhWvBcUhRF9eACgMIW5QAJAjAAFyBCBAjgAEyBGAADkCECBHQADkCACAHAEAkJcCFPDnAFEvp1cz7B432SV1du8P7J63mepTfg0bQIdD7OIat4sH0cEgJsA3z5RwVtzbNdtKHx7Avexxp0kbq1gAOhpmUZxlu1vGAaS3CywNHY8AAe6WxYD0choIcDMvBtD5BA6ATkbFZ4D2B8BuobjWef9PW4BzwN9EznJmbJNttR90Ep+NfzfYNh+NrNtHf+YUQKdjfi78WH4NDyAYan5NAXoGFKAABShAAf8NkHQRUP01gMLSRrcAFJYm83hqULaRWaSwdF9g8027Y1Zae5tAA54vA5QFBsesCogAAAAASUVORK5CYII=";const h=e=>((0,s.dD)("data-v-f0fdd826"),e=e(),(0,s.Cn)(),e),m={class:"header-keep"},v=h((()=>(0,s._)("svg",{focusable:"false",viewBox:"0 0 24 24"},[(0,s._)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",fill:"#5f6368"})],-1))),f=h((()=>(0,s._)("div",{class:"header-keep__label"},[(0,s._)("div",{class:"logo-keep"},[(0,s._)("img",{src:p,alt:"Google Keep logo"}),(0,s._)("label",{class:"label-keep"},"Keep")])],-1))),N={class:"header-keep__searchbar"},_=h((()=>(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[(0,s._)("path",{d:"M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"}),(0,s._)("path",{d:"M9 8h2v9H9zm4 0h2v9h-2z"})],-1)));function b(e,t,o,n,a,l){const r=(0,s.up)("button-keep"),d=(0,s.up)("search-keep");return(0,s.wg)(),(0,s.iD)("header",m,[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[v])),_:1}),f,(0,s._)("div",N,[(0,s.Wm)(d)]),(0,s.Wm)(r,{onClick:l.deleteSelectedNotes},{default:(0,s.w5)((()=>[_])),_:1},8,["onClick"])])}const w=e=>((0,s.dD)("data-v-655b60df"),e=e(),(0,s.Cn)(),e),g={class:"search-keep"},A=w((()=>(0,s._)("svg",{focusable:"false",height:"24px",viewBox:"0 0 24 24",width:"24px",xmlns:"http://www.w3.org/2000/svg"},[(0,s._)("path",{d:"M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"}),(0,s._)("path",{d:"M0,0h24v24H0V0z",fill:"none"})],-1))),y=w((()=>(0,s._)("svg",{focusable:"false",height:"24px",viewBox:"0 0 24 24",width:"24px",xmlns:"http://www.w3.org/2000/svg"},[(0,s._)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),(0,s._)("path",{d:"M0 0h24v24H0z",fill:"none"})],-1)));function S(e,t,o,n,a,l){const r=(0,s.up)("button-keep"),d=(0,s.up)("input-keep");return(0,s.wg)(),(0,s.iD)("div",g,[(0,s.Wm)(r,{class:"search-keep__btn"},{default:(0,s.w5)((()=>[A])),_:1}),(0,s.Wm)(d,{"model-value":e.searchQuery,"onUpdate:modelValue":e.setSearchQuery},null,8,["model-value","onUpdate:modelValue"]),(0,s.Wm)(r,{class:"search-keep__btn",onClick:l.clearSearchbar},{default:(0,s.w5)((()=>[y])),_:1},8,["onClick"])])}var k=o(65),C={name:"SearchKeep",methods:{...(0,k.OI)({setSearchQuery:"note/setSearchQuery"}),clearSearchbar(){this.$store.commit("note/setSearchQuery","")}},computed:{...(0,k.rn)({searchQuery:e=>e.note.searchQuery})}};const I=(0,l.Z)(C,[["render",S],["__scopeId","data-v-655b60df"]]);var Q=I,x={name:"HeaderKeep",components:{SearchKeep:Q},methods:{deleteSelectedNotes(){this.$emit("delete")}}};const V=(0,l.Z)(x,[["render",b],["__scopeId","data-v-f0fdd826"]]);var B=V,D=o(7139);const H=e=>((0,s.dD)("data-v-da2194ee"),e=e(),(0,s.Cn)(),e),z={class:"checkmark"},E=H((()=>(0,s._)("span",{class:"checkmark__box"},null,-1))),O={class:"note-item__title"},W={class:"note-item__list"},M={class:"note-item__body"};function U(e,t,o,n,a,l){const r=(0,s.up)("edit-note");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",{class:"note-item",onClick:t[1]||(t[1]=(...e)=>l.editNote&&l.editNote(...e))},[(0,s._)("div",z,[(0,s._)("input",{type:"checkbox",class:"checkbox",onClick:t[0]||(t[0]=(...e)=>l.selectNote&&l.selectNote(...e))}),E]),(0,s._)("p",O,(0,D.zw)(o.note.title),1),(0,s._)("div",W,[(0,s._)("p",M,(0,D.zw)(o.note.body),1)])]),(0,s.Wm)(r,{show:a.show,note:o.note,onEdit:l.editNote},null,8,["show","note","onEdit"])],64)}const F=e=>((0,s.dD)("data-v-4b0137b6"),e=e(),(0,s.Cn)(),e),Y={class:"edit-note"},K=F((()=>(0,s._)("h4",null,"Редактирование заметки",-1)));function j(e,t,o,a,l,r){const d=(0,s.up)("input-keep");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.wy)((0,s._)("div",Y,[K,(0,s.Wm)(d,{modelValue:o.note.title,"onUpdate:modelValue":t[0]||(t[0]=e=>o.note.title=e),type:"text",placeholder:"Название"},null,8,["modelValue"]),(0,s.Wm)(d,{modelValue:o.note.body,"onUpdate:modelValue":t[1]||(t[1]=e=>o.note.body=e),type:"textarea",placeholder:"Описание"},null,8,["modelValue"])],512),[[n.F8,o.show]]),(0,s.wy)((0,s._)("div",{class:"bg",onClick:t[2]||(t[2]=(...e)=>r.editNote&&r.editNote(...e))},null,512),[[n.F8,o.show]])],64)}o(7658);const L={state:()=>({notes:[{title:"Title 1",body:"Body 1",id:1},{title:"Title 2",body:"Body 2",id:2},{title:"Title 3",body:"Body 3",id:3},{title:"Title 4",body:"Body 4",id:4},{title:"Title 5",body:"Body 5",id:5}],searchQuery:"",selectedNotes:[]}),getters:{searchNotes(e){return e.notes.filter((t=>t.title.toLowerCase().includes(e.searchQuery.toLowerCase())))}},mutations:{setNotes(e,t){e.notes=t},addNote(e,t){e.notes.push(t)},setSelectedNotes(e,t){e.selectedNotes=t},addSelectedNote(e,t){e.selectedNotes.push(t)},removeSelectedNote(e,t){e.selectedNotes=e.selectedNotes.filter((e=>e.id!==t.id))},removeNotes(e,t){e.notes=e.notes.filter((e=>!t.includes(e)))},setSearchQuery(e,t){e.searchQuery=t}},namespaced:!0};var R=(0,k.MT)({state:{searchQuery:""},modules:{note:L}}),Z={name:"editNote",emits:["edit"],props:{note:{type:Object,required:!0},show:{type:Boolean,required:!0}},methods:{editNote(){R.commit("note/removeNotes",[this.note]),R.commit("note/addNote",this.note),this.$emit("edit")},...(0,k.OI)({addNote:"note/addNote",removeNotes:"note/removeNotes"})}};const J=(0,l.Z)(Z,[["render",j],["__scopeId","data-v-4b0137b6"]]);var T=J,P={name:"NoteItem",emits:["select","edit"],components:{EditNote:T},data(){return{show:!1}},props:{note:{type:Object,required:!0}},methods:{selectNote(){this.$emit("select",this.note,event.target.checked),event.target.parentElement.querySelector(".checkmark__box").classList.toggle("--active"),event.target.parentElement.parentElement.classList.toggle("--active"),event.stopPropagation()},editNote(){this.show=!this.show}}};const $=(0,l.Z)(P,[["render",U],["__scopeId","data-v-da2194ee"]]);var q=$;const G=e=>((0,s.dD)("data-v-730b9a78"),e=e(),(0,s.Cn)(),e),X={key:0,class:"note-list"},ee={key:1,class:"empty"},te=G((()=>(0,s._)("svg",{class:"MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1qxuxwg-MuiSvgIcon-root",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"LightbulbOutlinedIcon"},[(0,s._)("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})],-1))),oe=G((()=>(0,s._)("p",null,"Заметок нет",-1))),ne=[te,oe];function se(e,t,o,n,a,l){const r=(0,s.up)("note-item");return o.notes.length>0?((0,s.wg)(),(0,s.iD)("div",X,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.notes,(e=>((0,s.wg)(),(0,s.j4)(r,{key:e.id,note:e,onSelect:l.selectNote,onEdit:l.editNote},null,8,["note","onSelect","onEdit"])))),128))])):((0,s.wg)(),(0,s.iD)("div",ee,ne))}var ae={name:"NoteList",emits:["select","edit"],components:{NoteItem:q},props:{notes:{type:Array,required:!0}},methods:{selectNote(e,t){this.$emit("select",e,t)},editNote(e){this.$emit("edit",e)}}};const le=(0,l.Z)(ae,[["render",se],["__scopeId","data-v-730b9a78"]]);var re=le;const de=e=>((0,s.dD)("data-v-f2be71ee"),e=e(),(0,s.Cn)(),e),ce={class:"note-form"},ie={class:"note-form__item"},ue=de((()=>(0,s._)("label",{for:"",class:"item__label"},null,-1))),pe={class:"note-form__item"},he=de((()=>(0,s._)("label",{for:"",class:"item__label"},null,-1)));function me(e,t,o,a,l,r){const d=(0,s.up)("input-keep");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("form",ce,[(0,s.wy)((0,s._)("div",ie,[ue,(0,s.Wm)(d,{modelValue:l.note.title,"onUpdate:modelValue":t[0]||(t[0]=e=>l.note.title=e),placeholder:"Введите заголовок",type:"text",class:"title"},null,8,["modelValue"])],512),[[n.F8,l.show]]),(0,s._)("div",pe,[he,(0,s.Wm)(d,{modelValue:l.note.body,"onUpdate:modelValue":t[1]||(t[1]=e=>l.note.body=e),placeholder:"Заметка...",type:"textarea",onFocus:t[2]||(t[2]=e=>l.show=!0),class:"body"},null,8,["modelValue"])])]),(0,s.wy)((0,s._)("div",{class:"bg",onClick:t[3]||(t[3]=(...e)=>r.createNote&&r.createNote(...e))},null,512),[[n.F8,l.show]])],64)}const ve={type:"button",class:"button-keep"};function fe(e,t,o,n,a,l){return(0,s.wg)(),(0,s.iD)("button",ve,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])}var Ne={name:"ButtonKeep"};const _e=(0,l.Z)(Ne,[["render",fe],["__scopeId","data-v-79627daa"]]);var be=_e,we={name:"NoteForm",emits:["create"],components:{ButtonKeep:be},data(){return{note:{title:"",body:""},show:!1}},methods:{createNote(){(this.note.title.trim()||this.note.body.trim())&&(this.note.id=Date.now(),this.$emit("create",this.note),this.note={title:"",body:""}),this.show=!1}}};const ge=(0,l.Z)(we,[["render",me],["__scopeId","data-v-f2be71ee"]]);var Ae=ge,ye={name:"MainView",components:{HeaderKeep:B,NoteItem:q,NoteList:re,NoteForm:Ae,EditNote:T},data(){return{note:""}},methods:{createNote(e){R.commit("note/addNote",e)},selectNote(e,t){t?R.commit("note/addSelectedNote",e):R.commit("note/removeSelectedNote",e)},deleteSelectedNotes(){R.commit("note/removeNotes",R.state.note.selectedNotes)},returnNote(e){this.note=e},...(0,k.OI)({setNotes:"note/setNotes",addNote:"note/addNote",setSearchQuery:"note/setSearchQuery",setSelectedNotes:"note/setSelectedNotes",addSelectedNote:"note/addSelectedNote",removeSelectedNote:"note/removeSelectedNote",removeNotes:"note/removeNotes"})},computed:{...(0,k.Se)({searchNotes:"note/searchNotes"}),...(0,k.rn)({notes:e=>e.notes,selectedNotes:e=>e.selectedNotes,openModal:e=>e.openModal})}};const Se=(0,l.Z)(ye,[["render",u]]);var ke=Se;const Ce=[{path:"/",name:"main",component:ke}],Ie=(0,i.p7)({history:(0,i.PO)("/vue-google-notes/"),routes:Ce});var Qe=Ie;const xe=["value"];function Ve(e,t,o,n,a,l){return(0,s.wg)(),(0,s.iD)("input",{value:o.modelValue,onInput:t[0]||(t[0]=(...e)=>l.updateInput&&l.updateInput(...e)),type:"text",class:"input-keep"},null,40,xe)}var Be={name:"InputKeep",props:{modelValue:[String,Number]},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const De=(0,l.Z)(Be,[["render",Ve],["__scopeId","data-v-a869492c"]]);var He=De,ze=[be,He];const Ee=(0,n.ri)(c);ze.forEach((e=>Ee.component(e.name,e))),Ee.use(R).use(Qe).mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,a){if(!n){var l=1/0;for(i=0;i<e.length;i++){n=e[i][0],s=e[i][1],a=e[i][2];for(var r=!0,d=0;d<n.length;d++)(!1&a||l>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[d])}))?n.splice(d--,1):(r=!1,a<l&&(l=a));if(r){e.splice(i--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[n,s,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,l=n[0],r=n[1],d=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(s in r)o.o(r,s)&&(o.m[s]=r[s]);if(d)var i=d(o)}for(t&&t(n);c<l.length;c++)a=l[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(i)},n=self["webpackChunkvuenotes"]=self["webpackChunkvuenotes"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(7152)}));n=o.O(n)})();
//# sourceMappingURL=app.2c563b25.js.map