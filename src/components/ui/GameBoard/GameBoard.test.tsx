import { render } from "@testing-library/react";
import GameBoard from ".";

describe("Component GameBoard", () => {
  test("It should have the expected displayName", () => {
    const EXPECTED_DISPLAY_NAME = "GameBoard";

    const { displayName } = GameBoard;

    expect(displayName).toBe(EXPECTED_DISPLAY_NAME);
  });

  test("It should render its children components", () => {
    const RANGE_INPUT_CLASS = "RangeInput";
    const BUTTON_CLASS = "Button";
    const STATS_DISPLAY_CLASS = "StatsDisplay";

    const { container } = render(<GameBoard />);

    const rangeInputClass = container.querySelector(`.${RANGE_INPUT_CLASS}`)
      ?.classList?.value;
    const buttonClass = container.querySelector(`.${BUTTON_CLASS}`)?.classList
      ?.value;
    const statsDisplayClass = container.querySelector(`.${STATS_DISPLAY_CLASS}`)
      ?.classList?.value;

    expect(rangeInputClass?.includes(RANGE_INPUT_CLASS)).toBe(true);
    expect(buttonClass?.includes(BUTTON_CLASS)).toBe(true);
    expect(statsDisplayClass?.includes(STATS_DISPLAY_CLASS)).toBe(true);
  });
});
