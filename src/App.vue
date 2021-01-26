<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="https://www.equalexperts.com/wp-content/themes/equalexperts/assets/logo.svg"
    />
    <Calculator msg="The Simple Calculator" />
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    Calculator
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2c3e50;
  color: #ffffff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding-top: 1rem;
  text-align: center;
}

img {
  width: 13rem;
  opacity: 0.5;
}
</style>
