<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bem vindo ao estudo de Vue"/>
    <Nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Nav
  }
}
</script>

<style scoped lang="scss">
</style>
