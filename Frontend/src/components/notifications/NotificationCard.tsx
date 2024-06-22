import React from "react";
import { Notification } from "../../contexts/NotificationContext";
import { motion } from "framer-motion";
import Info from "/info.svg";

interface Props extends SFC {
  notification: Notification;
}

const NotificationCard = ({ notification }: Props) => {
  return (
    <motion.div
      key={notification.id}
      initial={{ x: "150%" }}
      animate={{
        x: 0,
        transition: {
          duration: 0.5,
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      }}
      exit={{
        x: "150%",
        transition: {
          duration: 0.5,
          stiffness: 100,
        },
      }}
      className={`m-2 rounded-md gap-3 relative flex flex-row bg-theme-600 py-2 text-white`}
    >
      <img src={Info} alt="Star img" className="ml-2" />
      <div className="text-sm px-2">
        Color <span className="font-bold">{notification.content}</span> copied
        to clipboard
      </div>
      <motion.div
        className="h-1 bg-theme-500 w-full rounded-b-md absolute bottom-0"
        initial={{ width: "100%" }}
        whileInView={{ width: 0 }}
        transition={{
          duration: 3.2,
        }}
      ></motion.div>
    </motion.div>
  );
};
export default NotificationCard;
