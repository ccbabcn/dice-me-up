import { DieValue } from "../../types";

export const randomDiceValuesGenerator = ({
  amount = 0,
}: {
  amount: number;
}): DieValue[] =>
  Array.from({ length: amount }, () => {
    return (Math.floor(Math.random() * 6) + 1) as DieValue;
  });

export const diceValuesReducer = ({
  values,
}: {
  values: DieValue[];
}): number => {
  return values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

export const targetScoreSetter = ({ amount }: { amount: number }) => {
  return (Math.floor(Math.random() * 6) + 1) * amount;
};
