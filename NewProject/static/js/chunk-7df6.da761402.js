(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7df6"],{"/Yx2":function(v,e,l){},"63kc":function(v,e,l){"use strict";var d=l("b3eh");l.n(d).a},FiM2:function(v,e,l){"use strict";l.r(e);var d={name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null,isMoving:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var v=this;if(!this.isMoving){var e=window.pageYOffset,l=0;this.isMoving=!0,this.interval=setInterval(function(){var d=Math.floor(v.easeInOutQuad(10*l,e,-e,500));d<=v.backPosition?(window.scrollTo(0,v.backPosition),clearInterval(v.interval),v.isMoving=!1):window.scrollTo(0,d),l++},16.7)}},easeInOutQuad:function(v,e,l,d){return(v/=d/2)<1?l/2*v*v+e:-l/2*(--v*(v-2)-1)+e}}},i=(l("MHt6"),l("KHd+")),o=Object(i.a)(d,function(){var v=this.$createElement,e=this._self._c||v;return e("transition",{attrs:{name:this.transitionName}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:this.customStyle,on:{click:this.backToTop}},[e("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[e("title",[this._v("回到顶部")]),this._v(" "),e("g",[e("path",{attrs:{d:"M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z","fill-rule":"evenodd"}})])])])])},[],!1,null,"3ade483b",null);o.options.__file="index.vue";var _={name:"BackToTopDemo",components:{BackToTop:o.exports},data:function(){return{myBackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}}},a=(l("63kc"),Object(i.a)(_,function(){var v=this,e=v.$createElement,l=v._self._c||e;return l("div",{staticClass:"components-container"},[l("code",[v._v(v._s(v.$t("components.backToTopTips1")))]),v._v(" "),l("code",[v._v(v._s(v.$t("components.backToTopTips2")))]),v._v(" "),v._m(0),v._v(" "),l("el-tooltip",{attrs:{placement:"top",content:"tooltip"}},[l("back-to-top",{attrs:{"custom-style":v.myBackToTopStyle,"visibility-height":300,"back-position":50,"transition-name":"fade"}})],1)],1)},[function(){var v=this,e=v.$createElement,l=v._self._c||e;return l("div",{staticClass:"placeholder-container"},[l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")]),v._v(" "),l("div",[v._v("placeholder")])])}],!1,null,"1801aaa8",null));a.options.__file="backToTop.vue";e.default=a.exports},MHt6:function(v,e,l){"use strict";var d=l("/Yx2");l.n(d).a},b3eh:function(v,e,l){}}]);