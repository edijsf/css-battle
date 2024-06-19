import React from "react";
import ColorCard from "./ColorCard";

interface Props extends SFC {
  colors: string[];
}

const ColorPalete = ({ colors }: Props) => {
  return (
    <div>
      <div className="font-black text-theme-200">Colors</div>
      <div className="w-full flex flex-row flex-wrap gap-2 mt-3">
        {colors.map((color, index) => (
          <div key={index}>
            <ColorCard onClick={() => navigator.clipboard.writeText(color)}>
              <ColorCard.ColorBubble color={color} />
              <ColorCard.ColorHex hex={color} />
            </ColorCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalete;
