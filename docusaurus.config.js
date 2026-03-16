// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CyberSecurity',
  tagline: 'Protect your digital life, one click at a time.',
  favicon: 'img/favicon.ico',

  url: 'https://example.com',
  baseUrl: '/',

  organizationName: 'chromaticnetwork',
  projectName: 'cybersecurity-docs',

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
      title: 'CyberSecurity',
      logo: {
        alt: 'CyberSecurity Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'passwords',
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
            { label: 'Passwords', to: '/docs/passwords' },
            { label: 'Phising', to: '/docs/phising' },
            { label: 'Network-Security', to: '/docs/network-security' },
            { label: 'VPN', to: '/docs/vpn' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DriveSafe`,
    },
  },
};

export default config;
