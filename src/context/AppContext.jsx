import React, { createContext, useState } from "react";
export const AppContext = createContext();

const AppProvider = (props) => {
  const [status, setStatus] = useState("inbox");
  const [emails, setEmails] = useState([
    {
      id: 1,
      status: "normal",
      from: "Amazon",
      subject: "Welcome to Gmail Clone",
      body: "This is a sample email body.",
      date: "2025-07-20",
    },
    {
      id: 2,
      status: "normal",
      from: "Flipkart",
      subject: "Your Order Has Shipped",
      body: "Your order is on the way!",
      date: "2025-07-19",
    },
    {
      id: 3,
      status: "starred",
      from: "GitHub",
      subject: "Repository Starred",
      body: "You have starred a new repository.",
      date: "2025-07-18",
    },
    {
      id: 4,
      status: "important",
      from: "Google",
      subject: "Security Alert",
      body: "New sign-in to your account.",
      date: "2025-07-17",
    },
    {
      id: 5,
      status: "sent",
      from: "You",
      subject: "Meeting Confirmation",
      body: "Looking forward to our meeting.",
      date: "2025-07-16",
    },
    {
      id: 6,
      status: "starred",
      from: "LinkedIn",
      subject: "Job Opportunity",
      body: "A new job matches your profile.",
      date: "2025-07-15",
    },
    {
      id: 7,
      status: "important",
      from: "Bank",
      subject: "Account Statement",
      body: "Your monthly statement is ready.",
      date: "2025-07-14",
    },
    {
      id: 8,
      status: "sent",
      from: "You",
      subject: "Follow Up",
      body: "Just checking in on our last conversation.",
      date: "2025-07-13",
    },
    {
      id: 9,
      status: "normal",
      from: "Netflix",
      subject: "Subscription Update",
      body: "Your subscription has been renewed.",
      date: "2025-07-12",
    },
    {
      id: 10,
      status: "normal",
      from: "Spotify",
      subject: "Playlist Recommendation",
      body: "Check out this new playlist!",
      date: "2025-07-11",
    },
  ]);

  const sendMail = ({ to, subject, body }) => {
    setEmails((prev) => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        status: "sent",
        from:to,
        subject,
        body,
        date: new Date().toISOString().slice(0, 10),
      },
    ]);
  };

  return (
    <AppContext.Provider value={{ emails, status, setStatus, sendMail }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
