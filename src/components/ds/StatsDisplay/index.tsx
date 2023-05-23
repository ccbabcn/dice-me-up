type StatsdisplayProps = {
  targetScore: number;
  rollResult: number;
  highScore: number;
  numberOfRolls: number;
  isHighScore: boolean;
};

const StatsDisplay = ({
  targetScore,
  rollResult,
  highScore,
  numberOfRolls,
  isHighScore,
}: StatsdisplayProps) => {
  return (
    <section className="StatsDisplay flex flex-row flex-wrap justify-center gap-5 p-5">
      <span>Target Score: {targetScore}</span>
      <span>Score: {rollResult}</span>
      <span
        className={`StatsDisplay__Text ${
          isHighScore && "StatsDisplay__Text--HighScore text-yellow-200"
        }`}
      >
        {isHighScore ? "NEW" : "Your"} highest score: {highScore}
      </span>
      <span>Rounds: {numberOfRolls}</span>
    </section>
  );
};

StatsDisplay.displayName = "StatsDisplay";

export default StatsDisplay;
