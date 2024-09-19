
<!-- src/components/FormularioRegistro.vue -->
<template>
  <div>
    <h2>Formulario de Registro</h2>
    <form @submit.prevent="validarFormulario">
      <div>
        <label>Nombre:</label>
        <input type="text" v-model="nombre" required />
      </div>
      <div>
        <label>Correo:</label>
        <input type="email" v-model="correo" required />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" v-model="password" required />
      </div>
      <div>
        <label>Repetir Contraseña:</label>
        <input type="password" v-model="passwordConfirm" required />
      </div>
      <button type="submit">Enviar</button>
    </form>

    <div v-if="mensajeError">
      <p>{{ mensajeError }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      password: '',
      passwordConfirm: '',
      mensajeError: '',
    };
  },
  methods: {
    validarFormulario() {
     
      if (this.password !== this.passwordConfirm) {
        this.mensajeError = 'Las contraseñas no coinciden';
        return;
      }

    
      const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexCorreo.test(this.correo)) {
        this.mensajeError = 'Formato de correo inválido';
        return;
      }

      this.mensajeError = '';
      alert('El registro se ha realizado correctamente');
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
}
form div {
  margin-bottom: 10px;
}
button {
  padding: 10px;
  background-color: #42b983;
  border: none;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #35495e;
}
</style>
