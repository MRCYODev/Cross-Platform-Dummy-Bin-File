// https://vitepress.dev/reference/site-config
import { defineConfig } from 'vitepress'

export default defineConfig({
  // Site Metadata
  title: "Cross‑Platform BIN File Generation",
  description: "A cross‑platform guide for generating dummy .bin files for performance benchmarking, speed testing, or storage validation on 🪟 Windows, 🐧 Linux, and 🍎 macOS. All commands work directly in the terminal — no downloads, no scripts, no waiting.",
  base: "/docs/",

  // Theme Configurations
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/img/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/introduction' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Windows', link: '/windows' },
          { text: 'Linux', link: '/linux' },
          { text: 'macOS', link: '/macos' },
          { text: 'Others', link: '/others' }
          /*
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
          */
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MRCYODev/Cross-Platform-Dummy-Bin-File' }
    ]
  }
})