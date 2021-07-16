import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HeaderLink/Home';
import AboutMe from './components/HeaderLink/AboutMe.vue';
import SuccesStory from './components/HeaderLink/SuccessStory';
import Testimonial from './components/HeaderLink/Testimonial';
import FindADoctor from './components/HeaderLink/FindDoctor';
const routes = [
    { path: "/", component: Home, name: 'home' },
    // { path: '/home', component: Home, name: 'home' },
    { path: '/about', component: AboutMe, name: 'about' },
    { path: '/story', component: SuccesStory, name: 'story' },
    { path: '/testimonial', component: Testimonial, name: 'testimonial' },
    { path: '/find-a-doctor', component: FindADoctor, name: 'find_doctor' },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;