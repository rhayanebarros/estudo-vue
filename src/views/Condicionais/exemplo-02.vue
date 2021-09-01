<template>
  <div class="exemplo-02">
    <Logo/>
    <VoltarCondicionais/>
    <h1>Exemplo 02</h1>
    <ul>
      <li v-for="(cor, i) in cores" :key="cor">{{ i }}- {{ cor }}</li>
    </ul>
    <hr>
    <!-- mesma coisa que o de cima só que com o template-->
    <template v-for="(cor, i) in cores">
      <ul :key="cor">
        <li>
          {{ i }}- {{ cor }}
        </li>
      </ul>
    </template>
    <hr>
    <ul>
      <li v-for="pessoa in pessoas" :key="pessoa">
        {{ pessoa.nome }}
      </li>
    </ul>
    <hr>
    <!-- mesma coisa que o de cima só que percorrendo os atributos de um obj-->
    <ul>
      <li v-for="pessoa in pessoas" :key="pessoa">
        <div v-for="(valor, chave) in pessoa" :key="valor">
          {{ chave }}: {{ valor }}
        </div>
      </li>
    </ul>
    <hr>
    <!-- lista com uma quantidade x de elementos que vc quer exibir-->
    <ul>
      <li v-for="n in 10" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import VoltarCondicionais from '@/components/VoltarCondicionais.vue'

export default {
  name: 'exemplo-02',
  components: {
    Logo,
    VoltarCondicionais
  },
  data () {
    return {
      // lista
      cores: ['vermelho', 'verde', 'amarelo', 'azul'],
      // lista do tipo objeto
      pessoas: [
        { nome: 'Ana', idade: 26, peso: 59 },
        { nome: 'Guilherme', idade: 22, peso: 89 }
      ]
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
