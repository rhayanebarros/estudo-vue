<template>
  <div class="propriedades-reativas-01">
    <img alt="Vue logo" src="../assets/logo.png">
    <Nav/>
    <p class="title">{{ titulo }}</p>
    <!-- v-bind seria o bind de uma unica direção do js para o html -->
    <!-- v-on seria o evento que aconteceu no template(html) e faço uma ação para atualizar os dados dentro da minha instacia-->
    <!-- v-model é two way binding, funciona nos dois sentidos -->
    <input type="text" v-model="titulo">

    <button v-on:click="aumentar">Aumentar</button>
    <button v-on:click="contador2++">Aumentar 2</button>
    <button v-on:click="diminuir">Diminuir</button>

    <p>Contador: {{ contador }} {{ contador2 }}</p>
    <p>Resultado: {{ resultado }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'propriedades-reativas-01',
  components: {
    Nav
  },
  data () {
    return {
      titulo: 'Usando Vue.js 2',
      contador: 0,
      contador2: 0
    }
  },
  computed: {
    resultado () {
      return this.contador >= 5 ? 'Maior ou igual a 5' : 'Menor que 5'
    }
  },
  methods: {
    aumentar () {
      this.contador++
    },
    diminuir () {
      this.contador--
    }
  }
}
</script>

<style scoped lang="scss">

.title {
  color: $blue-dark;
  font-family: $font;
  font-weight: $semi-bold;
  margin-top: 20px;
  font-size: 20px;
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
  margin-top: 10px;
}

button {
  display: block;
  margin: 10px auto;
  font-family: $font;
  font-weight: $semi-bold;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #000;
  background-color: $blue-dark;
  color: white;
  width: 180px;

  &:first-child {
    margin: 20px auto;
  }
}

p {
  color: $blue-dark;
  font-family: $font;
  font-weight: $semi-bold;
  margin-top: 20px;
  font-size: 18px;
}

</style>
