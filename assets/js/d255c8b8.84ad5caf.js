"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2460],{8179:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var t=r(3274),i=r(9128);const n={description:'How we can break CORS by trying to "fix it" blindly',slug:"breaking-cors-by-fixing-it",authors:["fcmam5"],tags:["backend","frontend","security"]},o='Breaking CORS by "trying to fix\xa0it"',a={permalink:"/blog/breaking-cors-by-fixing-it",editUrl:"https://github.com/Fcmam5/fcmam5.github.io/tree/master/portfolio/blog/2024-04-21-fixing-cors/index.md",source:"@site/blog/2024-04-21-fixing-cors/index.md",title:'Breaking CORS by "trying to fix\xa0it"',description:'How we can break CORS by trying to "fix it" blindly',date:"2024-04-21T00:00:00.000Z",formattedDate:"April 21, 2024",tags:[{label:"backend",permalink:"/blog/tags/backend"},{label:"frontend",permalink:"/blog/tags/frontend"},{label:"security",permalink:"/blog/tags/security"}],readingTime:5.305,hasTruncateMarker:!0,authors:[{name:"Abdeldjalil Fortas",title:"A part-time Karantika lover",url:"https://github.com/fcmam5",imageURL:"https://github.com/fcmam5.png",key:"fcmam5"}],frontMatter:{description:'How we can break CORS by trying to "fix it" blindly',slug:"breaking-cors-by-fixing-it",authors:["fcmam5"],tags:["backend","frontend","security"]},unlisted:!1,nextItem:{title:"Why you should kick idle users out of your website",permalink:"/blog/why-you-should-kick-idle-users-out-of-your-website"}},c={authorsImageUrls:[void 0]},l=[{value:"The problem with CORS",id:"the-problem-with-cors",level:2},{value:"Using packages with default params",id:"using-packages-with-default-params",level:3},{value:"Adding CORS headers (when not using packages)",id:"adding-cors-headers-when-not-using-packages",level:3},{value:"Using proxies",id:"using-proxies",level:3},{value:"Possible solutions",id:"possible-solutions",level:2},{value:"Updates:",id:"updates",level:2},{value:"Correction #1",id:"correction-1",level:3}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",del:"del",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Okay, that's another article about CORS on the internet."}),"\n",(0,t.jsx)(s.p,{children:"CORS errors are definitely one of the most frustrating errors we face when working on web applications. I don't know what HTTP wizard or how expert you are, but I am sure that you definitely react like Michael Scott here:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Michael Scott screaming at CORS issue",src:r(2432).A+"",width:"1600",height:"840"})}),"\n",(0,t.jsx)("small",{children:(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:["Meme shamelessly stolen from ",(0,t.jsx)(s.a,{href:"https://fatimamo.com/become-a-cors-wizard",children:"this blog"})]})})}),"\n",(0,t.jsx)(s.p,{children:'We may break "CORS" or at least break the security barriers it adds by trying to fix it (without understanding it correctly).'}),"\n",(0,t.jsxs)(s.p,{children:["According to ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"MDN"}),":"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Cross-Origin Resource Sharing (CORS)"})," is an ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/HTTP",children:"HTTP"}),"-header based mechanism that allows a server to indicate any ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Origin",children:"origins"}),' (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.']}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:'Now, before you scroll down this article looking for examples where I show you how to carelessly allow all origins to make your new shiny React or Vue application "work", let\'s ramble for a little bit, and try to make the web a better place.'}),"\n",(0,t.jsx)(s.h2,{id:"the-problem-with-cors",children:"The problem with CORS"}),"\n",(0,t.jsxs)(s.p,{children:["The problem with CORS is ",(0,t.jsx)(s.strong,{children:"YOU"}),", ",(0,t.jsx)(s.strong,{children:"ME"}),", and the over-simplified tutorials on the internet."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy",children:"Same-origin"})," is a security barrier that restricts resources from being loaded by one origin."]}),"\n",(0,t.jsx)(s.p,{children:"This policy helps reducing attack vectors by isolating malicious resources."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"CORS"}),' is a way to "',(0,t.jsx)(s.em,{children:"lift that barrier"}),'" by allowing cross-origin access (',(0,t.jsx)(s.code,{children:"C O"})," in ",(0,t.jsx)(s.code,{children:"CORS"})," as you guessed correctly)."]}),"\n",(0,t.jsxs)(s.p,{children:["It is a way where your client can load data only from whitelisted origins. For example, if you have a backend API being served from ",(0,t.jsx)(s.code,{children:"https://api.kavi.wiw"}),", the outcome will be the following:"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Client"}),(0,t.jsx)(s.th,{children:"Server (Target)"}),(0,t.jsx)(s.th,{children:"Outcome"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://api.kavi.wiw/v1"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://api.kavi.wiw"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Same origin"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"http://api.kavi.wiw/"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://api.kavi.wiw"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Different protocol"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://api.kavi.wiw:8080/"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://api.kavi.wiw"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Different port"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://www.kavi.wiw/"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://api.kavi.wiw"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Different host"})})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"Two objects have the same origin only when the scheme (protocol), hostname (domain), and port all match."}),"\n",(0,t.jsxs)(s.p,{children:["If my shiny Angular or React front-end application is served from ",(0,t.jsx)(s.code,{children:"https://www.kavi.wiw/"})," and tries to consume my Node.js APIs on ",(0,t.jsx)(s.code,{children:"http://api.kavi.wiw/"}),", I mostly likely will get the following error:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"XMLHttpRequest cannot load http://api.kavi.wiw/.\nNo 'Access-Control-Allow-Origin' header is present on the requested resource. \nOrigin 'null' is therefore not allowed access.\n"})}),"\n",(0,t.jsx)(s.p,{children:"This error is thrown by my browser, as it doesn't let my front-end to load the response from backend."}),"\n",(0,t.jsxs)(s.p,{children:["That's to protect users from calling backends form unauthorized origins. For example, if a threat actor creates clones our front-end, and create a fake website say: ",(0,t.jsx)(s.code,{children:"https://fake-kavi.wiw"}),". Then sends it to victims."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy",children:"Same-origin"})," policy blocks this new unauthorized origin from loading responses from ",(0,t.jsx)(s.code,{children:"http://api.kavi.wiw/"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Anyways, we understood from the error that ",(0,t.jsx)(s.code,{children:"Access-Control-Allow-Origin"})," is missing. So we can add it to our server responses, but what values should it have?"]}),"\n",(0,t.jsxs)(s.p,{children:["Tutorials online mostly use wildcards (",(0,t.jsx)(s.code,{children:"*"}),'), or advice to use packages blindly, I mean even the "GREAT" ChatGPT told me this:']}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"ChatGPT advising to use cors package",src:r(4848).A+"",width:"1274",height:"1434"})}),"\n",(0,t.jsxs)(s.p,{children:["It advised me to use ",(0,t.jsx)(s.code,{children:"cors"})," package for this example, but if I ask it to not libraries I got the following answer:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"ChatGPT advising to allow all",src:r(458).A+"",width:"1316",height:"1328"})}),"\n",(0,t.jsxs)(s.p,{children:["Both approaches ",(0,t.jsx)(s.strong,{children:"might be"})," dangerous, or at least present some bad practices. If you spotted them, feel free to stop reading this article (unless you want to verify your/my information and probably suggest more clarification)."]}),"\n",(0,t.jsx)(s.h3,{id:"using-packages-with-default-params",children:"Using packages with default params"}),"\n",(0,t.jsxs)(s.p,{children:["Unless you are a public resource that can be accessed from ",(0,t.jsx)(s.strong,{children:"ANY origin"}),", and can be called using ",(0,t.jsx)(s.strong,{children:"ANY HTTP verb"}),", using default configuration from packages like ",(0,t.jsxs)(s.a,{href:"https://www.npmjs.com/package/cors",children:["Node.js's ",(0,t.jsx)(s.code,{children:"cors"})]})," may present some risks, or at least break the intentions behind having CORS protection."]}),"\n",(0,t.jsx)(s.p,{children:"This implementation:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"const express = require('express');\nconst cors = require('cors');\nconst app = express();\n\n\napp.use(cors());\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Is equivalent to having (see ",(0,t.jsxs)(s.a,{href:"https://www.npmjs.com/package/cors#configuration-options",children:[(0,t.jsx)(s.code,{children:"cors"})," package configuration options"]}),"):"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'const express = require(\'express\');\nconst cors = require(\'cors\');\nconst app = express();\n\napp.use(\n    cors({\n        "origin": "*",\n        "methods": "GET",\n        "preflightContinue": false,\n        "optionsSuccessStatus": 204\n    })\n);\n'})}),"\n",(0,t.jsxs)(s.p,{children:["These default parameters set a wild card for ",(0,t.jsx)(s.code,{children:"Access-Control-Allow-Origin"})," header, and authorize all (",(0,t.jsx)(s.code,{children:"GET,HEAD,PUT,PATCH,POST,DELETE"}),") headers in ",(0,t.jsx)(s.code,{children:"Access-Control-Allow-Methods"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["You probably just need to authorize certain requests from certain origins. For example, if your public website only serves resources to a static website that only consumes content with ",(0,t.jsx)(s.code,{children:"GET"}),", you may only need:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'const express = require(\'express\');\nconst cors = require(\'cors\');\nconst app = express();\n\napp.use(\n    cors({\n        "origin": "https://www.kavi.wiw",\n        "methods": "GET",\n    })\n);\n'})}),"\n",(0,t.jsx)(s.h3,{id:"adding-cors-headers-when-not-using-packages",children:"Adding CORS headers (when not using packages)"}),"\n",(0,t.jsx)(s.p,{children:"In the second example, ChatGPT proposed allowing all origins similarly as we may find in many answers on different forums online."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"app.use((req, res, next) => {\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');\n    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');\n    next();\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The following snippet may present the same challenges with unwanted results as we may get when using packages like ",(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/cors#configuration-options",children:(0,t.jsx)(s.code,{children:"cors"})}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"using-proxies",children:"Using proxies"}),"\n",(0,t.jsxs)(s.p,{children:["Many tutorials online suggest using proxies (either building our own proxies, or using solutions like ",(0,t.jsx)(s.a,{href:"https://github.com/Rob--W/cors-anywhere/",children:"cors-anywhere"}),'), this solution when used blindly or without knowing the "Why"s and the "How"s of HTTP/CORS can present security risks, and it may create backdoors by intentionally exposing, or at least facilitating the reach to protected resources.']}),"\n",(0,t.jsx)(s.h2,{id:"possible-solutions",children:"Possible solutions"}),"\n",(0,t.jsx)(s.p,{children:"There are no generic solutions. But there are best practices, and these are very project-specific. Don't take advice from random people online. Learn the basics and make your own judgment, or learn to ask the right questions."}),"\n",(0,t.jsx)(s.p,{children:"Learn more about CORS on:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["How to prevent CORS-based attacks: ",(0,t.jsx)(s.a,{href:"https://portswigger.net/web-security/cors#how-to-prevent-cors-based-attacks",children:"https://portswigger.net/web-security/cors#how-to-prevent-cors-based-attacks"})]}),"\n",(0,t.jsxs)(s.li,{children:["Same-origin policy: ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy",children:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"})]}),"\n",(0,t.jsxs)(s.li,{children:["Cross-Origin Resource Sharing (CORS): ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"})]}),"\n",(0,t.jsxs)(s.li,{children:["CORS Tutorial: A Guide to Cross-Origin Resource Sharing: ",(0,t.jsx)(s.a,{href:"https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/",children:"https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/"})]}),"\n",(0,t.jsxs)(s.li,{children:["Become a CORS Wizard \ud83e\uddd9\u200d\u2640\ufe0f: ",(0,t.jsx)(s.a,{href:"https://fatimamo.com/become-a-cors-wizard",children:"https://fatimamo.com/become-a-cors-wizard"})]}),"\n",(0,t.jsxs)(s.li,{children:["I want to add CORS support to my server: ",(0,t.jsx)(s.a,{href:"https://enable-cors.org/server.html",children:"https://enable-cors.org/server.html"})]}),"\n",(0,t.jsxs)(s.li,{children:["Front-end Developer Handbook 2019: ",(0,t.jsx)(s.a,{href:"https://frontendmasters.com/guides/front-end-handbook/2019/?#4.4",children:"https://frontendmasters.com/guides/front-end-handbook/2019/?#4.4"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"updates",children:"Updates:"}),"\n",(0,t.jsx)(s.h3,{id:"correction-1",children:"Correction #1"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Wrong"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.del,{children:"CORS, is a security mechanism to protect applications from being called from untrusted origins."})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.strong,{children:["Correction (on ",(0,t.jsx)(s.a,{href:"https://www.reddit.com/r/programming/comments/1c9inc9/comment/l0lk2tw/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",children:"Reddit"}),")"]})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Same-Origin Policy is the security measure and CORS is a way to lift that protection in selected cases."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},458:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/chat-gpt-fix-cors-no-npm-f07495b4226ac2a65e116d245f1264b9.png"},4848:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/chat-gpt-fix-cors-a7b12d1807b8f24d3a5657509081e9c0.png"},2432:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/the-office-m-scott-screaming-at-cors-df2e5ff48704c1ea0cc3935fa8c1f5d9.png"},9128:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>a});var t=r(9474);const i={},n=t.createContext(i);function o(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);