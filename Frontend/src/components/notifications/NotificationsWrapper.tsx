import React from "react";
import { useNotifications } from "../../contexts/NotificationContext";
import { AnimatePresence } from "framer-motion";
import NotificationCard from "./NotificationCard";

const NotificationsWrapper: React.FC = () => {
  const { notifications } = useNotifications();

  return (
    <div className="absolute bottom-20 right-0 z-[999] w-3/5">
      <AnimatePresence>
        {notifications.map((notification) => {
          return (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};
export default NotificationsWrapper;
