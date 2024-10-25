---
description: Useful npm commands and packages
slug: npm-stuff
showLastUpdateTime: true
authors:
  - fcmam5
tags: [js,ts,npm]
---

# My npm notebook

Here's a collection of some npm commands and packages I frequently use or forget.


:::warning WIP

This is a draft

:::

<!-- truncate -->


## Updating npm packages

`npm update` and other packages do the job, but I prefer [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) for many reasons:

- It just updates packages in `package.json` allowing me to see the diffs and cherry-pick what I want/need to update, then I can just install them with my preferred package manager.

- It has an interactive mode in its CLI where I can select what I need, e.g:
    ```

    ▶ npx npm-check-updates -i    

    ? Choose which packages to update › 
    ↑/↓: Select a package
    Space: Toggle selection
    a: Toggle all
    Enter: Upgrade
    
    ◉ @docusaurus/core                   3.1.1  →    3.5.2
    ◉ @docusaurus/module-type-aliases    3.1.1  →    3.5.2
    ◉ @docusaurus/plugin-google-gtag    ^3.2.1  →   ^3.5.2
    ◉ @docusaurus/preset-classic         3.1.1  →    3.5.2
    ◉ @docusaurus/types                  3.1.1  →    3.5.2
    ◉ @mdx-js/react                     ^3.0.1  →   ^3.1.0
    ❯ ◯ clsx                              ^2.1.0  →   ^2.1.1
    ◯ prism-react-renderer              ^2.3.1  →   ^2.4.0
    ◉ react                            ^18.2.0  →  ^18.3.1
    ◉ react-dom                        ^18.2.0  →  ^18.3.1
    ```
- I can select what updates I'm interested in by passing `-t TARGET` (latest, minor, patch, semver, `@[tag]`, etc). e.g:
    ```bash
    ▶ npx npm-check-updates -t minor # OR: npx npm-check-updates -t minor -i

    @docusaurus/core                   3.1.1  →    3.5.2
    @docusaurus/module-type-aliases    3.1.1  →    3.5.2
    @docusaurus/plugin-google-gtag    ^3.2.1  →   ^3.5.2
    @docusaurus/preset-classic         3.1.1  →    3.5.2
    @docusaurus/types                  3.1.1  →    3.5.2
    @mdx-js/react                     ^3.0.1  →   ^3.1.0
    clsx                              ^2.1.0  →   ^2.1.1
    prism-react-renderer              ^2.3.1  →   ^2.4.0
    react                            ^18.2.0  →  ^18.3.1
    react-dom                        ^18.2.0  →  ^18.3.1

    Run npx npm-check-updates -t minor -u to upgrade package.json
    ```