(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),s=n.n(i),a=n(3),o=n.n(a),r=(n(13),n(4)),u=n(5),l=n(7),h=n(6),p=(n.p,n(14),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={response:{}},c}return Object(u.a)(n,[{key:"callAPI",value:function(){var t=this;fetch("/api").then((function(t){return t.json()})).then((function(e){t.setState({response:e})}))}},{key:"componentWillMount",value:function(){this.callAPI()}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("h2",{className:"App-intro",children:this.state.response.message})})}}]),n}(s.a.Component)),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),s(t),a(t)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.b7369f6a.chunk.js.map