import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const SendMail = () => {
  const { sendMail ,setStatus } = useContext(AppContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    to: "",
    subject: "",
    body: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail(form);
    setStatus("sent");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">

        <h2 className="text-2xl font-bold mb-6">Compose Mail</h2>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
        Back
      </button>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">To</label>
          <input
            name="to"
            value={form.to}
            onChange={handleChange}
            placeholder="Recipient's email"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Body</label>
          <textarea
            name="body"
            value={form.body}
            onChange={handleChange}
            placeholder="Body"
            required
            className="w-full p-2 border rounded min-h-[200px]"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded font-semibold">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
