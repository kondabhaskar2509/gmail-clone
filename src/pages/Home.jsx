import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const { emails, status} = useContext(AppContext);

  let filteredEmails = [];
  if (status === "inbox") {
    filteredEmails = emails.filter((email) => email.status !== "sent");
  } else {
    filteredEmails = emails.filter((email) => email.status === status);
  }


  return (
    <>
      <div>
        <div className="border flex gap-30 px-10 py-5 font-bold text-2xl bg-white">
          <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold">
            Primary
          </button>
          <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold">
            Promotions
          </button>
          <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold">
            Social
          </button>
          <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold">
            Updates
          </button>
        </div>
        <div>
          <div className="flex gap-6 p-2 m-2 bg-gray-400 rounded-md font-semibold text-lg">
            <span className="w-10"></span>
            <span className="w-10"></span>
            <span className="w-1/4">From</span>
            <span className="w-2/4">Subject</span>
            <span className="w-1/4 text-right">Date</span>
          </div>

          {filteredEmails.map((email) => (
            <div key={email.id} className="text-black">
              <div
                className="flex gap-6 p-2 m-2 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer items-center"
              
                onClick={(e) => {
                  if (
                    e.target.tagName === "BUTTON" ||
                    e.target.tagName === "SPAN"
                  )
                    return;
                  navigate(`/mailbody/${email.id}`);
                }}>


                <button
                  className={`w-8 h-8 flex items-center justify-center rounded-full mr-2 ${
                    email.status === "starred" ? "bg-yellow-500 text-black" : "bg-white text-black"
                  }`}
                  onClick={() => {email.status = "starred"}}
                  title="Star"
                >
                  ★
                </button>

                <button
                  className={`w-8 h-8 flex items-center justify-center rounded-full mr-2 ${
                    email.status === "important" ? "bg-green-500 text-black" : "bg-white text-black"
                  }`}
                  onClick={() => {email.status = "important"}}
                  title="Important">
                  <span className="text-xl">&#10071;</span>
                </button>
                <span className="w-1/4 text-black font-medium truncate">{email.from}</span>
                <span className="w-2/4 text-black truncate">{email.subject}</span>
                <span className="w-1/4 text-gray-600 text-right">{email.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
