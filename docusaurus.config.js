// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DriveSafe',
  tagline: 'Drive smarter. Drive safer.',
  favicon: 'img/favicon.ico',

  url: 'https://example.com',
  baseUrl: '/',

  organizationName: 'drivesafe',
  projectName: 'drivesafe-docs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: null,
        pages: {},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
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
          href: 'https://aka.projectlemon.net/acces/chromatic/mainsite/link1',
          label: 'Chromatic',
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
            { label: 'Penalties', to: '/docs/penalties' },
            { label: 'Traffic Laws', to: '/docs/traffic-laws' },
            { label: 'Safe Driving', to: '/docs/safe-driving' },
            { label: 'FAQ', to: '/docs/faq' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DriveSafe`,
    },
  },
};

export default config;
