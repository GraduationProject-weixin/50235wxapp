(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-info/userinfo"],{"07a1":function(e,t,n){"use strict";n.r(t);var r=n("3c3d"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},"11f5":function(e,t,n){},"2c21":function(e,t,n){"use strict";var r=n("11f5"),u=n.n(r);u.a},"3c3d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,u,a,o){try{var i=e[a](o),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(r,u)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var o=e.apply(t,n);function i(e){a(o,r,u,i,s,"next",e)}function s(e){a(o,r,u,i,s,"throw",e)}i(void 0)}))}}var i={data:function(){return{ruleForm:{},tableName:"",sexTypesOptions:[],sexTypesIndex:0}},onLoad:function(){var t=this;return o(r.default.mark((function n(){var u,a,o,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return u=e.getStorageSync("nowTable"),n.next=3,t.$api.session(u);case 3:if(a=n.sent,t.ruleForm=a.data,t.tableName=u,"yonghu"!=t.tableName){n.next=12;break}return o={page:1,limit:100,dicCode:"sex_types"},n.next=10,t.$api.page("dictionary",o);case 10:i=n.sent,t.sexTypesOptions=i.data.list;case 12:case"end":return n.stop()}}),n)})))()},methods:{yonghusexTypesChange:function(e){this.sexTypesIndex=e.target.value,this.ruleForm.sexValue=this.sexTypesOptions[this.sexTypesIndex].indexName,this.ruleForm.sexTypes=this.sexTypesOptions[this.sexTypesIndex].codeIndex},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},logout:function(){e.setStorageSync("token",""),this.$utils.jump("../login/login")},update:function(){var t=this;return o(r.default.mark((function n(){var u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.ruleForm.username||"yonghu"!=t.tableName){n.next=3;break}return t.$utils.msg("账户不能为空"),n.abrupt("return");case 3:if(t.ruleForm.yonghuName||"yonghu"!=t.tableName){n.next=6;break}return t.$utils.msg("用户姓名不能为空"),n.abrupt("return");case 6:if("yonghu"!=t.tableName||!t.ruleForm.yonghuPhone||t.$validate.isMobile(t.ruleForm.yonghuPhone)){n.next=9;break}return t.$utils.msg("用户手机号应输入正确格式"),n.abrupt("return");case 9:if("yonghu"!=t.tableName||!t.ruleForm.yonghuIdNumber||t.$validate.checkIdCard(t.ruleForm.yonghuIdNumber)){n.next=12;break}return t.$utils.msg("用户身份证号应输入正确格式"),n.abrupt("return");case 12:if(t.ruleForm.yonghuPhoto||"yonghu"!=t.tableName){n.next=15;break}return t.$utils.msg("用户头像不能为空"),n.abrupt("return");case 15:if("yonghu"!=t.tableName||!t.ruleForm.yonghuEmail||t.$validate.isEmail(t.ruleForm.yonghuEmail)){n.next=18;break}return t.$utils.msg("电子邮箱应输入正确格式"),n.abrupt("return");case 18:return u=e.getStorageSync("nowTable"),n.next=21,t.$api.update(u,t.ruleForm);case 21:t.$utils.msgBack("修改成功");case 23:case"end":return n.stop()}}),n)})))()},yonghuPhotoTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.yonghuPhoto=e.$base.url+"upload/"+t.file,e.$forceUpdate()}))},toggleTab:function(e){this.$refs[e].show()}}};t.default=i}).call(this,n("543d")["default"])},"536d":function(e,t,n){"use strict";(function(e){n("48e8");r(n("66fd"));var t=r(n("cbc1"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},5856:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"b7aa"))}},u=function(){var e=this,t=e.$createElement;e._self._c},a=[]},cbc1:function(e,t,n){"use strict";n.r(t);var r=n("5856"),u=n("07a1");for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("2c21");var o,i=n("f0c5"),s=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,"259fe6b4",null,!1,r["a"],o);t["default"]=s.exports}},[["536d","common/runtime","common/vendor"]]]);