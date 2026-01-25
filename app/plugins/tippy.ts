// based on https://github.com/KABBOUCHI/vue-tippy/issues/269#issuecomment-1313961656
import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueTippy, {
        defaultProps: {
            arrow: true
        },
        flipDuration: 0,
    })
})