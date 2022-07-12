import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { StoryblokVue, apiPlugin } from '@storyblok/vue-2';
import App from './App.vue';
import Grid from './components/Grid.vue';
import Page from './components/Page.vue';
import Teaser from './components/Teaser.vue';
import Feature from './components/Feature.vue';

Vue.use(StoryblokVue, {
  accessToken: 'p7IQh687PGrh4QRsJnwUywtt',
  use: [apiPlugin],
});
Vue.use(VueCompositionAPI);

Vue.component('Grid', Grid);
Vue.component('Page', Page);
Vue.component('Teaser', Teaser);
Vue.component('Feature', Feature);

new Vue({ render: (h) => h(App) }).$mount('#app');
