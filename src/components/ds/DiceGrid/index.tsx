"use client";

import React from "react";
import { Die, DieValue } from "../Die";

type DiceGridProps = {
  diceValues: DieValue[];
};

export const DiceGrid = React.memo(({ diceValues }: DiceGridProps) => {
  return (
    <div className="DiceGrid flex flex-row flex-wrap gap-9 justify-evenly w-full items-center p-10">
      {diceValues?.map((dieValue, index) => (
        <Die key={index + "-" + dieValue} value={dieValue} />
      ))}
    </div>
  );
});

DiceGrid.displayName = "DiceGrid";
