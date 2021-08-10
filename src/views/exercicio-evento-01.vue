<template>
  <div class="exercicio-evento-01">
    <img alt="Vue logo" src="../assets/logo.png">
    <Nav/>
    <p>{{ contador }}</p>
    <p>{{ contador > 10 ? 'Maior que 10' : 'Menor que 10' }}</p>
    <button v-on:click="somar">Somar 1</button>
    <p v-on:mousemove="atualizarXY">
      Mouse: {{x}} e {{y}}
      <span v-on:mousemove.stop="">Parar evento Mouse</span>
      <!-- modificadores de evento -->
    </p>
    <p>{{ contador5 }}</p>
    <button v-on:click="somar5(5, $event)">Somar 5</button>
    <a v-on:click.prevent="" href="https://www.google.com/">Google</a>
    <!-- modificadores de evento prevent-default-->

    <input type="text" v-on:keyup.enter="exibirAlerta" v-model="message">
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'exercicio-evento-01',
  components: {
    Nav
  },
  data () {
    return {
      contador: 0,
      x: 0,
      y: 0,
      contador5: 0,
      message: ''
    }
  },
  methods: {
    somar () {
      this.contador++
    },
    atualizarXY (e) {
      this.x = e.clientX
      this.y = e.clientY
    },
    somar5 (passo, event) {
      console.log(event)
      this.contador5 += passo
    },
    exibirAlerta () {
      console.log(this.message)
      if (this.message === 'rhayane') {
        alert('Vai Trabalhar Vagabunda!!!')
      } else if (this.message === 'luiz') {
        alert('Fora Bolsonaro!!!')
      } else if (this.message === 'ivana') {
        alert('estou vigorada!!!')
      } else {
        alert('Vai trabalhar!')
      }
    }
  }
}
</script>

<style scoped lang="scss">

p {
  color: $blue-dark;
  font-family: $font;
  font-weight: $semi-bold;
  margin-top: 20px;
  font-size: 30px;
}

button {
  border: 1px solid #000;
  border-radius: 6px;
  width: 160px;
  font-size: 24px;
  margin-top: 20px;
  color: $blue-dark;
  font-family: $font;
  font-weight: $semi-bold;
  transition: all 0.3s;
}

button:hover {
  background-color: $blue-dark;
  color: #fff;
}

a {
  color: $blue-dark;
  font-family: $font;
  font-weight: $semi-bold;
  font-size: 20px;
  display: block;
  margin-top: 20px;
}

input {
  color: $blue-dark;
  font-family: $font;
  font-weight: $semi-bold;
  font-size: 16px;
  width: 100%;
  max-width: 160px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #000;
  margin-top: 20px;
}

</style>
