import { render, screen, logDOM } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest";
import Users from "./users";

describe("Users component", () => {
  test("renders", () => {
    render(<Users />);
  });
  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
