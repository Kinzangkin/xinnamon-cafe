import { defineConfig } from 'vite';

export default defineConfig({
    base: '/xinnamon-cafe/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});
