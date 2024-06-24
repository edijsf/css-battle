import React from "react";
import ColorPalete from "./colorsSection/ColorPalete";

interface Props extends SFC {
  colors: string[];
}

const ColorsSection = ({ colors }: Props) => {
  return (
    <div>
      <div className="font-black text-theme-200 flex flex-row items-center gap-3 mt-6">
        <span>Colors</span>
        <hr className="bg-theme-400 w-full h-0.5 border-0" />
      </div>

      <ColorPalete colors={colors} />
    </div>
  );
};

export default ColorsSection;
