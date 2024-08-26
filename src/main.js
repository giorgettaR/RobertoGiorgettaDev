import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Mystory from './pages/Mystory.vue'
import Contacts from './pages/Contacts.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/projects', name: 'projects', component: Projects },
        { path: '/mystory', name: 'mystory', component: Mystory },
        { path: '/contacts', name: 'contacts', component: Contacts },
    ],
})

createApp(App).use(router).mount('#app')
