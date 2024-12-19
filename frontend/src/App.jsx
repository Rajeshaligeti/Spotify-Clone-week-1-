// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Signup from "./assets/Signup.jsx";
import Signin from "./assets/Signin.jsx";

const App = () => {
  return (
    <div>
      <h1>Music Player</h1>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;

