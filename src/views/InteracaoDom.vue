<template>
  <div class="interacao">
    <Logo/>
    <HelloWorld msg="Interação com a DOM"/>
    <Nav/>
    <NavInteracao/>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Nav from '@/components/Nav.vue'
import NavInteracao from '@/components/NavInteracao.vue'

export default {
  name: 'InteracaoDom',
  components: {
    Logo,
    HelloWorld,
    Nav,
    NavInteracao
  }
}
</script>

<style scoped lang="scss">
</style>
