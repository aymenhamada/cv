(this["webpackJsonpcv-online"]=this["webpackJsonpcv-online"]||[]).push([[0],{135:function(e,s,c){"use strict";c.r(s);var a,t,n,i,l,r,d,j,o=c(2),b=c.n(o),m=c(26),h=c.n(m),x=c(6),O=c(4),u=(c(35),c(0)),N=function(){var e=b.a.useState(!1),s=Object(x.a)(e,2),c=s[0],a=s[1],t=function(){a(!1)},n=function(){var e=window.pageYOffset;document.querySelectorAll("section[id]").forEach((function(s){var c=s.offsetHeight,a=s.offsetTop-50,t=s.getAttribute("id");e>a&&e<=a+c?document.querySelector(".nav__menu a[href*="+t+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+t+"]").classList.remove("active-link")}))};return b.a.useEffect((function(){var e=document.querySelectorAll(".nav__link");return e.forEach((function(e){return e.addEventListener("click",t)})),window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n),e.forEach((function(e){return e.removeEventListener("click",t)}))}}),[]),Object(u.jsx)("header",{className:"l-header",id:"header",children:Object(u.jsxs)("nav",{className:"nav bd-container",children:[Object(u.jsx)("a",{href:"#",className:"nav__logo",children:"Aymen Hamada"}),Object(u.jsx)("div",{className:"nav__menu ".concat(c?"show-menu":""),id:"nav-menu",children:Object(u.jsxs)("ul",{className:"nav__list",children:[Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsxs)("a",{href:"#home",className:"nav__link active-link",children:[Object(u.jsx)("i",{className:"bx bx-home nav__icon"}),"Home"]})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsxs)("a",{href:"#summary",className:"nav__link",children:[Object(u.jsx)("i",{className:"bx bx-user nav__icon"}),"Summary"]})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsxs)("a",{href:"#education",className:"nav__link",children:[Object(u.jsx)("i",{className:"bx bx-book nav__icon"}),"Education"]})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsxs)("a",{href:"#skills",className:"nav__link",children:[Object(u.jsx)("i",{className:"bx bx-receipt nav__icon"}),"Skills"]})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsxs)("a",{href:"#experience",className:"nav__link",children:[Object(u.jsx)("i",{className:"bx bx-home nav__icon"}),"Experience"]})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsxs)("a",{href:"#certificates",className:"nav__link",children:[Object(u.jsx)("i",{className:"bx bx-award nav__icon"}),"Certificates"]})})]})}),Object(u.jsx)("div",{className:"nav__toggle",id:"nav-toggle",onClick:function(){return a(!c)},children:Object(u.jsx)("i",{className:"bx bx-grid-alt"})})]})})},_=c.p+"static/media/profile-pic.b838200c.png",f=c.p+"static/media/Aymen Hamada - Back End Developer - Resume.db91fb16.pdf",v=function(e){var s=e.count;return b.a.useEffect((function(){var e=document.getElementById("theme-button"),s="dark-theme",c="bx-sun",a=localStorage.getItem("selected-theme"),t=localStorage.getItem("selected-icon");a&&(document.body.classList["dark"===a?"add":"remove"](s),e.classList["bx-moon"===t?"add":"remove"](c));var n=function(){document.body.classList.toggle(s),e.classList.toggle(c),localStorage.setItem("selected-theme",document.body.classList.contains(s)?"dark":"light"),localStorage.setItem("selected-icon",e.classList.contains(c)?"bx-moon":"bx-sun")};return e.addEventListener("click",n),function(){e.removeEventListener("click",n)}}),[]),console.log(s),Object(u.jsxs)("main",{className:"l-main bd-container",children:[null!==s?Object(u.jsxs)("p",{className:"download-counter",children:["Ce cv a \xe9t\xe9 vu ",Object(u.jsxs)("strong",{children:[s,"x"]})]}):"",Object(u.jsxs)("div",{className:"resume",id:"area-cv",children:[Object(u.jsxs)("div",{className:"resume__left",children:[Object(u.jsxs)("section",{className:"home",id:"home",children:[Object(u.jsxs)("div",{className:"home__container section bd-grid",children:[Object(u.jsxs)("div",{className:"home__data bd-grid",children:[Object(u.jsx)("img",{src:_,alt:"Aymen Hamada",className:"home__img"}),Object(u.jsxs)("h1",{className:"home__title",children:["Aymen ",Object(u.jsx)("b",{children:"HAMADA"})]}),Object(u.jsx)("h3",{className:"home__profession",children:"Full Stack Developer"}),null!==s?Object(u.jsxs)("p",{className:"download-counter-mobile",children:["Ce cv a \xe9t\xe9 vu ",Object(u.jsxs)("strong",{children:[s,"x"]})]}):"",Object(u.jsx)("div",{children:Object(u.jsx)("a",{download:!0,href:f,className:"home__button-movil",children:"Download"})})]}),Object(u.jsxs)("div",{className:"home__address bd-grid",children:[Object(u.jsxs)("span",{className:"home__information",children:[Object(u.jsx)("i",{className:"bx bx-phone home__icon"})," +33782282356"]}),Object(u.jsxs)("span",{className:"home__information",children:[Object(u.jsx)("i",{className:"bx bx-envelope home__icon"})," aymen.hamada@epitech.eu"]}),Object(u.jsxs)("span",{className:"home__information",children:[Object(u.jsx)("i",{className:"bx bx-laptop home__icon"}),Object(u.jsx)("a",{className:"social__link",href:"https://aymenhamada.github.io/Portfolio/",target:"__blank",rel:"noreferrer",children:"My Portfolio"})]}),Object(u.jsxs)("span",{className:"home__information",children:[Object(u.jsx)("i",{className:"bx bx-map home__icon"})," Strasbourg, France"]})]})]}),Object(u.jsx)("i",{className:"bx bx-moon change-theme",title:"Theme",id:"theme-button"}),Object(u.jsx)("a",{download:!0,href:f,children:Object(u.jsx)("i",{className:"bx bx-download generate-pdf",title:"Download CV",id:"resume-button"})})]}),Object(u.jsxs)("section",{className:"social section",children:[Object(u.jsx)("h2",{className:"section-title",children:"SOCIAL"}),Object(u.jsxs)("div",{className:"social__container bd-grid",children:[Object(u.jsxs)("a",{href:"https://www.linkedin.com/in/aymen-hamada/",target:"_blank",rel:"noreferrer",className:"social__link",children:[Object(u.jsx)("i",{className:"bx bxl-linkedin-square social__icon"}),"Linkedin"]}),Object(u.jsxs)("a",{href:"https://github.com/aymenhamada",target:"_blank",rel:"noreferrer",className:"social__link",children:[Object(u.jsx)("i",{className:"bx bxl-github social__icon"}),"Github"]})]})]}),Object(u.jsxs)("section",{className:"profile section",id:"summary",children:[Object(u.jsx)("h2",{className:"section-title",children:"Summary"}),Object(u.jsx)("p",{className:"profile__description",children:"Back End Developer with 1 year of experience developing and maintaining PHP/Symfony4/Node.js web applications and micro-services."})]}),Object(u.jsxs)("section",{className:"education section",id:"education",children:[Object(u.jsx)("h2",{className:"section-title",children:"Education"}),Object(u.jsxs)("div",{className:"education__container bd-grid",children:[Object(u.jsxs)("div",{className:"education__content",children:[Object(u.jsxs)("div",{className:"education__time",children:[Object(u.jsx)("span",{className:"education__rounder"}),Object(u.jsx)("span",{className:"education__line"})]}),Object(u.jsxs)("div",{className:"education__data bd-grid",children:[Object(u.jsx)("h3",{className:"education__title",children:"Master\u2019s Degree in Software Engineering"}),Object(u.jsx)("span",{className:"education__studies",children:"Epitech"}),Object(u.jsx)("span",{className:"education__year",children:"2024"}),Object(u.jsx)("span",{className:"education__studies",children:"Software Engineering"})]})]}),Object(u.jsxs)("div",{className:"education__content",children:[Object(u.jsxs)("div",{className:"education__time",children:[Object(u.jsx)("span",{className:"education__rounder"}),Object(u.jsx)("span",{className:"education__line"})]}),Object(u.jsxs)("div",{className:"education__data bd-grid",children:[Object(u.jsx)("h3",{className:"education__title",children:"BTEC Higher National Diploma"}),Object(u.jsx)("span",{className:"education__studies",children:"Epitech"}),Object(u.jsx)("span",{className:"education__year",children:"2021"}),Object(u.jsx)("span",{className:"education__studies",children:"Web development"}),Object(u.jsx)("span",{className:"education__studies",children:"3.8 GPA."})]})]})]})]}),Object(u.jsxs)("section",{className:"skills section",id:"skills",children:[Object(u.jsx)("h2",{className:"section-title",children:"Skills"}),Object(u.jsxs)("div",{className:"skills__content bd-grid",children:[Object(u.jsxs)("ul",{className:"skills__data",children:[Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("i",{className:"bx bxl-javascript home__icon"})," JavaScript (advanced)"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("i",{className:"bx bxl-nodejs home__icon"})," Node.js (advanced)"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("i",{className:"bx bxl-php home__icon"})," PHP (advanced)"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("i",{className:"fab fa-symfony home__icon"})," Symfony (advanced)"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("i",{className:"bx bx-data home__icon"})," SQL (advanced)"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("i",{className:"bx bx-data home__icon"})," No-SQL (advanced)"]})]}),Object(u.jsxs)("ul",{className:"skills__data",children:[Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("i",{className:"bx bxl-react home__icon"}),Object(u.jsx)("i",{className:"bx bxl-redux home__icon"}),"React.js (advanced)"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("i",{className:"bx bxl-html5 home__icon"})," HTML (advanced)"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("i",{className:"bx bxl-css3 home__icon"})," CSS (advanced)"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("i",{className:"bx bxl-git home__icon"})," Git (advanced)"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("i",{className:"bx bx-git-compare home__icon"})," Agile (Intermediate)"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("i",{className:"bx bxl-react home__icon"})," React Native (Intermediate)"]})]})]})]})]}),Object(u.jsxs)("div",{className:"resume__right",children:[Object(u.jsxs)("section",{className:"experience section",id:"experience",children:[Object(u.jsx)("h2",{className:"section-title",children:"Experience"}),Object(u.jsxs)("div",{className:"experience__container bd-grid",children:[Object(u.jsxs)("div",{className:"experience__content",children:[Object(u.jsxs)("div",{className:"experience__time",children:[Object(u.jsx)("span",{className:"experience__rounder"}),Object(u.jsx)("span",{className:"experience__line"})]}),Object(u.jsxs)("div",{className:"experience__data bd-grid",children:[Object(u.jsx)("h3",{className:"experience__title",children:"Back End Developer"}),Object(u.jsx)("span",{className:"experience__company",children:"Data Projekt"}),Object(u.jsx)("span",{className:"education__year",children:"10/2020 - 10/2021"}),Object(u.jsxs)("ul",{className:"skills__data",children:[Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("span",{className:"skills__circle"})," Integration of front\u2011end element created by front\u2011end developers"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("span",{className:"skills__circle"})," Work closely with Project Manager and Team Leads on change request functions"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("span",{className:"skills__circle"})," Develops new and maintains existing applications"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("span",{className:"skills__circle"})," Develop, troubleshoot, debug, test, ensure browser compatibility"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("span",{className:"skills__circle"})," Built reusable code and libraries for future use"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("span",{className:"skills__circle"})," Migrated 3 nativescript mobile apps with code refactoring to an React Native based apps."]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("span",{className:"skills__circle"}),"Develop web API's and writing usage documentation using Swagger."]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("span",{className:"skills__circle"})," Successfully scraped old website data who was using XML fles as a database, to migrate to an SQL server."]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("span",{className:"skills__circle"})," Integrated various third party API\u2019s using HTTP/SOAP/XML"]}),Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("span",{className:"skills__circle"})," Develop WordPress plugin using React.js and Node.js/Symfony 4 for an micro\u2011services API."]})]})]})]}),Object(u.jsxs)("div",{className:"experience__content",children:[Object(u.jsxs)("div",{className:"experience__time",children:[Object(u.jsx)("span",{className:"experience__rounder"}),Object(u.jsx)("span",{className:"experience__line"})]}),Object(u.jsxs)("div",{className:"experience__data bd-grid",children:[Object(u.jsx)("h3",{className:"experience__title",children:"HAMADA IT"}),Object(u.jsx)("span",{className:"experience__company",children:"Freelance"}),Object(u.jsx)("span",{className:"education__year",children:"10/2021"})]})]})]})]}),Object(u.jsxs)("section",{className:"certificate section",id:"certificates",children:[Object(u.jsx)("h2",{className:"section-title",children:"Certificates"}),Object(u.jsxs)("div",{className:"certificate__container bd-grid",children:[Object(u.jsxs)("div",{className:"certificate__content",children:[Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("i",{className:"fab fa-hackerrank home__icon"}),Object(u.jsx)("a",{className:"social__link",href:"https://www.hackerrank.com/certificates/f1a858bfe4c0",target:"__blank",rel:"noreferrer",children:Object(u.jsx)("h3",{className:"certificate__title",children:"JavaScript Intermediate"})})]}),Object(u.jsx)("span",{className:"education__year",children:"09/2021 - Present"})]}),Object(u.jsxs)("div",{className:"certificate__content",children:[Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("i",{className:"fab fa-hackerrank home__icon"}),Object(u.jsx)("a",{className:"social__link",href:"https://www.hackerrank.com/certificates/07cb1f743777",target:"__blank",rel:"noreferrer",children:Object(u.jsx)("h3",{className:"certificate__title",children:"Rest API intermediate"})})]}),Object(u.jsx)("span",{className:"education__year",children:"09/2020 - Present"})]}),Object(u.jsxs)("div",{className:"certificate__content",children:[Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("div",{className:"d-flex column-centered",children:Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("i",{className:"fab fa-hackerrank home__icon"}),Object(u.jsx)("a",{className:"social__link",href:"https://www.hackerrank.com/aymen_hamada",target:"__blank",rel:"noreferrer",children:Object(u.jsx)("h3",{className:"certificate__title",children:"Problem Solving 5 Stars"})})]})}),Object(u.jsx)("img",{src:"data:image/png;base64,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",alt:"Problem Solving 5 stars - Hackerrank",className:"problem__img"})]}),Object(u.jsx)("p",{className:"certificate__description",children:"Problem solving stars are gained throught resolving Hackerrank problems."}),Object(u.jsx)("span",{className:"education__year",children:"Lifetime"})]}),Object(u.jsxs)("div",{className:"certificate__content",children:[Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("i",{className:"fab fa-free-code-camp home__icon"}),Object(u.jsx)("a",{className:"social__link",href:"https://www.freecodecamp.org/certification/aymenhamada/back-end-development-and-apis",target:"__blank",rel:"noreferrer",children:Object(u.jsx)("h3",{className:"certificate__title",children:"APIs and Microservices"})})]}),Object(u.jsx)("span",{className:"education__year",children:"09/2020 - Present"})]}),Object(u.jsxs)("div",{className:"certificate__content",children:[Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("i",{className:"fab fa-free-code-camp home__icon"}),Object(u.jsx)("a",{className:"social__link",href:"https://www.freecodecamp.org/certification/aymenhamada/javascript-algorithms-and-data-structures",target:"__blank",rel:"noreferrer",children:Object(u.jsx)("h3",{className:"certificate__title",children:"JavaScript Algorithms and Data Structures"})})]}),Object(u.jsx)("span",{className:"education__year",children:"09/2020 - Present"})]})]})]}),Object(u.jsxs)("section",{className:"languages section",children:[Object(u.jsx)("h2",{className:"section-title",children:"Languages"}),Object(u.jsx)("div",{className:"languages__container",children:Object(u.jsxs)("ul",{className:"languages__content bd-grid",children:[Object(u.jsxs)("li",{className:"languages__name",children:[Object(u.jsx)("span",{className:"languages__circle"})," French (Native)"]}),Object(u.jsxs)("li",{className:"languages__name",children:[Object(u.jsx)("span",{className:"languages__circle"})," English (Fluent)"]})]})})]}),Object(u.jsxs)("section",{className:"interests section",children:[Object(u.jsx)("h2",{className:"section-title",children:"Interests"}),Object(u.jsxs)("div",{className:"interests__container bd-grid",children:[Object(u.jsxs)("div",{className:"interests__content",children:[Object(u.jsx)("i",{className:"bx bx-headphone interests__icon"}),Object(u.jsx)("span",{className:"interests__name",children:"Music"})]}),Object(u.jsxs)("div",{className:"interests__content",children:[Object(u.jsx)("i",{className:"bx bxs-plane-alt interests__icon"}),Object(u.jsx)("span",{className:"interests__name",children:"Travel"})]}),Object(u.jsxs)("div",{className:"interests__content",children:[Object(u.jsx)("i",{className:"bx bx-dumbbell interests__icon"}),Object(u.jsx)("span",{className:"interests__name",children:"Fitness"})]})]})]})]})]})]})},p=c(7),g=c.n(p),k=c(12),L=c.p+"static/media/bitmoji.c5e3ff40.png",C=c(8),w=c(5),A=Object(w.b)(a||(a=Object(O.a)(["",""])),C.fadeInDownBig),y=Object(w.b)(t||(t=Object(O.a)(["",""])),C.headShake),S=Object(w.b)(n||(n=Object(O.a)(["",""])),C.rollOut),H=w.a.div(i||(i=Object(O.a)(["\n  animation: 1s ",";\n"])),A),M=w.a.div(l||(l=Object(O.a)(["\n    animation: 2s infinite ",";  \n"])),y),D=w.a.div(r||(r=Object(O.a)(["\n    animation: 2s ",";\n"])),S),E=["Arghh another visitor...","Let me find the CV in this bunch of documents...","Find It ! There we go.","Don't forget, 42 is the answer."],Q="",I=function(){var e=b.a.useState(1),s=Object(x.a)(e,2),c=s[0],a=s[1],t=b.a.useState(""),n=Object(x.a)(t,2),i=n[0],l=n[1];b.a.useEffect((function(){Object(k.a)(g.a.mark((function e(){var s,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,s){return setTimeout(e,1e3)}));case 2:a(2),s=g.a.mark((function e(s){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=E[s],s===E.length-1&&setTimeout((function(){a(3)}),500),e.next=4,new Promise((function(e,s){for(var a=function(s){setTimeout(Object(k.a)(g.a.mark((function a(){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(Q+=c[s],l(Q),s!==c.length-1){a.next=7;break}return a.next=5,new Promise((function(e){return setTimeout(e,500)}));case 5:Q="",e();case 7:case"end":return a.stop()}}),a)}))),50*s)},t=0;t<c.length;t++)a(t)}));case 4:case"end":return e.stop()}}),e)})),c=0;case 5:if(!(c<E.length)){e.next=10;break}return e.delegateYield(s(c),"t0",7);case 7:c++,e.next=5;break;case 10:case"end":return e.stop()}}),e)})))()}),[]);return Object(u.jsxs)("div",{children:[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(u.jsx)("img",{className:"avatar",src:L,alt:"Bitmoji de Aymen"});switch(c){case 1:return Object(u.jsx)(H,{children:e});case 2:return Object(u.jsx)(M,{children:e});case 3:return Object(u.jsx)(D,{children:e})}}(),Object(u.jsxs)("div",{className:"loader",children:[Object(u.jsx)("span",{className:"loading-text",children:i}),Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("svg",{viewBox:"0 0 90 120",fill:"currentColor",children:Object(u.jsx)("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("svg",{viewBox:"0 0 90 120",fill:"currentColor",children:Object(u.jsx)("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("svg",{viewBox:"0 0 90 120",fill:"currentColor",children:Object(u.jsx)("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("svg",{viewBox:"0 0 90 120",fill:"currentColor",children:Object(u.jsx)("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("svg",{viewBox:"0 0 90 120",fill:"currentColor",children:Object(u.jsx)("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("svg",{viewBox:"0 0 90 120",fill:"currentColor",children:Object(u.jsx)("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})})})]})})]})]})},V=function(){function e(){var e=document.getElementById("scroll-top");this.scrollY>=200?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}return b.a.useEffect((function(){return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:"#",className:"scrolltop",id:"scroll-top",children:Object(u.jsx)("i",{className:"bx bx-up-arrow-alt scrolltop__icon",children:" "})})})},G=c(30),P=c.n(G),F=c(15),X=c.n(F),K="https://hamada-it-microservices.herokuapp.com/cv_counter/api/v1";var B=Object(w.b)(d||(d=Object(O.a)(["",""])),C.fadeIn),Z=w.a.div(j||(j=Object(O.a)(["\n  animation: 1s ",";\n"])),B);P.a.polyfill();var Y=function(){var e=b.a.useState(!1),s=Object(x.a)(e,2),c=s[0],a=s[1],t=b.a.useState(!0),n=Object(x.a)(t,2),i=n[0],l=n[1],r=b.a.useState(null),d=Object(x.a)(r,2),j=d[0],o=d[1];return b.a.useEffect((function(){localStorage.getItem("alreadyVisited")?(X.a.get(K+"/count").then((function(e){var s=e.data;o(s.count)})).catch((function(e){})),l(!1)):(X.a.post(K+"/count").then((function(e){var s=e.data;o(s.count)})).catch((function(e){})),document.body.classList.add("loading"),setTimeout((function(){document.body.classList.remove("loading"),l(!1),localStorage.setItem("alreadyVisited",JSON.stringify(!0))}),8850)),a(!0)}),[]),Object(u.jsx)("div",{children:c?Object(u.jsx)("div",{children:i?Object(u.jsx)(I,{}):Object(u.jsxs)(Z,{children:[Object(u.jsx)(N,{}),Object(u.jsx)(v,{count:j}),Object(u.jsx)(V,{})]})}):""})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,136)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,n=s.getLCP,i=s.getTTFB;c(e),a(e),t(e),n(e),i(e)}))};h.a.render(Object(u.jsx)(b.a.StrictMode,{children:Object(u.jsx)(Y,{})}),document.getElementById("root")),z()},35:function(e,s,c){}},[[135,1,2]]]);
//# sourceMappingURL=main.2bc43b3f.chunk.js.map