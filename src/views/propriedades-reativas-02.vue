<template>
  <div class="propriedades-reativas-02">
    <img alt="Vue logo" src="../assets/logo.png">
    <Nav/>
    <!-- 1) Exibir em "resultado" o texto 'Valor Diferente' enquanto -->
    <!-- "valor" for diferente de 37 - "valor" é alterado pelos botões. -->
    <!-- Mostrar 'Valor Igual' quando "valor" for igual a 37 -->
    <!-- 2) Monitorar as mudança de "resultado" e reiniciar "valor"-->
    <!-- para 0 depois de 5 segundos (dica: setTimeout(..., 5000) -->
    <div>
      <p>Valor atual: {{ valor }}</p>
      <button @click="valor += 5">Somar 5</button>
      <button @click="valor += 1">Somar 1</button>
      <p>{{ resultado }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'propriedades-reativas-02',
  components: {
    Nav
  },
  data () {
    return {
      valor: 0
    }
  },
  computed: {
    resultado () {
      return this.valor !== 37 ? 'Valor diferente' : 'Valor igual'
    }
  },
  watch: {
    resultado () {
      setTimeout(() => {
        this.valor = 0
      }, 5000)
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">

.title {
  color: $blue-dark;
  font-family: $font;
  font-weight: $semi-bold;
  margin-top: 20px;
  font-size: 20px;
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
  margin-top: 10px;
}

button {
  display: block;
  margin: 10px auto;
  font-family: $font;
  font-weight: $semi-bold;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #000;
  background-color: $blue-dark;
  color: white;
  width: 180px;

  &:first-child {
    margin: 20px auto;
  }
}

p {
  color: $blue-dark;
  font-family: $font;
  font-weight: $semi-bold;
  margin-top: 20px;
  font-size: 18px;
}

</style>
