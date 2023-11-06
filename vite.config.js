import {defineConfig} from 'vite';

export default defineConfig({

    test: {
        // When uncommenting this line the error goes away
        // globals: true,
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.js'],
        setupFiles: ['vitest.jsdom.config.js'],
    },
});
