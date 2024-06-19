import React from "react";
import { useNotifications } from "../../../../contexts/NotificationContext";
import { AnimatePresence, motion } from "framer-motion";

const NotificationAlert: React.FC = () => {
  const { notifications } = useNotifications();

  const typeToBgColor: { [key: string]: string } = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div className="absolute bottom-20 right-0 z-[999] w-2/5">
      <AnimatePresence>
        {notifications.map((notification) => (
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
            className={`m-2 rounded-md bg-theme-600 p-2 text-white`}
          >
            <div className="text-sm">
              Color {notification.content} copied to clipboard
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
export default NotificationAlert;
