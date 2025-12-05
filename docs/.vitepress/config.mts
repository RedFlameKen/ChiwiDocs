import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chiwi Documentation",
  description: "Documentation for Chiwi",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting_started/getting_started' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/getting_started/getting_started' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/redflameken/ChiwiServer', ariaLabel: "ChiwiServer"  },
      { icon: 'github', link: 'https://github.com/redflameken/chiwi', ariaLabel: "chiwi" }
    ]
  }
})
