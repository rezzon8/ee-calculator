<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="calculator">
      <div class="row" style="margin-bottom: 0;">
        <div class="col s12" style="padding: 1rem;">
          <input
            id="calcInputOutput"
            type="number"
            v-model="inputNumber"
            style="text-align: right; font-weight: bold; margin-bottom: 0;"
          />
        </div>
      </div>
      <div class="row" style="margin-bottom: 0;">
        <button
          class="btn col s3 waves-effect waves-light function"
          type="button"
          @click="allClear"
          name="clear"
        >
          AC
        </button>
        <button
          class="btn col s3 waves-effect waves-light function"
          type="button"
          name="polarity"
        >
          +/-
        </button>
        <button
          class="btn col s3 waves-effect waves-light function"
          type="button"
          name="percent"
        >
          %
        </button>
        <button
          class="btn col s3 waves-effect waves-light yellow operation"
          type="button"
          name="divide"
          @click="setOperation('divide')"
        >
          &divide;
        </button>
      </div>
      <div class="row" style="margin-bottom: 0;">
        <button
          class="btn col s3 waves-effect waves-light input-btn"
          type="button"
          name="seven"
        >
          7
        </button>
        <button
          class="btn col s3 waves-effect waves-light input-btn"
          type="button"
          name="eight"
        >
          8
        </button>
        <button
          class="btn col s3 waves-effect waves-light input-btn"
          type="button"
          name="eight"
        >
          9
        </button>
        <button
          class="btn col s3 waves-effect waves-light yellow operation"
          type="button"
          name="multiply"
          @click="setOperation('multiply')"
        >
          &ast;
        </button>
      </div>
      <div class="row" style="margin-bottom: 0;">
        <button
          class="btn col s3 waves-effect waves-light input-btn test-btn"
          type="button"
          name="four"
        >
          4
        </button>
        <button
          class="btn col s3 waves-effect waves-light input-btn"
          type="button"
          name="five"
        >
          5
        </button>
        <button
          class="btn col s3 waves-effect waves-light input-btn"
          type="button"
          name="six"
        >
          6
        </button>
        <button
          class="btn col s3 waves-effect waves-light yellow operation"
          type="button"
          name="minus"
          @click="setOperation('subtract')"
        >
          &minus;
        </button>
      </div>
      <div class="row" style="margin-bottom: 0;">
        <button
          class="btn col s3 waves-effect waves-light input-btn"
          type="button"
          name="one"
        >
          1
        </button>
        <button
          class="btn col s3 waves-effect waves-light input-btn"
          type="button"
          name="two"
        >
          2
        </button>
        <button
          class="btn col s3 waves-effect waves-light input-btn"
          type="button"
          name="three"
        >
          3
        </button>
        <button
          class="btn col s3 waves-effect waves-light yellow operation"
          type="button"
          name="add"
          @click="setOperation('add')"
        >
          &plus;
        </button>
      </div>
      <div class="row" style="margin-bottom: 0;">
        <button
          class="btn col s6 waves-effect waves-light input-btn border-radius-btm-left"
          type="button"
          name="zero"
        >
          0
        </button>
        <button
          class="btn col s3 waves-effect waves-light input-btn"
          type="button"
          name="point"
        >
          .
        </button>
        <button
          class="btn col s3 waves-effect waves-light yellow operation border-radius-btm-right"
          type="button"
          name="equals"
          @click="setOperation('equals')"
        >
          &equals;
        </button>
      </div>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  props: {
    title: String,
    description: String
  },
  data() {
    return {
      inputNumber: 0,
      number1: 0,
      number2: 0,
      operation: null,
      hasOperator: false
    };
  },
  mounted() {
    const card = document.querySelector(".calculator");
    const container = document.querySelector("body");
    const inputButtons = document.querySelectorAll(".btn.input-btn");
    const operationButtons = document.querySelectorAll(".btn.operation");
    const functionButtons = document.querySelectorAll(".function");

    //Moving Animation Event
    container.addEventListener("mousemove", e => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 8;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 18;
      card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container.addEventListener("mouseenter", () => {
      card.style.transition = "all 0.3s ease";

      inputButtons.forEach(btn => {
        btn.style.transform = "translateZ(50px)";
        btn.addEventListener("mouseenter", e => {
          console.log(e);
          e.target.style.transform = "translateZ(85px)";
        });
        btn.addEventListener("mouseleave", e => {
          e.target.style.transform = "translateZ(50px)";
        });
        btn.addEventListener("click", e => {
          e.target.style.transform = "translateZ(50px)";
        });
      });
      operationButtons.forEach(btn => {
        btn.style.transform = "translateZ(35px)";
      });
      functionButtons.forEach(btn => {
        btn.style.transform = "translateZ(20px)";
      });
    });
    //Animate Out
    container.addEventListener("mouseleave", () => {
      card.style.transition = "all 0.3s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      inputButtons.forEach(btn => {
        btn.style.transform = "translateZ(0)";
      });
      operationButtons.forEach(btn => {
        btn.style.transform = "translateZ(0)";
      });
      functionButtons.forEach(btn => {
        btn.style.transform = "translateZ(0)";
      });
    });
    this.setupButtons();
  },
  watch: {
    operation(newValue) {
      if (newValue) {
        this.hasOperator = true;
      }
    }
  },
  methods: {
    setupButtons() {
      const buttons = document.querySelectorAll(".input-btn");
      //
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          const temp = parseInt(btn.textContent);
          if (typeof temp === "number" && !isNaN(temp)) {
            if (this.hasOperator) {
              this.inputNumber = "";
              this.hasOperator = false;
            }
            this.inputNumber = parseInt(
              `${this.inputNumber}${parseInt(btn.textContent)}`,
              10
            );
          }
        });
      });
    },
    allClear() {
      this.inputNumber = 0;
      this.number1 = 0;
      this.number2 = 0;
      this.operation = null;
      this.hasOperator = false;
    },
    setOperation(operation) {
      if (operation !== "equals") {
        this.operation = operation;
        this.number1 = this.inputNumber;
      } else {
        this.number2 = this.inputNumber;
        this.inputNumber = this.calculateNumbers(
          this.number1,
          this.number2,
          this.operation
        );
      }
    },
    calculateNumbers(num1, num2, operation = undefined) {
      if (operation === undefined) return new Error("No operator provided");
      //
      if (operation === "add") return num1 + num2;
      //
      else if (operation === "subtract") return num1 - num2;
      //
      else if (operation === "multiply") return num1 * num2;
      //
      else if (operation === "divide") return num1 / num2;
    }
  }
};
</script>

