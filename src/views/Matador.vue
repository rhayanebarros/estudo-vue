<template>
  <div class="matador">
    <Logo/>
    <HelloWorld msg="Jogo Matador de Monstro"/>
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
import Nav from '@/components/Nav.vue'

export default {
  name: 'Matador',
  components: {
    Logo,
    HelloWorld,
    Nav
  }
}
</script>

<style scoped lang="scss">
.nav {
  text-align: left;
  margin: 0 auto;
  width: 450px;
}

.nav a {
  color: #000000;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 18px;
  display: list-item;
  list-style: circle;
  list-style-position: inside;
  margin: 10px auto 0;
}
</style>
