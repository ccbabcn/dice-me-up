import { DieValue } from "@/components/types";
import {
  diceValuesReducer,
  randomDiceValuesGenerator,
  targetScoreSetter,
} from "./functions";

describe("Given randomDiceValuesGenerator function", () => {
  test("When its call with a amount, it sould return that amount of numbers, each one between 1 and 6", () => {
    const amount = 20;
    const minRange = 1;
    const maxRange = 6;

    const numbers = randomDiceValuesGenerator({ amount });

    expect(numbers.every((num) => num >= minRange && num <= maxRange)).toBe;
  });
});

describe("Given diceValuesReducer function, when it recieves a set of number, it should return the total sum", () => {
  const numbers = [2, 3, 4, 5, 6] as DieValue[];
  const expectedTotal = 20;

  const total = diceValuesReducer({ values: numbers });

  expect(total).toEqual(expectedTotal);
});

describe("Given targetScoreSetter function, when it recieves an amount it should multiply it a natural number between 1 and 6", () => {
  const amount = 10;
  const minRange = 10;
  const maxRange = 60;

  const multipliedAmount = targetScoreSetter({ amount });

  expect(multipliedAmount >= minRange && multipliedAmount <= maxRange).toBe;
});
