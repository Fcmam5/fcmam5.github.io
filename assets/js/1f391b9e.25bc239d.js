"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[61],{3565:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});t(9474);var i=t(8923),a=t(6293),l=t(2308),s=t(5539),r=t(5451),o=t(3539),c=t(5518);const d={mdxPageWrapper:"mdxPageWrapper_CXYJ"};var m=t(3274);function u(e){const{content:n}=e,{metadata:{title:t,description:u,frontMatter:f,unlisted:v},assets:h}=n,{keywords:g,wrapperClassName:x,hide_table_of_contents:p}=f,L=h.image??f.image;return(0,m.jsx)(a.e3,{className:(0,i.A)(x??l.G.wrapper.mdxPages,l.G.page.mdxPage),children:(0,m.jsxs)(s.A,{children:[(0,m.jsx)(a.be,{title:t,description:u,keywords:g,image:L}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,i.A)("row",d.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,i.A)("col",!p&&"col--8"),children:[v&&(0,m.jsx)(c.A,{}),(0,m.jsx)("article",{children:(0,m.jsx)(r.A,{children:(0,m.jsx)(n,{})})})]}),!p&&n.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(o.A,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})})]})})]})})}},3539:(e,n,t)=>{t.d(n,{A:()=>j});var i=t(9474),a=t(8923),l=t(579);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>o(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function d(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){const n=(0,i.useRef)(void 0),t=d();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:s}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),o=c(r,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var u=t(1119),f=t(3274);function v(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,f.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,f.jsxs)("li",{children:[(0,f.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,f.jsx)(v,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const h=i.memo(v);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d,...u}=e;const v=(0,l.p)(),g=c??v.tableOfContents.minHeadingLevel,x=d??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>r({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:g,maxHeadingLevel:x});return m((0,i.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:g,maxHeadingLevel:x}}),[a,o,g,x])),(0,f.jsx)(h,{toc:p,className:t,linkClassName:a,...u})}const x={tableOfContents:"tableOfContents_B0E7",docItemContainer:"docItemContainer_AVXj"},p="table-of-contents__link toc-highlight",L="table-of-contents__link--active";function j(e){let{className:n,...t}=e;return(0,f.jsx)("div",{className:(0,a.A)(x.tableOfContents,"thin-scrollbar",n),children:(0,f.jsx)(g,{...t,linkClassName:p,linkActiveClassName:L})})}},5518:(e,n,t)=>{t.d(n,{A:()=>f});t(9474);var i=t(8923),a=t(355),l=t(6629),s=t(3274);function r(){return(0,s.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(l.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(2308),m=t(7006);function u(e){let{className:n}=e;return(0,s.jsx)(m.A,{type:"caution",title:(0,s.jsx)(r,{}),className:(0,i.A)(n,d.G.common.unlistedBanner),children:(0,s.jsx)(o,{})})}function f(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(u,{...e})]})}}}]);