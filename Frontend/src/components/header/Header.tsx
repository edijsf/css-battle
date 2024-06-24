import React from "react";

interface Props extends SFC {}
const Header = ({ className = "" }: Props) => {
  return (
    <div className={` ${className} w-full items-center`}>
      <div className="py-2 px-5">
        <h1 className="font-black text-3xl">CGI CSS Battleground</h1>
      </div>
      <div className="bg-theme-400 border-t border-theme-300/15 h-6 flex flex-row">
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
    </div>
  );
};

export default Header;
