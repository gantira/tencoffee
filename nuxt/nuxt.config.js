export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.1.95/css/materialdesignicons.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css'
            },
        ],
        script: [{
                src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
                type: 'text/javascript'
            },
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
                type: 'text/javascript'
            },
            {
                src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
                type: 'text/javascript'
            },
            {
                src: 'https://unpkg.com/feather-icons/dist/feather.min.js',
                type: 'text/javascript'
            },
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: 'red'
    },
    /*
     ** Global CSS
     */
    css: [
        '@/assets/styles/main.css',
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~plugins/viewer',
        '~plugins/filter',
        '~plugins/mixins/validation',
        { src:'~plugins/chart', ssr: false },
        { src:'~plugins/vue2editor', ssr: false },
        { src: "~plugins/aos", ssr: false },
        // "~plugins/vue-lazyload"
    ],
    /*
     ** Nuxt.js dev-modules
     */
    devModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/toast',
        'nuxt-material-design-icons',
        // '@nuxtjs/auth',
        ['nuxt-vuex-localstorage', {
            mode: 'debug',
            localStorage: ['carts'],
            keyMixTimes: 64,
            KeyLength: 64,
            expire: 1
        }]
    ],
    toast: {
        position: 'bottom-right',
        duration: 2500,
        theme: 'bubble'
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: 'http://localhost/tencoffee/public/api'
    },
    /*
     ** Build configuration
     */
    build: {

        extend(config, ctx) {}
    }
}
