module.exports = {
  title: "Reploy",
  tagline: "",
  url: "https://docs.getreploy.com",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "getreploy", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    defaultDarkMode: true,
    announcementBar: {
      id: 'support_us', // Any value that will identify this message
      content:
        'Request early access to Reploy: <a target="_blank" rel="noopener noreferrer" href="https://getreploy.com">https://getreploy.com</a>',
      backgroundColor: '#9130c0', // Defaults to `#fff`
      textColor: '#fff', // Defaults to `#000`
    },
    algolia: {
      apiKey: "ecddee4170f30fbfcbbcc08c9c93d7b7",
      indexName: "getreploy"
    },
    navbar: {
      logo: {
        alt: "Reploy Logo",
        src: "img/logo.svg",
        srcDark: 'img/logo_dark.svg', // default to logo.svg
      },
      links: [
        {
          href: "https://github.com/getreploy/docs",
          label: "GitHub",
          position: "right"
        },
        {
          href: "https://getreploy.com/",
          label: "Request Access",
          position: "left"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Installation",
              to: "docs/installation"
            }
          ]
        },
        {
          title: "Early Access",
          items: [
            {
              label: "Request Access Here",
              href: "https://getreploy.com/"
            }
          ]
        },
        {
          title: "Contact",
          items: [
            {
              label: "hello@getreploy.com",
              href: ""
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Reploy, Inc.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/getreploy/docs/edit/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
