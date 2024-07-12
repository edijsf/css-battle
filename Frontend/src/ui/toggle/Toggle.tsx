import React, { forwardRef, memo } from "react";
import { ToggleProvider } from "./ToggleContext";
import ToggleLabel from "./ToggleLabel";
import ToggleBox from "./ToggleBox";
import ToggleSlider from "./ToggleSlider";

// export interface ToggleProps extends RootDivHtml {
export interface ToggleProps extends SFC {
  /**
   * Disables events
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Checked value controls slider
   */
  checked?: boolean;
}

const Toggle = memo(
  forwardRef<HTMLInputElement, ToggleProps>(
    // later add ...rest to map to input
    (
      { className = "", disabled = false, checked, onClick, children, ...rest },
      toggleRef
    ) => {
      return (
        <ToggleProvider
          checked={checked}
          onToggle={onClick}
          toggleRef={toggleRef}
          disabled={disabled}
        >
          <ToggleWrapper className={className} {...rest}>
            {children}
          </ToggleWrapper>
        </ToggleProvider>
      );
    }
  )
);

Toggle.displayName = "Toggle";

// interface ToggleWrapperProps extends RootDivHtml {
interface ToggleWrapperProps {
  children?: React.ReactNode;
  className?: string;
}
const ToggleWrapper = ({
  children,
  className = "",
  ...rest
}: ToggleWrapperProps) => {
  return (
    <div
      className={`relative  flex items-center gap-4 px-2 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

const ToggleNamespace = Object.assign(Toggle, {
  Label: ToggleLabel,
  Slider: ToggleSlider,
  Box: ToggleBox,
});

export { ToggleNamespace as Toggle };
