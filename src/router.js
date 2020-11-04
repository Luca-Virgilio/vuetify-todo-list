import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Store from './views/Store';
import About from './views/About';

Vue.use(Router);

export default new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes : [
        {
            path: '/',
            name:'home',
            component: Home
        },
        {
            path: '/store',
            name:'store',
            component: Store
        },
        {
            path: '/about',
            name:'about',
            component: About
        }
    ]
});

