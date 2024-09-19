import { createRouter, createWebHistory } from 'vue-router';
import CalculoCalificaciones from '../components/CalculoCalificaciones.vue';
import FormularioRegistro from '../components/FormularioRegistro.vue';

const routes = [
  { path: '/', component: CalculoCalificaciones },
  { path: '/registro', component: FormularioRegistro },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
