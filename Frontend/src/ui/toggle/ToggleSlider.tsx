import React from "react";
import { useToggleContext } from "./ToggleContext";

export interface ToggleSliderProps {
  /**
   * children
   */
  children?:
    | React.ReactNode
    | (({ checked }: { checked: boolean }) => React.ReactNode);
  /**
   * Custom className property, to override styles use !important or @styles
   */
  className?: string;
  /**
   * here pass checked transition
   * @default - `translate-x-4`
   */
  transition?: string;
}

const ToggleSlider = ({
  children,
  className = "",
  transition = "translate-x-5",
}: ToggleSliderProps) => {
  const { checked } = useToggleContext();
  return (
    <div className={`relative`}>
      <input
        data-testid="toggle-slider"
        checked={checked}
        type="checkbox"
        readOnly
        className={`flex bg-white rounded-full w-5 h-5 appearance-none transition-all duration-300
        ${className} ${checked && transition}`}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300
        ${checked && transition}`}
      >
        {children instanceof Function ? children({ checked }) : children}
      </div>
    </div>
  );
};

export default ToggleSlider;
