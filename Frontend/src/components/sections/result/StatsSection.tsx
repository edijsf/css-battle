import React, { useState } from "react";
import UserStats from "./UserStats";
import GlobalStats from "./GlobalStats";
import SectionTab from "./tabs/SectionTab";
import { motion } from "framer-motion";

interface Props extends SFC {}

enum Sections {
  User = "User",
  Global = "Global",
}

const StatsSection = ({}: Props) => {
  const [section, setSection] = useState<keyof typeof Sections>(Sections.User);

  return (
    <div className="mt-8">
      <div className="w-full border border-theme-400 h-9 rounded-full flex items-center justify-center p-1">
        <div className="w-full flex flex-row relative h-full">
          <motion.div
            initial={{ x: section === Sections.User ? 0 : "100%" }}
            animate={{ x: section === Sections.User ? 0 : "100%" }}
            transition={{ duration: 0.3 }}
            className="bg-theme-400 w-1/2 rounded-full h-full absolute"
          ></motion.div>
          <SectionTab
            onClick={() => setSection(Sections.User)}
            active={section === Sections.User}
          >
            User
          </SectionTab>
          <SectionTab
            onClick={() => setSection(Sections.Global)}
            active={section === Sections.Global}
          >
            Global
          </SectionTab>
        </div>
      </div>

      <div className=" h-full w-full flex-auto mt-4">
        <div className=" flex ">
          {
            {
              User: <UserStats />,
              Global: <GlobalStats />,
            }[section]
          }
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
