// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DriveSafe',
  tagline: 'Drive smarter. Drive safer.',
  favicon: 'img/favicon.ico',

  url: 'https://example.com', // placeholder valid, e necesar
  baseUrl: '/',

  organizationName: 'drivesafe',
  projectName: 'drivesafe-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // face ca /docs să fie root
        },
        blog: false,
        pages: false,
        theme: {}, // folosește tema default
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'DriveSafe',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/scemercat1/drivesafe',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} DriveSafe`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
