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

const Button = ({ onClick, message, type, isActive = false }: ButtonProps) => {
  const handleOnclick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event?.preventDefault();
    onClick();
  };
  const buttonVariants = {
    primary: "Button bg-blue-600 hover:bg-blue-800",
    secondary: "Button bg-green-800 hover:bg-green-950",
    common:
      "text-white font-bold py-2 px-4 border border-neutral-700 rounded disabled:opacity-50 disabled:cursor-not-allowed",
  };

  return (
    <button
      disabled={!isActive}
      className={buttonVariants[type] + buttonVariants.common}
      onClick={handleOnclick}
    >
      {message}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
