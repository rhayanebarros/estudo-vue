<template>
  <div class="jogo-matador">
    <div class="voltar">
      <router-link to="/matador">Voltar</router-link>
    </div>
    <h1>Matador de Monstro</h1>
    <div class="content">
      <div class="content__panel scores">
        <div class="score">
          <h2>Jogador</h2>
          <div class="life-bar">
            <div class="life"
                :class="{danger: playerLife < 20}"
                :style="{width: playerLife + '%'}"></div>
          </div>
          <p>{{ playerLife }}%</p>
        </div>
        <div class="score">
          <h2>Monstro</h2>
          <div class="life-bar">
            <div class="life"
                :class="{danger: monsterLife < 20}"
                :style="{width: monsterLife + '%'}"></div>
          </div>
          <p>{{ monsterLife }}%</p>
        </div>
      </div>

      <div v-if="hasResult" class="content__panel result">
        <div v-if="monsterLife === 0" class="win">
          <h3>Você ganhou!!! =)</h3>
        </div>
        <div v-else class="lose">
          <h3>Você perdeu =(</h3>
        </div>
      </div>

      <div class="content__panel buttons">
        <template v-if="running">
          <button @click="attack(false)"
            class="btn attack">Ataque</button>
          <button @click="attack(true)"
            class="btn especial-attack">Ataque Especial</button>
          <button @click="healAndHurt"
            class="btn heal">Curar</button>
          <button @click="running = false"
            class="btn give-up">Desistir</button>
        </template>
        <button v-else
          @click="startGame"
          class="btn new-game">Iniciar Jogo</button>
      </div>

      <div class="content__panel logs">logs</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'jogo-matador',
  components: {
  },
  data () {
    return {
      running: false,
      playerLife: 100,
      monsterLife: 100
    }
  },
  computed: {
    hasResult () {
      return this.playerLife === 0 || this.monsterLife === 0
    }
  },
  methods: {
    startGame () {
      this.running = true
      this.playerLife = 100
      this.monsterLife = 100
    },
    attack (especial) {
      this.hurt('monsterLife', 5, 10, especial)
      this.hurt('playerLife', 7, 12, false)
    },
    hurt (atr, min, max, especial) {
      // se for verdadeiro ele recebe 5 e se for falso ele recebe zero
      const plus = especial ? 5 : 0
      const hurt = this.getRandom(min + plus, max + plus)
      // usando o math.max para evitar que o playerLife fique negativo
      // se this.playerLife for negativo o maior numero será o zero
      // estou chamando o playerLife ou monsterLife através do atr passado dentro do colcetes
      this[atr] = Math.max(this[atr] - hurt, 0)
    },
    healAndHurt () {
      this.heal(10, 15)
      this.hurt('playerLife', 7, 12, false)
    },
    heal (min, max) {
      const heal = this.getRandom(min, max)
      this.playerLife = Math.min(this.playerLife + heal, 100)
    },
    getRandom (min, max) {
      const value = Math.random() * (max - min) + min
      return Math.round(value)
    }
  },
  watch: {
    hasResult (value) {
      if (value) this.running = false
    }
  }
}
</script>

<style scoped lang="scss">
.voltar {
  margin-left: 20px;

  @include above(lg) {
    margin: 0 auto;
    max-width: calc(100% - 40px);
  }

  @include above(xl) {
    max-width: 1260px;
  }
}

.voltar a {
  color: #41b883;
  display: block;
  font-family: $font;
  font-weight: $semi-bold;
  font-size: 18px;
  margin: 0 auto;
  text-align: left;

  &:before {
    content: '<- ';
  }
}

h1 {
  font-size: 28px;
  color: $blue-dark;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  margin-top: 20px;

  @include above(md) {
    font-size: 32px;
  }
}

.content {
  padding: 40px 0;
  width: 100%;

  @include above(md) {
    padding: 60px 0;
  }

  &__panel {
    margin: 0 20px 10px;
    padding: 20px 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);

    @include above(lg) {
      max-width: calc(100% - 40px);
      margin: 0 auto 10px;
      padding: 20px;
    }

    @include above(xl) {
      max-width: 1260px;
    }

    &.scores {
      display: flex;

      .score {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
          font-size: 24px;
          color: $blue-dark;
          font-family: "Raleway", sans-serif;
          font-weight: 600;
        }
        .life-bar {
          border: 1px solid #aaa;
          width: 80%;
          height: 20px;
          margin: 20px 0;

          .life {
            display: flex;
            justify-content: center;
            background-color: #6B8E23;
            height: 100%;
            width: 100%;
          }

          .danger {
            background-color: #B22222;
          }
        }
        p {
          font-size: 20px;
          color: $blue-dark;
          font-family: "Raleway", sans-serif;
          font-weight: 400;
        }
      }
    }

    &.result {
      .win,
      .lose {
        h3 {
          font-size: 28px;
          font-family: "Raleway", sans-serif;
          font-weight: 600;
        }
      }

      .win {
        h3 {
          color: #556B2F;
        }
      }

      .lose {
        h3 {
          color: #B22222;
        }
      }
    }

    &.buttons {
      display: flex;
      flex-direction: column;
      align-items: center;

      @include above(md) {
        flex-direction: row;
        justify-content: center;
      }

      .btn {
        color: #fff;
        display: flex;
        justify-content: center;
        font-size: 14px;
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        border-radius: 5px;
        width: 160px;
        text-transform: uppercase;
        padding: 8px;
        margin: 0 0 10px 0;

        @include above(md) {
          margin: 0 20px 0 0;
        }

        &:last-child {
          margin: 0;
        }

        &.attack {
          background-color: #FF6347;
        }

        &.especial-attack {
          background-color: #D2691E;
        }

        &.heal {
          background-color: #2E8B57;
        }

        &.give-up {
          background-color: #A9A9A9;
        }

        &.new-game {
          background-color: #BC8F8F;
        }
      }
    }
  }
}
</style>
