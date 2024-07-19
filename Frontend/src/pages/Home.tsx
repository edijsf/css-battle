import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Battle from "/battle.svg";
import Header from "../components/header/Header";
import GameCard from "../components/cards/GameCard";

const GAMES = [
  {
    id: 1,
    title: "First Game",
    img: "",
  },
  {
    id: 2,
    title: "Second Game",
    img: "",
  },
  {
    id: 3,
    title: "Third Game",
    img: "",
  },
  {
    id: 4,
    title: "Fourth Game",
    img: "",
  },
  {
    id: 5,
    title: "Fifth Game",
    img: "",
  },
  {
    id: 6,
    title: "Sixth Game",
    img: "",
  },
  {
    id: 7,
    title: "Fourth Game",
    img: "",
  },
  {
    id: 8,
    title: "Eighth Game",
    img: "",
  },
  {
    id: 9,
    title: "Ninth Game",
    img: "",
  },
];

interface Props extends SFC { }

interface Forecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

const Home = ({ }: Props) => {

  const [forecasts, setForecasts] = useState<Forecast[]>();

  useEffect(() => {
    populateWeatherData();
  }, []);

  async function populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    setForecasts(data);
  }

  const contents = forecasts === undefined
    ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
    : <table className="table table-striped" aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {forecasts.map(forecast =>
          <tr key={forecast.date}>
            <td>{forecast.date}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
          </tr>
        )}
      </tbody>
    </table>;


  return (
    <div className="h-screen flex flex-1 flex-col w-screen font-mono dark:bg-dark-800 bg-light-800">
      <Header />
      <div className="px-10 flex flex-1 flex-col py-10">
        <div className="flex flex-row items-center justify-start w-full gap-3">
          <div className="dark:bg-dark-400 bg-light-400 p-3 rounded-full">
            <img src={Battle} alt="battle img" className="" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-xl dark:text-dark-50 text-slate-800">
              Games available
            </h2>
            <div className="text-dark-300">
              Compete with players around the world in this nail-biting CSS
              Battle
            </div>
          </div>
        </div>

        <div className="px-0 mt-5 dark:bg-dark-600 bg-light-600 dark:shadow-inner shadow-lg dark:shadow-dark-300/10 w-full rounded-xl overflow-hidden">
          <div className="grid px-10 grid-flow-col overflow-x-auto gap-5 w-full scrollbar dark:scrollbar-thumb-dark-300/50 scrollbar-thumb-dark-300 dark:scrollbar-track-dark-400 scrollbar-track-light-400">
            {GAMES.map((game) => {
              return <GameCard game={game} />;
            })}
          </div>
        </div>

        <div className="text-dark-50">
          <h1 id="tabelLabel">Weather forecast</h1>
          <p>This component demonstrates fetching data from the server.</p>
          {contents}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Home;
