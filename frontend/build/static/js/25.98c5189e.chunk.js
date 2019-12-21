(this["webpackJsonpvocation-frontend"]=this["webpackJsonpvocation-frontend"]||[]).push([[25],{1127:function(e,t,a){},1252:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(5),r=a(10),c=a(9),o=a(3),s=a(11),i=a(0),u=a.n(i),m=a(6),d=a(671),p=a(87),f=a(15),b=(a(1127),a(672),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={page_data:{current_trips:[],pending_trips:[],upcoming_trips:[]}},a.handleCancelConfirmModalOpen=a.handleCancelConfirmModalOpen.bind(Object(o.a)(a)),a.handleCancelSubmit=a.handleCancelSubmit.bind(Object(o.a)(a)),a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.geCurrTripList().then((function(t){t?e.setState({page_data:t.page_data}):f.a.showError("Get current trip list")}))}},{key:"handleCancelSubmit",value:function(e,t,a){e.preventDefault()}},{key:"handleCancelConfirmModalOpen",value:function(e,t,a){var n=this;e.preventDefault(),Object(d.confirmAlert)({customUI:function(e){var l=e.onClose;return u.a.createElement("div",{className:"custom-ui bg-primary p-4 text-white"},u.a.createElement("h2",null,"Confirm to cancel"),u.a.createElement("div",null,u.a.createElement("h5",null,"Are you sure that you want to cancel the request?"),u.a.createElement("h6",{className:"text-white mt-1 mb-1"},"Listing Name : ","Pending"===a?n.state.page_data.pending_trips[t].rooms.name:"Current"===a?n.state.page_data.current_trips[t].rooms.name:n.state.page_data.upcoming_trips[t].rooms.name),u.a.createElement("form",{acceptCharset:"UTF-8",onSubmit:function(e){return n.handleCancelSubmit(e,t,a)},id:"cancel_reservation_form",method:"post",name:"cancel_reservation_form"},u.a.createElement("div",{className:"panel-body p-0"},u.a.createElement("div",{id:"decline_reason_container"},u.a.createElement("p",null," Help us improve your experience. What's the main reason for Cancelling this Reservation? "),u.a.createElement("p",null," ",u.a.createElement("strong",null," Your response is not shared with the host ")," "),u.a.createElement("div",{className:"select"},u.a.createElement("select",{id:"cancel_reason",name:"cancel_reason"},u.a.createElement("option",{value:!0},"Why are you declining "),u.a.createElement("option",{value:"no_longer_need_accommodations"},"I no longer need accommodations "),u.a.createElement("option",{value:"travel_dates_changed"},"My travel have dates changed "),u.a.createElement("option",{value:"made_the_reservation_by_accident"},"I made the reservation by accident "),u.a.createElement("option",{value:"I_have_an_extenuating_circumstance"},"I have  an extenuating circumstance "),u.a.createElement("option",{value:"my_host_needs_to_cancel"},"My host need to cancel "),u.a.createElement("option",{value:"uncomfortable_with_the_host"},"I'm uncomfortable with the host "),u.a.createElement("option",{value:"place_not_okay"},"The place is not what I expected "),u.a.createElement("option",{value:"other"},"Other"))),u.a.createElement("div",{id:"cancel_reason_other_div",className:"hide row-space-top-2"},u.a.createElement("label",{htmlFor:"cancel_reason_other"},"Why are you cancel?"),u.a.createElement("textarea",{id:"decline_reason_other",name:"decline_reason_other",rows:2}))),u.a.createElement("label",{htmlFor:"cancel_message",className:"row-space-top-2"},"Type message to Host"),u.a.createElement("textarea",{cols:40,id:"cancel_message",name:"cancel_message",rows:4}),u.a.createElement("input",{type:"hidden",name:"id",id:"reserve_code",defaultValue:!0})),u.a.createElement("div",{className:"panel-footer"},u.a.createElement("input",{type:"hidden",name:"decision",defaultValue:"decline"}),u.a.createElement("button",{className:"btn btn-danger",onClick:l},"No"),u.a.createElement("button",{className:"btn btn-success ml-4",type:"submit"},"Yes, I want to cancel!")))))}})}},{key:"render",value:function(){var e=this,t=[],a=this.state.page_data.current_trips.map((function(e){return u.a.createElement("tr",{key:e.id},u.a.createElement("td",{className:"status"},u.a.createElement("span",{className:"label label-orange label-info"},u.a.createElement("span",{className:"label label-"+e.status_color},e.status)),u.a.createElement("br",null)),u.a.createElement("td",{className:"location"},u.a.createElement(m.b,{to:"#"}," ",e.rooms.name," "),u.a.createElement("br",null),e.room_address_city_or_state),u.a.createElement("td",{className:"host"}," ",u.a.createElement(m.b,{to:"#"}," ",e.host," ")," "),u.a.createElement("td",{className:"dates"}," ",e.dates_subject," "),u.a.createElement("td",null,u.a.createElement("ul",{className:"list-unstyled"},u.a.createElement("li",{className:"row-space-1"}))))}));t.push(u.a.createElement("div",{className:"panel row-space-4",key:"current_trips"},u.a.createElement("div",{className:"panel-header"}," Current Trips "),u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table panel-body panel-light"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Status"),u.a.createElement("th",null,"Location"),u.a.createElement("th",null,"Host"),u.a.createElement("th",null,"Dates"),u.a.createElement("th",null,"Options")),a.length?a:u.a.createElement("tr",null,u.a.createElement("td",{colSpan:"100%",className:"text-center"},"You have no trips!"))))))),a=this.state.page_data.pending_trips.map((function(t,a){return u.a.createElement("tr",{key:t.id},u.a.createElement("td",{className:"status"},u.a.createElement("span",{className:"label label-orange label-info"},u.a.createElement("span",{className:"label label-"+t.status_color},t.status)),u.a.createElement("br",null)),u.a.createElement("td",{className:"location"},u.a.createElement(m.b,{to:"#"}," ",t.rooms.name," "),u.a.createElement("br",null),t.room_address_city_or_state),u.a.createElement("td",{className:"host"}," ",u.a.createElement(m.b,{to:"#"}," ",t.host," ")," "),u.a.createElement("td",{className:"dates"}," ",t.dates_subject," "),u.a.createElement("td",null,u.a.createElement("ul",{className:"list-unstyled"},u.a.createElement("li",{className:"row-space-1"},u.a.createElement(m.b,{to:"#",className:"button-steel",title:"Are you sure that you want to cancel the request? Any money transacted will be refunded.",onClick:function(n){return e.handleCancelConfirmModalOpen(n,a,t.status)}},"Cancel Request")))))})),t.push(u.a.createElement("div",{className:"panel row-space-4",key:"pending_trips"},u.a.createElement("div",{className:"panel-header"},"Pending Trips"),u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table panel-body panel-light"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Status"),u.a.createElement("th",null,"Location"),u.a.createElement("th",null,"Host"),u.a.createElement("th",null,"Dates"),u.a.createElement("th",null,"Options")),a.length?a:u.a.createElement("tr",null,u.a.createElement("td",{colSpan:"100%",className:"text-center"},"You have no trips!"))))))),a=this.state.page_data.upcoming_trips.map((function(e){return u.a.createElement("tr",{key:e.id},u.a.createElement("td",{className:"status"},u.a.createElement("span",{className:"label label-orange label-info"},u.a.createElement("span",{className:"label label-"+e.status_color},e.status)),u.a.createElement("br",null)),u.a.createElement("td",{className:"location"},u.a.createElement(m.b,{to:"#"}," ",e.rooms.name," "),u.a.createElement("br",null),e.room_address_city_or_state),u.a.createElement("td",{className:"host"}," ",u.a.createElement(m.b,{to:"#"}," ",e.host," ")," "),u.a.createElement("td",{className:"dates"},e.dates_subject),u.a.createElement("td",null,u.a.createElement("ul",{className:"list-unstyled"},u.a.createElement("li",{className:"row-space-1"}))))})),t.push(u.a.createElement("div",{className:"panel row-space-4",key:"upcoming_trips"},u.a.createElement("div",{className:"panel-header"},"Upcoming Trips"),u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table panel-body panel-light"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Status"),u.a.createElement("th",null,"Location"),u.a.createElement("th",null,"Host"),u.a.createElement("th",null,"Dates"),u.a.createElement("th",null,"Options")),a.length?a:u.a.createElement("tr",null,u.a.createElement("td",{colSpan:"100%",className:"text-center"},"You have no trips!")))))));var n=t||"<div>No Data</div>";return u.a.createElement("div",{className:"col-md-12 p0"},n)}}]),t}(u.a.PureComponent));t.default=b},671:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l,r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var a=document.createElementNS(e,"filter");a.setAttribute("id","gaussian-blur"),a.appendChild(t);var n=document.createElementNS(e,"svg");n.setAttribute("id","react-confirm-alert-firm-svg"),n.setAttribute("class","react-confirm-alert-svg"),n.appendChild(a),document.body.appendChild(n)}(),function(e){var t=document.getElementById("react-confirm-alert");t?(0,i.render)(o.default.createElement(d,e),t):(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t),(0,i.render)(o.default.createElement(d,e),t))}(e)};var c=a(0),o=u(c),s=u(a(1)),i=a(18);function u(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=(l=n=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,r=Array(l),c=0;c<l;c++)r[c]=arguments[c];return a=n=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),n.handleClickButton=function(e){e.onClick&&e.onClick(),n.close()},n.handleClickOverlay=function(e){var t=n.props,a=t.closeOnClickOutside,l=t.onClickOutside,r=e.target===n.overlay;a&&r&&(l(),n.close())},n.close=function(){document.body.classList.remove("react-confirm-alert-body-element"),function(){var e=document.getElementById("react-confirm-alert");(0,i.unmountComponentAtNode)(e),e.parentNode.removeChild(e)}(),function(){var e=document.getElementById("react-confirm-alert-firm-svg");e.parentNode.removeChild(e),document.body.children[0].classList.remove("react-confirm-alert-blur")}()},n.keyboardClose=function(e){var t=n.props,a=t.closeOnEscape,l=t.onKeypressEscape,r=27===e.keyCode;a&&r&&(l(e),n.close())},n.componentDidMount=function(){document.addEventListener("keydown",n.keyboardClose,!1)},n.componentWillUnmount=function(){document.removeEventListener("keydown",n.keyboardClose,!1),n.props.willUnmount()},n.renderCustomUI=function(){var e=n.props,t=e.title,a=e.message;return(0,e.customUI)({title:t,message:a,onClose:n.close})},m(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.message,l=t.buttons,r=t.childrenElement,c=t.customUI;return o.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},o.default.createElement("div",{className:"react-confirm-alert"},c?this.renderCustomUI():o.default.createElement("div",{className:"react-confirm-alert-body"},a&&o.default.createElement("h1",null,a),n,r(),o.default.createElement("div",{className:"react-confirm-alert-button-group"},l.map((function(t,a){return o.default.createElement("button",{key:a,onClick:function(){return e.handleClickButton(t)}},t.label)}))))))}}]),t}(c.Component),n.propTypes={title:s.default.string,message:s.default.string,buttons:s.default.array.isRequired,childrenElement:s.default.func,customUI:s.default.func,closeOnClickOutside:s.default.bool,closeOnEscape:s.default.bool,willUnmount:s.default.func,onClickOutside:s.default.func,onKeypressEscape:s.default.func},n.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null}},{label:"Confirm",onClick:function(){return null}}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},l);t.default=d},672:function(e,t,a){},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(4),l=a(5),r=a(7),c=new(function(){function e(){Object(n.a)(this,e)}return Object(l.a)(e,[{key:"getContent",value:function(){return Object(r.d)("".concat(r.a,"/ajax/dashboard/index"))}},{key:"getRoomList",value:function(){return Object(r.d)("".concat(r.a,"/ajax/dashboard/getlistings"))}},{key:"getRoomData",value:function(e,t){return Object(r.d)("".concat(r.a,"/ba/api/set_baroomid?roomid=").concat(e,"&&ba_roomid=").concat(t))}},{key:"changeRoomState",value:function(e){return Object(r.e)("".concat(r.a,"/ajax/change_status_of_room"),e)}},{key:"getRoomReservation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?Object(r.d)("".concat(r.a,"/ajax/dashboard/my_reservations")+e):Object(r.d)("".concat(r.a,"/ajax/dashboard/my_reservations"))}},{key:"acceptReservation",value:function(e,t){return Object(r.e)("".concat(r.a,"/ajax/reservation/accept/").concat(e),t)}},{key:"declineReservation",value:function(e,t){return Object(r.e)("".concat(r.a,"/ajax/reservation/decline/").concat(e),t)}},{key:"getOldTripList",value:function(){return Object(r.d)("".concat(r.a,"/ajax/dashboard/getOldTripsList"))}},{key:"geCurrTripList",value:function(){return Object(r.d)("".concat(r.a,"/ajax/dashboard/getcurrentTripsList"))}},{key:"removeUserPhoneNubmer",value:function(e){return Object(r.e)("".concat(r.a,"/ajax/removeUserPhoneNumber"),e)}},{key:"saveUserProfile",value:function(e){return Object(r.e)("".concat(r.a,"/ajax/saveuserprofile"),e)}},{key:"uploadProfilePhoto",value:function(e){return Object(r.f)("".concat(r.a,"/ajax/profilepictureupload"),e)}},{key:"getVerification",value:function(){return Object(r.d)("".concat(r.a,"/ajax/dashboard/getverifycation"))}},{key:"updateVerifyCode",value:function(e){return Object(r.e)("".concat(r.a,"/ajax/sendVerifyCode"),e)}},{key:"verifyPhoneNumber",value:function(e){return Object(r.e)("".concat(r.a,"/ajax/verifyPhoneNumber"),e)}},{key:"getBACredential",value:function(){return Object(r.d)("".concat(r.a,"/ba/account/get_ba_credential"))}},{key:"submitBAKeys",value:function(e){return Object(r.e)("".concat(r.a,"/ba/account/register"),e)}},{key:"updateBAKeys",value:function(){return Object(r.d)("".concat(r.a,"/ba/api/update"))}},{key:"getApiKey",value:function(){return Object(r.d)("".concat(r.a,"/ajax/dashboard/getapikeys"))}},{key:"generateApiKey",value:function(){return Object(r.e)("".concat(r.a,"/ajax/dashboard/generateapikeys"))}}]),e}())}}]);
//# sourceMappingURL=25.98c5189e.chunk.js.map