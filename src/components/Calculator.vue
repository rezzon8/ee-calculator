<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="calculator">calculator here...</div>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  props: {
    title: String,
    description: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.calculator {
  border: 1px solid white;
  max-width: 250px;
  min-height: 300px;
  margin: 0 auto;
}
</style>
