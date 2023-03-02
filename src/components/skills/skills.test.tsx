import { render, screen, logDOM } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["drawing", "coding", "writing"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveTextContent("writing");
  });

  test("list renders with the props", () => {
    render(<Skills skills={skills} />);
    const listItemEl = screen.getAllByRole("listitem");
    expect(listItemEl).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    expect(
      screen.getByRole("button", {
        name: "Login",
      })
    ).toBeInTheDocument();
  });
  test("does not render start learning button", () => {
    render(<Skills skills={skills} />);
    const learningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(learningButton).not.toBeInTheDocument();
  });
});
