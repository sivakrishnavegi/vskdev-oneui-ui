import { createRouter, createWebHistory } from 'vue-router';
import ButtonPage from './pages/ButtonPage.vue';
import InstallationPage from './pages/InstallationPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./pages/Introduction.vue') },
    { path: '/docs/installation', component: InstallationPage },
    { path: '/docs/button', component: ButtonPage },
  ],
});

export default router;
