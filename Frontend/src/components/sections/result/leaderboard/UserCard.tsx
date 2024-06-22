import React from "react";
import { motion } from "framer-motion";
interface Props extends SFC {}

const UserCard = ({}: Props) => {
  return (
    <motion.div className=" w-full">
      <div className="w-full rounded-lg p-2 bg-theme-400 h-8 flex justify-between items-center">
        <div>davidsrj</div>
        <div>332</div>
      </div>
    </motion.div>
  );
};

export default UserCard;
