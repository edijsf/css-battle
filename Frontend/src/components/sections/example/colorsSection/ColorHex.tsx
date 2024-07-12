import React from "react";

export interface ColorHexProps extends SFC {
  hex: string;
}

const ColorHex = ({ hex }: ColorHexProps) => {
  return (
    <div className=" dark:text-dark-300 text-dark-400 font-bold uppercase text-xs">
      {hex}
    </div>
  );
};

export default ColorHex;
