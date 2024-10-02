import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPatchQuestion } from "react-icons/bs";
import { BiSkipNextCircle } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
const ChatBotScreen = () => {
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState("Marketing");
  const [inputValue, setInputValue] = useState("");

  // Logout function
  const handleLogout = () => {
    navigate("/");
  };

  // Placeholder based on dropdown selection
  const getPlaceholderText = () => {
    if (selectedDepartment === "Sales") return "Enter your sales query here...";
    return "Enter your marketing query here...";
  };

  return (
<div className="w-[100vw] h-[100vh] flex flex-col bg-gray-900 text-white">
  {/* Top Navbar */}
  <div className="flex justify-between items-center p-4 ">
    {/* Dropdown for department selection */}
    <div className="relative">
      <select
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(e.target.value)}
        className="bg-gray-800 p-3  rounded-xl text-white"
      >
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
      </select>
    </div>

    {/* Logout button */}
    <button onClick={handleLogout} className="flex items-center text-green-400 hover:text-green-600">
      <IoLogOut size={24} className="mr-2" />
      Logout
    </button>
  </div>

  {/* Chat area */}
  <div className="flex-grow flex items-center justify-center">
    {/* Placeholder for chat messages */}
    <p className="text-gray-400">Chat messages will appear here...</p>
  </div>

  {/* Input Box for typing */}
  <div className="w-full p-4  flex items-center">
    <div className="relative flex items-center w-1/2 mx-auto">
      {/* Attach File Icon */}
      <button className="absolute left-3 mb-10 text-green-400 hover:text-green-600">
        <BsPatchQuestion size={24} />
      </button>

      {/* Text input */}
      <input
        type="text"
        placeholder={getPlaceholderText()}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-3 pl-12 pr-12 mb-10 rounded-full bg-gray-700 text-white outline-none placeholder:text-green-400"
      />

      {/* Submit arrow icon */}
      <button className="absolute right-3 mb-10 p-2 rounded-full text-green-400 hover:text-green-600">
        <BiSkipNextCircle size={24} />
      </button>
    </div>
  </div>
</div>



  );
};

export default ChatBotScreen;
