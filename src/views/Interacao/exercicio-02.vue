<template>
  <div class="exercicio-02">
    <Logo/>
    <VoltarInteracao/>
    <h2 v-once>{{ titulo }}</h2>
    <!-- v-once permite que o valor só seja interpretado uma única vez -->
    <h3>{{ saudacao() }}</h3>
    <a v-bind:href="link">Google</a>
    <!-- v-bind permite interpretação do link dentro da tag href -->
    <div class="link-html" v-html="linkHtml"></div>
    <!-- v-html permite interpretação para html -->
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import VoltarInteracao from '@/components/VoltarInteracao.vue'

export default {
  name: 'exercicio-02',
  components: {
    Logo,
    VoltarInteracao
  },
  data () {
    return {
      titulo: 'Exercicio 02',
      link: 'https://www.google.com/',
      linkHtml: '<a href="https://www.google.com/">Google</a>'
    }
  },
  methods: {
    saudacao () {
      this.titulo = 'Bom dia!'
      return this.titulo
    }
  }
}
</script>

<style scoped lang="scss">

  h2,
  h3 {
    color: $blue-dark;
    font-family: $font;
    font-weight: $semi-bold;
    font-size: 16px;
  }

  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  a {
    color: $blue-dark;
    font-family: $font;
    font-weight: $semi-bold;
    font-size: 16px;
    display: block;
    margin-bottom: 10px;
  }

  .link-html {
    a {
      color: $blue-dark;
      font-family: $font;
      font-weight: $semi-bold;
      font-size: 16px;
      display: block;
      margin-bottom: 10px;
    }
  }

</style>
