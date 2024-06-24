import React from "react";

interface Props extends SFC {}
const Header = ({ className = "" }: Props) => {
  return (
    <div
      className={` ${className} w-full h-8 bg-theme-400 flex flex-row items-center border-t border-theme-300/15`}
    >
      <div className="flex flex-1 font-bold px-5 items-center text-xs">
        Editor
      </div>
      <div className="w-[440px] font-bold text-xs px-5 border-l flex items-center border-theme-300/10 h-full">
        Code output
      </div>
      <div className="w-[440px] px-5 font-bold text-xs border-l flex items-center border-theme-300/10 h-full">
        Recreate this target
      </div>
    </div>
  );
};

export default Header;
