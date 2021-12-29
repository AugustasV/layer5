(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[2269],{26775:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var i=t(67294),r=t(69730),o=t(22626),a=t(70456).ZP.div.withConfig({displayName:"TocPaginationstyle__TocPaginationWrapper",componentId:"zco2fp-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]),l=function(){var n,e,t=(0,i.useState)(0),l=t[0],c=t[1];return(0,i.useEffect)((function(){var n=window.location.pathname,e=r.k.findIndex((function(e){return e.link===n}));c(e)}),[]),i.createElement(a,null,l>0?i.createElement(o.Z,{secondary:!0,url:null===(n=r.k[l-1])||void 0===n?void 0:n.link},"← Previous"):null,l<r.k.length-1?i.createElement(o.Z,{primary:!0,url:null===(e=r.k[l+1])||void 0===e?void 0:e.link},"Next →"):null)}},69730:function(n,e,t){"use strict";t.d(e,{k:function(){return i}});var i=[{id:0,link:"/community/handbook/contributor-journey",text:"About"},{id:1,link:"/community/handbook/community",text:"Community"},{id:2,link:"/community/handbook/community-roles",text:"Community Roles"},{id:3,link:"/community/handbook/contribution",text:"Contribution"},{id:4,link:"/community/handbook/repository-overview",text:"Repository Overview"},{id:5,link:"/community/handbook/projects",text:"Projects"},{id:6,link:"/community/handbook/mentorship-programs",text:"Mentorship Programs"},{id:7,link:"/community/handbook/learn-layer5",text:"Learning"},{id:8,link:"/community/handbook/connect-with-us",text:"Connect with us"},{id:9,link:"/community/handbook/code-of-conduct",text:"Code of Conduct"},{id:10,link:"/community/handbook/faq",text:"FAQs"}]},52455:function(n,e,t){"use strict";t.d(e,{Z:function(){return m}});var i=t(67294),r=t(11521),o=t(25444),a=t(61424),l=t(70456).ZP.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"y1xb32-0"})(["\n\n  position: sticky;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  width:15rem;\n  padding-bottom: 2rem;\n\n  .go-back {\n    margin-left: 1rem;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;   \n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color:#000000;\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n  \n  .toc-sub-inline{\n    display: inline-block;\n  }\n\n  .active{\n    font-weight:500;\n    color: ",";\n  }\n\n  ul{\n    display:flex;\n    flex-direction:column;\n    white-space: nowrap;\n  }\n\n  .toc-ul{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn{\n    display:none;\n  }\n \n   .toc-ul-open{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height:auto !important;\n    opacity:1 !important;\n    margin-bottom: 2rem;\n    transition:all .4s !important;\n   }\n\n  .toc-menu-icon{\n    width: 1.5rem; \n    height: 1.5rem; \n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px){\n   position: initial;\n   margin-right: 3rem;\n   width: auto;\n   .toc-toggle-btn{\n    display:inline-block;\n   }\n   .go-back{\n      margin-left:0;\n   }\n\n   .toc-ul{\n    opacity:0;\n    height:0;\n    transition:none;\n    visibility:hidden;\n   }\n\n   .toc-ul-open{\n    visibility:visible;\n   }\n  }\n"],(function(n){return n.theme.secondaryColor}),(function(n){return n.theme.menuColor}),(function(n){return n.theme.secondaryColor})),c=t(69730),m=function(){var n=(0,i.useState)(!1),e=n[0],t=n[1];return i.createElement(l,null,i.createElement("div",{className:"go-back"},i.createElement(o.Link,{to:"/community/handbook"},i.createElement(r.PSe,null),i.createElement("h4",null,"Table of Content")),i.createElement("div",{className:"toc-toggle-btn"},e?i.createElement(a.QAE,{className:"toc-menu-icon",onClick:function(){t(!e)}}):i.createElement(a.Ejh,{className:"toc-menu-icon",onClick:function(){t(!e)}}))),i.createElement("div",{className:"toc-list"},i.createElement("ul",{className:"toc-ul "+(e?"toc-ul-open":"")},c.k.map((function(n){return i.createElement("li",{key:n.id},i.createElement(o.Link,{to:n.link,key:n.id,className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},n.text))})))))}},52069:function(n,e,t){"use strict";var i=t(67294),r=t(25444),o=t(70456).ZP.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-42m33g-0"})(["\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);e.Z=function(n){var e=n.contents,t=(0,i.useState)(null),a=t[0],l=t[1];return(0,i.useEffect)((function(){var n=window.location.pathname;l(n)}),[]),i.createElement(o,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((function(n){return i.createElement("li",{key:n.id,className:"list"},i.createElement(r.Link,{to:""+a+n.link,key:n.id,activeClassName:"active"},n.text))})))))}},54633:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return k}});var i=t(67294),r=t(70456),o=t(98460),a=t(36179),l=t(57067),c=t(21101),m=t(52455),s=t(52069),d=t(25444),h=t(26775),u=[{id:0,link:"#top",text:"What are the different roles in the Layer5 community?"},{id:1,link:"#Community Manager",text:"Community Manager"},{id:2,link:"#MeshMate",text:"MeshMate"},{id:3,link:"#Maintainer",text:"Maintainer"}],p=function(){return i.createElement(c.U,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,"Community Roles")),i.createElement(m.Z,null),i.createElement("div",{className:"page-section"},i.createElement(l.W2,null,i.createElement("div",{className:"content"},i.createElement("a",{id:"top"}," ",i.createElement("h2",null,"What are the roles held by individuals in the Layer5 community?")," "),i.createElement("p",null,"A leader is someone who can contribute to the Layer5 Community's growth by being accountable, participating in decision-making, and feeling responsible."),i.createElement("h3",null,"What does it take to be a leader?"),i.createElement("a",{id:"Community Manager"}," ",i.createElement("h4",null,i.createElement("strong",null,"Community Manager"))," "),i.createElement("p",null,"Roles/Responsibilities: ",i.createElement("br",null),"A Community Manager is a person who has an innate drive to contribute to the community's prosperity. A community manager serves as a link between the organisation and its community, overcoming obstacles as they arise—or even before they arise!—by collaborating with other departments and the community to find solutions that benefit the entire community.",i.createElement("ul",null,i.createElement("li",null,"Moderating, engaging, and supporting community members on platforms like Slack, GitHub etc."),i.createElement("li",null,"Building healthy relationships among community members."),i.createElement("li",null,"Celebrating community successes, sending swag, and recognizing top contributors."),i.createElement("li",null,"Regularly updating the community on the metrics performance."),i.createElement("li",null,"Creating and managing new community programs."),i.createElement("li",null,"Organizing meetups, events, and other engagements."),i.createElement("li",null,"Coordinating with other departments—such as product, engineering, and content marketing—to support community initiatives."))),i.createElement("p",null,i.createElement("strong",null,"Checklist before becoming a Community Manager")),i.createElement("input",{type:"checkbox",name:"CM-checklist-1",id:"CM-checklist-1"}),i.createElement("label",{htmlFor:"CM-checklist-1"},"Prior technical community management experience"),i.createElement("input",{type:"checkbox",name:"CM-checklist-2",id:"CM-checklist-2"}),i.createElement("label",{htmlFor:"CM-checklist-2"},"Self-motivated with the ability to manage multiple competing priorities"),i.createElement("input",{type:"checkbox",name:"CM-checklist-3",id:"CM-checklist-3"}),i.createElement("label",{htmlFor:"CM-checklist-3"},"A growth mindset and an approach to new information and knowledge with curiosity"),i.createElement("input",{type:"checkbox",name:"CM-checklist-4",id:"CM-checklist-4"}),i.createElement("label",{htmlFor:"CM-checklist-4"},"A challenge seeker who desires and readily takes on new challenges and works towards solutions"),i.createElement("input",{type:"checkbox",name:"CM-checklist-5",id:"CM-checklist-5"}),i.createElement("label",{htmlFor:"CM-checklist-5"},"Good communication skills"),i.createElement("input",{type:"checkbox",name:"CM-checklist-6",id:"CM-checklist-6"}),i.createElement("label",{htmlFor:"CM-checklist-6"},"Strong relational skills"),i.createElement("input",{type:"checkbox",name:"CM-checklist-7",id:"CM-checklist-7"}),i.createElement("label",{htmlFor:"CM-checklist-7"},"An understanding of how contemporary open-source projects function"),i.createElement("br",null),i.createElement("a",{id:"MeshMate"}," ",i.createElement("h4",null,i.createElement("strong",null,i.createElement(d.Link,{to:"/community/meshmates"},"MeshMate")))," "),i.createElement("p",null,i.createElement("strong",null," Roles and Responsibilities: "),i.createElement("br",null),"Layer5 MeshMates are committed to helping community members be successful contributors. MeshMates aid in identifying areas of projects to engage within, working groups to join, and helping community members grow in their open-source and cloud-native knowledge. By connecting one-on-one, MeshMates will share tips on how to have the best community experience possible.",i.createElement("ul",null,i.createElement("li",null,"Increasing awareness of the community to others"),i.createElement("li",null,"Helping newbies in the community get familiar with all of the projects"),i.createElement("li",null,"Providing necessary resources to contributors"),i.createElement("li",null,"Mentoring members of the community"),i.createElement("li",null,"Facilitate newcomers call"))),i.createElement("a",{id:"Maintainer"}," ",i.createElement("h4",null,i.createElement("strong",null,"Maintainer"))," "),i.createElement("p",null,"Roles/Responsibilities:",i.createElement("br",null),"Maintainers are those who are responsible for managing the growth and performance of the project. They are incharge of the project's wellbeing, reviewing and merging the PR, updating the libraries and dependencies in that project, monitoring the codebase and so much more.",i.createElement("ul",null,i.createElement("li",null,"Send a reminder about meetings"),i.createElement("li",null,"Prepare meetings"),i.createElement("li",null,"Lead meetings"),i.createElement("li",null,"Make sure meeting minutes are kept"),i.createElement("li",null,"Facilitate the creation and advancement of metrics/software"),i.createElement("li",null,"Answer questions about the progress of Layer5 projects"),i.createElement("li",null,"Report on weekly community call progress on a project"),i.createElement("li",null,"Review issues on the repository"),i.createElement("li",null,"Review and merge pull requests"),i.createElement("li",null,"Regularly check the repository for stale content"),i.createElement("li",null,"Monitor issue tracker and pull requests"))),i.createElement("p",null,i.createElement("strong",null,"Checklist before becoming a Maintainer")),i.createElement("input",{type:"checkbox",name:"maintainer-checklist-1",id:"maintainer-checklist-1"}),i.createElement("label",{htmlFor:"maintainer-checklist-1"},"Makes consistent contributions within the Layer5 community"),i.createElement("input",{type:"checkbox",name:"maintainer-checklist-2",id:"maintainer-checklist-2"}),i.createElement("label",{htmlFor:"maintainer-checklist-2"},"Has the ability to commit directly to a project repository"),i.createElement("input",{type:"checkbox",name:"maintainer-checklist-3",id:"maintainer-checklist-3"}),i.createElement("label",{htmlFor:"maintainer-checklist-3"},"Holds knowledge of Layer5 project performance, and software"),i.createElement("input",{type:"checkbox",name:"maintainer-checklist-3",id:"maintainer-checklist-4"}),i.createElement("label",{htmlFor:"maintainer-checklist-4"},"Attends community meeting"),i.createElement("input",{type:"checkbox",name:"maintainer-checklist-5",id:"maintainer-checklist-5"}),i.createElement("label",{htmlFor:"maintainer-checklist-5"},"Holds good knowledge in helping others achieve their goals"),i.createElement("input",{type:"checkbox",name:"maintainer-checklist-6",id:"maintainer-checklist-6"}),i.createElement("label",{htmlFor:"maintainer-checklist-6"},"Has knowledge of Git and GitHub"),i.createElement("input",{type:"checkbox",name:"maintainer-checklist-7",id:"maintainer-checklist-7"}),i.createElement("label",{htmlFor:"maintainer-checklist-7"},"Understands the workflow of the Issues and Pull Requests")),i.createElement(h.Z,null)),i.createElement(s.Z,{contents:u})))},g=t(45027),b=t(34967),y=t(97956),f=t(38155),k=function(){return i.createElement(r.f6,{theme:f.Z},i.createElement(o.Z,null,i.createElement(y.Z,null),i.createElement(a.Z,{title:"Contributor Journey",description:"The purpose of the handbook is to provide an overview of the Layer5 community"}),i.createElement(g.Z,null),i.createElement(p,null),i.createElement(b.Z,null)))}},21101:function(n,e,t){"use strict";t.d(e,{U:function(){return r}});var i=t(70456),r=(t(25444),i.ZP.div.withConfig({displayName:"Handbookstyle__HandbookWrapper",componentId:"l1w5w5-0"})(["\n    \n    .highlight{\n      font-weight: 600;\n    }\n\n    .content{\n      width:100%;\n      padding-bottom: 2rem;\n      ul > li {\n        color: ",";\n      }\n      ol > li {\n        color: ",";\n      }\n      ul > li > span {\n        color: ",";\n      }\n      ol > li > span {\n        color: ",";\n      }\n    }\n\n    h2 h3{\n      margin: 0.5rem 0;\n      color: ",";\n    }\n\n    .page-section{\n      margin-top: -36rem;\n      margin-left: 20rem;\n      display: flex;\n    }\n\n    .sidebar {\n        margin: 0;\n        padding: 0;\n        width: 250px;\n        background-color:",";\n        position: absolute;\n        height: 150rem;\n        overflow: auto;\n    }\n\n    .sidebar a {\n        display: block;\n        color: black;\n        padding: 16px;\n        text-decoration: none;\n    }\n\n    .sidebar a.active {\n        background-color: ",";\n        color: white;\n    }\n\n    .sidebar a:hover:not(.active) {\n        background-color:",";\n        color: white;\n    }\n    \n    .page-header-section {\n        height: 10rem;\n        text-align: center;\n        background: rgb(71,126,150);\n        background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);\n        h1 {\n            line-height: 10rem;\n            color: white;\n        }\n    }\n\n    .community-home-subtitle {\n        text-align: center;\n        padding-top: 3rem;\n        padding-bottom: 1.5rem;\n    }\n\n    #sign-off{\n      padding-bottom: 4rem;\n    }\n    \n    table {\n      border-collapse: collapse;\n      width: 98%;\n      margin: 1rem 0 2rem 0;\n      .github-icon{\n        height: 1.7rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n      .site-icon{\n        height: 1.6rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n      .inline {\n        display: inline;\n        vertical-align: bottom;\n      }\n    }\n\n    td, th {\n      border: 0.05rem solid ",";\n      text-align: left;\n      padding: 0.5rem;\n    }\n\n    .linkscol{\n      text-align: center;\n      width:8%;\n    }\n\n    tbody:nth-child(even) {\n      background-color: ",';\n    }\n\n    .codes{\n      width:75%\n      margin-top:-2rem;\n    }\n\n    .community-home-container{\n        padding: 1rem 0;\n        padding-bottom: 4rem;\n        display: flex;\n        flex-wrap : wrap;\n        align-items : center;\n        justify-content: center;\n    }\n\n    p{\n      margin-top: 10px;\n    }\n    input[type=checkbox] + label {\n      display: block;\n      margin: 0.2em;\n      cursor: pointer;\n      padding: 0.2em;\n    }\n\n    input[type=checkbox] {\n      display: none;\n    }\n\n    input[type=checkbox] + label:before {\n      content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');;\n      border: 0.1em solid #000;\n      border-radius: 0.2em;\n      display: inline-block;\n      width: 1.3em;\n      height: 1.3em;\n      padding-left: 0.2em;\n      padding-bottom: 0.3em;\n      margin-right: 0.5em;\n      margin-bottom: 0.15em;\n      vertical-align: bottom;\n      color: transparent;\n    }\n\n    input[type=checkbox] + label:active:before {\n      transform: scale(0);\n    }\n\n    input[type=checkbox]:checked + label:before {\n      background-color: ',";\n      border-color: ",";\n      color: #fff;\n    }\n\n    input[type=checkbox]:disabled + label:before {\n      transform: scale(1);\n      border-color: #aaa;\n    }\n\n    input[type=checkbox]:checked:disabled + label:before {\n      transform: scale(1);\n      background-color: ",";\n      border-color: ",';\n    }\n    \n    .project-description-icon{\n      width: 3%;\n      transform : translate(0,25%);\n      margin: 0 0.3%;\n    }\n\n    .project-title-icon{\n      margin-left:"10%";\n      width: 4%;\n      align: left;\n      transform : translate(0,28%);\n    }\n\n    \n\n    @media only screen and (max-width: 750px){\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0;\n        padding: 1rem 2.5rem;\n      }\n      .codes{\n      width:100%\n      margin-top:-2rem;\n      }  \n    }\n\n    @media only screen and (max-width: 475px){\n\n      .page-header-section h1{\n        padding: 0 1rem;\n        line-height: 3rem;\n        padding-top: 4rem;\n      }\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0rem;\n      }\n      table{\n        margin-left: -1.5rem;\n      }\n      .frontendTable{\n        margin-left: -2.8rem;\n      }\n      \n    }\n   \n    @media only screen and (max-width: 1024px){\n      .project-title-icon{\n        width:5.5%;\n        transform : translate(0,23%);\n      }\n      .project-description-icon{\n        width:4%;\n      }\n      \n    }\n    @media only screen and (max-width: 768px){\n      .project-title-icon{\n        width:8.5%;\n      }\n      .project-description-icon{\n        width:7%;\n      }\n      \n    }\n    @media only screen and (max-width: 425px){\n      .project-title-icon{\n        width:11%;\n        transform: translate(0,25%)\n      }\n      .project-description-icon{\n        width:8%;\n      }\n    }\n    @media only screen and (max-width: 375px){\n      .project-title-icon{\n        width:13%;\n        transform : translate(0,20%)\n      }\n      .project-description-icon{\n        width:10%;\n      }\n\n    }\n\n    .channels-list {\n      padding-left: 40px;\n    }\n\n    .channels-img {\n      width: 40px;\n      height: 30px;\n    }\n\n    .channels-para {\n      display: flex;\n      align-items: flex-end;\n    }\n\n    .newcomers-journey{\n      text-align: center;\n      display: flex;\n      align-items: center;\n      margin: 2.5rem 5rem 3rem 0rem;\n\n      @media only screen and (max-width: 992px){\n        width: 100%;\n      }\n\n    \n   h2{\n        margin-bottom: 2rem;\n      }\n    }\n\n    .heading{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .heading-start{\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      align-self: flex-end;\n      margin-right: 2rem;\n      margin-top: -2rem;\n      h5{\n      font-size: 1.125rem;\n      font-weight: 400;\n      margin-right: 1rem;\n      }\n      img{\n      height: 3rem;\n      width: 4rem;\n      transition: .5s;\n      }\n      img:hover{\n      padding-left: 1rem;\n      transition: .5s;\n      }\n    }\n\n  .intra-page{\n    position: sticky;\n    top: 10rem;\n    right:0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    align-items:left;\n    justify-content:space-around;\n    display: flex;\n    flex-direction: column;\n    overflow:hidden;\n    \n\n\n    \n    .active{\n      font-weight:5000;\n      color: ',";\n    }\n    \n    ul{\n      list-style: none;\n      top: 3rem;\n    }\n    li{\n      padding-bottom:0.5rem;\n      padding-top:0.5rem;\n    }\n    @media only screen and (max-width: 900px){\n      width: 0;\n      opacity:0;\n    height:0;\n      transition:none;\n      visibility:hidden;\n    }\n  }\n  \n  .learn{\n    width: 10rem;\n  }\n\n"],(function(n){return n.theme.menuColor}),(function(n){return n.theme.menuColor}),(function(n){return n.theme.black}),(function(n){return n.theme.black}),(function(n){return n.theme.tertiaryColor}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.primaryLightColorTwo}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.primaryLightColor}),(function(n){return n.theme.secondaryLightColorTwo}),(function(n){return n.theme.primaryLightColorTwo}),(function(n){return n.theme.primaryLightColorTwo}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.secondaryColor})))}}]);
//# sourceMappingURL=component---src-pages-community-handbook-community-roles-js-ebc3256e6cf259a914a5.js.map