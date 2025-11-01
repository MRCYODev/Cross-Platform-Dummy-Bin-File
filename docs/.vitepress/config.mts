import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CP Bin File Generation",
  description: "Cross‑platform tutorial to generate dummy .bin files for performance benchmarking, speed testing, or storage validation on 🪟 Windows, 🐧 Linux, and 🍎 macOS. All commands work directly in the terminal, no downloads, no scripts, no waiting.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'assets/img/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/introduction'},
          { text: 'Windows', link: '/windows' },
          { text: 'Linux', link: '/linux' },
          { text: 'MacOS', link: '/macos' },
          { text: 'Others', link: '/others' }
          /*
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
          */
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MRCYODev' }
    ]
  }
})
