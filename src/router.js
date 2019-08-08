import Vue from 'vue'
import VueRouter from 'vue-router'
import One from '@/One'
import Two from '@/Two'
import PersonForm from '@/components/PersonForm'
// const One = () => ('@/One')
// const Two = () => ('@/Two')
// const PersonForm = () => ('@/components/PersonForm' /*webpackChunkName: 'xxx' */ )

Vue.use(VueRouter)

const routes = [
    {path: '/', component: One},
    {path: '/about', component: Two},
    {path: '/form', component: PersonForm}
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router