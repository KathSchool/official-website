// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Learn with Ms Katherine",
  tagline: "Ms Katherine English Enlightenment",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://kathschool.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "KathSchool", // Usually your GitHub org/user name.
  projectName: "official-website", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["en", "zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsed: false, // 默认展开所有菜单栏
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Home",
        logo: {
          alt: "Homepage Logo",
          src: "img/logo.png",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "docSidebar",
          //   position: "left",
          //   label: "Introduce",
          // },
          { to: "/intro", label: "Introduce", position: "left" },
          { to: "/video", label: "Video", position: "left" },
          { to: "/book", label: "Book", position: "left" },
          { to: "/contact", label: "Contact", position: "right" },
          {
            href: "https://space.bilibili.com/20797715",
            label: "bilbil",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduce",
                to: "/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "bilbil",
                href: "https://space.bilibili.com/20797715",
              },
              {
                label: "redbook",
                href: "https://www.xiaohongshu.com/user/profile/5cb2c00b0000000016016b53",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "github",
                href: "https://github.com/orgs/KathSchool",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KathSchool reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
