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
  const [hovered, setHovered] = useState(false);

  const refCompare = useRef<HTMLDivElement>(null);

  const onSlide = (event: React.MouseEvent<HTMLDivElement>) => {
    if (height > 300 || width > 400) {
      // setHeight(300);
      // setWidth(400);
      setHovered(false);
    }
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
    if (shiftPressed) {
      setHeight(300);
    } else {
      setWidth(400);
    }
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
    if (shiftPressed) {
      if (height > 300 || height < 0) {
        setHovered(false);
        setHeight(300);
        setWidth(400);
      }
      if (height < 300 && height > 0) {
        setHovered(true);
      }
    } else {
      if (width > 400 || width < 0) {
        setHovered(false);
        setHeight(300);
        setWidth(400);
      }
      if (width < 400 && width > 0) {
        setHovered(true);
      }
    }
    console.log("im here");
  }, [width, height]);

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
    <div
      className={`compare overflow-hidden ${
        shiftPressed && hovered && "cursor-row-resize"
      } ${!shiftPressed && hovered && "cursor-col-resize"}`}
      onMouseMove={onSlide}
      onMouseLeave={onMouseLeave}
      onDragStart={(event) => event.preventDefault()}
      onMouseEnter={() => setHovered(true)}
    >
      <div
        className={`compare__visible overflow-hidden z-10 ${
          hovered && "opacity-95"
        }`}
        style={{
          width: width > 400 ? 400 : shiftPressed && hovered ? "100%" : width,
          height:
            height > 300 ? 300 : shiftPressed && hovered ? height : "100%",
          boxShadow: drawRedLine(shiftPressed ? height : width),
        }}
        ref={refCompare}
      >
        {element}
      </div>
      <div className="absolute top-5 left-5">{overlay}</div>
      <div className="w-[440px] h-[324px] bg-theme-500/10 absolute top-5 left-0 z-30 flex">
        <div
          className={`h-6 w-8 bg-theme-cgi absolute z-50 rounded-md flex items-center justify-center -bottom-4 text-sm font-bold
         
          ${!hovered && "hidden"}`}
          style={{
            right: width > 400 ? 0 : shiftPressed ? 0 : 440 - width - 40,
            bottom: height > 300 ? 12 : shiftPressed ? 324 - height - 12 : 0,
          }}
        >
          {shiftPressed ? height : width}
        </div>
      </div>
    </div>
  );
};
