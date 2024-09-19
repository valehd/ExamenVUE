<template>
  <div id="app">
    <nav>
      <router-link to="/">Cálculo de Calificaciones</router-link> |
      <router-link to="/registro">Formulario de Registro</router-link>
    </nav>
    <router-view></router-view> <!-- Renderiza el contenido de la ruta actual -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Estilos globales */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
}

nav {
  margin-bottom: 20px;
}

router-link {
  margin: 0 15px;
  text-decoration: none;
  color: #42b983;
}

router-link.active {
  font-weight: bold;
  color: #35495e;
}
</style>
