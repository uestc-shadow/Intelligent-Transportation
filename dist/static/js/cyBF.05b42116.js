(window.webpackJsonp=window.webpackJsonp||[]).push([["cyBF"],{cyBF:function(e,t,i){"use strict";i.r(t);var n=i("wkzA"),o=i.n(n),r=(i("Add6"),[{element:".hamburger-container",popover:{title:"Hamburger",description:"Open && Close sidebar",position:"bottom"}},{element:".breadcrumb-container",popover:{title:"Breadcrumb",description:"Indicate the current page location",position:"bottom"}},{element:".screenfull",popover:{title:"Screenfull",description:"Bring the page into fullscreen",position:"left"}},{element:".international-icon",popover:{title:"Switch language",description:"Switch the system language",position:"left"}},{element:".theme-switch",popover:{title:"Theme Switch",description:"Custom switch system theme",position:"left"}},{element:".tags-view-container",popover:{title:"Tags view",description:"The history of the page you visited",position:"bottom"},padding:0}]),s={name:"Guide",data:function(){return{driver:null}},mounted:function(){this.driver=new o.a},methods:{guide:function(){this.driver.defineSteps(r),this.driver.start()}}},a=i("KHd+"),c=Object(a.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("p",{staticClass:"warn-content"},[e._v("\n    "+e._s(e.$t("guide.description"))+"\n    "),i("a",{attrs:{href:"https://github.com/ZeQiStudio",target:"_blank"}},[e._v("ZeQi Studio\n    ")])]),e._v(" "),i("el-button",{attrs:{icon:"el-icon-question",type:"primary"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.guide(t)}}},[e._v(e._s(e.$t("guide.button")))])],1)},[],!1,null,null,null);c.options.__file="index.vue";t.default=c.exports}}]);