## [unreleased]

### 🚀 Features

- Provide gh token for prerender
- *(seo)* Prerender optimizations, cls hack
- Add more flexibility for homepage
- Bump required bun version
- Add headers for i18n
- *(ci)* Add id to changelog commit
- Tweak nuxt config
- Allow nuxt-security in dev mode
- *(!)* Migrate to rolldown-vite, drop lightningcss
- Migrate from floating-vue to tippy-vue
- Prepare for nuxt-i18n-micro

### 🐛 Bug Fixes

- Rollback to nuxt 4.1.3 due to build & cli issues
- Seems like bun 1.3 has memory leak during build, using 1.2
- Fix image build once and for all, i suppose
- Bring back `/` prerender
- Found cause of failing builds, optimized deps, temporary removed testing
- Remove unused imports
- Better check for ghData missing
- Set leading for <p>
- Nuxt-security cors tweaks
- Bring back i18n fix via declaration
- Disable strictSeo and add more cors rules
- Try different cors headers
- Make LanguageToggle work again
- Use function call inside useHead
- Remove workaround for LanguageToggle
- Remove test tippy elem
- Eslint quick fix
- Disable features that break dev and builds
- Edit cors to allow vue-tippy to load

### 💼 Other

- Bring back nuxt 4.2, try vue 3.6.0
- Latest packages
- Latest deps

### ⚙️ Miscellaneous Tasks

- *(docker)* Explicit bun use and few changes
- Update changelog
- Update changelog
- *(docker)* Add ci builds for next branch
- Update changelog
- *(docker)* Use bun 1.2.22 image as base
- Update changelog
- Update changelog
- Update changelog
- Update changelog
- Update changelog
- Rename store dir to stores
- Only use nuxt-link for local paths
- Update changelog
- Update changelog
- Add link titles for seo, update reviews template
- Update changelog
- Update changelog
- *(id19373645497)* Update changelog
- *(i18n)* Use import instead of $t for i18n to avoid issues
- *(id21398613205)* Update changelog
- Actualize readme
- Migrate translations
- Update lockfile
## [08112025] - 2025-11-08

### 🚀 Features

- Add vitest back
- Add proof links to experience & career cards
- Swap monospace font to Cascadia
- Merge blobs with component & optimize
- *(i18n)* Try to use strict seo mode
- *(unocss)* Restore transformerDirectives
- *(seo)* Make some components lazy
- *(content,nuxt)* Add @nuxt/content and rework nuxt config
- *(unocss)* Migrate to wind4 preset
- Return old monospace font

### 🐛 Bug Fixes

- Stop rolldown vite from causing problems
- Change name for monospace font
- *(eslint)* Remove outdated setting
- *(docker)* Use correct syntax
- *(unocss)* Apply body background for app

### 💼 Other

- Latest packages
- Nuxt 4.1.2
- Latest deps & @nuxt/content
- Latest nuxt & deps

### ⚙️ Miscellaneous Tasks

- Update changelog
- *(ui)* Make more mobile friendly ui
- Update changelog
- *(eslint)* Migrate to antfu config
- Use lightningcss autoprefix instead of unocss
- *(ui)* Rework UI for layout and page transitions and @nuxt/content
- *(eslint)* Tweak eslint settings
- *(eslint)* Append nuxt instead of wrap
- Sort skills store
- Cosmetic changes to match original ui version
- Migrate from v3 to v4 branch
- Update changelog
## [03092025] - 2025-09-02

### 💼 Other

- Nuxt 3.16.2
- Nuxt 4.1.0 and many updates to config

### ⚙️ Miscellaneous Tasks

- Update changelog
- Update changelog
## [21032025] - 2025-03-20

### 🐛 Bug Fixes

- *(ci)* Display changelog content
- *(ci)* Display only latest changelog in commit
- *(ci)* Print unreleased commits in changelog
- *(bun)* Remove redutant verbose info

### 💼 Other

- Nuxt 3.16 and unocss v66.1

### ⚙️ Miscellaneous Tasks

- *(ci)* Better styled changelog messages
- Update changelog
- Update changelog
- Update changelog
- Update changelog
## [05032025] - 2025-03-05

### 🚀 Features

- Show Bun version via env

### 🐛 Bug Fixes

- Grammar issues

### 💼 Other

- Deps and nuxt 3.15.2
- Deps and nuxt 3.15.4
- Latest unocss and etc.
- Bump deps

### ⚙️ Miscellaneous Tasks

- *(ci)* Make gh actions less annoying
- Remove redutant unhead vite addon
## [09012025] - 2025-01-09

### 🚀 Features

- *(test)* Prepare for basic testing
- Add few projects and update skills

### 🐛 Bug Fixes

- *(ts)* Use correct path for tsconfig

### 💼 Other

- Deps and nuxt 3.15

### ⚙️ Miscellaneous Tasks

- Move types to root directory
- Split large components to children
## [02012025] - 2025-01-02

### 🚀 Features

- *(ci)* Build docker image on every branch, but only push it for main
- *(test)* Try to implement basic unit tests

### 🐛 Bug Fixes

- *(docker)* Remove legacy env declaration
- *(ci)* Don't trigger docker builds on changelog updates

### 💼 Other

- *(bun,nuxt)* Switch lock format for bun and update Nuxt
- Latest deps as of 02.01.2025

### ⚙️ Miscellaneous Tasks

- *(docker)* Use prebuilt Bun container
- *(eslint)* Move from .js to experimental .ts file
- *(nuxt)* Update compatibilityDate to current date
- *(readme)* Make pretty README
## [31122024] - 2024-12-31

### 🚀 Features

- *(nuxt)* Prepare for v4
- *(bun)* Make bunfig
- *(design)* Change fonts, more ruler-like design
- *(design)* Use other font, grid rulers style rework
- Add tooltip components
- Add tooltips for skill icons
- Add tooltip for skills in card component

### 🐛 Bug Fixes

- Remove garbage
- *(unocss)* Remove `transformerDirectives` due to crashes
- Migrate app head to layout
- *(seo)* Use better way to define title

### 💼 Other

- *(v3)* Website 2024 rework
- Update dependencies and bun version
- Nuxt 3.12.4
- Latest version of packages
- Latest nuxt version
- Latest deps
- *(i18n)* New folder location and base url
- Update deps and fix hydration
- Latest deps
- Latest deps

### ⚙️ Miscellaneous Tasks

- *(ui,types)* Small tweaks for ui and typings
- *(ui)* Small padding changes for main elements
