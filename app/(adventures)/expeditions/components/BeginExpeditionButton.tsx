"use client";

import { Dispatch, SetStateAction } from "react";

type BeginExpeditionButtonProps = {
  title: string;
  disabled: boolean;
  isActive: boolean;
  handleClick: Dispatch<SetStateAction<string>>;
};

const BeginExpeditionButton: React.FC<BeginExpeditionButtonProps> = ({
  title,
  disabled,
  isActive,
  handleClick,
}) => {
  return (
    <button
      className="py-1 px-4 self-end text-black bg-white rounded sm:hover:bg-gray-300 disabled:bg-gray-500"
      onClick={() => handleClick(title)}
      disabled={disabled}
      hidden={isActive}
      aria-label={title}
    >
      Begin
    </button>
  );
};

export default BeginExpeditionButton;
