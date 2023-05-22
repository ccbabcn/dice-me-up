import { Button } from ".";
import { fireEvent, render } from "@testing-library/react";

describe("Button component", () => {
  test("It should have the expected displayName", () => {
    const EXPECTED_DISPLAY_NAME = "Button";

    const { displayName } = Button;

    expect(displayName).toBe(EXPECTED_DISPLAY_NAME);
  });
  test("It should render the passed message correctly", () => {
    const EXPECTED_MESSAGE = "Test message";

    const { getByText } = render(
      <Button
        onClick={() => {}}
        message={EXPECTED_MESSAGE}
        type="primary"
        isActive
      />
    );

    expect(getByText(EXPECTED_MESSAGE));
  });

  test("It should render the correct color of button for primary type", () => {
    const EXPECTED_COLOR_500 = "blue-500";
    const EXPECTED_COLOR_700 = "blue-700";

    const { container } = render(
      <Button onClick={() => {}} message={""} type="primary" isActive />
    );
    const button = container.querySelector("button");
    const buttonClass = button?.classList?.value;

    expect(buttonClass?.includes(EXPECTED_COLOR_500)).toBe(true);
    expect(buttonClass?.includes(EXPECTED_COLOR_700)).toBe(true);
  });

  test("It should render the correct color of button for secondary type", () => {
    const EXPECTED_COLOR_500 = "green-500";
    const EXPECTED_COLOR_700 = "green-700";

    const { container } = render(
      <Button onClick={() => {}} message={""} type="secondary" isActive />
    );
    const button = container.querySelector("button");
    const buttonClass = button?.classList?.value;

    expect(buttonClass?.includes(EXPECTED_COLOR_500)).toBe(true);
    expect(buttonClass?.includes(EXPECTED_COLOR_700)).toBe(true);
  });

  test("If active, it should call the passed function when clicked", () => {
    const mockFunction = jest.fn();

    const { getByRole } = render(
      <Button onClick={mockFunction} message={""} type="primary" isActive />
    );

    const renderedButton = getByRole("button");
    fireEvent.click(renderedButton);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  test("If disabled, it should NOT call the passed function when clicked", () => {
    const mockFunction = jest.fn();

    const { getByRole } = render(
      <Button
        onClick={mockFunction}
        message={""}
        type="primary"
        isActive={false}
      />
    );

    const renderedButton = getByRole("button");
    fireEvent.click(renderedButton);
    expect(mockFunction).toHaveBeenCalledTimes(0);
  });
});
