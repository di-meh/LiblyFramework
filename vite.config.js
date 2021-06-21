// import autoprefixer from "autoprefixer"
import path, { resolve } from "path"
import { defineConfig } from 'vite'
import autoprefixer from "autoprefixer"
export default defineConfig({
    build: {
        lib: {
            name: 'liblyscss',
            entry: path.resolve(__dirname, 'main.js'),
            formats: ['es']
        },
        rollupOptions: {
            // input: {
            //     main: resolve(__dirname, 'index.html'),
            //     dashboard: resolve(__dirname, 'dashboard/index.html'),
            //     login: resolve(__dirname, 'login/index.html'),
            //     register: resolve(__dirname, 'register/index.html'),
            //     books: resolve(__dirname, 'books/index.html')
            // },
            output: {
                assetFileNames: '[name][extname]',
                chunkFileNames: '[name].js',
                entryFileNames: '[name].js'
            }
        }
    },
    assetsInclude: ['svg', 'jpg', 'png'],
    css: {
        postcss: {
            plugins: [
                autoprefixer
            ]
        }
    }
})