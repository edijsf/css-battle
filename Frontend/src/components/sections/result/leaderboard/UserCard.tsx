import React from "react";
import { motion } from "framer-motion";
interface Props extends SFC {
  user: {
    username: string;
    score: number;
  };
  index: number;
}

const UserCard = ({ user, index }: Props) => {
  return (
    <motion.div className=" w-full">
      <div className="w-full rounded-lg font-mono p-2 border dark:border-dark-400 border-light-400 h-8 flex justify-between items-center">
        <div className="flex flex-row ">
          <div className="w-10 font-mono dark:text-dark-100 text-dark-600">{index}</div>
          <div className="font-bold dark:text-dark-300/60 text-dark-300">{user.username}</div>
        </div>

        <div className="text-dark-gold/80 font-semibold dark:text-dark-100 text-dark-600">{user.score}%</div>
      </div>
    </motion.div>
  );
};

export default UserCard;
