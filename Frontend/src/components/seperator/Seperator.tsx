import React from "react";

interface Props extends SFC {}
const Seperator = ({ children, className = "" }: Props) => {
  return (
    <div
      className={` ${className} font-black text-theme-200 flex flex-row items-center gap-3 mt-6`}
    >
      <span className="whitespace-nowrap dark:text-dark-50 text-dark-600">
        {children}
      </span>
      <hr className="dark:bg-dark-400 bg-dark-300/50 w-full h-[1px] border-0" />
    </div>
  );
};

export default Seperator;
