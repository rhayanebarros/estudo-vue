<template>
  <div class="exemplo-01">
    <Logo/>
    <VoltarCondicionais/>
    <h1>Exemplo 01</h1>
    <template v-if="!logado">
       <p>Nenhum usuário logado!</p>
       <p>Perfil: Nenhum</p>
    </template>
    <p v-else-if="anonimo">Navegando como Anônimo</p>
    <template v-else>
      <p>Usuário Logado: {{ nome }}</p>
      <p>Perfil: Admin</p>
    </template>
    <button @click="logado = !logado">
      {{ logado ? 'Sair' : 'Entrar' }}
    </button>
    <label for="anonimo">Anônimo</label>
    <input type="checkbox" v-model="anonimo" name="anonimo">
    <hr>
    <footer v-show="logado&&!anonimo">
      <p>Desenvolvido pra você!</p>
    </footer>
    <footer v-show="!logado&&!anonimo">
      <p>Desenvolvido pra você que é desconhecido!</p>
    </footer>
    <footer v-show="anonimo&&logado">
      <p>Desenvolvido pra você que é Anônimo!</p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import VoltarCondicionais from '@/components/VoltarCondicionais.vue'

export default {
  name: 'exemplo-01',
  components: {
    Logo,
    VoltarCondicionais
  },
  data () {
    return {
      nome: 'Rhayane',
      logado: false,
      anonimo: false
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

button {
  border: 2px solid gray;
  display: block;
  max-width: 140px;
  margin: 20px auto;
  padding: 5px 0;
  width: 100%;
  transition: all 0.2s;

  &:hover {
    background-color: gray;
    color: #fff;
  }
}

label {
  font-size: 14px;
}

input {
  display: inline-block;
  vertical-align: baseline;
  margin-left: 10px;
}

hr {
  margin: 20px auto;
}
</style>
