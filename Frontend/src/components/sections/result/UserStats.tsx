import React from "react";
import { motion } from "framer-motion";
interface Props extends SFC {}

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
      className="h-44 w-full bg-slate-500"
    >
      <div className="font-black text-theme-200">User</div>
    </motion.div>
  );
};

export default UserStats;
