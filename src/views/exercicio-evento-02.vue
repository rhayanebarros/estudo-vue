<template>
  <div class="exercicio-evento-02">
    <img alt="Vue logo" src="../assets/logo.png">
    <Nav/>
     <!-- 1) Exiba um alert quando o botão for clicado -->
    <div>
        <button v-on:click="alerta">Exibir Alerta</button>
    </div>
    <!-- 2) Escute o evento "keyup" e armazene o valor na propriedade
        data (dica: event.target.value) -->
    <div>
        <input type="text" v-on:keyup="mostrarValor">
        <p>{{ valor }}</p>
    </div>
    <!-- 3) Ajuste o exemplo 2 para disparar o evento "keydown" somente
        quando a tecla for ENTER -->
    <div>
        <input type="text" v-on:keydown.enter="valor = $event.target.value">
        <p>{{ valor }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'exercicio-evento-02',
  components: {
    Nav
  },
  data () {
    return {
      valor: ''
    }
  },
  methods: {
    alerta () {
      alert('Funcinou!!!')
    },
    mostrarValor (event) {
      this.valor = event.target.value
    }
  }
}
</script>

<style scoped lang="scss">

button {
  border: 1px solid #000;
  border-radius: 6px;
  width: 160px;
  font-size: 24px;
  margin-top: 20px;
  color: $blue-dark;
  font-family: $font;
  font-weight: $semi-bold;
  transition: all 0.3s;
}

button:hover {
  background-color: $blue-dark;
  color: #fff;
}

input {
  color: $blue-dark;
  font-family: $font;
  font-weight: $semi-bold;
  font-size: 16px;
  width: 100%;
  max-width: 160px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #000;
  margin-top: 20px;
}
</style>
