import { render } from "@testing-library/react";
import { StatsDisplay } from ".";

describe("Component StatsDisplay", () => {
  test("It should have the expected displayName", () => {
    const EXPECTED_DISPLAY_NAME = "StatsDisplay";

    const { displayName } = StatsDisplay;

    expect(displayName).toBe(EXPECTED_DISPLAY_NAME);
  });

  test("It should render correctly the passed values", () => {
    const EXPECTED_SCORE = 9;
    const EXPECTED_ROLL_RESULT = 4;
    const EXPECTED_HIGH_SCORE = 5;
    const EXPECTED_NUMBER_OF_ROLLS = 11;

    const { getByText } = render(
      <StatsDisplay
        targetScore={EXPECTED_SCORE}
        rollResult={EXPECTED_ROLL_RESULT}
        highScore={EXPECTED_HIGH_SCORE}
        numberOfRolls={EXPECTED_NUMBER_OF_ROLLS}
        isHighScore={false}
      />
    );

    const targetScoreText = getByText(`Target Score: ${EXPECTED_SCORE}`);
    const rollResultText = getByText(`Score: ${EXPECTED_ROLL_RESULT}`);
    const highScoreText = getByText(
      `Your highest score: ${EXPECTED_HIGH_SCORE}`
    );
    const numberOfRollsText = getByText(`Rounds: ${EXPECTED_NUMBER_OF_ROLLS}`);

    expect(targetScoreText).toBe;
    expect(rollResultText).toBe;
    expect(highScoreText).toBe;
    expect(numberOfRollsText).toBe;
  });

  test("If is new highest score it should show the text 'NEW highest score' in yellow", () => {
    const EXPECTED_TEXT = "NEW highest score: 10";
    const EXPECTED_CLASS = "text-yellow-200";
    const { getByText, container } = render(
      <StatsDisplay
        targetScore={0}
        rollResult={0}
        highScore={10}
        numberOfRolls={0}
        isHighScore={true}
      />
    );

    const newHighestScoreText = getByText(EXPECTED_TEXT)?.textContent;
    const yellowTextClass = container.querySelector(`.${EXPECTED_CLASS}`)
      ?.classList?.value;

    expect(newHighestScoreText).toEqual(EXPECTED_TEXT);
    expect(yellowTextClass?.includes(EXPECTED_CLASS)).toBe(true);
  });
});
