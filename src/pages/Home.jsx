import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const { emails, status, setEmails } = useContext(AppContext);

  let filteredEmails = [];
  if (status === "inbox") {
    filteredEmails = emails.filter((email) => email.inbox);
  } else if (status === "starred") {
    filteredEmails = emails.filter((email) => email.starred);
  } else if (status === "important") {
    filteredEmails = emails.filter((email) => email.important);
  } else if (status === "sent") {
    filteredEmails = emails.filter((email) => email.sent);
  } else {
    filteredEmails = emails;
  }

  const handleStar = (id) => {
    setEmails(
      emails.map((email) =>
        email.id === id ? { ...email, starred: !email.starred } : email
      )
    );
  };

  const handleImportant = (id) => {
    setEmails(
      emails.map((email) =>
        email.id === id ? { ...email, important: !email.important } : email
      )
    );
  };

  return (
    <>
      <div>
        <div className="border flex gap-30 px-10 py-5 font-bold text-2xl bg-white">
          <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold ">
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
              <div className="flex gap-6 p-2 m-2 bg-gray-200 rounded-md hover:bg-gray-300 items-center">
                <button
                  className={`w-8 h-8 flex items-center cursor-pointer justify-center rounded-full mr-2 ${
                    email.starred
                      ? "bg-yellow-500 text-black"
                      : "bg-white text-black"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStar(email.id);
                  }}
                  title="Star">
                  ★
                </button>

                <button
                  className={`w-8 h-8 flex items-center cursor-pointer justify-center rounded-full mr-2 ${
                    email.important
                      ? "bg-green-500 text-black"
                      : "bg-white text-black"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImportant(email.id);
                  }}
                  title="Important">
                  <span className="text-xl">&#10071;</span>
                </button>

                <div
                  className="flex w-12/13"
                  onClick={() => {
                    navigate(`/mailbody/${email.id}`);
                  }}>
                  <span className="w-1/4 text-black font-medium truncate">
                    {email.from}
                  </span>
                  <span className="w-2/4 text-black truncate">
                    {email.subject}
                  </span>
                  <span className="w-1/4 text-gray-600 text-right">
                    {email.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
