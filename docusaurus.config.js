// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DriveSafe',
  tagline: 'Drive smarter. Drive safer.',
  favicon: 'img/favicon.ico',

  url: 'https://example.com', // lasă example.com pentru Railway
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
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // homepage-ul va fi în src/pages/index.js
        },
        blog: false,
        pages: true, // activează paginile din src/pages
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // păstrăm exact cum era
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
          docId: 'penalties', // primul doc din sidebar
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/YOUR_GITHUB/drivesafe',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/YOUR_DISCORD',
          label: 'Discord',
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
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/YOUR_DISCORD' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DriveSafe`,
    },
  },
};

export default config;
