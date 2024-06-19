import React from "react";

export interface ColorHexProps extends SFC {
  hex: string;
}

const ColorHex = ({ hex }: ColorHexProps) => {
  return (
    <div className="text-theme-300 font-bold uppercase text-xs">{hex}</div>
  );
};

export default ColorHex;
