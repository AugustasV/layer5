(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[6166],{26775:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var o=t(67294),i=t(69730),r=t(22626),a=t(70456).ZP.div.withConfig({displayName:"TocPaginationstyle__TocPaginationWrapper",componentId:"zco2fp-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]),l=function(){var n,e,t=(0,o.useState)(0),l=t[0],c=t[1];return(0,o.useEffect)((function(){var n=window.location.pathname,e=i.k.findIndex((function(e){return e.link===n}));c(e)}),[]),o.createElement(a,null,l>0?o.createElement(r.Z,{secondary:!0,url:null===(n=i.k[l-1])||void 0===n?void 0:n.link},"← Previous"):null,l<i.k.length-1?o.createElement(r.Z,{primary:!0,url:null===(e=i.k[l+1])||void 0===e?void 0:e.link},"Next →"):null)}},69730:function(n,e,t){"use strict";t.d(e,{k:function(){return o}});var o=[{id:0,link:"/community/handbook/contributor-journey",text:"About"},{id:1,link:"/community/handbook/community",text:"Community"},{id:2,link:"/community/handbook/community-roles",text:"Community Roles"},{id:3,link:"/community/handbook/contribution",text:"Contribution"},{id:4,link:"/community/handbook/repository-overview",text:"Repository Overview"},{id:5,link:"/community/handbook/projects",text:"Projects"},{id:6,link:"/community/handbook/mentorship-programs",text:"Mentorship Programs"},{id:7,link:"/community/handbook/learn-layer5",text:"Learning"},{id:8,link:"/community/handbook/connect-with-us",text:"Connect with us"},{id:9,link:"/community/handbook/code-of-conduct",text:"Code of Conduct"},{id:10,link:"/community/handbook/faq",text:"FAQs"}]},52455:function(n,e,t){"use strict";t.d(e,{Z:function(){return m}});var o=t(67294),i=t(11521),r=t(25444),a=t(61424),l=t(70456).ZP.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"y1xb32-0"})(["\n\n  position: sticky;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  width:15rem;\n  padding-bottom: 2rem;\n\n  .go-back {\n    margin-left: 1rem;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;   \n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color:#000000;\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n  \n  .toc-sub-inline{\n    display: inline-block;\n  }\n\n  .active{\n    font-weight:500;\n    color: ",";\n  }\n\n  ul{\n    display:flex;\n    flex-direction:column;\n    white-space: nowrap;\n  }\n\n  .toc-ul{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn{\n    display:none;\n  }\n \n   .toc-ul-open{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height:auto !important;\n    opacity:1 !important;\n    margin-bottom: 2rem;\n    transition:all .4s !important;\n   }\n\n  .toc-menu-icon{\n    width: 1.5rem; \n    height: 1.5rem; \n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px){\n   position: initial;\n   margin-right: 3rem;\n   width: auto;\n   .toc-toggle-btn{\n    display:inline-block;\n   }\n   .go-back{\n      margin-left:0;\n   }\n\n   .toc-ul{\n    opacity:0;\n    height:0;\n    transition:none;\n    visibility:hidden;\n   }\n\n   .toc-ul-open{\n    visibility:visible;\n   }\n  }\n"],(function(n){return n.theme.secondaryColor}),(function(n){return n.theme.menuColor}),(function(n){return n.theme.secondaryColor})),c=t(69730),m=function(){var n=(0,o.useState)(!1),e=n[0],t=n[1];return o.createElement(l,null,o.createElement("div",{className:"go-back"},o.createElement(r.Link,{to:"/community/handbook"},o.createElement(i.PSe,null),o.createElement("h4",null,"Table of Content")),o.createElement("div",{className:"toc-toggle-btn"},e?o.createElement(a.QAE,{className:"toc-menu-icon",onClick:function(){t(!e)}}):o.createElement(a.Ejh,{className:"toc-menu-icon",onClick:function(){t(!e)}}))),o.createElement("div",{className:"toc-list"},o.createElement("ul",{className:"toc-ul "+(e?"toc-ul-open":"")},c.k.map((function(n){return o.createElement("li",{key:n.id},o.createElement(r.Link,{to:n.link,key:n.id,className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},n.text))})))))}},21582:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y}});var o=t(67294),i=t(70456),r=t(98460),a=t(36179),l=t(57067),c=t(21101),m=t(52455),s=t(26775),d=t(25444),u=function(){return o.createElement(c.U,null,o.createElement("div",{className:"page-header-section"},o.createElement("h1",null,"FAQs")),o.createElement(m.Z,null),o.createElement("div",{className:"page-section"},o.createElement(l.W2,null,o.createElement("div",{className:"content"},o.createElement("h2",null,"General FAQs:"),o.createElement("br",null),o.createElement("h4",null,"Q: Are Layer5’s solutions open source?"),o.createElement("p",null,"A: Yes, all Layer5 projects are licensed under Apache V2. Layer5 also offers extensions to the Meshery project in which Enterprise-centric functionality is commercially offered and supported."),o.createElement("h4",null,"Q: I am new to Open Source, where do I begin?"),o.createElement("p",null,"A: You can start by going through the ",o.createElement("a",{href:"https://docs.google.com/document/d/1tpg2sLxirozNt3Ofr3GdM002f9rExp74EqrsGZBU710/edit#heading=h.rcr9t5pnt3bw"},"Newcomers’ Welcome Guide.")),o.createElement("h4",null,"Q: What exactly is a MeshMate?"),o.createElement("p",null,"A:Layer5",o.createElement(d.Link,{to:"/community/meshmates"}," MeshMates "),"are individuals committed to helping community members be successful contributors. Meshmates are there to guide and support the community members, helping them identify projects they can contribute to depending on their areas of interest, directing them on groups to join and helping them grow in their open-source and cloud native knowledge."),o.createElement("h4",null,"Q: How do I join the mailing list?"),o.createElement("p",null,"A: You can subscribe to the Layer5 mailing ",o.createElement("a",{href:"https://layer5.io/subscribe"},"here.")),o.createElement("h4",null,"Q: How do I get an internship in Layer5?"),o.createElement("p",null,"A: To best position your candidacy for an internship with Layer5, engage in the community and its projects. Start contributing and keep contributing. Community members who consistently contribute are the first individuals to be awarded internships when new internship opportunities open up - particularly members who are making significantly impactful contributions."),o.createElement("h4",null,"Q: How do I follow up on the meetings?"),o.createElement("p",null,"A: To follow up on the community meetings, you can view and add the ",o.createElement("a",{href:"https://bit.ly/2SbrRhe"},"community calendar")," to your calendar list."),o.createElement("h4",null,"Q: I see works of other contributors being highlighted, will my contributions be highlighted too?"),o.createElement("p",null,"A: We might not get to everyone, but we try to elevate the works of all of our contributors. All of our community members are proud of their work and so are we! We want their work and names to be recognized across our collective technology industry. Be sure to follow and engage with the ",o.createElement("a",{href:"https://twitter.com/layer5"},"Twitter,"),o.createElement("a",{href:"https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1"}," Youtube,")," and ",o.createElement("a",{href:"https://www.linkedin.com/company/layer5/"},"Linkedin")," accounts."),o.createElement("h4",null,"Q: I am not a coder, can I contribute too?"),o.createElement("p",null,"A: Some community members join to contribute to open source projects, others jump in to put those projects to use, some are here to help cultivate and steward our community, while others are here just to hangout and absorb. All members are most welcome. Be sure to introduce yourself in the Layer5",o.createElement("a",{href:"http://slack.layer5.io"}," slack "),"and let other community members get acquainted with you and vice-versa."),o.createElement("h4",null,"Q: What if I can’t find an open issue to work on?"),o.createElement("p",null,"A: Check if any assigned issues are stale. ( Assigned some time back, but no discussions have happened or is not updated for a long time ). If you find such issues, comment to ask if you can help. Alternatively, Look to find the ",o.createElement("a",{href:"https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3A%22help+wanted%22+"},"help-wanted")," issues.")))),o.createElement(s.Z,null))},h=t(45027),p=t(34967),g=t(97956),f=t(38155),y=function(){return o.createElement(i.f6,{theme:f.Z},o.createElement(r.Z,null,o.createElement(g.Z,null),o.createElement(a.Z,{title:"FAQ",description:"The purpose of the handbook is to provide an overview of the Layer5 community"}),o.createElement(h.Z,null),o.createElement(u,null),o.createElement(p.Z,null)))}},21101:function(n,e,t){"use strict";t.d(e,{U:function(){return i}});var o=t(70456),i=(t(25444),o.ZP.div.withConfig({displayName:"Handbookstyle__HandbookWrapper",componentId:"l1w5w5-0"})(["\n    \n    .highlight{\n      font-weight: 600;\n    }\n\n    .content{\n      width:100%;\n      padding-bottom: 2rem;\n      ul > li {\n        color: ",";\n      }\n      ol > li {\n        color: ",";\n      }\n      ul > li > span {\n        color: ",";\n      }\n      ol > li > span {\n        color: ",";\n      }\n    }\n\n    h2 h3{\n      margin: 0.5rem 0;\n      color: ",";\n    }\n\n    .page-section{\n      margin-top: -36rem;\n      margin-left: 20rem;\n      display: flex;\n    }\n\n    .sidebar {\n        margin: 0;\n        padding: 0;\n        width: 250px;\n        background-color:",";\n        position: absolute;\n        height: 150rem;\n        overflow: auto;\n    }\n\n    .sidebar a {\n        display: block;\n        color: black;\n        padding: 16px;\n        text-decoration: none;\n    }\n\n    .sidebar a.active {\n        background-color: ",";\n        color: white;\n    }\n\n    .sidebar a:hover:not(.active) {\n        background-color:",";\n        color: white;\n    }\n    \n    .page-header-section {\n        height: 10rem;\n        text-align: center;\n        background: rgb(71,126,150);\n        background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);\n        h1 {\n            line-height: 10rem;\n            color: white;\n        }\n    }\n\n    .community-home-subtitle {\n        text-align: center;\n        padding-top: 3rem;\n        padding-bottom: 1.5rem;\n    }\n\n    #sign-off{\n      padding-bottom: 4rem;\n    }\n    \n    table {\n      border-collapse: collapse;\n      width: 98%;\n      margin: 1rem 0 2rem 0;\n      .github-icon{\n        height: 1.7rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n      .site-icon{\n        height: 1.6rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n      .inline {\n        display: inline;\n        vertical-align: bottom;\n      }\n    }\n\n    td, th {\n      border: 0.05rem solid ",";\n      text-align: left;\n      padding: 0.5rem;\n    }\n\n    .linkscol{\n      text-align: center;\n      width:8%;\n    }\n\n    tbody:nth-child(even) {\n      background-color: ",';\n    }\n\n    .codes{\n      width:75%\n      margin-top:-2rem;\n    }\n\n    .community-home-container{\n        padding: 1rem 0;\n        padding-bottom: 4rem;\n        display: flex;\n        flex-wrap : wrap;\n        align-items : center;\n        justify-content: center;\n    }\n\n    p{\n      margin-top: 10px;\n    }\n    input[type=checkbox] + label {\n      display: block;\n      margin: 0.2em;\n      cursor: pointer;\n      padding: 0.2em;\n    }\n\n    input[type=checkbox] {\n      display: none;\n    }\n\n    input[type=checkbox] + label:before {\n      content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');;\n      border: 0.1em solid #000;\n      border-radius: 0.2em;\n      display: inline-block;\n      width: 1.3em;\n      height: 1.3em;\n      padding-left: 0.2em;\n      padding-bottom: 0.3em;\n      margin-right: 0.5em;\n      margin-bottom: 0.15em;\n      vertical-align: bottom;\n      color: transparent;\n    }\n\n    input[type=checkbox] + label:active:before {\n      transform: scale(0);\n    }\n\n    input[type=checkbox]:checked + label:before {\n      background-color: ',";\n      border-color: ",";\n      color: #fff;\n    }\n\n    input[type=checkbox]:disabled + label:before {\n      transform: scale(1);\n      border-color: #aaa;\n    }\n\n    input[type=checkbox]:checked:disabled + label:before {\n      transform: scale(1);\n      background-color: ",";\n      border-color: ",';\n    }\n    \n    .project-description-icon{\n      width: 3%;\n      transform : translate(0,25%);\n      margin: 0 0.3%;\n    }\n\n    .project-title-icon{\n      margin-left:"10%";\n      width: 4%;\n      align: left;\n      transform : translate(0,28%);\n    }\n\n    \n\n    @media only screen and (max-width: 750px){\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0;\n        padding: 1rem 2.5rem;\n      }\n      .codes{\n      width:100%\n      margin-top:-2rem;\n      }  \n    }\n\n    @media only screen and (max-width: 475px){\n\n      .page-header-section h1{\n        padding: 0 1rem;\n        line-height: 3rem;\n        padding-top: 4rem;\n      }\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0rem;\n      }\n      table{\n        margin-left: -1.5rem;\n      }\n      .frontendTable{\n        margin-left: -2.8rem;\n      }\n      \n    }\n   \n    @media only screen and (max-width: 1024px){\n      .project-title-icon{\n        width:5.5%;\n        transform : translate(0,23%);\n      }\n      .project-description-icon{\n        width:4%;\n      }\n      \n    }\n    @media only screen and (max-width: 768px){\n      .project-title-icon{\n        width:8.5%;\n      }\n      .project-description-icon{\n        width:7%;\n      }\n      \n    }\n    @media only screen and (max-width: 425px){\n      .project-title-icon{\n        width:11%;\n        transform: translate(0,25%)\n      }\n      .project-description-icon{\n        width:8%;\n      }\n    }\n    @media only screen and (max-width: 375px){\n      .project-title-icon{\n        width:13%;\n        transform : translate(0,20%)\n      }\n      .project-description-icon{\n        width:10%;\n      }\n\n    }\n\n    .channels-list {\n      padding-left: 40px;\n    }\n\n    .channels-img {\n      width: 40px;\n      height: 30px;\n    }\n\n    .channels-para {\n      display: flex;\n      align-items: flex-end;\n    }\n\n    .newcomers-journey{\n      text-align: center;\n      display: flex;\n      align-items: center;\n      margin: 2.5rem 5rem 3rem 0rem;\n\n      @media only screen and (max-width: 992px){\n        width: 100%;\n      }\n\n    \n   h2{\n        margin-bottom: 2rem;\n      }\n    }\n\n    .heading{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .heading-start{\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      align-self: flex-end;\n      margin-right: 2rem;\n      margin-top: -2rem;\n      h5{\n      font-size: 1.125rem;\n      font-weight: 400;\n      margin-right: 1rem;\n      }\n      img{\n      height: 3rem;\n      width: 4rem;\n      transition: .5s;\n      }\n      img:hover{\n      padding-left: 1rem;\n      transition: .5s;\n      }\n    }\n\n  .intra-page{\n    position: sticky;\n    top: 10rem;\n    right:0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    align-items:left;\n    justify-content:space-around;\n    display: flex;\n    flex-direction: column;\n    overflow:hidden;\n    \n\n\n    \n    .active{\n      font-weight:5000;\n      color: ',";\n    }\n    \n    ul{\n      list-style: none;\n      top: 3rem;\n    }\n    li{\n      padding-bottom:0.5rem;\n      padding-top:0.5rem;\n    }\n    @media only screen and (max-width: 900px){\n      width: 0;\n      opacity:0;\n    height:0;\n      transition:none;\n      visibility:hidden;\n    }\n  }\n  \n  .learn{\n    width: 10rem;\n  }\n\n"],(function(n){return n.theme.menuColor}),(function(n){return n.theme.menuColor}),(function(n){return n.theme.black}),(function(n){return n.theme.black}),(function(n){return n.theme.tertiaryColor}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.primaryLightColorTwo}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.primaryLightColor}),(function(n){return n.theme.secondaryLightColorTwo}),(function(n){return n.theme.primaryLightColorTwo}),(function(n){return n.theme.primaryLightColorTwo}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.secondaryColor})))}}]);
//# sourceMappingURL=component---src-pages-community-handbook-faq-js-a4102b2b1aa29fe58a47.js.map