const config = {
  title: 'DriveSafe',
  tagline: 'Drive smarter. Drive safer.',
  favicon: 'img/favicon.ico',

  url: 'https://example.com',
  baseUrl: '/',

  organizationName: 'drivesafe',
  projectName: 'drivesafe',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn', // ✅ valid pentru v3

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
          routeBasePath: '/docs',
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

    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
};

export default config;
