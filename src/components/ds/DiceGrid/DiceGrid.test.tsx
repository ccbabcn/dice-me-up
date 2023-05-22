import { render } from "@testing-library/react";
import { DiceGrid } from ".";
import { DieValue } from "../Die";

describe("Component DiceGrid", () => {
  test("It should have the expected displayName", () => {
    const EXPECTED_DISPLAY_NAME = "DiceGrid";

    const { displayName } = DiceGrid;

    expect(displayName).toBe(EXPECTED_DISPLAY_NAME);
  });

  test("If it receives a total of four dice values it should render four dice", () => {
    const expectedDiceTotalAmount = 4;
    const DIE_CLASS = ".Die";
    const diceValues = [1, 4, 6, 3] as DieValue[];

    const { container } = render(<DiceGrid diceValues={diceValues} />);
    const diceTotalAmount = container.querySelectorAll(DIE_CLASS).length;

    expect(diceTotalAmount).toEqual(expectedDiceTotalAmount);
  });
});
