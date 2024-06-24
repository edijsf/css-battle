import React from "react";
import ColorPalete from "./colorsSection/ColorPalete";
import Seperator from "../../seperator/Seperator";

interface Props extends SFC {
  colors: string[];
}

const ColorsSection = ({ colors }: Props) => {
  return (
    <div>
      <Seperator>Colors</Seperator>

      <ColorPalete colors={colors} />
    </div>
  );
};

export default ColorsSection;
