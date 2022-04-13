<template>
  <div class="usuario">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <hr>
    <div class="componentes">
      <app-usuario-info />
      <app-usuario-editar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
  name: 'Usuario',
  components: {
    AppUsuarioInfo,
    AppUsuarioEditar
  }
}
</script>

<style scoped lang="scss">
.usuario {
  background-color: #27363b;
  color: #fff;
  padding: 30px;

  h1 {
    font-size: 28px;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
  }

  p {
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    margin-top: 15px;
  }

  hr {
    margin: 20px 10px;
  }
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
