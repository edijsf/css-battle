import React, { Children } from "react";
import ColorBubble, { ColorBubbleProps } from "./ColorBubble";
import ColorHex, { ColorHexProps } from "./ColorHex";

export interface Props extends SFC {
  onClick: () => void;
}

type DotNotation = {
  ColorBubble: React.FC<ColorBubbleProps>;
  ColorHex: React.FC<ColorHexProps>;
};

const ColorCard: React.FC<Props> & DotNotation = ({
  className = "",
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row w-min gap-3 dark:bg-dark-400 bg-light-400 rounded-full py-1 pl-2 pr-3 items-center justify-between hover:scale-105 active:scale-90 duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default ColorCard;

ColorCard.ColorBubble = ColorBubble;
ColorCard.ColorHex = ColorHex;
