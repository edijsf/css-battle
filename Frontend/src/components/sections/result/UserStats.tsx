import React from "react";
import { motion } from "framer-motion";
interface Props extends SFC {}
import Star from "/star.svg";
import Thunder from "/thunder.svg";

const UserStats = ({}: Props) => {
  return (
    <motion.div
      initial={{ y: 10 }}
      whileInView={{ y: 0 }}
      transition={{
        duration: 0.1,
        type: "spring",
        damping: 30,
        stiffness: 500,
      }}
      className="full w-full flex-row flex gap-2 pt-3"
    >
      <div className="flex-col relative p-2 flex flex-1 border dark:border-dark-400 border-dark-300 h-16 rounded-xl items-center justify-center">
        <div className="absolute -top-5 dark:bg-dark-600 bg-light-800 p-2">
          <img src={Star} alt="Star img" />
        </div>
        <div className="text-xl dark:text-dark-50 text-dark-400 font-bold">
          -
        </div>
        <div className="text-xs dark:text-dark-300/50 text-dark-400 font-bold">
          Last score
        </div>
      </div>
      <div className="flex-col relative p-2 flex flex-1 border dark:border-dark-400 border-dark-300 h-16 rounded-xl items-center justify-center">
        <div className="absolute -top-5 dark:bg-dark-600 bg-light-800 p-2">
          <img src={Thunder} alt="Thunder img" />
        </div>
        <div className="text-xl dark:text-dark-50 text-dark-400 font-bold">
          -
        </div>
        <div className="text-xs dark:text-dark-300/50 text-dark-400 font-bold">
          High score
        </div>
      </div>
    </motion.div>
  );
};

export default UserStats;
