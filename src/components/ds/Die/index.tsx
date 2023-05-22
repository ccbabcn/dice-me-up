"use client";

export type DieValue = 1 | 2 | 3 | 4 | 5 | 6;

type DieProps = {
  value: DieValue;
};

export const Die = ({ value }: DieProps) => {
  const diePipsMapper = [
    [4],
    [0, 8],
    [0, 4, 8],
    [0, 2, 6, 8],
    [0, 2, 4, 6, 8],
    [0, 2, 3, 5, 6, 8],
  ];

  const mappedDie = Array.from({ length: 9 }, (_, index: number) => {
    return (
      <div
        key={index + "-" + value}
        className={`${
          diePipsMapper[value - 1]?.includes(index)
            ? "Die__pip"
            : "Die__pip--invisible invisible"
        } bg-black w-7 h-7 rounded-full `}
      ></div>
    );
  });

  return (
    <div
      className={
        "Die motion-safe:animate-spin 1s bg-white rounded-xl min-w-[140px] min-h-[140px] grid gap-2 p-5 grid-cols-3 grid-rows-3"
      }
    >
      {mappedDie}
    </div>
  );
};

Die.displayName = "Die";
