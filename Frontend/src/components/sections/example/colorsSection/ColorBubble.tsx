import React from "react";

export interface ColorBubbleProps extends SFC {
  color: string;
}

const ColorBubble = ({ color }: ColorBubbleProps) => {
  return (
    <div
      className="w-5 h-5 border dark:border-black border-dark-400 rounded-full"
      style={{
        backgroundColor: color,
      }}
    />
  );
};

export default ColorBubble;
