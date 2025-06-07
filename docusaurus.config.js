/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Guanlun's Blog",
  tagline: "I'm a full-time developer at Rakuten, used to study in Quantum Physics.",
  url: 'https://guanlunblog.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Kanrin-Cyou', // Usually your GitHub org/user name.
  projectName: "myBlog", // Usually your repo name.

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        // hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "",
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo2.svg',
      },
      items: [
        {
          to: '/docs/intro',
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'CS',
          activeBaseRegex: `/docs/`,
        },
        {
          to: '/docs-english/intro',
          position: 'left',
          label: 'English',
          activeBaseRegex: `/docs-english/`,
        },
        {
          to: '/docs-japanese/intro',
          position: 'left',
          label: 'Japanese',
          activeBaseRegex: `/docs-japanese/`,
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
              label: 'CS',
              to: '/docs/intro',
            },
            {
              label: 'English',
              to: '/docs-english/intro',
            },
            {
              label: 'Japanese',
              to: '/docs-japanese/intro',
            },
          ],
        },
        {
          title: 'Network',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/guanlun-zhao-548b71174/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/kanrincyou/',
            },
          ],
        },
        {
          title: 'Tech',
          items: [
            {
              label: 'Resume',
              href: 'https://portfolio.zhallen.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Kanrin-Cyou',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/14943506/kanrin-cyou',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Guanlun's Blog. Built with Docusaurus. <br/> <a href=\'https://ariacompany.net/\'>ARIAコンパニー</a> as Theme Reference. <br/> Thy sea is so great and my boat is so small.`
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-english',
        path: 'docs-english',
        routeBasePath: 'docs-english',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-japanese',
        path: 'docs-japanese',
        routeBasePath: 'docs-japanese',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
};
