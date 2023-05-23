import { fireEvent, render } from "@testing-library/react";
import RangeInput from ".";

describe("Component RangeInput", () => {
  test("It should have the expected displayName", () => {
    const EXPECTED_DISPLAY_NAME = "RangeInput";

    const { displayName } = RangeInput;

    expect(displayName).toBe(EXPECTED_DISPLAY_NAME);
  });

  test("It renders the correct message and value passed", () => {
    const EXPECTED_MESSAGE = "Range input message";
    const EXPECTED_VALUE = 10;

    const { getByLabelText, getByDisplayValue } = render(
      <RangeInput
        message={EXPECTED_MESSAGE}
        value={EXPECTED_VALUE}
        onChange={() => {}}
      />
    );
    const rangeLabelText = getByLabelText(
      `${EXPECTED_MESSAGE} ${EXPECTED_VALUE}`
    );
    const rangeInputValue = getByDisplayValue(EXPECTED_VALUE);

    expect(rangeLabelText).toBe;
    expect(rangeInputValue).toBe;
  });

  test("When user interacts it should call the passed function", () => {
    const mockFunction = jest.fn();

    const { getByRole } = render(
      <RangeInput message={""} value={0} onChange={mockFunction} />
    );
    const rangeInputElement = getByRole("slider");
    fireEvent.change(rangeInputElement, { target: { value: 1 } });
    fireEvent.change(rangeInputElement, { target: { value: 2 } });

    expect(mockFunction).toHaveBeenCalledTimes(2);
  });
});
