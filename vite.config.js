// import autoprefixer from "autoprefixer"
import path from "path"
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