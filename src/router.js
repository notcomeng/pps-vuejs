import Vue from 'vue'
import VueRouter from 'vue-router'
import One from '@/One'
import Two from '@/Two'


Vue.use(VueRouter)

const routes = [
    {path: '/', component: One},
    {path: '/about', component: Two}
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router