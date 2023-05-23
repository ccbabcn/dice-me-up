"use client";

import React from "react";
import Die from "../Die";
import { DieValue } from "../../types";

type DiceGridProps = {
  diceValues: DieValue[];
};

const DiceGrid = React.memo(({ diceValues }: DiceGridProps) => {
  return (
    <div className="DiceGrid flex flex-row flex-wrap gap-9 justify-evenly w-full items-center p-10">
      {diceValues?.map((dieValue, index) => {
        const dieReference = `${index}-${dieValue}`;
        return <Die key={dieReference} value={dieValue} />;
      })}
    </div>
  );
});

DiceGrid.displayName = "DiceGrid";

export default DiceGrid;
