import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Button } from "../ui/button/Button";
import CGI from '/cgi-logo.svg'

interface Props extends SFC { }


const AdminPanel = ({ }: Props) => {

  return (
    <div className="h-screen flex flex-1 flex-col w-screen font-mono dark:bg-dark-800 bg-light-800">
      <Header />

      <Footer />
    </div >
  );
};

export default AdminPanel;
