import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import MailBody from "./pages/MailBody.jsx";
import NewMail from "./pages/NewMail.jsx";

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
              <Route
                path="/mailbody/:id"
                element={<MailBody sidebarOpen={sidebarOpen} />}
              />
              <Route path="/newmail" element={<NewMail />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
