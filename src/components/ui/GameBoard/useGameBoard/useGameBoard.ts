import React, { useEffect, useRef } from "react";
import {
  diceValuesReducer,
  randomDiceValuesGenerator,
  targetScoreSetter,
} from "../../utils/functions";

const useGameBoard = () => {
  const [numberOfDices, setNumberOfDices] = React.useState(0);
  const [targetScore, setTargetScore] = React.useState(0);
  const [numberOfRolls, setNumberOfRolls] = React.useState(0);
  const [rollResult, setRollResult] = React.useState(0);
  const [highScore, setHighScore] = React.useState(0);
  const isHighScore = useRef(false);
  const [diceValues, setDiceValues] = React.useState(
    randomDiceValuesGenerator({ amount: 0 })
  );

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setNumberOfDices(value);
  };

  const handleOnClick = () => {
    setDiceValues(randomDiceValuesGenerator({ amount: numberOfDices }));
    setNumberOfRolls((currentCount) => currentCount + 1);
  };

  const handleModalClick = () => {
    setNumberOfDices(0);
  };

  useEffect(() => {
    setTargetScore(targetScoreSetter({ amount: numberOfDices }));
    setRollResult(0);
    setNumberOfRolls(0);
    setHighScore(0);
  }, [numberOfDices]);

  useEffect(() => {
    setRollResult(diceValuesReducer({ values: diceValues }));
  }, [diceValues]);

  useEffect(() => {
    if (rollResult > highScore) {
      setHighScore(rollResult);
      isHighScore.current = true;
    } else {
      isHighScore.current = false;
    }
  }, [highScore, rollResult]);

  const shouldShowModal = highScore > targetScore && targetScore > 0;

  return {
    numberOfDices,
    targetScore,
    rollResult,
    highScore,
    numberOfRolls,
    isHighScore,
    diceValues,
    handleRangeChange,
    handleOnClick,
    handleModalClick,
    shouldShowModal,
  };
};

export default useGameBoard;
