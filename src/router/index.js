// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CompanyInfo from '@/views/CompanyInfo.vue'
import Services from '@/views/Services.vue'
import Team from '@/views/Team.vue'
import Processes from '@/views/Processes.vue'
import FAQ from '@/views/FAQ.vue'
import Contact from '@/views/Contact.vue'
import Info from '@/views/PersonInfo.vue'
const routes = [
  {
    path: '/vue_proj_2/dist/',
    name: '',
    component: Home
  },
  {
    path: '/vue_proj_2/dist/company-info',
    name: "CompanyInfo",
    component: CompanyInfo
  },
  {
    path: '/vue_proj_2/dist/services',
    name: "Услуги",
    component: Services
  },
  {
    path: '/vue_proj_2/dist/team',
    name: "Команда",
    component: Team
  },
  {
    path: '/vue_proj_2/dist/processes',
    name: "Процессы",
    component: Processes
  },
  {
    path: '/vue_proj_2/dist/faq',
    name: "FAQ",
    component: FAQ
  },
  {
    path: '/vue_proj_2/dist/contact',
    name: "Контакты",
    component: Contact
  },
  {
    path: '/vue_proj_2/dist/info',
    name: "Информация",
    component: Info
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
