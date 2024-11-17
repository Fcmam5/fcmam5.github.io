"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[459],{5960:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"npm-stuff","metadata":{"permalink":"/snippets/npm-stuff","source":"@site/snippets-blog/2024-10-23-npm-stuff/index.md","title":"My npm notebook","description":"Useful npm commands and packages","date":"2024-10-23T00:00:00.000Z","tags":[{"inline":true,"label":"js","permalink":"/snippets/tags/js"},{"inline":true,"label":"ts","permalink":"/snippets/tags/ts"},{"inline":true,"label":"npm","permalink":"/snippets/tags/npm"}],"readingTime":1.25,"hasTruncateMarker":true,"authors":[{"name":"Abdeldjalil Fortas","title":"A part-time Karantika lover","url":"https://github.com/fcmam5","socials":{"x":"https://x.com/fcmam5","github":"https://github.com/fcmam5"},"imageURL":"https://github.com/fcmam5.png","key":"fcmam5","page":null}],"frontMatter":{"description":"Useful npm commands and packages","slug":"npm-stuff","showLastUpdateTime":true,"authors":["fcmam5"],"tags":["js","ts","npm"]},"unlisted":false,"nextItem":{"title":"Jest-uatlity: Making work with Jest fun\xa0again","permalink":"/snippets/jest-utility"}},"content":"Here\'s a collection of some npm commands and packages I frequently use or forget.\\n\\n\\n:::warning WIP\\n\\nThis is a draft\\n\\n:::\\n\\n\x3c!-- truncate --\x3e\\n\\n\\n## Updating npm packages\\n\\n`npm update` and other packages do the job, but I prefer [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) for many reasons:\\n\\n- It just updates packages in `package.json` allowing me to see the diffs and cherry-pick what I want/need to update, then I can just install them with my preferred package manager.\\n\\n- It has an interactive mode in its CLI where I can select what I need, e.g:\\n    ```\\n\\n    \u25b6 npx npm-check-updates -i    \\n\\n    ? Choose which packages to update \u203a \\n    \u2191/\u2193: Select a package\\n    Space: Toggle selection\\n    a: Toggle all\\n    Enter: Upgrade\\n    \\n    \u25c9 @docusaurus/core                   3.1.1  \u2192    3.5.2\\n    \u25c9 @docusaurus/module-type-aliases    3.1.1  \u2192    3.5.2\\n    \u25c9 @docusaurus/plugin-google-gtag    ^3.2.1  \u2192   ^3.5.2\\n    \u25c9 @docusaurus/preset-classic         3.1.1  \u2192    3.5.2\\n    \u25c9 @docusaurus/types                  3.1.1  \u2192    3.5.2\\n    \u25c9 @mdx-js/react                     ^3.0.1  \u2192   ^3.1.0\\n    \u276f \u25ef clsx                              ^2.1.0  \u2192   ^2.1.1\\n    \u25ef prism-react-renderer              ^2.3.1  \u2192   ^2.4.0\\n    \u25c9 react                            ^18.2.0  \u2192  ^18.3.1\\n    \u25c9 react-dom                        ^18.2.0  \u2192  ^18.3.1\\n    ```\\n- I can select what updates I\'m interested in by passing `-t TARGET` (latest, minor, patch, semver, `@[tag]`, etc). e.g:\\n    ```bash\\n    \u25b6 npx npm-check-updates -t minor # OR: npx npm-check-updates -t minor -i\\n\\n    @docusaurus/core                   3.1.1  \u2192    3.5.2\\n    @docusaurus/module-type-aliases    3.1.1  \u2192    3.5.2\\n    @docusaurus/plugin-google-gtag    ^3.2.1  \u2192   ^3.5.2\\n    @docusaurus/preset-classic         3.1.1  \u2192    3.5.2\\n    @docusaurus/types                  3.1.1  \u2192    3.5.2\\n    @mdx-js/react                     ^3.0.1  \u2192   ^3.1.0\\n    clsx                              ^2.1.0  \u2192   ^2.1.1\\n    prism-react-renderer              ^2.3.1  \u2192   ^2.4.0\\n    react                            ^18.2.0  \u2192  ^18.3.1\\n    react-dom                        ^18.2.0  \u2192  ^18.3.1\\n\\n    Run npx npm-check-updates -t minor -u to upgrade package.json\\n    ```"},{"id":"jest-utility","metadata":{"permalink":"/snippets/jest-utility","source":"@site/snippets-blog/2024-05-06-jestuality/index.md","title":"Jest-uatlity: Making work with Jest fun\xa0again","description":"Jest tips & tricks","date":"2024-05-06T00:00:00.000Z","tags":[{"inline":true,"label":"js","permalink":"/snippets/tags/js"},{"inline":true,"label":"ts","permalink":"/snippets/tags/ts"},{"inline":true,"label":"testing","permalink":"/snippets/tags/testing"}],"readingTime":3.1,"hasTruncateMarker":true,"authors":[{"name":"Abdeldjalil Fortas","title":"A part-time Karantika lover","url":"https://github.com/fcmam5","socials":{"x":"https://x.com/fcmam5","github":"https://github.com/fcmam5"},"imageURL":"https://github.com/fcmam5.png","key":"fcmam5","page":null}],"frontMatter":{"description":"Jest tips & tricks","slug":"jest-utility","showLastUpdateTime":true,"authors":["fcmam5"],"tags":["js","ts","testing"]},"unlisted":false,"prevItem":{"title":"My npm notebook","permalink":"/snippets/npm-stuff"}},"content":"Jest is my go-to testing framework, it\'s the default in many of tools I use at work in my side projects and I didn\'t bother to reconfigure NestJS or NX.dev before I start a new project. Jest works for me, and works well.\\n\\nBut sometimes... Sometimes... I have to Google a little bit harder before I figure out how to do things.\\n\\nIn this blog I will share some of the tricks I learned, and some of the concepts I didn\'t know which led me to a frustrating debugging sessions. For example, the fact that `jest.mock` is hoisted, which makes using variables in mocked modules a bit tricky.\\n\\nThis blog will be updated each time I remember some of the tricks, or I learn something new about Jest.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Snippets\\n\\n### Mock promise rejection\\n\\nSource:\\n\\n- https://jestjs.io/docs/tutorial-async#rejects\\n\\n```js\\nit(\'tests error with async/await and rejects\', async () => {\\n  expect.assertions(1);\\n  await expect(user.getUserName(3)).rejects.toEqual({\\n    error: \'User with 3 not found.\',\\n  });\\n});\\n```\\n\\n### Mocked methods chaining\\n\\nExample:\\n\\n```js\\nif (errors.length) return res.status(400).json(errors);\\n```\\n\\nMock:\\n\\n```js\\nmockResponse = {\\n  status: jest.fn().mockReturnThis(),\\n  json: jest.fn(),\\n};\\n```\\n\\nRef: https://stackoverflow.com/a/75811953/5078746\\n\\n## IDE Setup\\n\\n### VS Code\\n\\n- Jest Snippets: [andys8.jest-snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets)\\n- Jest (by Orta): [Orta.vscode-jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)\\n\\n## Tricks\\n\\n### Using `it.each` and `describe.each`\\n\\nExample:\\n\\n```js\\n  it.each([\\n    [\\"no args were passed\\", undefined, productInfoMissingErr],\\n    [\\"no product IDs were passed\\", noIdData, productInfoMissingErr],\\n    [\\n      \\"an empty array of products was passed\\",\\n      { products: [] },\\n      productIdMissingErr,\\n    ],\\n  ])(\\"should throw if %s\\", (caseTitle, input, errMsg) => {\\n    return readPricing().catch((e: Error) => {\\n      expect.assertions(3);\\n      expect(<jest.Mock>fetch).not.toHaveBeenCalled();\\n      expect(e).toBeInstanceOf(TypeError);\\n      expect(e.message).toBe(errMsg);\\n    });\\n  });\\n```\\n\\n- Link to the example on SoF: https://stackoverflow.com/a/75527420/5078746\\n- Documentation:\\n  - [`it.each`](https://jestjs.io/docs/api#testeachtablename-fn-timeout)\\n  - [`describe.each`](https://jestjs.io/docs/api#describeeachtablename-fn-timeout)\\n\\n:::tip\\nIf you are using [jest-snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets) in VS Code, just type `ite` and `desce`.\\n:::\\n\\n### Using `jest-when` to specify dynamic returns matched with specific arguments\\n\\nPackage:\\n\\n- [npm](https://www.npmjs.com/package/jest-when)\\n- [Repository](https://github.com/timkindberg/jest-when)\\n\\nInstallation\\n\\n```\\nnpm i jest-when && npm i -D @types/jest-when\\n```\\n\\nExample\\n\\n```js\\nconst fn = jest.fn()                   \\nwhen(fn)\\n  .calledWith(/* any matchers here */)\\n  .mockReturnValue(/* some value */)\\n```\\n\\n\\n### Using `jest-extended` to have more matchers\\n\\nPackage:\\n\\n- [npm](https://www.npmjs.com/package/jest-extended)\\n- [Repository](https://github.com/jest-community/jest-extended)\\n- [Documentation](https://jest-extended.jestcommunity.dev/docs/matchers/)\\n\\nInstallation\\n\\n```\\nnpm i -D jest-extended\\n```\\n\\nExample with [`.toBeAfter(date)` matcher](https://jest-extended.jestcommunity.dev/docs/matchers/date/#tobeafterdate):\\n\\n```js\\ntest(\'passes when input is after date\', () => {\\n  expect(new Date(\'01/01/2019\')).toBeAfter(new Date(\'01/01/2018\'));\\n  expect(\'01/01/2018\').not.toBeAfter(new Date(\'01/01/2019\'));\\n});\\n```\\n\\n## Learnings\\n\\n### Why does Jest run faster with --maxWorkers=50%?\\n\\nRef: https://stackoverflow.com/a/75490452/5078746\\n\\n> That cost of spawning and scheduling multiple jest-workers might be sometimes greater than the gains we may get with parallelization. By using multiple workers you are instantiating more objects that will load different files from the disk. That\'s why in small and atomic tests you don\'t see any (or just a small) performance gain by using --maxWorkers=50%|1.\\n\\n### Globals in Jest environment differ from NodeJS\'s\\n\\nExample #1:\\n\\n```js\\nit(\\"throws TypeError when url is invalid\\", () => {\\n  expect(() => {\\n    new URL(\\"\\"); // This does not work\\n    // throw new TypeError(); // This works\\n  }).toThrow(TypeError);\\n})\\n```\\n\\nProposed solution: Throw custom errors\\n\\n<br/>\\n\\n**Answers on StackOverflow:**\\n\\n- https://stackoverflow.com/a/75569401/5078746\\n- https://stackoverflow.com/a/75524385/5078746\\n\\n\\n### `jest.mock` calls are automatically hoisted\\n\\n\\n**Resources:**\\n\\n- https://github.com/jestjs/jest/issues/2582#issuecomment-272287545\\n- https://github.com/kentcdodds/how-jest-mocking-works\\n\\n### Jest mocks have to have `mock` in names\\n\\nMocks must have `mock` prefix in the name, otherwise you will see the following error:\\n```\\n    Note: This is a precaution to guard against uninitialized mock variables. If it is ensured that the mock is required lazily, variable names prefixed with `mock` (case insensitive) are permitted.\\n```\\n\\nFor example here:\\n\\n```js\\nconst fakeEmoji = jest.fn();\\n\\njest.mock(\\"./emoji\\", () => ({\\n  getEmoji: fakeEmoji,\\n}));\\n\\nconst { getHello } = require(\\"./hello\\");\\n\\ndescribe(\\"Testing my-module\\", () => {\\n  beforeEach(() => {\\n    fakeEmoji.mockReturnValue(\\"\ud83d\ude0f\\");\\n  });\\n\\n  it(\'should say \\"Hello {NAME}\\" with a smirk\', () => {\\n    expect(getHello(\\"Kadour\\")).toBe(\\"Hello Kadour \ud83d\ude0f\\");\\n  });\\n});\\n```\\n\\nMy mock function (`fakeEmoji`) must have `mock` prefix."}]}}')}}]);