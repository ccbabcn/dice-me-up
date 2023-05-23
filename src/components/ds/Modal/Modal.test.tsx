import { fireEvent, render } from "@testing-library/react";
import Modal from ".";

describe("Component Modal", () => {
  test("It should have the expected displayName", () => {
    const EXPECTED_DISPLAY_NAME = "Modal";

    const { displayName } = Modal;

    expect(displayName).toBe(EXPECTED_DISPLAY_NAME);
  });

  test("When rendered, it should display the passed modal and button messages", () => {
    const EXPECTED_MODAL_MESSAGE = "Modal message";
    const EXPECTED_BUTTON_MESSAGE = "Button message";

    const { getByText } = render(
      <Modal
        modalMessage={EXPECTED_MODAL_MESSAGE}
        buttonMessage={EXPECTED_BUTTON_MESSAGE}
        onClick={() => {}}
      />
    );
    const modalMessage = getByText(EXPECTED_MODAL_MESSAGE).textContent;
    const buttonMessage = getByText(EXPECTED_BUTTON_MESSAGE).textContent;

    expect(modalMessage).toEqual(EXPECTED_MODAL_MESSAGE);
    expect(buttonMessage).toEqual(EXPECTED_BUTTON_MESSAGE);
  });

  test("It should render a button that calls the passed function on user click", () => {
    const mockFuntion = jest.fn();

    const { getByRole } = render(
      <Modal modalMessage="" buttonMessage="" onClick={mockFuntion} />
    );
    const button = getByRole("button");
    fireEvent.click(button);

    expect(mockFuntion).toHaveBeenCalledTimes(1);
  });
});
