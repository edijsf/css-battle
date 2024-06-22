import React, { useRef, useState, useEffect } from "react";
import "./styles/Compare.css";

interface ICompareProps {
  element: React.ReactNode;
  overlay: React.ReactNode;
}
export const Compare: React.FC<ICompareProps> = ({ element, overlay }) => {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);
  const [shiftPressed, setShiftPressed] = useState(false);

  const refCompare = useRef<HTMLDivElement>(null);

  const onSlide = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shiftPressed) {
      const cursorPosition =
        event.pageY - (refCompare.current?.getBoundingClientRect()?.top ?? 0);
      setHeight(cursorPosition);
    } else {
      const cursorPosition =
        event.pageX - (refCompare.current?.getBoundingClientRect()?.left ?? 0);
      setWidth(cursorPosition);
    }
  };

  const onMouseLeave = () => {
    if (shiftPressed) {
      setHeight(300);
    } else {
      setWidth(400);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.shiftKey && !shiftPressed) {
      setShiftPressed(true);
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (!event.shiftKey && shiftPressed) {
      setShiftPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [shiftPressed]);

  const drawRedLine = (size: number) => {
    if (shiftPressed) {
      return size === 300 ? "" : "red 0px 2px 0px";
    } else {
      return size === 400 ? "" : "red 2px 0px 0px";
    }
  };

  return (
    <div
      className={`compare ${
        shiftPressed ? "cursor-row-resize" : "cursor-col-resize"
      }`}
      onMouseMove={onSlide}
      onMouseLeave={onMouseLeave}
      onDragStart={(event) => event.preventDefault()}
    >
      <div
        className="compare__visible relative"
        style={{
          width: shiftPressed ? "100%" : width,
          height: shiftPressed ? height : "100%",
          boxShadow: drawRedLine(shiftPressed ? height : width),
        }}
        ref={refCompare}
      >
        {element}
      </div>
      <div className="absolute top-5 left-5">{overlay}</div>
    </div>
  );
};
