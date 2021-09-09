<template>
  <div class="voltar">
    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>
export default {
  name: 'VoltarHome'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.voltar {
  display: block;

  @include above(md) {
    display: none;
  }
}
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
