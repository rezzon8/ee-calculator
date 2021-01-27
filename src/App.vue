<template>
  <div id="app">
    <img
      alt="Equal Experts Logo"
      src="https://www.equalexperts.com/wp-content/themes/equalexperts/assets/logo.svg"
      class="animate__animated animate__tada animate__delay-1s"
    />
    <Calculator
      title="The Simple Calculator"
      description="A simple calculator project to illustrate VUE frontend app development"
    />
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
  color: #ffffff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding-top: 1rem;
  text-align: center;
}

img {
  width: 13rem;
}
</style>
