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
    console.log(wrapper.html());
  });
  it("should subtract one number from another", () => {
    const wrapper = shallowMount(Calculator, {});
    console.log(wrapper.html());
  });
  it("should multiply 2 numbers together", () => {
    const wrapper = shallowMount(Calculator, {});
    console.log(wrapper.html());
  });
  it("should divide 1 number by another", () => {
    const wrapper = shallowMount(Calculator, {});
    console.log(wrapper.html());
  });
});
