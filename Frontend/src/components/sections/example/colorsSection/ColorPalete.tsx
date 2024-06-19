import React from "react";
import ColorCard from "./ColorCard";
import { useNotifications } from "../../../../contexts/NotificationContext";

interface Props extends SFC {
  colors: string[];
}

const ColorPalete = ({ colors }: Props) => {
  const { addNotification } = useNotifications();

  const selectColor = (color: string, id: number) => {
    navigator.clipboard.writeText(color);
    addNotification({ content: color, id: id });
  };
  return (
    <div>
      <div className="font-black text-theme-200">Colors</div>
      <div className="w-full flex flex-row flex-wrap gap-2 mt-3">
        {colors.map((color, index) => (
          <div key={index}>
            <ColorCard onClick={() => selectColor(color, index)}>
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
