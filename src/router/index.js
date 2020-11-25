import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/main/Home.vue'
import HomeSample from '../components/HomeSample.vue'
import ToDo from '../components/ToDo.vue'
import Calculator from '../components/Calculator.vue'

const history = createWebHistory()
const routes = [
    { path: '/', name: 'home',  component: Home },
    { path: '/homesample', name: 'homesample',  component: HomeSample },
    { path: '/todos', name:'todos', component: ToDo },
    { path: '/calculator', name:'calculator', component: Calculator },
]
const router = createRouter({
    history,
    routes
})

export default router

