"use client";

import {
  Button,
  DiceGrid,
  Modal,
  RangeInput,
  StatsDisplay,
} from "@/components/ds";
import useGameBoard from "./useGameBoard/useGameBoard";

const RANGE_MESSAGE = "Number of dice to roll:";

const GameBoard = () => {
  const {
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
  } = useGameBoard();

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
