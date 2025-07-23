import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Sidebar = () => {
  const { setStatus } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-300 w-[15vw] h-auto flex flex-col gap-5 items-center font-bold text-2xl p-5 ">
        <button
          className="border p-3 text-3xl rounded-2xl bg-blue-300"
          onClick={() => navigate("/sendmail")}>
          Compose
        </button>
        <button className="border p-2 rounded-xl" onClick={() => setStatus("inbox")}> Inbox</button>
        <button className="border p-2 rounded-xl " onClick={() => setStatus("starred")}> Starred</button>
        <button className="border p-2 rounded-xl" onClick={() => setStatus("important")}> Important</button>
        <button className="border p-2 rounded-xl" onClick={() => setStatus("sent")}> Sent</button>
      </div>
    </>
  );
};

export default Sidebar;
