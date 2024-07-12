import React from "react";
import { useToggleContext } from "./ToggleContext";

type LabelProps = {
  /**
   * children
   */
  children?: React.ReactNode;
  /**
   * Custom className property, to override styles use !important or @styles
   */
  className?: string;
};

type ExpandedProps = LabelProps & {
  html: true;
} & React.HTMLAttributes<HTMLLabelElement>;
type ShallowProps = LabelProps & { html?: never };

export type ToggleLabelOverload = {
  (props: ExpandedProps): JSX.Element;
  (props: ShallowProps): JSX.Element;
};

const ToggleLabel: ToggleLabelOverload = ({
  children,
  className = "",
  ...rest
}: ExpandedProps | ShallowProps) => {
  const { labelId } = useToggleContext();
  return (
    <label
      data-testid="toggle-label"
      id={labelId}
      className={`flex ${className}`}
      {...rest}
    >
      {children}
    </label>
  );
};

export default ToggleLabel;
