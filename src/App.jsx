import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import MailBody from "./pages/MailBody";
import SendMail from "./pages/SendMail";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Header onClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex">
          {sidebarOpen && <Sidebar />}
          <div className={sidebarOpen ? "w-[85vw]" : "w-full"}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mailbody/:id" element={<MailBody />} />
              <Route path="/sendmail" element={<SendMail />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
