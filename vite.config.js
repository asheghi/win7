/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import files from './build/plugins/fs';

export default defineConfig({
  plugins: [
    vue(),
    files(),
  ],
});
