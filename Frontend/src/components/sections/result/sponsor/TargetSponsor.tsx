import React from "react";
import Seperator from "../../../seperator/Seperator";

interface Props extends SFC {}
const TargetSponsor = ({ className = "" }: Props) => {
  return (
    <div className={` ${className}`}>
      <Seperator>Target Sponsor</Seperator>
      <div className="text-theme-300/50 mt-4">Davids Rjabovs</div>
      <div className="text-theme-300/50 font-bold">Best DEV Ever!</div>
      <div className="text-theme-300/50">
        For any inquiries call{" "}
        <span className="font-bold text-theme-300">911</span>
      </div>
    </div>
  );
};

export default TargetSponsor;
