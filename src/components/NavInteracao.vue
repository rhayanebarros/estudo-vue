<template>
  <div class="nav" id="nav">
    <router-link to="/interacao/exercicio-01" @click.native="getNameEx($event)">
      Exercício 01
    </router-link>
    <router-link to="/interacao/exercicio-02">Exercício 02</router-link>
    <router-link to="/interacao/exercicio-03">Exercício 03</router-link>
    <router-link to="/interacao/exercicio-evento-01">Exercício Evento 01</router-link>
    <router-link to="/interacao/exercicio-evento-02">Exercício Evento 02</router-link>
    <router-link to="/interacao/propriedades-reativas-01">Propriedades Reativas 01</router-link>
    <router-link to="/interacao/propriedades-reativas-02">Propriedades Reativas 02</router-link>
    <router-link to="/interacao/estilo-dinamico-01">Estilo Dinamico 01</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavInteracao',
  data () {
    return {
      name: String
    }
  },
  methods: {
    getNameEx (event) {
      this.name = event.currentTarget.innerText
      console.log(this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav a {
  color:#485664;
  display: list-item;
  list-style: circle;
  list-style-position: inside;
  margin: 10px auto 0;
}
</style>
