// src/pages/Signin.js
import { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signin", { email, password });
      localStorage.setItem("token", response.data.token); // Save token to localStorage
      alert("Signin successful");
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  return (
    <div className="container">
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Signin;
