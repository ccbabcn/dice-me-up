import { render } from "@testing-library/react";
import Die from ".";
import { DieValue } from "@/components/types";

describe("Die component", () => {
  const dieValues = [1, 2, 3, 4, 5, 6] as DieValue[];
  test("It should have the expected displayName", () => {
    const EXPECTED_DISPLAY_NAME = "Die";

    const { displayName } = Die;

    expect(displayName).toBe(EXPECTED_DISPLAY_NAME);
  });

  dieValues.forEach((dieValue) => {
    test(`It should render ${dieValue} visible black pip(s) if the value of the die it's ${dieValue}`, () => {
      const value = dieValue;
      const PIP_CLASS = ".Die__pip";

      const { container } = render(<Die value={value} />);
      const totalPips = container.querySelectorAll(PIP_CLASS).length;

      expect(totalPips).toEqual(value);
    });
  });
});
