(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{3487:function(e,t,n){"use strict";n.r(t);var a=n(16),o=n(15),c=n(21),i=n(20),l=n(28),r=n(0),s=n.n(r),d=n(11),u=n(2471),h=n(156),m=n.n(h),p=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).hideModal=function(){var t=e.props.onClose;t&&t()},e.signWithQRCode=function(){e.setState({body:s.a.createElement("div",null,s.a.createElement(u.a,{onScan:e.onCodeScan}))})},e.onCodeScan=function(t){var n=t.code;e.setState({body:s.a.createElement("div",null,s.a.createElement("h1",null,n))})},e.state={body:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.transaction;this.setState({body:s.a.createElement("div",{className:"text-center"},s.a.createElement(m.a,{size:512,style:{width:"100%",height:"auto"},value:e}),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-primary",onClick:this.signWithQRCode},"Sign with QR Code"))})}},{key:"render",value:function(){var e=this.state.body;return this.props.transaction,s.a.createElement(d.c,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered"},s.a.createElement(d.f,{className:"text-center",toggle:this.hideModal},"Sign Transaction"),s.a.createElement(d.d,null,e))}}]),n}(s.a.Component);t.default=Object(l.connect)(function(e){return{account:e.app.account}},{})(p)}}]);