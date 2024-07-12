import React from "react";
import { Link } from "react-router-dom";

interface Props extends SFC {
  game: {
    id: number;
    title: string;
    img: string;
  };
}

const GameCard = ({ className = "", game }: Props) => {
  const { id, title, img } = game;

  return (
    <div
      className={` ${className} border dark:border-dark-400 border-light-400 p-3 rounded-xl hover:scale-105 duration-300 mb-10 mt-10`}
    >
      <Link to={`/play/${id}`}>
        <div className="bg-special-blue h-48 w-60 rounded-lg relative cursor-pointer ">
          <div className="absolute right-1 top-1 dark:bg-dark-600 bg-light-600 px-2 dark:text-dark-100 text-slate-800 rounded-md font-bold text-sm">
            #{id}
          </div>
        </div>
      </Link>

      <div className="font-bold dark:text-dark-300 text-slate-800 mt-3 px-3">
        {title}
      </div>
    </div>
  );
};

export default GameCard;
