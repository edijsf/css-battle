import React from "react";

interface Props extends SFC {}
const Footer = ({ className = "" }: Props) => {
  return (
    <div
      className={` ${className} w-full h-8 bg-theme-800 flex flex-row items-center border-t border-theme-400`}
    >
      <div className="flex flex-1 font-bold px-5 items-center text-xs text-theme-300">
        @ 2024 CGI CSSBattle
      </div>
      <div className="font-bold text-xs px-5 flex items-center text-theme-50 h-full hover:underline cursor-pointer">
        Just play - don't be dump!
      </div>
    </div>
  );
};

export default Footer;
