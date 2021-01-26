import { shallowMount } from "@vue/test-utils";
import Calculator from "@/components/Calculator.vue";

describe("Calculator.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Calculator, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
