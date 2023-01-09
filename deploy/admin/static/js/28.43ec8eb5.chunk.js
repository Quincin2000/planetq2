(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[28],{493:function(e,t,r){"use strict";var a=r(37),n=r(54),c=(r(2),r(59)),s=r(6);t.a=function(e){var t=function(e){return e.length>1};return Object(s.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(r,o){var i=0===o,l=e.items.length-1===o;return Object(s.jsxs)("li",{className:"".concat(l?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!i&&Object(s.jsx)(n.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:a.d}),t(r)?Object(s.jsx)(c.a,{className:"hover:underline",to:r[1],children:r[0]}):r[0]]},r[0])}))})}},496:function(e,t,r){"use strict";r(2);var a=r(6);t.a=function(){return Object(a.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(a.jsx)("div",{className:"spinner"})})}},504:function(e,t,r){"use strict";var a=r(37),n=r(54),c=(r(2),r(84)),s=r.n(c),o=r(6);t.a=function(e){return s.a.createPortal(Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",tabIndex:-1,onClick:e.onClose,children:Object(o.jsx)("div",{className:"relative my-6 mx-auto w-96",onClick:function(e){return e.stopPropagation()},children:Object(o.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(o.jsxs)("div",{className:"flex items-start justify-between p-5 rounded-t",children:[Object(o.jsx)("div",{className:"text-lg font-semibold",children:e.title}),Object(o.jsx)("button",{type:"button",className:"ml-auto bg-transparent border-0 text-gray-900 float-right text-lg leading-none font-semibold outline-none focus:outline-none",onClick:e.onClose,children:Object(o.jsx)("span",{className:"bg-transparent text-gray-700 h-6 w-6 text-lg block outline-none focus:outline-none",children:Object(o.jsx)(n.a,{icon:a.s})})})]}),Object(o.jsxs)("div",{className:"flex items-center justify-end p-6 rounded-b",children:[Object(o.jsx)("button",{type:"button",className:"mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",onClick:e.onClose,children:e.cancelText}),Object(o.jsx)("button",{type:"button",onClick:e.onConfirm,className:"text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",children:e.okText})]})]})})}),Object(o.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}),document.getElementById("modal-root"))}},521:function(e,t,r){"use strict";var a=r(5),n=r(26),c=r(39),s=r(95),o=Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.musicTrackRead)})),i=Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.musicTrackEdit)})),l=Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.musicTrackCreate)})),u=Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.musicTrackImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:i,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.musicTrackDestroy)})),selectPermissionToImport:u};t.a=d},564:function(e,t,r){"use strict";r(2);var a=r(6);t.a=function(e){if(!e.value&&0!==e.value&&!1!==e.value)return null;var t="".concat(e.prefix?"".concat(e.prefix," "):"").concat(e.value);return Object(a.jsxs)("div",{className:"mb-4",children:[Object(a.jsx)("label",{className:"text-medium text-gray-600 dark:text-gray-400",children:e.label}),Object(a.jsx)("div",{children:t})]})}},572:function(e,t,r){"use strict";var a=r(5),n=r(26),c=r(39),s=r(95),o=Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.regularScheduleRead)})),i=Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.regularScheduleEdit)})),l=Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.regularScheduleCreate)})),u=Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.regularScheduleImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:i,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.regularScheduleDestroy)})),selectPermissionToImport:u};t.a=d},573:function(e,t,r){"use strict";var a=r(5),n={selectLoading:Object(a.a)([function(e){return e.regularSchedule.destroy}],(function(e){return Boolean(e.loading)}))};t.a=n},592:function(e,t,r){"use strict";r(2);var a=r(23),n=r(59),c=r(521),s=r(6);t.a=function(e){var t=Object(a.e)(c.a.selectPermissionToRead),r=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return r().length?Object(s.jsxs)("div",{className:"mb-4",children:[Object(s.jsx)("label",{className:"text-medium text-gray-600 dark:text-gray-400",children:e.label}),r().map((function(e){return r=e,t?Object(s.jsx)("div",{children:Object(s.jsx)(n.a,{className:"text-blue-500 dark:text-blue-400 focus:text-blue-400 hover:text-blue-400",to:"/music-track/".concat(r.id),children:r.trackName})},r.id):Object(s.jsx)("div",{children:r.trackName},r.id);var r}))]}):null}},639:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(23),c=r(24),s=r(4),o=r(129),i=r(5),l=function(e){return e.regularSchedule.view},u=Object(i.a)([l],(function(e){return e.record})),d={selectLoading:Object(i.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:l},b=r(496),m=r(564),j=r(592),g=r(6);var x=function(e){var t=e.record;return e.loading||!t?Object(g.jsx)(b.a,{}):Object(g.jsxs)("div",{children:[Object(g.jsx)(m.a,{label:Object(s.c)("entities.regularSchedule.fields.day"),value:t.day&&Object(s.c)("entities.regularSchedule.enumerators.day.".concat(t.day))}),Object(g.jsx)(j.a,{label:Object(s.c)("entities.regularSchedule.fields.musicTrack"),value:t.musicTrack})]})},f=r(100),h=r(503),O=r(37),y=r(54),v=r(59),p=r(61),k=r(572),w=r(88),C=r(573),T=r(504);var N=function(e){var t=Object(a.useState)(!1),r=Object(f.a)(t,2),c=r[0],o=r[1],i=Object(n.d)(),l=e.match.params.id,u=Object(n.e)(p.a.selectPermissionToRead),d=Object(n.e)(k.a.selectPermissionToEdit),b=Object(n.e)(k.a.selectPermissionToDestroy),m=Object(n.e)(C.a.selectLoading),j=function(){o(!1)};return Object(g.jsxs)("div",{className:"mb-4",children:[d&&Object(g.jsx)(v.a,{to:"/regular-schedule/".concat(l,"/edit"),children:Object(g.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",children:[Object(g.jsx)(y.a,{className:"mr-2",icon:h.a}),Object(s.c)("common.edit")]})}),b&&Object(g.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",disabled:m,onClick:function(){o(!0)},children:[Object(g.jsx)(y.a,{className:"mr-2",icon:h.f}),Object(s.c)("common.destroy")]}),u&&Object(g.jsx)(v.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(g.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(g.jsx)(y.a,{className:"mr-2",icon:O.i}),Object(s.c)("auditLog.menu")]})}),c&&Object(g.jsx)(T.a,{title:Object(s.c)("common.areYouSure"),onConfirm:function(){return j(),void i(w.a.doDestroy(l))},onClose:function(){return j()},okText:Object(s.c)("common.yes"),cancelText:Object(s.c)("common.no")})]})},P=r(493);t.default=function(){var e=Object(n.d)(),t=Object(c.h)(),r=Object(n.e)(d.selectLoading),i=Object(n.e)(d.selectRecord);return Object(a.useEffect)((function(){e(o.a.doFind(t.params.id))}),[e,t.params.id]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(P.a,{items:[[Object(s.c)("dashboard.menu"),"/"],[Object(s.c)("entities.regularSchedule.menu"),"/regular-schedule"],[Object(s.c)("entities.regularSchedule.view.title")]]}),Object(g.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(g.jsx)("h1",{className:"text-lg font-medium mb-6",children:Object(s.c)("entities.regularSchedule.view.title")}),Object(g.jsx)(N,{match:t}),Object(g.jsx)(x,{loading:r,record:i})]})]})}}}]);