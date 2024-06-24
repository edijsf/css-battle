import React from "react";
import Seperator from "../../../seperator/Seperator";

interface Props extends SFC {}
const TargetSponsor = ({ children, className = "" }: Props) => {
  return (
    <div className="">
      <Seperator>Target Sponsor</Seperator>
      <div className="text-theme-300/50 mt-4">Davids Rjabovs</div>
      <div className="text-theme-300/50">Best DEV Ever!</div>
    </div>
  );
};

export default TargetSponsor;
