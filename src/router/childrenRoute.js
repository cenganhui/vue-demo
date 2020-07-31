import Default from '../views/Default.vue'
import About from '../views/About.vue';
import Resume from '../views/Resume.vue'
import Protfolio from '../views/Portfolio.vue'
export const childrenRoute = [{
        path: '',
        name: 'Default',
        component: Default
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Resume',
        name: 'Resume',
        component: Resume
    },
    {
        path: '/Protfolio',
        name: 'Protfolio',
        component: Protfolio
    }
];