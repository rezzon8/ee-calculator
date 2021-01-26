<template>
  <div class="calculator">
    <h1>{{ msg }}</h1>
    <p>
      This simple calculator serves as the output - derived from the
      assessment's interpretation.
    </p>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  props: {
    msg: String
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
</style>
