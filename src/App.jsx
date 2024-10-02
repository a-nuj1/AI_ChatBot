import './App.css';
import Login from './components/Login';
import ChatBotScreen from './components/chatBotScreen';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from './components/AuthContext'; // Import AuthContext

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chatbot" element={<ProtectedRoute><ChatBotScreen /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// Created a ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default App;
