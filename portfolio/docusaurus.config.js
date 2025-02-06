// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Abdeldjalil Fortas' notepad",
  tagline: "Turning Karantika and coffee to code",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://fcmam5.me",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "fcmam5", // Usually your GitHub org/user name.
  projectName: "fcmam5.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "G-6WM7E899MF",
          anonymizeIP: true,
        },
        docs: false,
        blog: {
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter.hide_reading_time
              ? undefined
              : defaultReadingTime({ content }),
          editUrl:
            "https://github.com/Fcmam5/fcmam5.github.io/tree/master/portfolio",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: "img/karantika.png",
      navbar: {
        title: "Fcmam5",
        logo: {
          alt: "My Site Logo",
          src: "img/apple-touch-icon.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/snippets", label: "Snippets", position: "left" },
          { to: "/dz-blog", label: "<DZ />", position: "left" },
          {
            href: "https://github.com/fcmam5",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About me",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Snippets",
                to: "/snippets",
              },
              {
                label: "Contributions",
                to: "/contributions",
              },
              {
                label: "Libraries",
                to: "/libraries",
              },
              {
                label: "Creedly",
                href: "https://www.credly.com/users/fcmam5",
              },
            ],
          },
          {
            title: "Let's connect",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Fcmam5",
              },
              {
                label: "StackOverflow",
                href: "https://stackoverflow.com/users/5078746/fcmam5",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/fcmam5",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Fcmam5",
              },
              {
                label: "Medium",
                href: "https://medium.com/@Fcmam5",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Abdeldjalil Fortas. Built with Docusaurus (while drinking green tea this time).`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "snippets-blog",
        routeBasePath: "snippets",
        path: "./snippets-blog",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "dz-blog",
        routeBasePath: "dz-blog",
        path: "./dz-blog",
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          frontMatter.hide_reading_time
            ? undefined
            : defaultReadingTime({ content }),
      },
    ],
  ],
};

export default config;
