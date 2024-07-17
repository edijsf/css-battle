import React from "react";

interface Props extends SFC { }
const Footer = ({ className = "" }: Props) => {
  return (
    <div
      className={` ${className} w-full h-8 px-2 md:px-5 dark:bg-dark-600 bg-light-600 flex flex-row font-bold text-xs  items-center border-t dark:border-dark-400`}
    >
      {/* <div className="flex flex-1 px-5 items-center dark:text-dark-300 text-dark-400/60 whitespace-nowrap">
        @ 2024 CGI CSSBattle
      </div> */}
      <h6 className="flex flex-1 items-center dark:text-dark-300 text-dark-400/60 whitespace-nowrap">
        @ 2024 CGI <span className="max-sm:hidden ml-2"> CSSBattle</span>
      </h6>
      <div className=" flex items-center dark:text-dark-50 text-slate-800 h-full hover:underline cursor-pointer">
        Just use your brain - don't be dump!
      </div>

    </div>
  );
};

export default Footer;
