(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contact-contact"],{"2af2":function(n,t,a){"use strict";var e=a("60f3"),i=a.n(e);i.a},"3fda":function(n,t,a){"use strict";a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){}));var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"contact"},[a("v-uni-image",{staticClass:"image",attrs:{src:"https://www.itcast.cn/2018czydz/images/gywmban.jpg"}}),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.callPhone.apply(void 0,arguments)}}},[n._v("联系电话：18331361148（点击拨打）")]),a("v-uni-view",[n._v("联系地址：河南省开封市龙亭区西郊乡河南大学金明校区")])],1),a("v-uni-map",{staticClass:"map",attrs:{latitude:n.latitude,scale:n.scale,longitude:n.longitude,markers:n.markers}})],1)},i=[]},"4e45":function(n,t,a){var e=a("24fb");t=e(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contact .image[data-v-7165918a]{width:%?750?%;height:%?320?%}.contact .info[data-v-7165918a]{padding:%?10?% %?20?%;font-size:%?30?%}.contact .info uni-view[data-v-7165918a]{line-height:%?80?%;border-bottom:1px solid #eee}.contact .map[data-v-7165918a]{width:%?750?%;height:%?750?%}',""]),n.exports=t},"60f3":function(n,t,a){var e=a("4e45");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=a("4f06").default;i("e32e934c",e,!0,{sourceMap:!1,shadowMode:!1})},6313:function(n,t,a){"use strict";a.r(t);var e=a("69c7"),i=a.n(e);for(var r in e)["default"].indexOf(r)<0&&function(n){a.d(t,n,(function(){return e[n]}))}(r);t["default"]=i.a},"69c7":function(n,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{latitude:34.819998,longitude:114.312577,scale:16,markers:[{latitude:34.819998,longitude:114.312577,iconPath:"../../static/henu.png",width:50,height:50}]}},methods:{callPhone:function(){uni.makePhoneCall({phoneNumber:"18331361148",success:function(){}})}}};t.default=e},"9aa7":function(n,t,a){"use strict";a.r(t);var e=a("3fda"),i=a("6313");for(var r in i)["default"].indexOf(r)<0&&function(n){a.d(t,n,(function(){return i[n]}))}(r);a("2af2");var c=a("f0c5"),o=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"7165918a",null,!1,e["a"],void 0);t["default"]=o.exports}}]);