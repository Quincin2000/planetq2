(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[30],{492:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(8),a=r(9),i=function(){function e(){Object(n.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,t,r,n){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!n&&!r[e])return null;var o=t[e];return(null===o||void 0===o||null===(a=o[0])||void 0===a?void 0:a.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},493:function(e,t,r){"use strict";var n=r(37),a=r(54),i=(r(2),r(59)),o=r(6);t.a=function(e){var t=function(e){return e.length>1};return Object(o.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(r,l){var c=0===l,s=e.items.length-1===l;return Object(o.jsxs)("li",{className:"".concat(s?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!c&&Object(o.jsx)(a.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:n.d}),t(r)?Object(o.jsx)(i.a,{className:"hover:underline",to:r[1],children:r[0]}):r[0]]},r[0])}))})}},497:function(e,t,r){"use strict";var n=r(100),a=r(2),i=r(491),o=r(492),l=r(596),c=r(6);function s(e){var t=Object(a.useState)(Object(l.a)()),r=Object(n.a)(t,1)[0],s=e.label,u=e.name,d=e.hint,m=e.type,b=e.placeholder,f=e.autoFocus,x=e.autoComplete,j=e.required,h=e.externalErrorMessage,g=e.disabled,p=e.endAdornment,v=Object(i.d)(),O=v.register,y=v.errors,w=v.formState,k=w.touched,N=w.isSubmitted,B=o.a.errorMessage(u,y,k,N,h);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Boolean(s)&&Object(c.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:r,children:[s," ",j?Object(c.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(c.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(c.jsx)("input",{id:r,name:u,type:m,ref:O,onChange:function(t){e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},placeholder:b||void 0,autoFocus:f||void 0,autoComplete:x||void 0,disabled:g,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(B?"border-red-400 text-red-600":"")}),p&&Object(c.jsx)("span",{className:"ml-2 text-gray-700",children:p})]})]}),Object(c.jsx)("div",{className:"text-red-600 text-sm mt-2",children:B}),Boolean(d)&&Object(c.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:d})]})}s.defaultProps={type:"text",required:!1},t.a=s},505:function(e,t,r){"use strict";var n=r(20),a=r(28),i=r(4),o=r(55),l=r.n(o),c={generic:function(e){return a.c().label(e)},string:function(e,t){t=t||{};var r=a.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),t.matches&&(r=r.matches(t.matches)),r},boolean:function(e,t){return a.b().default(!1).label(e)},relationToOne:function(e,t){t=t||{};var r=a.c().nullable(!0).label(e).transform((function(e,t){return t?t.id:null}));return t.required&&(r=r.required()),r},stringArray:function(e,t){t=t||{};var r=a.a().compact().ensure().of(a.h().transform((function(e,t){return""===t?null:e})).trim()).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},relationToMany:function(e,t){t=t||{};var r=a.a().nullable(!0).label(e).transform((function(e,t){return t&&t.length?t.map((function(e){return e.id})):[]}));return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},integer:function(e,t){t=t||{};var r=a.d().transform((function(e,t){return""===t?null:e})).integer().nullable(!0).label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),r},images:function(e,t){t=t||{};var r=a.a().nullable(!0).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},files:function(e,t){t=t||{};var r=a.a().compact().ensure().nullable(!0).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},enumerator:function(e,t){t=t||{};var r=a.h().transform((function(e,t){return""===t?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(n.a)(t.options||[])));return t.required&&(r=r.required(Object(i.c)("validation.string.selected"))),r},email:function(e,t){t=t||{};var r=a.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e).email();return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),t.matches&&(r=r.matches(t.matches)),r},decimal:function(e,t){t=t||{};var r=a.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),r},datetime:function(e,t){t=t||{};var r=a.c().nullable(!0).label(e).transform((function(e,t){return e?l()(t,"YYYY-MM-DD HH:mm").toISOString():null}));return t.required&&(r=r.required()),r},date:function(e,t){t=t||{};var r=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?l()(e).format("YYYY-MM-DD"):null}));return t.required&&(r=r.required()),r}};t.a=c},530:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(100),a=r(1),i=r.n(a),o=r(3),l=r(8),c=r(9),s=r(532),u=r.n(s),d=r(4),m=r(13),b=r(596),f=r(11),x=r(161),j=r.n(x),h=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,null,[{key:"validate",value:function(e,t){if(t){if(t.image&&!e.type.startsWith("image"))throw new Error(Object(d.c)("fileUploader.image"));if(t.storage.maxSizeInBytes&&e.size>t.storage.maxSizeInBytes)throw new Error(Object(d.c)("fileUploader.size",u()(t.storage.maxSizeInBytes)));var r=g(e.name);if(t.formats&&!t.formats.includes(r))throw new Error(Object(d.c)("fileUploader.formats",t.formats.join(", ")))}}},{key:"upload",value:function(){var e=Object(o.a)(i.a.mark((function e(t,r){var n,a,o,l,c,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.validate(t,r),e.next=7;break;case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 7:return n=g(t.name),a=Object(b.a)(),o="".concat(a,".").concat(n),e.next=12,this.fetchFileCredentials(o,r);case 12:return l=e.sent,c=l.uploadCredentials,s=l.downloadUrl,u=l.privateUrl,e.next=18,this.uploadToServer(t,c);case 18:return e.abrupt("return",{id:a,name:t.name,sizeInBytes:t.size,publicUrl:c&&c.publicUrl?c.publicUrl:null,privateUrl:u,downloadUrl:s,new:!0});case 19:case"end":return e.stop()}}),e,this,[[0,4]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var e=Object(o.a)(i.a.mark((function e(t,r){var n,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.a.get(),e.next=3,m.a.get("/tenant/".concat(n,"/file/credentials"),{params:{filename:t,storageId:r.storage.id}});case 3:return a=e.sent,o=a.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var e=Object(o.a)(i.a.mark((function e(t,r){var a,o,l,c,s,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,a=r.url,o=new FormData,l=0,c=Object.entries(r.fields||{});l<c.length;l++)s=Object(n.a)(c[l],2),u=s[0],d=s[1],o.append(u,d);return o.append("file",t),e.abrupt("return",j.a.post(a,o,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()}]),e}();function g(e){if(!e)return null;var t=/(?:\.([^.]+))?$/.exec(e);return t?t[1]:null}},532:function(e,t,r){"use strict";(function(t){!function(t){var r=/^(b|B)$/,n={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},a={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function i(e){var t,i,o,l,c,s,u,d,m,b,f,x,j,h,g,p=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},v=[],O=0,y=void 0,w=void 0;if(isNaN(e))throw new TypeError("Invalid number");return i=!0===p.bits,f=!0===p.unix,t=p.base||2,b=void 0!==p.round?p.round:f?1:2,s=void 0!==p.locale?p.locale:"",u=p.localeOptions||{},x=void 0!==p.separator?p.separator:"",j=void 0!==p.spacer?p.spacer:f?"":" ",g=p.symbols||{},h=2===t&&p.standard||"jedec",m=p.output||"string",l=!0===p.fullform,c=p.fullforms instanceof Array?p.fullforms:[],y=void 0!==p.exponent?p.exponent:-1,o=2<t?1e3:1024,(d=(w=Number(e))<0)&&(w=-w),(-1===y||isNaN(y))&&(y=Math.floor(Math.log(w)/Math.log(o)))<0&&(y=0),8<y&&(y=8),"exponent"===m?y:(0===w?(v[0]=0,v[1]=f?"":n[h][i?"bits":"bytes"][y]):(O=w/(2===t?Math.pow(2,10*y):Math.pow(1e3,y)),i&&o<=(O*=8)&&y<8&&(O/=o,y++),v[0]=Number(O.toFixed(0<y?b:0)),v[0]===o&&y<8&&void 0===p.exponent&&(v[0]=1,y++),v[1]=10===t&&1===y?i?"kb":"kB":n[h][i?"bits":"bytes"][y],f&&(v[1]="jedec"===h?v[1].charAt(0):0<y?v[1].replace(/B$/,""):v[1],r.test(v[1])&&(v[0]=Math.floor(v[0]),v[1]=""))),d&&(v[0]=-v[0]),v[1]=g[v[1]]||v[1],!0===s?v[0]=v[0].toLocaleString():0<s.length?v[0]=v[0].toLocaleString(s,u):0<x.length&&(v[0]=v[0].toString().replace(".",x)),"array"===m?v:(l&&(v[1]=c[y]?c[y]:a[h][y]+(i?"bit":"byte")+(1===v[0]?"":"s")),"object"===m?{value:v[0],symbol:v[1],exponent:y}:v.join(j)))}i.partial=function(e){return function(t){return i(t,e)}},e.exports=i}("undefined"!=typeof window&&window)}).call(this,r(47))},559:function(e,t,r){"use strict";var n,a=r(1),i=r.n(a),o=r(20),l=r(3),c=r(100),s=r(37),u=r(54),d=r(2),m=r(4),b=r(7),f=r(530),x=r(159),j=r(160),h=r(6),g=j.a.div(n||(n=Object(x.a)(["\n  /* The Modal (background) */\n  .modal {\n    display: block;\n    position: fixed; /* Stay in place */\n    z-index: 9999; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0, 0, 0); /* Fallback color */\n    background-color: rgba(\n      0,\n      0,\n      0,\n      0.9\n    ); /* Black w/ opacity */\n  }\n\n  /* Modal Content (Image) */\n  .modal-content {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n  }\n\n  /* Caption of Modal Image (Image Text) - Same Width as the Image */\n  #caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n  }\n\n  /* Add Animation - Zoom in the Modal */\n  .modal-content,\n  #caption {\n    animation-name: zoom;\n    animation-duration: 0.6s;\n  }\n\n  @keyframes zoom {\n    from {\n      transform: scale(0);\n    }\n    to {\n      transform: scale(1);\n    }\n  }\n\n  /* The Close Button */\n  .close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n  }\n\n  .close:hover,\n  .close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  /* 100% Image Width on Smaller Screens */\n  @media only screen and (max-width: 700px) {\n    .modal-content {\n      width: 100%;\n    }\n  }\n"])));var p=function(e){return Object(h.jsx)(g,{children:Object(h.jsxs)("div",{className:"modal",children:[Object(h.jsx)("span",{className:"close",onClick:e.onClose,children:"\xd7"}),Object(h.jsx)("img",{className:"modal-content",src:e.src,alt:e.alt})]})})};t.a=function(e){var t=Object(d.useState)(!1),r=Object(c.a)(t,2),n=r[0],a=r[1],x=Object(d.useState)(null),j=Object(c.a)(x,2),g=j[0],v=j[1],O=Object(d.useRef)(),y=Object(d.useState)(null),w=Object(c.a)(y,2),k=w[0],N=w[1],B=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]},C=function(){var t=Object(l.a)(i.a.mark((function t(r){var n,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,(n=r.target.files)&&n.length){t.next=4;break}return t.abrupt("return");case 4:return l=n[0],f.a.validate(l,{storage:e.storage,image:!0}),a(!0),t.next=9,f.a.upload(l,{storage:e.storage,image:!0});case 9:l=t.sent,O.current.value="",a(!1),e.onChange([].concat(Object(o.a)(B()),[l])),t.next=21;break;case 15:t.prev=15,t.t0=t.catch(0),O.current.value="",console.error(t.t0),a(!1),b.a.showMessage(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}(),q=e.max,M=e.readonly,S=Object(h.jsxs)("label",{className:"".concat(n?"opacity-50 cursor-default":"cursor-pointer"," inline-block mt-2 mb-2 text-sm px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"),children:[Object(h.jsx)(u.a,{className:"mr-2",icon:s.m}),Object(m.c)("fileUploader.upload"),Object(h.jsx)("input",{style:{display:"none"},disabled:n||M,accept:"image/*",type:"file",onChange:C,ref:O})]});return Object(h.jsxs)("div",{children:[M||q&&B().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl}})).length>=q?null:S,B()&&B().length?Object(h.jsx)("div",{className:"mt-2 flex flex-row flex-wrap",children:B().map((function(t){return Object(h.jsxs)("div",{className:"mr-2 mb-2 rounded-md",style:{height:"100px"},onMouseEnter:function(){return N(t.id)},onMouseLeave:function(){return N(null)},children:[Object(h.jsx)("img",{alt:t.name,src:t.downloadUrl,className:"rounded-md",style:{width:"100px",height:"100px",objectFit:"cover"}}),Object(h.jsxs)("div",{className:"relative rounded-b-md text-center",style:{display:k===t.id?"block":"none",bottom:"1.5rem",width:"100px",backgroundColor:"rgba(0, 0, 0, 0.5)"},children:[Object(h.jsx)("button",{type:"button",className:"text-white",onClick:function(){return function(e){v({src:e.downloadUrl,alt:e.name})}(t)},children:Object(h.jsx)(u.a,{icon:s.n})}),!M&&Object(h.jsx)("button",{type:"button",className:"text-white ml-2",onClick:function(){return r=t.id,void e.onChange(B().filter((function(e){return e.id!==r})));var r},children:Object(h.jsx)(u.a,{icon:s.s})})]})]},t.id)}))}):null,g&&Object(h.jsx)(p,{src:g.src,alt:g.alt,onClose:function(){v(null)}})]})}},567:function(e,t,r){"use strict";var n=r(2),a=r(559),i=r(491),o=r(492),l=r(6);function c(e){var t=e.label,r=e.name,c=e.hint,s=e.storage,u=e.max,d=e.required,m=e.externalErrorMessage,b=Object(i.d)(),f=b.errors,x=b.formState,j=x.touched,h=x.isSubmitted,g=b.setValue,p=b.watch,v=b.register;Object(n.useEffect)((function(){v({name:r})}),[v,r]);var O=o.a.errorMessage(r,f,j,h,m);return Object(l.jsxs)("div",{children:[Boolean(t)&&Object(l.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",children:[t," ",d?Object(l.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(l.jsx)(a.a,{storage:s,value:p(r),onChange:function(t){g(r,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},max:u}),Object(l.jsx)("div",{className:"text-red-600 text-sm mt-2",children:O}),Boolean(c)&&Object(l.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:c})]})}c.defaultProps={max:void 0,required:!1},t.a=c},645:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(4),i=r(12),o=r(0),l=r(100),c=r(503),s=r(37),u=r(54),d=r(508),m=r(491),b=r(23),f=r(18),x=r(26),j=r(505),h=r(171),g=r(567),p=r(497),v=r(28),O=r(6),y=v.e().shape({firstName:j.a.string(Object(a.c)("user.fields.firstName"),{max:80}),lastName:j.a.string(Object(a.c)("user.fields.lastName"),{max:175}),phoneNumber:j.a.string(Object(a.c)("user.fields.phoneNumber"),{matches:/^[0-9]/,max:24}),avatars:j.a.images(Object(a.c)("user.fields.avatars"),{max:1})});var w=function(e){var t=Object(b.d)(),r=Object(b.e)(x.a.selectLoadingUpdateProfile),i=Object(b.e)(x.a.selectCurrentUser),j=Object(n.useState)((function(){var e=i||{};return{firstName:e.firstName,lastName:e.lastName,phoneNumber:e.phoneNumber,avatars:e.avatars||[]}})),v=Object(l.a)(j,1)[0],w=Object(m.c)({resolver:Object(d.yupResolver)(y),mode:"all",defaultValues:v}),k=function(e){t(f.a.doUpdateProfile(e))};return Object(O.jsx)(m.a,Object(o.a)(Object(o.a)({},w),{},{children:Object(O.jsxs)("form",{onSubmit:w.handleSubmit(k),children:[Object(O.jsxs)("div",{className:"w-full md:w-md lg:w-md",children:[Object(O.jsx)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",children:Object(a.c)("user.fields.email")}),Object(O.jsx)("div",{className:"mt-1",children:i.email})]}),Object(O.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md mt-4",children:Object(O.jsx)(p.a,{name:"firstName",label:Object(a.c)("user.fields.firstName"),autoComplete:"firstName",autoFocus:!0})}),Object(O.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md mt-4",children:Object(O.jsx)(p.a,{name:"lastName",label:Object(a.c)("user.fields.lastName"),autoComplete:"lastName"})}),Object(O.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md mt-4",children:Object(O.jsx)(p.a,{name:"phoneNumber",label:Object(a.c)("user.fields.phoneNumber"),autoComplete:"phoneNumber",prefix:"+"})}),Object(O.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md mt-4",children:Object(O.jsx)(g.a,{name:"avatars",label:Object(a.c)("user.fields.avatars"),storage:h.a.values.userAvatarsProfiles,max:1})}),Object(O.jsxs)("div",{className:"pt-4",children:[Object(O.jsxs)("button",{className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",disabled:r,type:"button",onClick:w.handleSubmit(k),children:[Object(O.jsx)(u.a,{className:"mr-2",icon:c.e}),Object(a.c)("common.save")]}),Object(O.jsxs)("button",{disabled:r,onClick:function(){Object.keys(v).forEach((function(e){w.setValue(e,v[e])}))},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(O.jsx)(u.a,{className:"mr-2",icon:s.t}),Object(a.c)("common.reset")]}),e.onCancel?Object(O.jsxs)("button",{disabled:r,onClick:function(){return e.onCancel()},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(O.jsx)(u.a,{className:"mr-2",icon:s.s}),Object(a.c)("common.cancel")]}):null]})]})}))},k=r(493);t.default=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(k.a,{items:[[Object(a.c)("dashboard.menu"),"/"],[Object(a.c)("auth.profile.title")]]}),Object(O.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(O.jsx)("h1",{className:"text-lg font-medium mb-6",children:Object(a.c)("auth.profile.title")}),Object(O.jsx)(w,{onCancel:function(){return Object(i.b)().push("/")}})]})]})}}}]);