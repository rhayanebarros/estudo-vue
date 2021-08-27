<template>
  <div class="exercicio-03">
    <Logo/>
    <VoltarInteracao/>
     <!-- 1) Preencha a tag <p> abaixo com o seu Nome e Idade - usando Interpolação -->
    <p  v-once>Usando VueJS - {{ nome }} ({{ idade }} anos)</p>

    <!-- 2) Exiba sua idade multiplicada por 3 -->
    <p>Idade vezes 3: {{ idade * 3 }}</p>
    <p>Idade vezes 3: {{ idadeVezes3() }}</p>

    <!-- 3) Chame uma função para exibir um número randomico
        entre 0 and 1 (Math.random()) -->
    <p>Número Randomico: {{ random() }}</p>

    <!-- 4) Procure uma imagem no google e exiba na tag img fazendo o binding no atributo "src" -->
    <div>
        <img height="400" v-bind:src="img">
    </div>

    <!-- 5) Inicialize o input com o seu nome (use o atributo "value") -->
    <div>
        <input type="text" v-bind:value="nome">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import VoltarInteracao from '@/components/VoltarInteracao.vue'

export default {
  name: 'exercicio-03',
  components: {
    Logo,
    VoltarInteracao
  },
  data () {
    return {
      nome: 'Rhayane',
      idade: '32',
      number: Number,
      img: 'https://picsum.photos/id/1005/600/200'
    }
  },
  methods: {
    idadeVezes3 () {
      return this.idade * 3
    },
    random () {
      this.number = Math.random()
      return this.number
    }
  }
}
</script>

<style scoped lang="scss">

  p {
    color: $blue-dark;
    font-family: $font;
    font-weight: $medium;
    font-size: 14px;
    display: block;
    margin-bottom: 10px;
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
