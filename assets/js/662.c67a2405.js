"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[662],{8092:(e,t,s)=>{s.d(t,{A:()=>f});var a=s(9474),n=s(8923),l=s(5539),r=s(6194),i=s(1119),o=s(355),c=s(241),m=s(2366);function d(e){const{pathname:t}=(0,c.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_ORL3",sidebarItemTitle:"sidebarItemTitle_D1lp",sidebarItemList:"sidebarItemList_PKz3",sidebarItem:"sidebarItem_Uwfp",sidebarItemLink:"sidebarItemLink_IHDF",sidebarItemLinkActive:"sidebarItemLinkActive_aOl0"};var h=s(3274);function g(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,n.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,n.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,n.A)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=s(6193);function x(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,h.jsx)(p.GX,{component:x,props:e})}function b(e){let{sidebar:t}=e;const s=(0,r.l)();return t?.items.length?"mobile"===s?(0,h.jsx)(j,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function f(e){const{sidebar:t,toc:s,children:a,...r}=e,i=t&&t.items.length>0;return(0,h.jsx)(l.A,{...r,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(b,{sidebar:t}),(0,h.jsx)("main",{className:(0,n.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},4087:(e,t,s)=>{s.d(t,{A:()=>G});var a=s(9474),n=s(8923),l=s(1572),r=s(788),i=s(3274);function o(e){let{children:t,className:s}=e;const{frontMatter:a,assets:n,metadata:{description:o}}=(0,l.e)(),{withBaseUrl:c}=(0,r.h)(),m=n.image??a.image,d=a.keywords??[];return(0,i.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,i.jsx)("meta",{itemProp:"description",content:o}),m&&(0,i.jsx)("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&(0,i.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),t]})}var c=s(1119);const m={title:"title_PLXT"};function d(e){let{className:t}=e;const{metadata:s,isBlogPostPage:a}=(0,l.e)(),{permalink:r,title:o}=s,d=a?"h1":"h2";return(0,i.jsx)(d,{className:(0,n.A)(m.title,t),itemProp:"headline",children:a?o:(0,i.jsx)(c.A,{itemProp:"url",to:r,children:o})})}var u=s(355),h=s(5991);const g=["zero","one","two","few","many","other"];function p(e){return g.filter((t=>e.includes(t)))}const x={locale:"en",pluralForms:p(["one","other"]),select:e=>1===e?"one":"other"};function j(){const{i18n:{currentLocale:e}}=(0,h.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:p(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),x}}),[e])}function b(){const e=j();return{selectMessage:(t,s)=>function(e,t,s){const a=e.split("|");if(1===a.length)return a[0];a.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=s.select(t),l=s.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(s,t,e)}}const f={container:"container_dhee"};function v(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=b();return t=>{const s=Math.ceil(t);return e(s,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,i.jsx)(i.Fragment,{children:s(t)})}function N(e){let{date:t,formattedDate:s}=e;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function A(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function _(e){let{className:t}=e;const{metadata:s}=(0,l.e)(),{date:a,formattedDate:r,readingTime:o}=s;return(0,i.jsxs)("div",{className:(0,n.A)(f.container,"margin-vert--md",t),children:[(0,i.jsx)(N,{date:a,formattedDate:r}),void 0!==o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(A,{}),(0,i.jsx)(v,{readingTime:o})]})]})}function P(e){return e.href?(0,i.jsx)(c.A,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function k(e){let{author:t,className:s}=e;const{name:a,title:l,url:r,imageURL:o,email:c}=t,m=r||c&&`mailto:${c}`||void 0;return(0,i.jsxs)("div",{className:(0,n.A)("avatar margin-bottom--sm",s),children:[o&&(0,i.jsx)(P,{href:m,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:o,alt:a,itemProp:"image"})}),a&&(0,i.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(P,{href:m,itemProp:"url",children:(0,i.jsx)("span",{itemProp:"name",children:a})})}),l&&(0,i.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:l})]})]})}const T={authorCol:"authorCol_DXU9",imageOnlyAuthorRow:"imageOnlyAuthorRow_Nqbi",imageOnlyAuthorCol:"imageOnlyAuthorCol_GJRv"};function w(e){let{className:t}=e;const{metadata:{authors:s},assets:a}=(0,l.e)();if(0===s.length)return null;const r=s.every((e=>{let{name:t}=e;return!t}));return(0,i.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",r?T.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,i.jsx)("div",{className:(0,n.A)(!r&&"col col--6",r?T.imageOnlyAuthorCol:T.authorCol),children:(0,i.jsx)(k,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})},t)))})}function I(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(d,{}),(0,i.jsx)(_,{}),(0,i.jsx)(w,{})]})}var L=s(2195),y=s(5451);function F(e){let{children:t,className:s}=e;const{isBlogPostPage:a}=(0,l.e)();return(0,i.jsx)("div",{id:a?L.blogPostContainerID:void 0,className:(0,n.A)("markdown",s),itemProp:"articleBody",children:(0,i.jsx)(y.A,{children:t})})}var C=s(2308);const M={iconEdit:"iconEdit_hcuc"};function R(e){let{className:t,...s}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.A)(M.iconEdit,t),"aria-hidden":"true",...s,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function B(e){let{editUrl:t}=e;return(0,i.jsxs)(c.A,{to:t,className:C.G.common.editThisPage,children:[(0,i.jsx)(R,{}),(0,i.jsx)(u.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const D={tag:"tag_MMjj",tagRegular:"tagRegular_yhMb",tagWithCount:"tagWithCount_Suq2"};function O(e){let{permalink:t,label:s,count:a}=e;return(0,i.jsxs)(c.A,{href:t,className:(0,n.A)(D.tag,a?D.tagWithCount:D.tagRegular),children:[s,a&&(0,i.jsx)("span",{children:a})]})}const U={tags:"tags_ex_m",tag:"tag_Jsg0"};function $(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(u.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,n.A)(U.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,i.jsx)("li",{className:U.tag,children:(0,i.jsx)(O,{label:t,permalink:s})},s)}))})]})}function z(){return(0,i.jsx)("b",{children:(0,i.jsx)(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function E(e){const{blogPostTitle:t,...s}=e;return(0,i.jsx)(c.A,{"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,i.jsx)(z,{})})}const q={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_d_8A"};function S(){const{metadata:e,isBlogPostPage:t}=(0,l.e)(),{tags:s,title:a,editUrl:r,hasTruncateMarker:o}=e,c=!t&&o,m=s.length>0;return m||c||r?(0,i.jsxs)("footer",{className:(0,n.A)("row docusaurus-mt-lg",t&&q.blogPostFooterDetailsFull),children:[m&&(0,i.jsx)("div",{className:(0,n.A)("col",{"col--9":c}),children:(0,i.jsx)($,{tags:s})}),t&&r&&(0,i.jsx)("div",{className:"col margin-top--sm",children:(0,i.jsx)(B,{editUrl:r})}),c&&(0,i.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":m}),children:(0,i.jsx)(E,{blogPostTitle:a,to:e.permalink})})]}):null}function G(e){let{children:t,className:s}=e;const a=function(){const{isBlogPostPage:e}=(0,l.e)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(o,{className:(0,n.A)(a,s),children:[(0,i.jsx)(I,{}),(0,i.jsx)(F,{children:t}),(0,i.jsx)(S,{})]})}},9999:(e,t,s)=>{s.d(t,{A:()=>r});s(9474);var a=s(8923),n=s(1119),l=s(3274);function r(e){const{permalink:t,title:s,subLabel:r,isNext:i}=e;return(0,l.jsxs)(n.A,{className:(0,a.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}},1572:(e,t,s)=>{s.d(t,{e:()=>o,i:()=>i});var a=s(9474),n=s(4393),l=s(3274);const r=a.createContext(null);function i(e){let{children:t,content:s,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:s}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:n});return(0,l.jsx)(r.Provider,{value:i,children:t})}function o(){const e=(0,a.useContext)(r);if(null===e)throw new n.dV("BlogPostProvider");return e}}}]);