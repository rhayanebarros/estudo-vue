<template>
  <div class="condicionais">
    <Logo/>
    <HelloWorld msg="Condicionais e Listas"/>
    <VoltarHome/>
    <Nav/>
    <NavCondicionais/>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import VoltarHome from '@/components/VoltarHome.vue'
import Nav from '@/components/Nav.vue'
import NavCondicionais from '@/components/NavCondicionais.vue'

export default {
  name: 'Condicionais',
  components: {
    Logo,
    HelloWorld,
    VoltarHome,
    Nav,
    NavCondicionais
  }
}
</script>

<style scoped lang="scss">
</style>
