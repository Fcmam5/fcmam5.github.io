"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[711],{3703:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});t(9474);var s=t(4432),a=t(1987),i=t(8764),l=t(4758),n=t(9130),c=t(3274);function o(e){let{year:r,posts:t}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.A,{as:"h3",id:r,children:r}),(0,c.jsx)("ul",{children:t.map((e=>(0,c.jsx)("li",{children:(0,c.jsxs)(s.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function h(e){let{years:r}=e;return(0,c.jsx)("section",{className:"margin-vert--lg",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,c.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,c.jsx)(o,{...e})},r)))})})})}function d(e){let{archive:r}=e;const t=(0,a.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,a.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),o=function(e){const r=e.reduce(((e,r)=>{const t=r.metadata.date.split("-")[0],s=e.get(t)??[];return e.set(t,[r,...s])}),new Map);return Array.from(r,(e=>{let[r,t]=e;return{year:r,posts:t}}))}(r.blogPosts);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.be,{title:t,description:s}),(0,c.jsxs)(l.A,{children:[(0,c.jsx)("header",{className:"hero hero--primary",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(n.A,{as:"h1",className:"hero__title",children:t}),(0,c.jsx)("p",{className:"hero__subtitle",children:s})]})}),(0,c.jsx)("main",{children:o.length>0&&(0,c.jsx)(h,{years:o})})]})]})}}}]);