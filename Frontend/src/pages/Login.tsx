import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Button } from "../ui/button/Button";
import CGI from '/cgi-logo.svg'
import { useAuthContext } from "../contexts/AuthContext";

interface Props extends SFC { }

const Login = ({ }: Props) => {

  const { signin, user } = useAuthContext()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => {
    console.log({ username: username, password: password })
    signin({ username: username, password: password })
  }

  return (
    <div className="h-screen flex flex-1 flex-col w-screen font-mono dark:bg-dark-800 bg-light-800">
      <Header />
      <div className="h-full flex w-full items-center justify-center flex-col">
        <div className="w-full h-36 mb-16">

          <img src={CGI} alt="Info img" className="h-full w-full" />
        </div>
        <div className="flex-col flex rounded-lg dark:bg-dark-600 bg-light-600 w-1/3 gap-5 h-fit py-10 items-center justify-center px-10 shadow-lg dark:shadow-inner dark:shadow-dark-300/30">
          <input
            placeholder="Your username"
            onChange={e => setUsername(e.target.value)}
            className="h-10 px-3 whitespace-nowrap focus:!border-special-gold focus:border-2 outline-none z-50 w-full text-slate-800 dark:text-dark-50 rounded-full text-center dark:bg-dark-700 border border-light-400 dark:border-dark-400"
          />
          <input
            placeholder="Passwrod"
            type="password"
            onChange={e => setPassword(e.target.value)}
            className="h-10 px-3 whitespace-nowrap focus:!border-special-gold focus:border-2 outline-none z-50 w-full text-slate-800 dark:text-dark-50 rounded-full text-center dark:bg-dark-700 border border-light-400 dark:border-dark-400"
          />
          <Button
            label="Join"
            className="!px-20"
            variant="primaryBlue"
            onClick={submit}
          />
        </div>
        <div className="dark:bg-dark-700 bg-light-400/70 shadow-lg w-1/4 rounded-b-lg px-3 py-2 text-xs text-dark-400/50 dark:text-dark-300/50 text-center">
          <span className="font-bold dark:text-dark-300 text-dark-400/50">
            Usernames{" "}
          </span>
          containing{" "}
          <span className="underline dark:text-dark-300 text-dark-400/50 font-bold">
            offensive
          </span>{" "}
          or{" "}
          <span className="underline dark:text-dark-300 text-dark-400/50 font-bold">
            inappropriate
          </span>{" "}
          language may result in account suspension or banning.
        </div>
      </div>

      <Footer />
    </div >
  );
};

export default Login;
