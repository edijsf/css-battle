import React from "react";
import ToggleInput from "./ToggleInput";

export interface ToggleBoxProps extends SFC {}

const ToggleBox = ({ children, className }: ToggleBoxProps) => {
  return (
    <>
      <ToggleInput />
      <span
        className={`relative flex w-12 flex-shrink-0 appearance-none items-center
         rounded-full dark:bg-dark-400 p-1 bg-light-400 duration-300 ease-in-out ${className}`}
      >
        {children}
      </span>
    </>
  );
};

export default ToggleBox;
