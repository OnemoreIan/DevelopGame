import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrincipalView from '@/views/PrincipalView.vue'
import JrComponent from '@/components/JrComponent.vue'
import MediumComponent from '@/components/MediumComponent.vue'
import SeniorComponent from '@/components/SeniorComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'startView',
      component: PrincipalView
    },
    {
      path: '/junior',
      name: 'junior',
      component: JrComponent
    },
    {
      path: '/medium',
      name: 'semi senior',
      component: MediumComponent
    },
    {
      path: '/senior',
      name: 'senior',
      component: SeniorComponent
    }
  ]
})

export default router
