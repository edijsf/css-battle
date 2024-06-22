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
      <div className="w-full rounded-lg  font-mono p-2 border border-theme-400 bg-theme-700 h-8 flex justify-between items-center">
        <div className="flex flex-row ">
          <div className="w-10 font-mono">{index}</div>
          <div className="font-bold text-theme-300/60">{user.username}</div>
        </div>

        <div className="text-theme-gold/80 font-semibold">{user.score}%</div>
      </div>
    </motion.div>
  );
};

export default UserCard;
