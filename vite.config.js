// import autoprefixer from "autoprefixer"
import { resolve } from "path"
import { defineConfig } from 'vite'
import autoprefixer from "autoprefixer"
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                dashboard: resolve(__dirname, 'dashboard/index.html'),
                login: resolve(__dirname, 'login/index.html'),
                register: resolve(__dirname, 'register/index.html'),
                books: resolve(__dirname, 'books/index.html')
            },
        }
    },
    assetsInclude: ['woff2?',
        'eot',
        'ttf',
        'otf',],
    css: {
        postcss: {
            plugins: [
                autoprefixer
            ]
        }
    }
})