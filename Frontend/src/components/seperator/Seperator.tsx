import React from "react";

interface Props extends SFC {}
const Seperator = ({ children, className = "" }: Props) => {
  return (
    <div
      className={` ${className} font-black text-theme-200 flex flex-row items-center gap-3 mt-6`}
    >
      <span className="whitespace-nowrap">{children}</span>
      <hr className="bg-theme-400 w-full h-0.5 border-0" />
    </div>
  );
};

export default Seperator;
