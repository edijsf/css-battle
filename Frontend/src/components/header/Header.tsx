import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button/Button";
import { useThemeContext } from "../../contexts/ThemeWrapper";
import { Toggle } from "../../ui/toggle/Toggle";
import { HiSun } from "react-icons/hi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import LiveCount from "../liveCount/LiveCount";

interface Props extends SFC { }
const Header = ({ className = "" }: Props) => {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <div
      className={` ${className} flex flex-row justify-between w-full bg-light-600 dark:bg-dark-600 px-10`}
    >
      <div className="py-2">
        <Link to="/">
          <h1 className="font-black text-3xl text-slate-800 dark:text-dark-50">
            CGI CSS Battleground
          </h1>
        </Link>
      </div>
      <div className="flex gap-5 h-full items-center">
        <LiveCount />

        <Toggle checked={isDark} onClick={toggleTheme}>
          <Toggle.Box className="">
            <Toggle.Slider
              className={` ${isDark ? "bg-dark-100" : "bg-yellow-500"}`}
            >
              {({ checked }) => {
                return checked ? (
                  <BsFillMoonStarsFill className="text-[#5B4AA2] h-3 w-3" />
                ) : (
                  <HiSun className="text-lg text-white h-4 w-4" />
                );
              }}
            </Toggle.Slider>
          </Toggle.Box>

        </Toggle>

        <Link to="/login">
          <Button label="Sign In/Sign Up" variant="primary" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
