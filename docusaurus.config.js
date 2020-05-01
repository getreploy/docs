module.exports = {
  title: "Reploy",
  tagline: "",
  url: "https://docs.getreploy.com",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "getreploy", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  scripts: [
    // Object format.
    {
      src:
        '//js.hs-scripts.com/7530449.js',
      async: true,
      id: 'hs-script-loader',
    },
  ],
  themeConfig: {
    algolia: {
      apiKey: 'ecddee4170f30fbfcbbcc08c9c93d7b7',
      indexName: 'getreploy',
    },
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
            },
            // {
            //   label: "Get Started",
            //   to: "docs/get-started"
            // }
          ]
        },
        {
          title: "Early Access",
          items: [
            {
              label: "Request Access Here",
              href: "https://getreploy.com/"
            },
          ]
        },        
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus"
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus"
        //     }
        //   ]
        // },
        // {
        //   title: "Social",
        //   items: [
        //     // {
        //     //   label: 'Blog',
        //     //   to: 'blog',
        //     // },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/getreploy/"
        //     },
        //     {
        //       label: "Facebook",
        //       href: "https://fb.com/getreploy"
        //     }
        //   ]
        // },
        {
          title: "Contact",
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: "hello@getreploy.com",
              href: ""
            },
            // {
            //   label: "Messenger",
            //   href: "https://m.me/getreploy"
            // }
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
