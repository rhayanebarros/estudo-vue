<template>
  <div class="voltar">
    <router-link to="/condicionais">Voltar</router-link>
  </div>
</template>

<script>
export default {
  name: 'VoltarCondicionais'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.voltar a {
  color: #41b883;
  display: block;
  font-family: $font;
  font-weight: $semi-bold;
  font-size: 18px;
  margin: 20px auto;
  &:before {
    content: '<- ';
  }
}
</style>
