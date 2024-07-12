import React, { ButtonHTMLAttributes, forwardRef, memo, useRef } from "react";

import { IconType } from "react-icons/lib";

const enum Variants {
  primary = "primary",
  primaryBlue = "primaryBlue",
  noLabel = "noLabel",
}

interface ButtonProps extends SFC {
  /**
   * Button contents
   */
  label?: string;
  /**
   * Custom className property, to override styles use !important or @styles
   */
  className?: string;
  /**
   * Prestyled variants
   */
  variant?: keyof typeof Variants;
  /**
   * Active
   */
  active?: boolean;
  /**
   * Button type
   */
  type?: "submit" | "reset" | "button";
  /**
   * Changes button width
   */
  width?: string | number;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Icon
   */
  icon?: IconType;
  /**
   * Custom  Icon className property, to override styles use !important or @styles
   */
  iconClassName?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const tailwind = {
  root: "flex items-center select-none justify-center text-center dark:text-dark-100 text-slate-800 font-bold tracking-wider relative overflow-hidden transition-all duration-300 whitespace-nowrap",
  variant: {
    primary:
      "rounded-full dark:text-dark-50 text-dark-600/70 text-white px-3 py-1 bg-light-400 dark:bg-dark-400 shadow-inner shadow-dark-300/20 hover:-translate-y-1 active:scale-95 hover:bg-dark-400/40 hover:dark:bg-dark-400/80 active:translate-y-0",
    primaryBlue:
      "rounded-full text-white px-3 py-1 bg-special-blue shadow-inner shadow-dark-300/20 hover:-translate-y-1 active:scale-95 hover:bg-special-blue/70 active:translate-y-0",
    noLabel: "",
  },
};

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className = "",
        variant = Variants.primary,
        active,
        icon: Icon,
        iconClassName = "h-5 w-5",
        width,
        loading = false,
        disabled = false,
        // style = {},
        label,
        ...rest
      },
      buttonRef
    ) => {
      return (
        <button
          aria-pressed={active}
          data-variant={variant}
          ref={buttonRef}
          className={[tailwind.root, tailwind.variant[variant], className].join(
            " "
          )} //and trim
          disabled={disabled}
          style={{
            width,
            // ...style,
          }}
          {...rest}
        >
          {Icon &&
            React.createElement(Icon, {
              className: iconClassName,
            })}
          {label}
          {loading && <i className="m-0 flex pl-2">{/* <LoadingDots /> */}</i>}
        </button>
      );
    }
  )
);
