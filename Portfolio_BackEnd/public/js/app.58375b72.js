(function(t){function a(a){for(var s,n,o=a[0],l=a[1],c=a[2],m=0,u=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(u.length)u.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(s=!1)}s&&(r.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},i={app:0},r=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"4ef2":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"page-top"}},[t._m(0),t._m(1),e("section",{staticClass:"page-section portfolio",attrs:{id:"portfolio"}},[e("div",{staticClass:"container"},[e("h2",{staticClass:"page-section-heading text-center text-uppercase text-secondary mb-0"},[t._v(" Portfolio ")]),t._m(2),e("div",{staticClass:"row justify-content-center"},t._l(t.pictures,(function(a,s){return e("div",{key:s,staticClass:"col-md-6 col-lg-4 mb-5"},[e("div",{staticClass:"portfolio-item mx-auto",attrs:{"data-bs-toggle":"modal","data-bs-target":"#portfolioModal"+(s+1)}},[t._m(3,!0),e("img",{staticClass:"img-fluid",attrs:{src:"assets/img/portfolio/"+a,alt:"..."}})])])})),0)])]),t._m(4),e("section",{staticClass:"page-section",attrs:{id:"contact"}},[e("div",{staticClass:"container"},[e("h2",{staticClass:"page-section-heading text-center text-uppercase text-secondary mb-0"},[t._v(" Contact Me ")]),t._m(5),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-xl-7"},[e("form",{attrs:{id:"contactForm","data-sb-form-api-token":"API_TOKEN"}},[e("div",{staticClass:"form-floating mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.fullname,expression:"form.fullname"}],staticClass:"form-control",attrs:{id:"name",type:"text",placeholder:"Enter your name...","data-sb-validations":"required"},domProps:{value:t.form.fullname},on:{input:function(a){a.target.composing||t.$set(t.form,"fullname",a.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Full name")]),e("div",{staticClass:"invalid-feedback",attrs:{"data-sb-feedback":"name:required"}},[t._v(" A name is required. ")])]),e("div",{staticClass:"form-floating mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",placeholder:"name@example.com","data-sb-validations":"required,email"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),e("label",{attrs:{for:"email"}},[t._v("Email address")]),e("div",{staticClass:"invalid-feedback",attrs:{"data-sb-feedback":"email:required"}},[t._v(" An email is required. ")]),e("div",{staticClass:"invalid-feedback",attrs:{"data-sb-feedback":"email:email"}},[t._v(" Email is not valid. ")])]),e("div",{staticClass:"form-floating mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phonenumber,expression:"form.phonenumber"}],staticClass:"form-control",attrs:{id:"phone",type:"tel",placeholder:"(123) 456-7890","data-sb-validations":"required"},domProps:{value:t.form.phonenumber},on:{input:function(a){a.target.composing||t.$set(t.form,"phonenumber",a.target.value)}}}),e("label",{attrs:{for:"phone"}},[t._v("Phone number")]),e("div",{staticClass:"invalid-feedback",attrs:{"data-sb-feedback":"phone:required"}},[t._v(" A phone number is required. ")])]),e("div",{staticClass:"form-floating mb-3"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",staticStyle:{height:"10rem"},attrs:{id:"message",type:"text",placeholder:"Enter your message here...","data-sb-validations":"required"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}}),e("label",{attrs:{for:"message"}},[t._v("Message")]),e("div",{staticClass:"invalid-feedback",attrs:{"data-sb-feedback":"message:required"}},[t._v(" A message is required. ")])]),t._m(6),t._m(7),e("button",{staticClass:"btn btn-primary btn-xl disabled",attrs:{id:"submitButton",type:"submit"},on:{click:function(a){return t.sendmessage()}}},[t._v(" Send ")])])])])])]),t._m(8),t._m(9),t._l(t.projects,(function(a,s){return e("div",{key:s},[e("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal"+(s+1),tabindex:"-1","aria-labelledby":"portfolioModal"+(s+1),"aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-xl"},[e("div",{staticClass:"modal-content"},[t._m(10,!0),e("div",{staticClass:"modal-body text-center pb-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8"},[e("h2",{staticClass:"portfolio-modal-title text-secondary text-uppercase mb-0"},[t._v(" "+t._s(a.Title)+" ")]),t._m(11,!0),e("img",{staticClass:"img-fluid rounded mb-5",attrs:{src:"assets/img/portfolio/"+t.pictures[s],alt:"..."}}),e("p",{staticClass:"mb-4"},[t._v(" "+t._s(a.Description)+" ")]),e("a",{attrs:{href:a.Link,target:"_blank"}},[t._v(" Open In Github ")]),e("br"),e("br"),t._m(12,!0)])])])])])])])])}))],2)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg bg-secondary text-uppercase fixed-top",attrs:{id:"mainNav"}},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#page-top"}},[t._v("Start Bootstrap")]),e("button",{staticClass:"navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[t._v(" Menu "),e("i",{staticClass:"fas fa-bars"})]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[e("ul",{staticClass:"navbar-nav ms-auto"},[e("li",{staticClass:"nav-item mx-0 mx-lg-1"},[e("a",{staticClass:"nav-link py-3 px-0 px-lg-3 rounded",attrs:{href:"#portfolio"}},[t._v("Portfolio")])]),e("li",{staticClass:"nav-item mx-0 mx-lg-1"},[e("a",{staticClass:"nav-link py-3 px-0 px-lg-3 rounded",attrs:{href:"#about"}},[t._v("About")])]),e("li",{staticClass:"nav-item mx-0 mx-lg-1"},[e("a",{staticClass:"nav-link py-3 px-0 px-lg-3 rounded",attrs:{href:"#contact"}},[t._v("Contact")])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"masthead bg-primary text-white text-center"},[e("div",{staticClass:"container d-flex align-items-center flex-column"},[e("img",{staticClass:"masthead-avatar mb-5",attrs:{src:"assets/img/avataaars.svg",alt:"..."}}),e("h1",{staticClass:"masthead-heading text-uppercase mb-0"},[t._v("Roger N. Amat")]),e("div",{staticClass:"divider-custom divider-light"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})]),e("p",{staticClass:"masthead-subheading font-weight-light mb-0"},[t._v(" Database Programmer - Web Designer ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"divider-custom"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},[e("div",{staticClass:"portfolio-item-caption-content text-center text-white"},[e("i",{staticClass:"fas fa-plus fa-3x"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"page-section bg-primary text-white mb-0",attrs:{id:"about"}},[e("div",{staticClass:"container"},[e("h2",{staticClass:"page-section-heading text-center text-uppercase text-white"},[t._v(" About ")]),e("div",{staticClass:"divider-custom divider-light"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 ms-auto"},[e("p",{staticClass:"lead"},[t._v(" Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. ")])]),e("div",{staticClass:"col-lg-4 me-auto"},[e("p",{staticClass:"lead"},[t._v(" You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional! ")])])]),e("div",{staticClass:"text-center mt-4"},[e("a",{staticClass:"btn btn-xl btn-outline-light",attrs:{href:"https://startbootstrap.com/theme/freelancer/"}},[e("i",{staticClass:"fas fa-download me-2"}),t._v(" Free Download! ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"divider-custom"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-none",attrs:{id:"submitSuccessMessage"}},[e("div",{staticClass:"text-center mb-3"},[e("div",{staticClass:"fw-bolder"},[t._v("Form submission successful!")]),t._v(" To activate this form, sign up at "),e("br"),e("a",{attrs:{href:"https://startbootstrap.com/solution/contact-forms"}},[t._v("https://startbootstrap.com/solution/contact-forms")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-none",attrs:{id:"submitErrorMessage"}},[e("div",{staticClass:"text-center text-danger mb-3"},[t._v(" Error sending message! ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer text-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 mb-5 mb-lg-0"},[e("h4",{staticClass:"text-uppercase mb-4"},[t._v("Location")]),e("p",{staticClass:"lead mb-0"},[t._v(" 2215 John Daniel Drive "),e("br"),t._v(" Clark, MO 65243 ")])]),e("div",{staticClass:"col-lg-4 mb-5 mb-lg-0"},[e("h4",{staticClass:"text-uppercase mb-4"},[t._v("Around the Web")]),e("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-fw fa-facebook-f"})]),e("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-fw fa-twitter"})]),e("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-fw fa-linkedin-in"})]),e("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-fw fa-dribbble"})])]),e("div",{staticClass:"col-lg-4"},[e("h4",{staticClass:"text-uppercase mb-4"},[t._v("About Freelancer")]),e("p",{staticClass:"lead mb-0"},[t._v(" Freelance is a free to use, MIT licensed Bootstrap theme created by "),e("a",{attrs:{href:"http://startbootstrap.com"}},[t._v("Start Bootstrap")]),t._v(" . ")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"copyright py-4 text-center text-white"},[e("div",{staticClass:"container"},[e("small",[t._v("Copyright © Your Website 2021")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header border-0"},[e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"divider-custom"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn btn-primary",attrs:{"data-bs-dismiss":"modal"}},[e("i",{staticClass:"fas fa-times fa-fw"}),t._v(" Close Window ")])}],r=e("1da1"),n=(e("96cf"),{name:"page-top",data:function(){return{projects:[{Title:"",Description:"",Link:""}],pictures:["linkspic.png","librarypic.png","DepnEmpPic.png","AirTravel.PNG","MovieRent.PNG","IssuesManagerExp.png"],form:{fullname:"",email:"",phonenumber:"",message:""}}},methods:{getprojects:function(){var t=this;$.ajax({url:"http://localhost:3000/getprojects",type:"GET",success:function(){var a=Object(r["a"])(regeneratorRuntime.mark((function a(e,s){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("success"!==s){a.next=4;break}return a.next=3,JSON.parse(e);case 3:t.projects=a.sent;case 4:case"end":return a.stop()}}),a)})));function e(t,e){return a.apply(this,arguments)}return e}()})},sendmessage:function(){$.ajax({type:"POST",url:"".concat(backendurl,"/sendmessage"),data:this.form,success:function(t,a){"success"==a&&alert("Email sent successfully!")}})}},created:function(){this.getprojects(),console.log(this.projects)}}),o=n,l=e("2877"),c=Object(l["a"])(o,s,i,!1,null,null,null);a["a"]=c.exports},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],n=e("2877"),o={},l=Object(n["a"])(o,i,r,!1,null,null,null),c=l.exports,d=e("a18c");s["a"].config.productionTip=!1,new s["a"]({router:d["a"],render:function(t){return t(c)}}).$mount("#app")},a18c:function(t,a,e){"use strict";(function(t){var s=e("2b0e"),i=e("8c4f"),r=e("4ef2");s["a"].use(i["a"]),t.backendurl="https://rogeram-portfolio.herokuapp.com";var n=[{path:"/",name:"Home",component:r["a"]}],o=new i["a"]({routes:n});a["a"]=o}).call(this,e("c8ba"))}});
//# sourceMappingURL=app.58375b72.js.map