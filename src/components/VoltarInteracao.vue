<template>
  <div class="voltar">
    <router-link to="/interacao">Voltar</router-link>
  </div>
</template>

<script>
export default {
  name: 'VoltarInteracao'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.voltar a {
  color: #41b883;
  display: block;
  font-family: $font;
  font-weight: $semi-bold;
  font-size: 16px;
  margin: 20px auto;

  @include above(md) {
    font-size: 18px;
  }

  &:before {
    content: '<- ';
  }
}
</style>
