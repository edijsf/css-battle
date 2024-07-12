import React from "react";

interface Props extends SFC {}
const HeaderHelper = ({}: Props) => {
  return (
    <div className="dark:bg-dark-400 bg-light-400 font-bold text-xs border-dark-300/20 border-t dark:border-dark-300/15 h-6 flex flex-row dark:text-dark-100 text-dark-400">
      <div className="flex flex-1 px-5 items-center">Editor</div>
      <div className="w-[440px] px-5 border-l flex items-center border-dark-300/10 h-full">
        Code output
      </div>
      <div className="w-[440px] px-5 border-l flex items-center border-dark-300/10 h-full">
        Recreate this target
      </div>
    </div>
  );
};

export default HeaderHelper;
