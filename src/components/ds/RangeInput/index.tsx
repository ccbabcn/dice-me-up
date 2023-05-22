"use client";

type RangeInputProps = {
  message: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RangeInput = ({ message, value, onChange }: RangeInputProps) => {
  return (
    <div className="RangeInput flex flex-col items-center gap-1">
      <label htmlFor="amount">{`${message} ${value}`}</label>
      <input
        type="range"
        id="amount"
        name="amount"
        min="0"
        max="20"
        step={1}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
RangeInput.displayName = "RangeInput";
