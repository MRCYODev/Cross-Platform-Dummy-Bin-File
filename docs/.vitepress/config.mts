import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/Cross-Platform-Dummy-Bin-File/",
  title: "Cross‑Platform BIN File Generation",
  description: "A cross‑platform guide for generating dummy .bin files for performance benchmarking, speed testing, or storage validation on 🪟 Windows, 🐧 Linux, and 🍎 macOS. All commands work directly in the terminal — no downloads, no scripts, no waiting.",
 
  themeConfig: {
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
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MRCYODev/Cross-Platform-Dummy-Bin-File' }
    ]
  }
})