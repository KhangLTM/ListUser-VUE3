import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export default defineConfig({
    define: {
        _VUE_APP_API_BASE_: `"${process.env.VUE_APP_API_BASE}"`, // wrapping in "" since it's a string
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },

    plugins: [vue()],
});
