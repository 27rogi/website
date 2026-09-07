## [unreleased]

### 🚀 Features

- Add support for webring

### 🐛 Bug Fixes

- Optimize font loading, update deps, update styles
- Log errors on prod, swap to alpine for CA certs

### ⚙️ Miscellaneous Tasks

- Design improvements
- Update locales
- *(id34142461133)* Update changelog
- *(id34169308670)* Update changelog
## [06092026] - 2026-09-06

### 🐛 Bug Fixes

- Disable devtools due to Bun issues, update deps
- Revert ssrStreaming and other experiments
- Wrong branch for actions
- More actions fixes

### ⚙️ Miscellaneous Tasks

- Use nuxt compatability 4 instead of 5
- Redutant option removed
- *(id28266742002)* Update changelog
- *(id29665828578)* Update changelog
- *(id30314380349)* Update changelog
- *(id31226727983)* Update changelog
- *(id31227529616)* Update changelog
- *(id34001636176)* Update changelog
- Migrate domain, add icons to collection
- *(id34048882350)* Update changelog

### 💼 Other

- Nuxt 4.5 and latest deps
- Nuxt 4.5.1 and latest deps
## [23062026] - 2026-06-23

### 🚀 Features

- Get bun version from api
- Use @nuxt/fonts instead of manual fonts
- Add custom icon support

### 🐛 Bug Fixes

- Use defineSitemapSchema and fix zod for it to work
- Add external dep to fix build warning
- Ignore non-existing i18n routes in prerender
- Use correct routeRules
- Display correct env for prerender (#9)
- Revert prerender changes due to issues
- Revert prerender changes due to issues
- Export env globally
- Recreate bun.lock, cleanup nuxt config
- *(ci)* Missed one action
- *(ci)* Revert distroless
- Disable nuxt-security for dev again
- Correct bg route exclusion

### ⚙️ Miscellaneous Tasks

- Changes for @nuxtjs/seo 5.0.0
- Fix: use correct dev branch name
- *(id24217657051)* Update changelog
- *(id24365385180)* Update changelog
- *(id24374057985)* Update changelog
- *(ci)* Add docker builds for staging
- *(id24481765735)* Update changelog
- *(ci)* Use latest actions version
- *(docker)* Try to build distroless
- *(docker)* Try distroless again?
- *(id24484476712)* Update changelog
- Use includes() in computed
- *(id24589708839)* Update changelog
- Use preflight from unocss
- Actualize skills and improve tooltips
- *(id24670287088)* Update changelog
- Use consts instead of pinia
- *(id25231339840)* Update changelog
- *(id28033525426)* Update changelog

### 💼 Other

- Latest deps
- Nuxt 4.4.4 and latest deps
- Nuxt 4.4.8, vite 8, latest deps
## [09042026] - 2026-04-09

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
- Make footer prettier and have joke phrases :smiley_cat:
- Use Elysia for backend

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
- Use i18n placeholder corretly
- Impelement correct fix for #7
- Add error message for Card fetch
- Fallback to undefined if bearer token not present

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
- *(id21410519179)* Update changelog
- Add mostly used icon collections as dev deps
- Add mostly used icon collections as dev deps
- Ignore i18n-micro files
- *(id21753395302)* Update changelog
- *(i18n)* Add required entries for micro-i18n
- *(id21969601017)* Update changelog
- *(id24212268635)* Update changelog

### 💼 Other

- Bring back nuxt 4.2, try vue 3.6.0
- Latest packages
- Latest deps
- Latest deps
- Latest deps and nuxt
- Latest deps and nuxt 4.4
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

### 💼 Other

- Latest packages
- Nuxt 4.1.2
- Latest deps & @nuxt/content
- Latest nuxt & deps
## [03092025] - 2025-09-02

### ⚙️ Miscellaneous Tasks

- Update changelog
- Update changelog

### 💼 Other

- Nuxt 3.16.2
- Nuxt 4.1.0 and many updates to config
## [21032025] - 2025-03-20

### 🐛 Bug Fixes

- *(ci)* Display changelog content
- *(ci)* Display only latest changelog in commit
- *(ci)* Print unreleased commits in changelog
- *(bun)* Remove redutant verbose info

### ⚙️ Miscellaneous Tasks

- *(ci)* Better styled changelog messages
- Update changelog
- Update changelog
- Update changelog
- Update changelog

### 💼 Other

- Nuxt 3.16 and unocss v66.1
## [05032025] - 2025-03-05

### 🚀 Features

- Show Bun version via env

### 🐛 Bug Fixes

- Grammar issues

### ⚙️ Miscellaneous Tasks

- *(ci)* Make gh actions less annoying
- Remove redutant unhead vite addon

### 💼 Other

- Deps and nuxt 3.15.2
- Deps and nuxt 3.15.4
- Latest unocss and etc.
- Bump deps
## [09012025] - 2025-01-09

### 🚀 Features

- *(test)* Prepare for basic testing
- Add few projects and update skills

### 🐛 Bug Fixes

- *(ts)* Use correct path for tsconfig

### ⚙️ Miscellaneous Tasks

- Move types to root directory
- Split large components to children

### 💼 Other

- Deps and nuxt 3.15
## [02012025] - 2025-01-02

### 🚀 Features

- *(ci)* Build docker image on every branch, but only push it for main
- *(test)* Try to implement basic unit tests

### 🐛 Bug Fixes

- *(docker)* Remove legacy env declaration
- *(ci)* Don't trigger docker builds on changelog updates

### ⚙️ Miscellaneous Tasks

- *(docker)* Use prebuilt Bun container
- *(eslint)* Move from .js to experimental .ts file
- *(nuxt)* Update compatibilityDate to current date
- *(readme)* Make pretty README

### 💼 Other

- *(bun,nuxt)* Switch lock format for bun and update Nuxt
- Latest deps as of 02.01.2025
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

### ⚙️ Miscellaneous Tasks

- *(ui,types)* Small tweaks for ui and typings
- *(ui)* Small padding changes for main elements

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
