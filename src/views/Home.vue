<template>
  <div class="home">
    <Logo/>
    <HelloWorld msg="Bem vindo ao estudo de Vue"/>
    <Nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    HelloWorld,
    Nav
  }
}
</script>

<style scoped lang="scss">
#nav.menu {
  @include above(md) {
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;;
  }
}
</style>
