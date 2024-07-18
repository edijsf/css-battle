import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Button } from "../ui/button/Button";
import CGI from '/cgi-logo.svg'
import { useAuthContext } from "../contexts/AuthContext";

interface Props extends SFC { }


const AdminSingUp = ({ }: Props) => {
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
        <div className="flex-col gap-5 flex rounded-lg dark:bg-dark-600 bg-light-600 w-1/3 h-fit items-center justify-center py-10 shadow-lg dark:shadow-inner dark:shadow-dark-300/30">
          <input
            onChange={e => setUsername(e.target.value)}
            placeholder="Your username"
            className="h-10 px-3 text-center whitespace-nowrap focus:!border-special-gold focus:border-2 rounded-full outline-none z-50 w-2/3 text-slate-800 dark:text-dark-50 dark:bg-dark-700 border border-light-400 dark:border-dark-400"
          />
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="h-10 px-3 text-center whitespace-nowrap focus:!border-special-gold focus:border-2 rounded-full outline-none z-50 w-2/3 text-slate-800 dark:text-dark-50 dark:bg-dark-700 border border-light-400 dark:border-dark-400"
          />

          <Button label="Submit" variant="primaryBlue" className="!px-14" onClick={submit} />

        </div>

        <div className="bg-slate-200">username: {user?.username}</div>
      </div>

      <Footer />
    </div >
  );
};

export default AdminSingUp;
