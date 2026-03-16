// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DriveSafe',
  tagline: 'Drive smarter. Drive safer.',
  favicon: 'img/favicon.ico',

  url: 'https://example.com', // placeholder valid
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
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // docs la root
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'DriveSafe',
      logo: {
        alt: 'DriveSafe Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'penalties',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/scemercat/drivesafe',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Penalties',
              to: '/penalties',
            },
            {
              label: 'Traffic Laws',
              to: '/traffic-laws',
            },
            {
              label: 'Safe Driving',
              to: '/safe-driving',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DriveSafe`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
