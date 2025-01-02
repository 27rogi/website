<p align="center">
  <img width="600" src=".github/preview.png" />
</p>

# 🍃 [rogi#su](https://rogi.su) 
This is a portfolio website that I made to list all of my most notable projects and also give small glimpse on my skills and career. I decided to use Nuxt for fast and painless development. Color palette of this website mostly uses [`Green Spring`](https://en.wikipedia.org/wiki/Spring_green) color with some darker variations. Most of the styles are written using UnoCSS with Tailwind preset and directives.

## Bun experiment
Latest generation of my website is built with Bun and uses it's environment implementation, Docker builds also use special Nitro preset made to work with Bun. Due to this radical approach some features might not work on Node or vise versa. If you notice some issues with the website you can create an issue.

## Built with
* Nuxt 3 (but uses Nuxt 4 experimental features)
  * **Modules**: `i18n`, `unocss`, `pinia`, `image`, `icon`, `eslint`, `floating-vue` and more!
* UnoCSS
* LightningCSS
* FontSource variable fonts
* ESLint
* Bun (`bun run --bun` compatible)
* TypeScript

## Development
To start development you only need to install Node LTS and Bun latest version, other steps are identical to default Nuxt [guide](https://nuxt.com/docs/getting-started/installation#development-server).