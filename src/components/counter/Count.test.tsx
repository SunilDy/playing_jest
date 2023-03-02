import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders counter text", () => {
    render(<Counter />);
    const counterText = screen.getByText(/count: 0/i);
    expect(counterText).toBeInTheDocument();
  });
  test("renders INC btn", () => {
    render(<Counter />);
    const counterBtn = screen.getByRole("button", {
      name: "INC",
    });
    expect(counterBtn).toBeInTheDocument();
  });
  test("render a count of 1 post INC click", async () => {
    // create an instance of user event before the render method is called
    user.setup();
    render(<Counter />);
    const counterBtn = screen.getByRole("button", {
      name: "INC",
    });
    // all user-event APIs are sync
    await user.click(counterBtn);
    const counterText = screen.getByText(/count: 1/i);
    expect(counterText).toBeInTheDocument();
  });
  test("render a count of 2 after clicking INC x2", async () => {
    user.setup();
    render(<Counter />);
    const counterBtn = screen.getByRole("button", {
      name: "INC",
    });
    await user.dblClick(counterBtn);
    const counterText = screen.getByText(/count: 2/i);
    expect(counterText).toBeInTheDocument();
  });
  test("gets value of spin el after click -> 10", async () => {
    user.setup();
    render(<Counter />);
    const numberSpin = screen.getByRole("spinbutton");
    await user.type(numberSpin, "10");
    expect(numberSpin).toHaveValue(10);
  });
  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const incBtn = screen.getByRole("button", {
      name: /inc/i,
    });
    const numberSpin = screen.getByRole("spinbutton");
    const setBtn = screen.getByRole("button", {
      name: /set/i,
    });
    await user.tab();
    expect(incBtn).toHaveFocus();
    await user.tab();
    expect(numberSpin).toHaveFocus();
    await user.tab();
    expect(setBtn).toHaveFocus();
  });
});
