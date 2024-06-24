import React from "react";

interface Props extends SFC {}
const TargetSponsor = ({ children, className = "" }: Props) => {
  return (
    <div className="">
      <div className="font-black text-theme-200 flex flex-row items-center gap-3 mt-6">
        <span className="whitespace-nowrap">Target Sponsor</span>
        <hr className="bg-theme-400 w-full h-0.5 border-0" />
      </div>
      <div className="text-theme-300/50 mt-4">Davids Rjabovs</div>
      <div className="text-theme-300/50">Best DEV Ever!</div>
    </div>
  );
};

export default TargetSponsor;

//  ${active && "bg-theme-400"}
