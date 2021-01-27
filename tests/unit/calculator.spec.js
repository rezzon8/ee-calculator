import { shallowMount } from "@vue/test-utils";
import Calculator from "@/components/Calculator.vue";

describe("Calculator.vue", () => {
  it("renders props.title when passed", () => {
    const title = "The Simple Calculator";
    const wrapper = shallowMount(Calculator, {
      propsData: { title }
    });
    expect(wrapper.text()).toContain(title);
  });
  it("renders props.description when passed", () => {
    const description = "A simple description";
    const wrapper = shallowMount(Calculator, {
      propsData: { description }
    });
    expect(wrapper.text()).toContain(description);
  });
  it("should add 2 numbers", () => {
    const wrapper = shallowMount(Calculator, {});
    expect(wrapper.vm.calculateNumbers(1, 3, "add")).toEqual(4);
  });
  it("should subtract one number from another", () => {
    const wrapper = shallowMount(Calculator, {});
    expect(wrapper.vm.calculateNumbers(1, 3, "subtract")).toEqual(-2);
  });
  it("should multiply 2 numbers together", () => {
    const wrapper = shallowMount(Calculator, {});
    expect(wrapper.vm.calculateNumbers(1, 3, "multiply")).toEqual(3);
  });
  it("should divide 1 number by another", () => {
    const wrapper = shallowMount(Calculator, {});
    expect(wrapper.vm.calculateNumbers(3, 3, "divide")).toEqual(1);
  });
  it("should return an error if no operation is passed in", () => {
    const wrapper = shallowMount(Calculator, {});
    expect(wrapper.vm.calculateNumbers(3, 3)).toThrowError;
  });
  it("should setup the buttons", () => {
    const wrapper = shallowMount(Calculator, {});
    const inputBtn = ".input-btn";
    wrapper.find(inputBtn).trigger("click");
    expect(wrapper.vm.setupButtons).toHaveBeenCalled;
  });
  it("input a number", () => {
    const wrapper = shallowMount(Calculator, {
      data: () => ({
        inputNumber: "5"
      })
    });
    expect(wrapper.find("input").element.value).toBe("5");
    expect(wrapper.vm.inputNumber).toBe("5");
  });
  it("should set the type of operation", () => {
    const wrapper = shallowMount(Calculator, {
      data: () => ({
        inputNumber: 10,
        number1: 5,
        number2: 5,
        operation: null
      })
    });

    let inputBtn = ".operation[name=add]";
    wrapper.find(inputBtn).trigger("click");
    expect(wrapper.vm.setOperation).toHaveBeenCalled;
  });
  it("should set the type of operation to equals", () => {
    const wrapper = shallowMount(Calculator, {
      data: () => ({
        inputNumber: 10,
        number1: 5,
        number2: 5,
        operation: "equals"
      })
    });

    let inputBtn = ".operation[name=equals]";
    wrapper.find(inputBtn).trigger("click");
    expect(wrapper.vm.setOperation).toHaveBeenCalled;
    expect(wrapper.vm.operation).toBe("equals");
  });
  it("reset the calculator", () => {
    const wrapper = shallowMount(Calculator, {
      data: () => ({
        inputNumber: 10,
        number1: 5,
        number2: 5,
        operation: "add",
        hasOperator: false
      })
    });
    const inputBtn = ".function-clear";
    wrapper.find(inputBtn).trigger("click");
    expect(wrapper.vm.allClear).toHaveBeenCalled;
    expect(wrapper.vm.inputNumber).toBe(0);
    expect(wrapper.vm.number1).toBe(0);
    expect(wrapper.vm.number2).toBe(0);
    expect(wrapper.vm.operation).toBe(null);
    expect(wrapper.vm.hasOperator).toBe(false);
  });
});
