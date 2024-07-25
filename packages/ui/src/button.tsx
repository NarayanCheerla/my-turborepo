import React from "react";
import { ReactNode } from "react";
import "./styles.css";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  disable?: boolean;
};

export const Button = ({ children, onClick, disable=false }: ButtonProps): JSX.Element => {
  return (
    <button disabled={disable} onClick={onClick} className={`ui-px-3 ui-py-1.5 ui-m-2 ui-rounded-sm ui-border  ui-text-white ${disable ? "ui-bg-gray-400 ui-border-gray-500 ui-pointer-events-none": "ui-bg-blue-500 ui-border-blue-500"}`}>
      {children}
    </button>
  );
};
