import { useRef, useState } from "react";
import "./styles/Compare.css";

interface ICompareProps {
  element: React.ReactNode;
  overlay: React.ReactNode;
}
export const Compare: React.FC<ICompareProps> = ({ element, overlay }) => {
  const [width, setWidth] = useState(400);

  const refCompare = useRef<HTMLDivElement>(null);

  const onSlide = (event: React.MouseEvent<HTMLDivElement>) => {
    const cursorPosition =
      event.pageX - (refCompare.current?.getBoundingClientRect()?.left ?? 0);
    setWidth(cursorPosition);
  };

  const onMouseLeave = () => {
    setWidth(400);
  };

  return (
    <div
      className="compare"
      onMouseMove={onSlide}
      onMouseLeave={onMouseLeave}
      onDragStart={(event) => event.preventDefault()}
    >
      <div
        className="compare__visible"
        style={{
          width: width,
          boxShadow: width === 400 ? "" : "red 2px 0px 0px",
        }}
        ref={refCompare}
      >
        {element}
      </div>
      <div className="compare__overlay">{overlay}</div>
    </div>
  );
};
