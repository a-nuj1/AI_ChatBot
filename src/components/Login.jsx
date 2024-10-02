import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Both fields are required");
      return;
    }
    if (username === "user123" && password === "pass123") {
      setIsAuthenticated(true);
    } else {
      setError("Invalid username or password");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/chatbot" />;
  }

  return (
    <div className="">
      {<Navigate to={"/"} replace={true} />}
      <main className="w-full h-screen flex self-center place-content-center place-items-center">
        <div className="w-100 text-gray-600 space-y-10 p-16 shadow-xl border rounded-xl">
          <div className="text-center">
            <div className="mt-2">
              <h3 className="text-gray-900 text-xl font-semibold sm:text-2xl">
                Login to use AI ChatBot
              </h3>
            </div>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-sm text-gray-900 font-bold">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
              />
            </div>
            <div>
              <label className="text-sm text-gray-900 font-bold">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
              />
            </div>
            {error && <p className="error-message text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full px-3 py-3 text-white bg-indigo-600 rounded-lg"
            >
              Login
            </button>

          </form>
        </div>
      </main>
    </div>
  );
};



export default Login;
