import React from "react";
import { motion } from "framer-motion";

interface Props extends SFC {}

const GlobalStats = ({}: Props) => {
  return (
    <motion.div
      initial={{ y: 10 }}
      whileInView={{ y: 0 }}
      transition={{
        duration: 0.1,
        type: "spring",
        damping: 15,
        stiffness: 500,
      }}
      className="h-44 w-full bg-amber-200"
    >
      <div className="font-black text-theme-200">Global</div>
    </motion.div>
  );
};

export default GlobalStats;
