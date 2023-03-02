import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Application } from "./Application";

describe("Application component,", () => {
  test("renders", () => {
    render(<Application />);

    //Headings
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    // image
    const imgElement = screen.getByAltText("a person with a laptop");
    expect(imgElement).toBeInTheDocument();

    // form
    const formElement = screen.getByRole("form", {
      name: "form",
    });
    expect(formElement).toBeInTheDocument();

    // textarea
    const textareaElement = screen.getByRole("textarea");
    expect(textareaElement).toBeInTheDocument();

    // dropdown
    const DDElement = screen.getByRole("combobox");
    expect(DDElement).toBeInTheDocument();

    // textbox
    const textboxElement = screen.getByPlaceholderText("Fullname");
    expect(textboxElement).toBeInTheDocument();

    // button -> Submit
    const buttonSubmit = screen.getByRole("button", {
      name: "Submit",
    });
    expect(buttonSubmit).toBeInTheDocument();

    // button -> GoBack
    const buttonGoBack = screen.getByRole("button", {
      name: `Go Back`,
    });
    expect(buttonGoBack).toBeInTheDocument();

    const inputLabel = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(inputLabel).toBeInTheDocument();

    const textareaLabel = screen.getByLabelText("Name", {
      selector: "textarea",
    });
    expect(textareaLabel).toBeInTheDocument();

    const termsLabel = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsLabel).toBeInTheDocument();

    // getByDisplayValue
    const inputValue = screen.getByDisplayValue("Sunil");
    expect(inputValue).toBeInTheDocument();

    // getByTitle
    const divTitle = screen.getByTitle("divtitle");
    expect(divTitle).toBeInTheDocument();

    // getByTestId
    const divTestId = screen.getByTestId("customId");
    expect(divTestId).toBeInTheDocument();
  });

  // getAllBy..
  //   const buttonAll = screen.getAllByRole("button");
  //   buttonAll.map((button) => {
  //     expect(button).toBeInTheDocument();
  //   });
});

/**
 * Elements in the component
 * -> img alt = "a person with a laptop"
 * -> form role="form"
 * -> input placeholder="Fullname" role="textbox"
 * -> textarea role="textarea"
 * -> 2 button
 *  => text -> Submit, Go Back
 */
