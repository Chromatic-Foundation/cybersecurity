module.exports = {
  title: 'DriveSafe',
  tagline: 'Drive smarter. Drive safer.',
  url: 'https://drivesafe.projectlemon.net',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  organizationName: 'drivesafe',
  projectName: 'drivesafe',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'DriveSafe',
      items: [
        {
          to: '/docs/penalties',
          label: 'Docs',
          position: 'left'
        }
      ]
    }
  }
}
