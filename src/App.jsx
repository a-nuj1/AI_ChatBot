import './App.css'
import Login from './components/Login'
import ChatBotScreen from './components/chatBotScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chatbot" element={<ChatBotScreen />} />
      </Routes>
    </Router>
  );
}

export default App
