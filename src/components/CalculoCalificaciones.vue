
<template>
  <div>
    <h2>Cálculo de Calificaciones</h2>
    <form @submit.prevent="calcularPromedio">
      <!-- Campo para Nota 1 -->
      <div>
        <label>Nota 1 (35%):</label>
        <input 
          type="number" 
          v-model.number="nota1" 
          min="10" 
          max="70" 
          required 
          placeholder="Ingresa Nota 1" 
        />
      </div>

      <!-- Nota 2 -->
      <div>
        <label>Nota 2 (35%):</label>
        <input 
          type="number" 
          v-model.number="nota2" 
          min="10" 
          max="70" 
          required 
          placeholder="Ingresa Nota 2" 
        />
      </div>

      <!-- Nota 3 -->
      <div>
        <label>Nota 3 (30%):</label>
        <input 
          type="number" 
          v-model.number="nota3" 
          min="10" 
          max="70" 
          required 
          placeholder="Ingresa Nota 3" 
        />
      </div>

      <!--  Asistencia -->
      <div>
        <label>Asistencia (%):</label>
        <input 
          type="number" 
          v-model.number="asistencia" 
          min="0" 
          max="100" 
          required 
          placeholder="Ingresa porcentaje de asistencia" 
        />
      </div>

     
      <button type="submit">Calcular</button>
    </form>

    <!-- Mensaje de resultado -->
    <div v-if="mensaje">
      <p>{{ mensaje }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota1: 0,         
      nota2: 0,         
      nota3: 0,         
      asistencia: 0,    
      mensaje: '',      
    };
  },
  methods: {
    calcularPromedio() {
    
      const promedio = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.3);

      
      if (promedio >= 40 && this.asistencia >= 80) {
        this.mensaje = `Promedio: ${promedio.toFixed(2)}. 
        Tu estado es: Aprobado`;
      } else {
        this.mensaje = `Promedio: ${promedio.toFixed(2)}.
       Tu estado es: Reprobado`;
      }
    }
  }
};
</script>

<style scoped>
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
