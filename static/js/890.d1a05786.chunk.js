"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[890],{34:function(e,n,t){t.d(n,{Q:function(){return i},l:function(){return s}});var r,c,o=t(168),a=t(444),s=a.ZP.button(r||(r=(0,o.Z)(["\n    margin-top: ","px;\n    border: ",";\n    border-radius: ",";\n    background-color: ",";\n    &:hover,\n    &:focus{\n        box-shadow: ",";\n        border-color: ",";\n        color: ",";\n    }\n"])),(function(e){return e.theme.space[5]}),(function(e){return e.theme.borders.item}),(function(e){return e.theme.radii.sm}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.shadows.slim}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),i=a.ZP.button(c||(c=(0,o.Z)(["\n    border: ",";\n    border-radius: ",";\n    background-color: ",";\n    font-size: ",";\n    width: 100px;\n    height: 50px;\n    &:hover,\n    &:focus{\n        box-shadow: ",";\n        border-color: ",";\n        color: ",";\n    }\n"])),(function(e){return e.theme.borders.item}),(function(e){return e.theme.radii.sm}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.fontSizes.m}),(function(e){return e.theme.shadows.slim}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}))},890:function(e,n,t){t.r(n);var r=t(861),c=t(885),o=t(757),a=t.n(o),s=t(791),i=t(689),u=t(731),p=t(595),l=t(742),f=t(240),h=t(34),d=t(184);n.default=function(){var e,n,t=(0,s.useState)([]),o=(0,c.Z)(t,2),m=o[0],x=o[1],v=(0,s.useState)(!1),b=(0,c.Z)(v,2),w=b[0],y=b[1],j=(0,s.useState)(null),g=(0,c.Z)(j,2),k=g[0],Z=g[1],_=(0,i.UO)().movieId,P=(0,i.TH)();(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),Z(null),e.next=5,(0,p.s9)(_);case 5:n=e.sent,x(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Z(e.t0);case 12:return e.prev=12,y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[_]);var C=m.title,S=m.poster_path,G=m.overview,U=m.release_date,O=m.vote_average,Q=m.genres,R=0===m.length&&k&&!w,z=void 0!==Q,T=0!==m.length&&!k&&!w,q=null!==(e=null===(n=P.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,d.jsxs)(f.x,{p:"32px",pt:"0",children:[(0,d.jsxs)(u.rU,{to:q,children:[" ",(0,d.jsx)(h.l,{children:"Go back"})," "]}),w&&(0,d.jsx)(l.a,{}),R&&(0,d.jsx)(f.x,{as:"h3",display:"flex",justifyContent:"center",pt:"32px",children:"Ooops...There is no movie detail info yet"}),T&&(0,d.jsxs)(f.x,{display:"flex",mt:"32px",children:[(0,d.jsx)(f.x,{as:"img",mr:"32px",src:"https://image.tmdb.org/t/p/w500".concat(S),alt:C}),(0,d.jsxs)(f.x,{display:"flex",flexDirection:"column",gridGap:"16px",children:[(0,d.jsx)("h2",{children:C}),(0,d.jsxs)("p",{children:["Overview: ",G]}),(0,d.jsxs)("p",{children:["Release date: ",null!==U&&void 0!==U?U:"2022"]}),(0,d.jsxs)("p",{children:["Rating: ",O]}),z&&(0,d.jsxs)("p",{children:["Genres: ",Q.map((function(e){var n=e.name;return"".concat(n)})).join(", ")]})]})]}),T&&(0,d.jsxs)(f.x,{display:"flex",justifyContent:"center",mt:"32px",gridGap:"16px",children:[(0,d.jsxs)(u.rU,{to:"cast",state:{from:q},children:[" ",(0,d.jsx)(h.Q,{children:"Cast"})," "]}),(0,d.jsxs)(u.rU,{to:"reviews",state:{from:q},children:[" ",(0,d.jsx)(h.Q,{children:"Reviews"})," "]})]}),(0,d.jsx)(s.Suspense,{children:(0,d.jsx)(i.j3,{})})]})}},595:function(e,n,t){t.d(n,{gW:function(){return v},h1:function(){return m},mC:function(){return u},s9:function(){return l},v1:function(){return h}});var r=t(861),c=t(757),o=t.n(c),a=t(44),s="f64cdb7daa669b42fe97bd3c6db06632",i="https://api.themoviedb.org/3/";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.ZP.get("".concat(i,"trending/all/day?api_key=").concat(s));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.ZP.get("".concat(i,"movie/").concat(n,"?api_key=").concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.ZP.get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.ZP.get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.ZP.get("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=890.d1a05786.chunk.js.map