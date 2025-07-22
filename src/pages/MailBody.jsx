import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const MailBody = ({ sidebarOpen }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { emails } = useContext(AppContext);
  const email = emails.find((e) => e.id === parseInt(id));

  if (!email) return <div className="p-4">Email not found.</div>;

  return (
    <div
      className={`p-8 ${
        sidebarOpen ? "w-[85vw]" : "w-full"
      } bg-white rounded shadow mx-auto`}>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
        Back
      </button>
      <h1 className="text-2xl font-bold mb-2">{email.subject}</h1>
      <div className="mb-2 text-gray-600">
        From: <span className="font-semibold">{email.from}</span>
      </div>
      <div className="mb-2 text-gray-600">Date: {email.date}</div>
      <div className="mt-4 text-lg">{email.body}</div>
    </div>
  );
};

export default MailBody;
