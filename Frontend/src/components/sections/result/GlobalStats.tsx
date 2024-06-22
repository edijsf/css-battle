import React from "react";
import { motion } from "framer-motion";
import UserCard from "./leaderboard/UserCard";

interface Props extends SFC {}

const GlobalStats = ({}: Props) => {
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
      className="h-full w-full"
    >
      <div className="font-black text-theme-200 gap-2 flex flex-col">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard /> <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </motion.div>
  );
};

export default GlobalStats;
