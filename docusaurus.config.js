module.exports = {
  title: "Reploy",
  tagline: "",
  url: "https://getreploy.com",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "getreploy", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "Reploy Logo",
        src: "img/logo.svg"
      },
      links: [
        {
          href: "https://github.com/getreploy/docs",
          label: "GitHub",
          position: "right"
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
            },
            {
              label: "Second Doc",
              to: "docs/doc2"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          title: "Social",
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: "GitHub",
              href: "https://github.com/getreploy/"
            },
            {
              label: "Facebook",
              href: "https://fb.com/getreploy"
            }
          ]
        },
        {
          title: "Contact",
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: "hello@getreploy.com",
              href: "https://github.com/getreploy/"
            },
            {
              label: "Messenger",
              href: "https://m.me/getreploy"
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
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/getreploy/docs/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
