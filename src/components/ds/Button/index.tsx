"use client";

const types = {
  secondary: "secondary",
  primary: "primary",
} as const;

type ButtonType = (typeof types)[keyof typeof types];

type ButtonProps = {
  onClick: VoidFunction;
  message: string;
  type: ButtonType;
  isActive: boolean;
};

const buttonVariants = {
  primary: "blue",
  secondary: "green",
};
//TODO
export const Button = ({
  onClick,
  message,
  type,
  isActive = false,
}: ButtonProps) => {
  const handleOnclick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event?.preventDefault();
    onClick();
  };
  return (
    <button
      disabled={!isActive}
      className={`Button bg-${buttonVariants[type]}-500 hover:bg-${buttonVariants[type]}-700 text-white font-bold py-2 px-4 border border-neutral-700 rounded disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={handleOnclick}
    >
      {message}
    </button>
  );
};
Button.displayName = "Button";
