import { renderHook, act } from "@testing-library/react-hooks";
import useGameBoard from "./useGameBoard";
import React from "react";

describe.skip("useGameBoard custom hook", () => {
  test("should update numberOfDices when handleRangeChange is called", () => {
    const { result } = renderHook(() => useGameBoard());
    const newValue = 5;

    act(() => {
      const event = {
        target: {
          value: newValue.toString(),
        },
        currentTarget: {
          value: newValue.toString(),
        },
        bubbles: false,
        cancelable: false,
      } as React.ChangeEvent<HTMLInputElement>;

      result.current.handleRangeChange(event);
    });
    expect(result.current.numberOfDices).toBe(newValue);
  });

  test("should update diceValues and numberOfRolls when handleOnClick is called", () => {
    const { result } = renderHook(() => useGameBoard());
    const initialNumberOfRolls = result.current.numberOfRolls;
    const initialDiceValues = [1, 2, 3];

    act(() => {
      result.current.handleOnClick();
    });

    expect(result.current.numberOfRolls).toBe(initialNumberOfRolls + 1);
    expect(result.current.diceValues).not.toBe(initialDiceValues);
  });
});
