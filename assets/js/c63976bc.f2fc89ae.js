"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6],{2472:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=s(3274),o=s(9128);const i={description:"Few tips on how to avoid some of NestJS performance bottlenecks",slug:"avoiding-nestjs-performance-bottlenecks",authors:["fcmam5"],tags:["backend","nestjs","development"]},a="Avoiding NestJS performance bottlenecks",r={permalink:"/blog/avoiding-nestjs-performance-bottlenecks",source:"@site/blog/2023-09-23-avoiding-nestjs-perf-bottlenecks/index.md",title:"Avoiding NestJS performance bottlenecks",description:"Few tips on how to avoid some of NestJS performance bottlenecks",date:"2023-09-23T00:00:00.000Z",formattedDate:"September 23, 2023",tags:[{label:"backend",permalink:"/blog/tags/backend"},{label:"nestjs",permalink:"/blog/tags/nestjs"},{label:"development",permalink:"/blog/tags/development"}],readingTime:6.7,hasTruncateMarker:!0,authors:[{name:"Abdeldjalil Fortas",title:"A part-time Karantika lover",url:"https://github.com/fcmam5",imageURL:"https://github.com/fcmam5.png",key:"fcmam5"}],frontMatter:{description:"Few tips on how to avoid some of NestJS performance bottlenecks",slug:"avoiding-nestjs-performance-bottlenecks",authors:["fcmam5"],tags:["backend","nestjs","development"]},unlisted:!1,prevItem:{title:"Why you should kick idle users out of your website",permalink:"/blog/why-you-should-kick-idle-users-out-of-your-website"},nextItem:{title:"CTF as a developer (Pt. 1): Template engines & SSTI",permalink:"/blog/ctf-as-a-developer-pt-1-template-engines-ssti"}},l={authorsImageUrls:[void 0]},c=[{value:"Carefully upgrade to newer NestJS and Node.js versions",id:"carefully-upgrade-to-newer-nestjs-and-nodejs-versions",level:2},{value:"The logger",id:"the-logger",level:2},{value:"Startup logger",id:"startup-logger",level:3},{value:"Injection scopes",id:"injection-scopes",level:2},{value:"Use Fastify",id:"use-fastify",level:2},{value:"Other things to consider",id:"other-things-to-consider",level:2},{value:"Final thoughts",id:"final-thoughts",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["I have been using ",(0,n.jsx)(t.a,{href:"https://nestjs.com/",children:"NestJS"})," for quite some time now. And as every JavaScript developer, I like to complain about it but I still love it, and I still have it as one of my go-to whenever I want to create any Node application."]}),"\n",(0,n.jsx)(t.p,{children:"NestJS helps you enjoy a good developer experience, especially if you are a proponent of OOP, and/or you are working with people who are used to other frameworks like Angular, or coming from a Java/Spring background."}),"\n",(0,n.jsxs)(t.p,{children:["NestJS implements ",(0,n.jsx)(t.a,{href:"https://github.com/nestjs/nest/blob/master/packages/common/decorators/core/injectable.decorator.ts",children:"its dependency injection framework"}),", which allows an easy abstraction of dependencies making code easier to maintain, test, and swap third-party libraries."]}),"\n",(0,n.jsxs)(t.p,{children:["With its powerful ",(0,n.jsx)(t.a,{href:"https://docs.nestjs.com/cli/overview",children:"CLI"}),", NestJS bootstraps applications in record time, it also comes with pre-configured modules, or installable plugins making it pleasant to work with and a powerful beginners-friendly tool."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["I published this article previously on Medium: ",(0,n.jsx)(t.a,{href:"https://medium.com/@Fcmam5/avoiding-nestjs-performance-bottlenecks-78fa2bc66372",children:"Avoiding NestJS performance bottlenecks"})]})}),"\n",(0,n.jsxs)(t.p,{children:["However, \u201c",(0,n.jsx)(t.a,{href:"https://youtu.be/377VhCOtoDA",children:"With great power comes great responsibility"}),"\u201d and NestJS is not an exception to Uncle Ben\u2019s quote."]}),"\n",(0,n.jsx)(t.p,{children:"Nest\u2019s \u201cfancy\u201d configuration is sometimes more fun to develop, but it sometimes causes performance bottlenecks. Especially when we start customizing things out of the framework\u2019s way of doing them, then things can get ugly easily."}),"\n",(0,n.jsx)(t.p,{children:"Here are some of the things I learned over the last few years:"}),"\n",(0,n.jsx)(t.h2,{id:"carefully-upgrade-to-newer-nestjs-and-nodejs-versions",children:"Carefully upgrade to newer NestJS and Node.js versions"}),"\n",(0,n.jsxs)(t.p,{children:["The Node.js community is active and continuously working on improving the ecosystem, and now thanks to ",(0,n.jsx)(t.a,{href:"https://github.com/nodejs/performance",children:"a performance-focused team"})," our beloved JavaScript runtime is getting faster and more performant."]}),"\n",(0,n.jsx)(t.p,{children:"One of the performance wins I could achieve was by simply bumping my runtime version from 14 to 16 and then to 18 while making little to no changes to my NestJS microservices code."}),"\n",(0,n.jsxs)(t.p,{children:["Similarly, the NestJS became more stable. With ",(0,n.jsx)(t.a,{href:"https://github.com/nestjs/docs.nestjs.com/blob/00a3eaa6ee48d072427805efba7b3d7c19cc74fd/content/migration.md",children:"few"})," breaking changes from v8.x to 10.x, I feel more comfortable keeping up with new major releases to benefit from the new performance improvements, CVE patches, and bug fixes."]}),"\n",(0,n.jsx)(t.h2,{id:"the-logger",children:"The logger"}),"\n",(0,n.jsxs)(t.p,{children:["NestJS comes with a default ",(0,n.jsxs)(t.a,{href:"https://github.com/nestjs/nest/blob/67951ff2e9b7f4803856ab8169e23350e49d7dfc/packages/common/services/console-logger.service.ts#L221",children:["logger which is used by default ",(0,n.jsx)(t.code,{children:"process.stdout.write"})]}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"process.stdout"})," and ",(0,n.jsx)(t.code,{children:"process.stderr"})," is not advised to be used in logging as it may behave synchronously and block the event loop, as the ",(0,n.jsx)(t.a,{href:"https://nodejs.org/api/process.html#a-note-on-process-io",children:"Node.js documentation states"}),":"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Warning:"})," ",(0,n.jsxs)(t.em,{children:["Synchronous writes block the event loop until the write has completed. This can be near instantaneous in the case of output to a file, but under high system load, pipes that are not being read at the receiving end, or with slow terminals or file systems, it\u2019s possible for the event loop to be blocked often enough and long enough to have severe negative performance impacts. This may not be a problem when writing to an interactive terminal session, ",(0,n.jsx)(t.strong,{children:"but consider this particularly careful when doing production logging to the process output streams"}),"."]})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Gladly, the logger ",(0,n.jsx)(t.a,{href:"https://docs.nestjs.com/techniques/logger#use-external-logger",children:"can be easily customized"})," and replaced by dedicated logging libraries such as ",(0,n.jsx)(t.a,{href:"https://github.com/iamolegga/nestjs-pino",children:"nestjs-pino"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/gremo/nest-winston",children:"nest-winston"})," which also offer more flexibility and better performance. NestJS documentation covers that well."]}),"\n",(0,n.jsx)(t.p,{children:"However, even when using custom loggers there are some things to consider."}),"\n",(0,n.jsx)(t.h3,{id:"startup-logger",children:"Startup logger"}),"\n",(0,n.jsx)(t.p,{children:"Even if you use a custom logging library, you\u2019d still have the first few logs printed in Nest\u2019s standard standard form. As NestJS will start streaming application start logs before the logger is attached, that not only may lose crucial framework setup logs from being hidden from logging dashboards but also impact the startup time with few MS."}),"\n",(0,n.jsxs)(t.p,{children:["For example, I usually go for ",(0,n.jsx)(t.a,{href:"https://github.com/pinojs/pino",children:"Pino"})," (with ",(0,n.jsx)(t.a,{href:"https://github.com/iamolegga/nestjs-pino",children:"nestjs-pino"}),") as my logging library, my ",(0,n.jsx)(t.code,{children:"main.ts"})," have:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\nimport { Logger } from 'nestjs-pino';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.useLogger(app.get(Logger));\n\n  await app.listen(3000);\n}\nbootstrap();\n"})}),"\n",(0,n.jsx)(t.p,{children:"This produces a mixed log format as the following:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'[Nest] 89914  - 09/16/2023, 2:25:41 AM     LOG [NestFactory] Starting Nest application...\n[Nest] 89914  - 09/16/2023, 2:25:41 AM     LOG [InstanceLoader] AppModule dependencies initialized +16ms\n[Nest] 89914  - 09/16/2023, 2:25:41 AM     LOG [InstanceLoader] LoggerModule dependencies initialized +0ms\n{"level":30,"time":1694823941975,"pid":89914,"hostname":"Fcmam5","context":"RoutesResolver","msg":"AppController {/}:"}\n{"level":30,"time":1694823941978,"pid":89914,"hostname":"Fcmam5","context":"RouterExplorer","msg":"Mapped {/, GET} route"}\n{"level":30,"time":1694823941980,"pid":89914,"hostname":"Fcmam5","context":"NestApplication","msg":"Nest application successfully started"}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The fix would be just buffering logs by setting ",(0,n.jsx)(t.code,{children:"bufferLogs"})," to ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\nimport { Logger } from 'nestjs-pino';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule, { bufferLogs: true });\n  app.useLogger(app.get(Logger));\n\n  await app.listen(3000);\n}\n\nbootstrap();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This makes sure all logs will be buffered until the custom logger is attached and then logged in its format (",(0,n.jsx)(t.code,{children:"nestjs-pino"})," in this case), so I would have something like:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{"level":30,"time":1694858121769,"pid":97585,"hostname":"Fcmam5","context":"NestFactory","msg":"Starting Nest application..."}\n{"level":30,"time":1694858121770,"pid":97585,"hostname":"Fcmam5","context":"InstanceLoader","msg":"AppModule dependencies initialized"}\n{"level":30,"time":1694858121770,"pid":97585,"hostname":"Fcmam5","context":"InstanceLoader","msg":"LoggerModule dependencies initialized"}\n{"level":30,"time":1694858121770,"pid":97585,"hostname":"Fcmam5","context":"RoutesResolver","msg":"AppController {/}:"}\n{"level":30,"time":1694858121770,"pid":97585,"hostname":"Fcmam5","context":"RouterExplorer","msg":"Mapped {/, GET} route"}\n{"level":30,"time":1694858121770,"pid":97585,"hostname":"Fcmam5","context":"NestApplication","msg":"Nest application successfully started"}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Note that for standalone applications ",(0,n.jsx)(t.a,{href:"https://github.com/iamolegga/nestjs-pino#logger-substitution",children:"you may need to flush log buffers manually"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"injection-scopes",children:"Injection scopes"}),"\n",(0,n.jsxs)(t.p,{children:["We had a use case where we wanted to inject a ",(0,n.jsx)(t.a,{href:"https://microsoft.github.io/code-with-engineering-playbook/observability/correlation-id/",children:"correlation ID"})," into our logs to keep track of what was happening in our application for a particular request."]}),"\n",(0,n.jsxs)(t.p,{children:["The na\xefve approach I was about to use, was to implement a ",(0,n.jsx)(t.a,{href:"https://docs.nestjs.com/fundamentals/injection-scopes#request-provider",children:"request-scoped"})," instance of the logger, something like:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { Injectable, Scope, Inject} from '@nestjs/common';\n\n@Injectable({ scope: Scope.REQUEST })\nexport class SomeBrokenLoggingService {\n  ...\n\n  log(message) {\n    callCustomLoggingLib({reqId: this.getCorrelationID(), message })\n  }\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Then I learned how bad that call was, I overlooked the fact that this approach means that I will be instantiating a new instance ",(0,n.jsx)(t.code,{children:"SomeBrokenLoggingService"})," for each request, that would impact my application performance (see: ",(0,n.jsx)(t.a,{href:"https://docs.nestjs.com/fundamentals/injection-scopes#performance",children:"injection-scopes#performance"}),")."]}),"\n",(0,n.jsx)(t.p,{children:"The learnings I got from that were:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"To use a well-maintained library to do that for me."}),"\n",(0,n.jsx)(t.li,{children:"To be more careful with Injection scopes."}),"\n",(0,n.jsxs)(t.li,{children:["Consider using ",(0,n.jsx)(t.a,{href:"https://docs.nestjs.com/recipes/async-local-storage",children:"async local storage"})," for some use cases (recently added, thanks NestJS community!)."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For example, ",(0,n.jsx)(t.a,{href:"https://github.com/iamolegga/nestjs-pino#faq",children:"nestjs-pino"})," uses ",(0,n.jsx)(t.a,{href:"https://nodejs.org/api/async_context.html#async_context_class_asynclocalstorage",children:"AsyncLocalStorage"})," (previously relied on ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/cls-hooked",children:"cls-hooked"})," package)."]}),"\n",(0,n.jsx)(t.h2,{id:"use-fastify",children:"Use Fastify"}),"\n",(0,n.jsxs)(t.p,{children:["Made by Node.js maintainers who worked on performance, Fastify ",(0,n.jsx)(t.a,{href:"https://fastify.dev/benchmarks",children:"has proven its performance"})," and it\u2019s making its way to compete with Express to be the most popular Node.js framework."]}),"\n",(0,n.jsxs)(t.p,{children:["NestJS comes by default with ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@nestjs/platform-express",children:"Express platform"}),", but it can be easily switched to Fastify, and the documentation did a great job explaining it on the ",(0,n.jsx)(t.a,{href:"https://docs.nestjs.com/techniques/performance#performance-fastify",children:"\u201cPerformance (Fastify)\u201d page"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The switch from Express to Fastify can be done easily if your codebase is not relying on Express-specific code (as it should be if done \xe0 la NestJS), you may only change req/res types from Fastify\u2019s Request and FastifyReply interfaces and probably have to replace the usage of some packages like helmet ",(0,n.jsx)(t.a,{href:"https://docs.nestjs.com/security/helmet#use-with-fastify",children:"to use helmet/fastify"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"other-things-to-consider",children:"Other things to consider"}),"\n",(0,n.jsxs)(t.p,{children:["Rule #0: ",(0,n.jsx)(t.strong,{children:"MEASURE!"})]}),"\n",(0,n.jsx)(t.p,{children:"Before blaming the framework, we should make sure that our code is performant, that our usage of third-party components is efficient, and that our database queries are efficient."}),"\n",(0,n.jsx)(t.p,{children:"Then we may start looking into other framework-related micro-optimizations:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Global pipes, middlewares, guards, and filters might not be always a good idea.\nThey sometimes run unnecessary code for endpoints that don\u2019t need their transformations."}),"\n",(0,n.jsx)(t.li,{children:"Use lazy loading if it\u2019s relevant to your use case.\nLazy loading defers module registration by loading them asynchronously to decrease application startup time (which might make sense in a serverless environment)."}),"\n",(0,n.jsxs)(t.li,{children:["If you are using the config module, and accessing environment variables using ",(0,n.jsx)(t.code,{children:"process.env"})," might be slow, cashing can be a solution, see: ",(0,n.jsx)(t.a,{href:"https://docs.nestjs.com/techniques/configuration#cache-environment-variables",children:"Cache environment variables"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"final-thoughts",children:"Final thoughts"}),"\n",(0,n.jsx)(t.p,{children:"It might be unfair to compare NestJS to Express, Hapi, Koa, or Fastify. We will find out that it\u2019s either slow, has a bigger memory footprint, or uses more CPU. That makes sense."}),"\n",(0,n.jsxs)(t.p,{children:["NestJS takes care of a lot of things by default to offer a good and ",(0,n.jsx)(t.em,{children:"\u201cflexible\u201d"})," developer experience with its built-in libraries and configurations making ",(0,n.jsx)(t.a,{href:"https://stackoverflow.com/a/48226084/5078746",children:"micro-sacrifices of performance"}),", which can be accepted."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://youtu.be/tKbV6BpH-C8",children:(0,n.jsx)(t.img,{alt:"CodeAesthetic: Premature optimization",src:s(9138).A+"",width:"1400",height:"802"})})}),"\n",(0,n.jsxs)(t.p,{children:["Premature optimization is evil, and if one really can spot performance decrease; Analysis must be done first, by applying the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Pareto_principle",children:"20-80% rule"}),", we may figure out that most performance hits are not directly related to the framework, but our code, our logic and the way we interact with third-parties."]}),"\n",(0,n.jsx)(t.p,{children:"We should first find the bottlenecks that are decreasing performance the most, fix them, monitor and then consider if it makes sense to push for more micro-optimizations."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},9138:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/premature-optimization-dbb1c414c2c337dae45a02b1b6d4463c.png"},9128:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(9474);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);