<template>
  <div class="exercicio-01">
    <Logo/>
    <VoltarInteracao/>
    <h1>Interacao</h1>
    <input type="text" v-on:input = "alterarTitulo">
    <p class="title">{{ titulo }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import VoltarInteracao from '@/components/VoltarInteracao.vue'

export default {
  name: 'exercicio-01',
  components: {
    Logo,
    VoltarInteracao
  },
  data () {
    return {
      name: '',
      titulo: 'Usando Vue.js 2'
    }
  },
  methods: {
    alterarTitulo (event) {
      this.titulo = event.target.value
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
  border: 1px solid #000
}
</style>
