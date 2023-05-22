"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  DiceGrid,
  Modal,
  RangeInput,
  StatsDisplay,
} from "@/components/ds";
import {
  diceValuesReducer,
  randomDiceValuesGenerator,
  targetScoreSetter,
} from "../utils/functions";

const RANGE_MESSAGE = "Number of dice to roll:";

const GameBoard = () => {
  const [numberOfDices, setNumberOfDices] = useState(0);
  const [targetScore, setTargetScore] = useState(0);
  const [numberOfRolls, setNumberOfRolls] = useState(0);
  const [rollResult, setRollResult] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const isHighScore = useRef(false);
  const [diceValues, setDiceValues] = useState(
    randomDiceValuesGenerator({ amount: 0 })
  );

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setNumberOfDices(value);
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
    } else isHighScore.current = false;
  }, [highScore, rollResult]);

  const handleOnClick = () => {
    setDiceValues(randomDiceValuesGenerator({ amount: numberOfDices }));
    setNumberOfRolls((currentCount) => currentCount + 1);
  };

  const handleModalClick = () => {
    setNumberOfDices(0);
  };
  const shouldShowModal = highScore > targetScore && targetScore > 0;

  return (
    <div className={"felx w-full gap-10"}>
      <div className={"flex flex-col z-20 sticky w-full top-0 bg-black p-10"}>
        <div className="flex flex-row flex-wrap justify-evenly gap-10">
          <RangeInput
            message={RANGE_MESSAGE}
            onChange={handleRangeChange}
            value={numberOfDices}
          />
          <Button
            message="Roll them!"
            onClick={handleOnClick}
            type="primary"
            isActive={numberOfDices > 0}
          />
        </div>
      </div>
      <StatsDisplay
        targetScore={targetScore}
        rollResult={rollResult}
        highScore={highScore}
        numberOfRolls={numberOfRolls}
        isHighScore={isHighScore.current}
      />

      {numberOfRolls > 0 && <DiceGrid diceValues={diceValues} />}
      {shouldShowModal && (
        <Modal
          modalMessage={`Congrats! You won after ${numberOfRolls} roll${
            numberOfRolls > 1 ? "s" : ""
          }`}
          buttonMessage={"Click to start again"}
          onClick={handleModalClick}
        />
      )}
    </div>
  );
};

GameBoard.displayName = "GameBoard";

export default GameBoard;
