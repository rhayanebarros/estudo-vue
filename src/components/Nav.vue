<template>
  <div class="menu" id="nav">
    <router-link to="/">Home<span>|</span></router-link>
    <router-link to="/interacao">Interação com a DOM<span>|</span></router-link>
    <router-link to="/condicionais">Condicionais e Listas<span>|</span></router-link>
    <router-link to="/matador">Matador de Monstro</router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
