import React, { useRef, useState, useEffect } from "react";

interface ICompareProps {
  element: React.ReactNode;
  overlay: React.ReactNode;
}
export const Compare: React.FC<ICompareProps> = ({ element, overlay }) => {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);
  const [shiftPressed, setShiftPressed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const refCompare = useRef<HTMLDivElement>(null);

  const onSlide = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shiftPressed) {
      const cursorPosition =
        event.pageY - (refCompare.current?.getBoundingClientRect()?.top ?? 0);
      setHeight(Math.round(cursorPosition));
    } else {
      const cursorPosition =
        event.pageX - (refCompare.current?.getBoundingClientRect()?.left ?? 0);
      setWidth(Math.round(cursorPosition));
    }
  };

  const onMouseLeave = () => {
    setHeight(300);
    setWidth(400);

    setHovered(false);
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
      return size === 300 || size === 0 ? "" : "red 0px 2px 0px";
    } else {
      return size == 400 || size == 0 ? "" : "red 2px 0px 0px";
    }
  };

  return (
    <div className={`w-full h-full`}>
      <div
        onMouseMove={onSlide}
        onMouseLeave={onMouseLeave}
        onDragStart={(event) => event.preventDefault()}
        onMouseEnter={() => setHovered(true)}
        className={`w-[400px] h-[300px] z-30 top-5 left-5 relative ${
          shiftPressed && hovered && "cursor-row-resize"
        } ${!shiftPressed && hovered && "cursor-col-resize"}`}
      >
        <div
          className={`pointer-events-none overflow-hidden z-[9999] ${
            hovered && "opacity-95"
          }`}
          style={{
            width: shiftPressed && hovered ? "100%" : width,
            height: shiftPressed && hovered ? height : "100%",
            boxShadow: drawRedLine(shiftPressed ? height : width),
          }}
          ref={refCompare}
        >
          {element}
        </div>
      </div>
      <div className="absolute top-5 left-5 z-10">{overlay}</div>
      <div
        className={`h-5 w-8 bg-theme-cgi pointer-events-none absolute z-50 rounded-md flex items-center justify-center -bottom-4 text-sm font-bold
         
          ${!hovered && "hidden"}`}
        style={{
          right: shiftPressed ? 0 : 440 - width - 40,
          bottom: shiftPressed ? 324 - height - 16 : 0,
        }}
      >
        {shiftPressed ? height : width}
      </div>
    </div>
  );
};
