!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=require("react-hot-loader")},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("webpack")},function(e,t,r){"use strict";r(5),r(6)},function(e,t){e.exports=require("babel-register")},function(e,t,r){"use strict";(function(e){var t=l(r(7)),o=l(r(2)),n=l(r(8)),a=l(r(9));function l(e){return e&&e.__esModule?e:{default:e}}!function(){var t=r(0).enterModule;t&&t(e)}();var i=(0,t.default)(),s=r(25);i.use(s("dist",{enableBrotli:!0})),i.get("*",function(e,t){t.send('\n    <html lang="en">\n      <head>\n        <meta charset="UTF-8">\n        <title>Webpack 4</title>\n        <link href="main.css" rel="stylesheet" />\n      </head>\n      <body>\n        <div class="profile">\n          <div id="react-root">'+n.default.renderToString(o.default.createElement(a.default,null))+'</div>\n        </div>\n        <script src="vendors-main-bundle.js"><\/script>\n        <script src="main-bundle.js"><\/script>\n      </body>\n    </html>    \n  ')});var u=process.env.PORT||8080;i.listen(u,console.log("Server's listening on http://localhost:"+u)),function(){var t=r(0).default,o=r(0).leaveModule;t&&(t.register(i,"server","/home/rosewell/Studies/webpack4_2/src/server/express.js"),t.register(!0,"isProd","/home/rosewell/Studies/webpack4_2/src/server/express.js"),t.register(u,"port","/home/rosewell/Studies/webpack4_2/src/server/express.js"),o(e))}()}).call(this,r(1)(e))},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _getPrototypeOf=__webpack_require__(10),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(11),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(12),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(13),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(14),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_post=__webpack_require__(15),_post2=_interopRequireDefault(_post);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}__webpack_require__(16),function(){var e=__webpack_require__(0).enterModule;e&&e(module)}();var AppRoot=function(_Component){function AppRoot(e){(0,_classCallCheck3.default)(this,AppRoot);var t=(0,_possibleConstructorReturn3.default)(this,(AppRoot.__proto__||(0,_getPrototypeOf2.default)(AppRoot)).call(this,e));return t.state={count:0},t}return(0,_inherits3.default)(AppRoot,_Component),(0,_createClass3.default)(AppRoot,[{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement("img",{src:__webpack_require__(18),alt:""}),_react2.default.createElement("h1",null,_post2.default.title),_react2.default.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:_post2.default.__content}}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),AppRoot}(_react.Component),_default=AppRoot;exports.default=_default,function(){var e=__webpack_require__(0).default,t=__webpack_require__(0).leaveModule;e&&(e.register(AppRoot,"AppRoot","/home/rosewell/Studies/webpack4_2/src/components/AppRoot.js"),e.register(_default,"default","/home/rosewell/Studies/webpack4_2/src/components/AppRoot.js"),t(module))}()}).call(this,__webpack_require__(1)(module))},function(e,t){e.exports=require("babel-runtime/core-js/object/get-prototype-of")},function(e,t){e.exports=require("babel-runtime/helpers/classCallCheck")},function(e,t){e.exports=require("babel-runtime/helpers/createClass")},function(e,t){e.exports=require("babel-runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("babel-runtime/helpers/inherits")},function(e,t){e.exports={author:"Mikki",title:"Colombia",__content:'<h1 id="villa-de-leyva">Villa de Leyva</h1>\n<p>Villa de Leyva is a Colombian town northeast of Bogotá. It’s known for its whitewashed colonial buildings, cobbled lanes and vast Plaza Mayor. On that square are the early 17th-century Our Lady of the Rosary church and the House of the First Congress of the United Provinces, where new laws were drafted after independence in 1812. Southwest of the plaza is the Antonio Nariño House Museum, where this war hero died.</p>\n'}},function(e,t,r){},,function(e,t,r){e.exports=r.p+"images/400-204032a1.jpg"},function(e,t,r){"use strict";(function(e,t){!function(){var t=r(0).enterModule;t&&t(e)}();var o=r(20),n=r(3),a=(r(21),r(22).BundleAnalyzerPlugin);e.exports={entry:{main:["babel-runtime/regenerator","webpack-hot-middleware/client?reload=true","./src/main.js"]},mode:"development",output:{filename:"[name]-bundle.js",path:o.resolve(t,"../dist"),publicPath:"/"},devServer:{contentBase:"dist",overlay:!0,stats:{colors:!0},hot:!0},devtool:"source-map",optimization:{splitChunks:{chunks:"all",automaticNameDelimiter:"-",cacheGroups:{vendor:{name:"vendor",chunks:"initial",minChunks:2}}}},resolve:{alias:{vue$:"vue/dist/vue.esm.js"}},module:{rules:[{test:/\.vue$/,loader:"vue-loader"},{test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"},{test:/\.s?css$/,use:[{loader:"style-loader"},{loader:"css-loader",options:{modules:!1,localIdentName:"[name]-[local]-[hash:base64:8]"}},{loader:"sass-loader"}]},{test:/\.html$/,use:[{loader:"html-loader",options:{attrs:["img:src"]}}]},{test:/\.jpg$/,use:[{loader:"file-loader",options:{name:"images/[name].[ext]"}}]},{test:/\.md$/,use:"markdown-with-front-matter-loader"}]},plugins:[new n.HotModuleReplacementPlugin,new a({generateStatsFile:!0,openAnalyzer:!1})]},function(){var t=r(0).default,o=r(0).leaveModule;t&&(t.register(a,"BundleAnalyzerPlugin","/home/rosewell/Studies/webpack4_2/config/webpack.dev.js"),o(e))}()}).call(this,r(1)(e),"/")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("html-webpack-plugin")},function(e,t){e.exports=require("webpack-bundle-analyzer")},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")},function(e,t){e.exports=require("express-static-gzip")}]);