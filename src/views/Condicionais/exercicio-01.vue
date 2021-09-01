<template>
  <div class="exercicio-01">
    <Logo/>
    <VoltarCondicionais/>
    <h1>Exercício 01</h1>
    <h2>#01</h2>
    <div>
      <button @click="alternar = !alternar">Alternar</button>
      <p v-if="!alternar">Você quer me ver ...</p>
      <p v-else>...ou eu</p>
      <hr>
      <p v-show="!alternar">Você quer me ver ...</p>
      <p v-show="alternar">...ou eu</p>
    </div>
    <hr>
    <h2>#02</h2>
    <ul>
      <li v-for=" (cor, i) in cores" :key="cor">
        {{i}}- {{cor}}
      </li>
    </ul>
    <hr>
    <h2>#03</h2>
    <ul>
      <li v-for="(item, chave, i) in livro" :key="item">
        {{ i }}- {{ chave }}: {{ item }}
      </li>
    </ul>
    <hr>
    <h2>#04</h2>
    <ul>
      <li v-for="valor in aluno" :key="valor">
        <template v-if="!Array.isArray(valor)">
          {{ valor }}
        </template>
        <template v-else>
          <p>Notas:</p>
          <ul>
            <li v-for="notas in valor" :key="notas">
              {{ notas }}
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import VoltarCondicionais from '@/components/VoltarCondicionais.vue'

export default {
  name: 'exercicio-01',
  components: {
    Logo,
    VoltarCondicionais
  },
  data () {
    return {
      alternar: false,
      cores: ['vermelho', 'verde', 'amarelo', 'azul'],
      array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
      livro: {
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkiens',
        volume: '3'
      },
      aluno: {
        id: 10,
        nome: 'Maria',
        notas: [7.67, 8.33, 6.98, 9.21]
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
h1 {
  margin: 0 auto 20px;
}

h2 {
  font-size: 22px;
  margin: 5px 0;
}

button {
  border: 2px solid gray;
  width: 140px;
  text-transform: uppercase;
  padding: 6px 0;
  margin: 10px 0;
}

p {
  font-size: 24px;
}

li {
  margin: 0 auto 5px;
}

hr {
  margin: 10px 0;
}
</style>
