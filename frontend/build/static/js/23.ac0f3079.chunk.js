(this["webpackJsonpvocation-frontend"]=this["webpackJsonpvocation-frontend"]||[]).push([[23],{1231:function(e,t,a){},1263:function(e,t,a){"use strict";a.r(t);var o=a(4),n=a(5),r=a(10),i=a(9),s=a(3),l=a(11),c=a(0),h=a.n(c),m=a(80),d=a(81),u=a(1236),p=a(1197),v=a.n(p),g=a(89),f=a(15),b=a(7),E=a(128),_=a(151),y=a(98),N=a.n(y),x=(a(673),a(1231),a(1232)),w=function(e){return h.a.createElement("div",{className:"col-12 col-lg-4 col-md-6 row-space-4 room-item"},h.a.createElement("div",{className:""},h.a.createElement("div",{className:"media-cover text-center"},h.a.createElement("img",{src:e.value.name,className:"img-responsive",alt:""})),h.a.createElement("button",{className:"overlay-btn js-delete-photo-btn",onClick:function(){return e.removeHandler(e.value.id)},distance:1},h.a.createElement(m.a,{icon:d.L,size:"lg"})),h.a.createElement("div",{className:"panel-body panel-condensed"},h.a.createElement("textarea",{cols:1,rows:3,placeholder:"What are the highlights of this photo?",className:"input-large input highlights ",tabIndex:1,defaultValue:e.value.highlights,onChange:function(t){return e.changeHighlight(t,e.value.id)}}),h.a.createElement("p",{className:"ml-error ng-binding"}))))},j=Object(u.b)((function(e){var t=e.value,a=e.index,o=e.removeHandler,n=e.highlightHandler;return h.a.createElement(w,{value:t,key:"item-".concat(a),removeHandler:o,changeHighlight:n})})),O=Object(u.a)((function(e){var t=e.items,a=e.highlightHandler,o=e.featureHandler,n=e.removeHandler;return h.a.createElement("ul",{id:"js-photo-grid",className:"room-card list-unstyled all-slides d-flex flex-wrap ui-sortable"},h.a.createElement("div",{className:"row d-flex w-100"},t.map((function(e,t){return h.a.createElement(j,{key:"item-".concat(t),index:t,value:e,highlightHandler:a,featureHandler:o,removeHandler:n})}))))})),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={photo_list:[],is_uploading:!1,percentage:0,uploaded_files:[]},a.removePhoto=a.removePhoto.bind(Object(s.a)(a)),a.featurePhoto=a.featurePhoto.bind(Object(s.a)(a)),a.changeHighlight=a.changeHighlight.bind(Object(s.a)(a)),a.onSortEnd=a.onSortEnd.bind(Object(s.a)(a)),a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.getPhotoList(this.props.match.params.room_id).then((function(t){t?e.setState({photo_list:t}):f.a.showError("Get Photo List")}))}},{key:"beforeSend",value:function(e){return e}},{key:"changeHighlight",value:function(e,t){var a={data:e.target.value,photo_id:t};g.a.updatePhoto(a).then((function(e){e||f.a.showError("Update Photo List")}))}},{key:"featurePhoto",value:function(e){var t=this,a={id:this.props.match.params.room_id,photo_id:e};g.a.getFeaturePhoto(a).then((function(e){e?(t.setState({photo_list:e}),t.props.onUpdateSidebar()):f.a.showError("Get Feature Photo")}))}},{key:"removePhoto",value:function(e){var t=this,a={photo_id:e};g.a.deletePhoto(this.props.match.params.room_id,a).then((function(a){if(a&&"true"===a.success){var o=t.state.photo_list,n=o.findIndex((function(t){return t.id===e}));n>-1&&(o.splice(n,1),t.setState({photo_list:o})),t.props.onUpdateSidebar()}else f.a.showError("Remove Photo")}))}},{key:"onSortEnd",value:function(e){var t=this,a=e.oldIndex,o=e.newIndex;this.setState({photo_list:x(this.state.photo_list,a,o)},(function(){var e=t.state.photo_list.map((function(e){return e.id})),a={id:t.props.match.params.room_id,image_id:e};g.a.changePhotoOrder(a).then((function(e){e&&(t.featurePhoto(t.state.photo_list[0].id),t.props.onUpdateSidebar())}))}))}},{key:"render",value:function(){var e=this,t=this.props.match.params.room_id;return h.a.createElement("div",{className:"manage-listing-content-wrapper room-photo"},h.a.createElement("div",{className:"listing_whole col-md-9",id:"js-manage-listing-content"},h.a.createElement("div",{className:"common_listpage"},h.a.createElement(E.a,{title:"Photos Can Bring Your Space to Life",descr:"Add photos of areas guests have access to. You can always come back later and add more.",prev:"amenities",next:"video",room_id:t}),h.a.createElement(v.a,{key:"uploader",method:"post",beforeSend:this.beforeSend.bind(this),url:"".concat(b.a,"/ajax/rooms/add_photos/").concat(this.props.match.params.room_id),formRenderer:this.UploadRenderer.bind(this),formGetter:this.formGetter.bind(this),onProgress:this.onUploading.bind(this),onLoad:function(t,a){e.onLoad(t,a)},onError:function(e,t){console.log("error",e,t)},onAbort:function(e,t){console.log("abort",e,t)}}),h.a.createElement(O,{distance:1,axis:"xy",items:this.state.photo_list,highlightHandler:this.changeHighlight,removeHandler:this.removePhoto,onSortEnd:this.onSortEnd}),h.a.createElement(_.a,{prev:"amenities",next:"video",room_id:t}),h.a.createElement("hr",null))),h.a.createElement("div",{className:"col-md-3 col-sm-12 listing_desc location_desc"},h.a.createElement("div",{className:"manage_listing_left"},h.a.createElement("img",{src:N.a,className:"col-center",width:75,height:75,alt:"property help"}),h.a.createElement("div",{className:"amenities_about"},h.a.createElement("h4",null,"Guests Love Photos"),h.a.createElement("p",null,'Tell your guests how many bedrooms and bathrooms your property has. If you have multiple beds in the same bedroom, you can state that as well. For sleeper sofas in the living room, simply name the bedroom "Living Room" and select the number of sleeper sofas you have.')))))}},{key:"UploadRenderer",value:function(e){return h.a.createElement("form",{id:"upload-bar",className:"upload-bar"},h.a.createElement("div",{className:"button-container"},h.a.createElement("button",{type:"button",className:"btn-uploader",style:{border:"#d2950c"}},h.a.createElement(m.a,{icon:d.g,size:"2x"})),h.a.createElement("button",{type:"button",className:"btn-photos",style:{border:"#d2950c"}},h.a.createElement("div",{className:"d-flex"},h.a.createElement("span",null,"Minimum 1 Photo Required"," "),h.a.createElement("span",{className:"requiredRJ"}," *")),h.a.createElement("div",{className:"d-flex"},"Max Filesize = 5MB")),h.a.createElement("input",{className:"fileupload",type:"file",name:"photos[]",multiple:!0,onChange:e})),h.a.createElement("div",{className:"photo-counter"},h.a.createElement("svg",{width:"28px",height:"28px",viewBox:"0 0 2048 1792",xmlns:"http://www.w3.org/2000/svg",style:{marginRight:"10px"}},h.a.createElement("path",{fill:"#23537a",d:"M704 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"})),this.state.photo_list.length," "," Photos"))}},{key:"formGetter",value:function(){return new FormData(document.getElementById("upload-bar"))}},{key:"onUploading",value:function(e,t,a){}},{key:"onLoad",value:function(e,t){f.a.showSuccess("Upload image");var a=JSON.parse(t.response);this.setState({photo_list:a.succresult,percentage:100}),this.props.onUpdateSidebar()}}]),t}(h.a.Component);t.default=k},128:function(e,t,a){"use strict";var o=a(4),n=a(5),r=a(10),i=a(9),s=a(11),l=a(0),c=a.n(l),h=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.descr,o=e.room_id,n=e.prev,r=e.next;return c.a.createElement("div",{className:"content_show"},c.a.createElement("div",{className:"content_showhead"},c.a.createElement("h1",null,t),c.a.createElement("p",null,a)),c.a.createElement("div",{className:"content_right"},n&&c.a.createElement("a",{href:"/rooms/manage/".concat(o,"/").concat(n),className:"right_save"},"Back"),r&&c.a.createElement("a",{href:"/rooms/manage/".concat(o,"/").concat(r),className:"right_save_continue ml-1"},"Next")))}}]),t}(c.a.Component);t.a=h},151:function(e,t,a){"use strict";var o=a(4),n=a(5),r=a(10),i=a(9),s=a(11),l=a(0),c=a.n(l),h=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.room_id,a=e.prev,o=e.next;return c.a.createElement("div",{className:"content_right"},a&&c.a.createElement("a",{href:"/rooms/manage/".concat(t,"/").concat(a),className:"right_save"},"Back"),o&&c.a.createElement("a",{href:"/rooms/manage/".concat(t,"/").concat(o),className:"right_save_continue"},"Next"))}}]),t}(c.a.Component);t.a=h},673:function(e,t,a){},98:function(e,t,a){e.exports=a.p+"static/media/property-help.1a8e1b11.png"}}]);
//# sourceMappingURL=23.ac0f3079.chunk.js.map