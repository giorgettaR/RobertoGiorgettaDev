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

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import icons
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretLeft, faCaretRight)


const app = createApp(App).use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')