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
          routeBasePath: '/', 
        },
        blog: false,
        pages: true,
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
          href: 'https://github.com/scemercat1/drivesafe',
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
            { label: 'Penalties', to: '/penalties' },
            { label: 'Traffic Laws', to: '/traffic-laws' },
            { label: 'Safe Driving', to: '/safe-driving' },
            { label: 'FAQ', to: '/faq' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DriveSafe`,
    },
  },
};

export default config;
