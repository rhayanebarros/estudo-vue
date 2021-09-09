<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

// Fonts
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap');

// Resets and base
@import './assets/style/resets/reset.scss';
@import './assets/style/_utils.scss';
// @import './assets/style/_variables.scss'; __ globally imported via vue.config.js

#app {
  text-align: center;
  color: #2c3e50;
  padding-top: 40px;

  @include above(md) {
    padding-top: 80px;
  }
}
</style>
