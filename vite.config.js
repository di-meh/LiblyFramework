const { resolve } = require('path')

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                dashboard: resolve(__dirname, 'dashboard/index.html')
            },
        }
    },
    assetsInclude: ['woff2?',
        'eot',
        'ttf',
        'otf',]
}