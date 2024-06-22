import React from "react";
import { motion } from "framer-motion";
import UserCard from "./leaderboard/UserCard";

interface Props extends SFC {}

const users = [
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
  {
    username: "davidsrj",
    score: 98.22,
  },
];

const GlobalStats = ({}: Props) => {
  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-full w-full">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-theme-200 gap-2 flex flex-col"
      >
        {users.map((user, index) => {
          return (
            <motion.div variants={item}>
              <UserCard key={index} user={user} index={index + 1} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default GlobalStats;
