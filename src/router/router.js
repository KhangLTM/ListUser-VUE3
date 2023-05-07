import { createWebHistory, createRouter } from 'vue-router';
import AdminRoutes from './adminRoutes';

const routes = [...AdminRoutes];

const router = createRouter({
    history: createWebHistory(''),
    routes,
});

export default router;