<style scoped lang="scss">
input {
  color: white;
  font-size: 3rem !important;
  text-align: right;
  border: none !important;
}
h1 {
  color: #fed800;
  font-size: 1.6rem;
  margin: 1.4rem;
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
  border: 1px solid #fed800;
  border-radius: 0.5rem;
  max-width: 250px;
  min-height: 300px;
  margin: 0 auto;
}
.btn {
  border-left: 1px solid #1795d4;
  border-top: 1px solid #1795d4;
  border-radius: 0;
  box-shadow: none;
  font-size: 1.6rem;
  margin-bottom: 0;
  min-height: 4rem;
  background-color: #095e88;
}
input:not([type]):focus:not([readonly]),
input:visited,
input[type="number"]:not(.browser-default):focus:not([readonly]),
input.valid[type="number"]:not(.browser-default),
input[type="text"]:visited {
  border-bottom: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn.yellow {
  background-color: #fed800;
  color: #095e88;
}
.btn.input-btn {
  background-color: #2ac1fb;
  color: #095e88;
}
.btn.border-radius-btm-left {
  border-bottom-left-radius: 0.5rem;
}
.btn.border-radius-btm-right {
  border-bottom-right-radius: 0.5rem;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.calculator {
  transform-style: preserve-3d;
}
</style>
