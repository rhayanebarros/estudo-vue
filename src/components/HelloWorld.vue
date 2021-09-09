<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    color: #36495e;
    font-family: $font;
    font-weight: $bold;
    font-size: 18px;
    margin: 20px 0;

    @include above(md) {
      font-size: 24px;
    }
  }
</style>
