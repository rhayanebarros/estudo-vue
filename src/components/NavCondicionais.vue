<template>
  <div class="nav" id="nav">
    <router-link to="/condicionais/exercicio-01" @click.native="getNameEx($event)">
      Exercício 01
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavCondicionais',
  data () {
    return {
      name: String
    }
  },
  methods: {
    getNameEx (event) {
      this.name = event.currentTarget.innerText
      console.log(this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.nav {
  text-align: left;
  margin: 0 auto;
  width: 450px;
}

.nav a{
  display: list-item;
  list-style: circle;
  list-style-position: inside;
  margin: 10px auto 0;
}
</style>
