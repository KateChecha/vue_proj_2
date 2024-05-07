/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'


const app = createApp(App)

import YmapPlugin from 'vue-yandex-maps'
const settings = {
    apiKey: "00a8fa7f-db5c-4ed9-a66d-bb00b39ef6d1",
    lang: "ru_RU",
    coordorder: "latlong",
    enterprise: false,
    version: "2.1",
  };
  
  app.use(YmapPlugin, settings);
registerPlugins(app)

app.mount('#app')
