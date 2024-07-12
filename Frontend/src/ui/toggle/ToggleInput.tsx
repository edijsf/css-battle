import React from "react";
import { useToggleContext } from "./ToggleContext";

interface Props extends SFC {}

const ToggleInput = ({ className = "" }) => {
  const { labelId, onToggle, checked, disabled, toggleRef } =
    useToggleContext();

  return (
    <input
      aria-labelledby={labelId}
      aria-checked={checked}
      checked={checked}
      disabled={disabled}
      onChange={onToggle}
      className={`cursor-pointer select-none absolute inset-0 w-full h-full z-10 appearance-none rounded-md peer ${className}`}
      type="checkbox"
      ref={toggleRef}
      data-testid="toggle-internal-input"
    />
  );
};

export default ToggleInput;
