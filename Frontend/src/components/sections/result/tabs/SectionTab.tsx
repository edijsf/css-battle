import React from "react";

interface Props extends SFC {
  onClick?: () => void;
  active?: boolean;
}
const SectionTab = ({ children, className = "", onClick, active }: Props) => {
  return (
    <div
      className={`${className} 
     
      flex cursor-pointer flex-1 z-30 items-center justify-center text-sm rounded-full font-bold dark:text-dark-50 text-dark-400`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default SectionTab;

//  ${active && "bg-theme-400"}
