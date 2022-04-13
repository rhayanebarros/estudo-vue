<template>
  <div class="comunicacao-comp">
    <Logo/>
    <HelloWorld msg="Comunicação Componentes"/>
    <VoltarHome/>
    <Nav/>
    <div class="nav">
      <router-link to="/comunicacao-comp/usuario">
        Comunicação entre os Componentes
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
  name: 'ComunicacaoComp',
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
