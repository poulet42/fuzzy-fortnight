(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e){e.exports={data:[{id:"a1",channel:"private",content:"Bonjour, ceci est le premier message du channel priv\xe9",ts:1544812820421},{id:"a2",channel:"private",content:"Ceci est le second message du channel priv\xe9",ts:1544812830622},{id:"a3",channel:"private",content:"Incroyable on dirait presque un vrai chat",ts:1544812880721},{id:"a4",channel:"private",content:"wuw",ts:1544817890583},{id:"b1",channel:"public",content:"Bonjour, ceci est le premier message du channel public",ts:1544817910583},{id:"a5",channel:"private",content:"Bonjour, ceci est le premier message du channel priv\xe9",ts:1544817980585},{id:"b2",channel:"public",content:"Bonjour, ceci est le second message du channel public",ts:1544817980788},{id:"b6",channel:"private",content:"Bonjour, ceci est le premier message du channel priv\xe9",ts:1544817990883}]}},,,function(e){e.exports={data:[{id:"private",label:"Priv\xe9"},{id:"public",label:"Public"}]}},,,function(e,n,t){e.exports=t(29)},,,,,,function(e,n,t){},,,,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),s=t(9),r=t.n(s),i=(t(19),t(1)),o=t(2),l=t(4),u=t(3),m=t(5),h=t(6),d=t(10),p=t(7),g=t(11),v=t.n(g),f=function(e){return new Promise(function(n){setTimeout(n,2e3,p.data.filter(function(n){return n.channel===e}))})},b=function(e){var n=e.channel,t=e.content,a={id:v()(),ts:Date.now(),content:t,channel:n};return p.data=Object(h.a)(p.data).concat([a]),new Promise(function(e){setTimeout(e,0,a)})},E=t(12),_=t.n(E),C=function(e){var n=e.channels,t=e.selected,a=e.onChannelChange;return c.a.createElement("nav",{className:"Chat__nav"},n.map(function(e){var n=e.id,s=e.label;return c.a.createElement("button",{key:n,className:_()("Chat__channel-btn",{"Chat__channel-btn--selected":t===n}),onClick:function(){return a(n)}},s)}))},w=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(c)))).state={message:""},t.handleMessageChange=function(e){t.setState({message:e.currentTarget.value})},t.handleMessageSubmit=function(e){e.preventDefault(),t.props.onMessageSend(t.state.message),t.setState({message:""})},t}return Object(m.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.state.message,n=this.props.placeholder;return c.a.createElement("form",{className:"Chat__input-wrapper",onSubmit:this.handleMessageSubmit},c.a.createElement("input",{type:"text",className:"Chat__input",value:e,onChange:this.handleMessageChange,placeholder:n}),c.a.createElement("input",{type:"submit",hidden:!0}))}}]),n}(c.a.Component),y=(t(23),function(e){var n=e.id,t=e.ts,a=e.content,s=e.username;return c.a.createElement("div",{key:n,className:"Message"},c.a.createElement("img",{src:"https://api.adorable.io/avatars/36/".concat(s,".jpg"),className:"Message__avatar",alt:s}),c.a.createElement("div",{className:"Message__body"},c.a.createElement("time",{className:"Message__time",dateTime:t},function(e){return new Intl.DateTimeFormat("fr-FR",{hour:"numeric",minute:"numeric"}).format(new Date(e))}(t)),c.a.createElement("span",{className:"Message__text"},a)))});y.defaultProps={ts:0,content:"",username:"Corentin"};var j=y,M=(t(25),function(e){e.className;return c.a.createElement("div",{className:"Loader"},c.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 64 64"},c.a.createElement("g",{strokeWidth:"2",fill:"none",stroke:"currentColor",strokeMiterlimit:"10"},c.a.createElement("circle",{cx:"32",cy:"32",r:"30",strokeLinecap:"square",opacity:"0.4"}),c.a.createElement("path",{d:"M32,2A30,30,0,0,1,62,32","data-cap":"butt","data-color":"color-2"}))))}),k=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(c)))).state={messages:[],loading:!0},t.loadMessages=function(){t.setState({loading:!0});var e=t.props.channel;f(t.props.channel).then(function(n){e===t.props.channel&&t.setState({messages:n,loading:!1})})},t.sendMessage=function(e){var n=t.props.channel;b({channel:n,content:e}).then(function(e){t.setState(function(n){return{messages:Object(h.a)(n.messages).concat([e])}})})},t}return Object(m.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadMessages()}},{key:"componentDidUpdate",value:function(e){e.channel!==this.props.channel&&this.loadMessages()}},{key:"render",value:function(){var e=this.state,n=e.messages,t=e.loading,a=this.props.channel;return c.a.createElement("main",{className:"Chat__main"},t?c.a.createElement("div",{className:"Chat__main-overlay"},c.a.createElement(M,null)):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"Chat__messages"},n.map(function(e){return c.a.createElement(j,Object.assign({key:e.id},e))})),c.a.createElement(w,{onMessageSend:this.sendMessage,placeholder:"Envoyer un message au channel ".concat(a)})))}}]),n}(c.a.Component),O=(t(27),function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(c)))).state={channels:[],selected:null,loading:!0},t.changeChannel=function(e){t.setState({selected:e})},t}return Object(m.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;new Promise(function(e){setTimeout(e,2e3,d.data)}).then(function(n){e.setState({channels:n,loading:!1})})}},{key:"render",value:function(){var e=this.state,n=e.channels,t=e.selected,a=e.loading;return c.a.createElement("div",{className:"Chat"},c.a.createElement("aside",{className:"Chat__aside"},a?c.a.createElement("div",{className:"Chat__aside-overlay"},c.a.createElement(M,null)):c.a.createElement(C,{channels:n,onChannelChange:this.changeChannel,selected:t})),t&&c.a.createElement(k,{channel:t}))}}]),n}(c.a.Component)),N=function(){return c.a.createElement(O,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,2,1]]]);
//# sourceMappingURL=main.db3e8093.chunk.js.map