<template>
  <div class="estilo-dinamico-01">
    <img alt="Vue logo" src="../assets/logo.png">
    <Nav/>
    <div class="box">
      <div class="demo" :class="{c1: aplicarC1}"
        @click="aplicarC1 = !aplicarC1"></div>
      <div class="demo" :class="estilo1"
        @click="aplicarC2 = !aplicarC2"></div>
      <div class="demo"></div>
    </div>

    <div id="desafio">
      <!-- 1) Iniciar a execução do efeito usando botão. -->
      <!-- O efeito deve alternadamente trocar as classes "destaque" e -->
      <!-- "encolher" para cada chamada de setInteval. Use a div abaixo -->
      <!-- com id "efeito" para associar as classes CSS. -->
      <h2>#01</h2>
      <div>
        <button @click="iniciarEfeito">Iniciar Efeito</button>
        <div id="efeito" :class="classe1"></div>
      </div>

      <!-- 2) Aplique na div abaixo a classe informada pelo usuário (crie classe CSS de exemplo). -->
      <h2>#02</h2>
      <div>
        <p>Escreva a cor:</p>
        <input type="text" v-model="classe2">
        <div class="quadrado" :style="{backgroundColor: classe2}"></div>
      </div>

      <!-- 3) Crie uma barra de progresso simples com setInterval e binding de estilo. -->
      <h2>#03</h2>
      <div>
        <button @click="iniciarProgresso">Iniciar</button>
        <div class="barra-progresso">
          <div class="progresso" :style="{width}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'estilo-dinamico-01',
  components: {
    Nav
  },
  data () {
    return {
      aplicarC1: false,
      aplicarC2: false,
      classe1: 'destaque',
      classe2: '',
      width: 0
    }
  },
  computed: {
    estilo1 () {
      return {
        c2: this.aplicarC2
      }
    }
  },
  methods: {
    iniciarEfeito () {
      setInterval(() => {
        this.classe1 = this.classe1 === 'destaque' ? 'encolher' : 'destaque'
      }, 1000)
    },
    iniciarProgresso () {
      let valor = 0
      const temp = setInterval(() => {
        valor += 5
        this.width = `${valor}%`
        if (valor === 100) clearInterval(temp)
      }, 500)
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  display: flex;
  justify-content: space-around;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}

.demo {
  width: 100px;
  height: 100px;
  background-color: $yellow;
  cursor: pointer;
}

.c1 {
  background-color: $blue-dark;
}

.c2 {
  background-color: $gray;
}

#desafio {
  margin: 50px auto 0;

  h2 {
    margin: 20px auto 5px;
  }
}

#efeito {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 0 auto;
}

.destaque {
  background-color: red;
  width: 200px !important;
}

.encolher {
  background-color: gray;
  width: 50px !important;
}

.quadrado {
  width: 20px;
  height: 20px;
  border: 1px solid black;
  margin: 10px auto 5px;
}

.barra-progresso {
  width: 500px;
  height: 30px;
  border: 1px solid #000;
  margin: 0 auto;
}

.progresso {
  background-color: $blue-dark;
  height: 100%;
}
</style>
