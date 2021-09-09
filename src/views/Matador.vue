<template>
  <div class="matador">
    <Logo/>
    <HelloWorld msg="Jogo Matador de Monstro"/>
    <VoltarHome/>
    <Nav/>
    <div class="nav">
      <router-link to="/matador/jogo-matador">
        Projeto Jogo Matador de Monstro
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import VoltarHome from '@/components/VoltarHome.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Matador',
  components: {
    Logo,
    HelloWorld,
    VoltarHome,
    Nav
  }
}
</script>

<style scoped lang="scss">
.nav a {
  color:#485664;
  display: list-item;
  list-style: circle;
  list-style-position: inside;
  margin: 10px auto 0;
}
</style>
