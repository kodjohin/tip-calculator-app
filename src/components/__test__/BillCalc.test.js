import BillCalc from "../BillCalc";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

test("Bill label render correct text", () => {
    const component = render(<BillCalc/>);
    const el = component.getByTestId("bill_label");

    expect(el.textContent).toBe("Bill")
})

test("Custom input render correct text", () => {
    const component = render(<BillCalc/>);
    const el = component.getByTestId("custom");

    expect(el.placeholder).toBe("Custom")
})