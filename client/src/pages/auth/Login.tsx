export {};
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components";

async function handleLogin(e) {
  e.preventDefault();
  let email, password;
  try {
    await axios.post(`/login`, { email, password });
    alert("Login successful");
  } catch (error) {}
  alert("Login failed");
}

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="flex flex-col p-4">
      <Header />
      <div className="flex flex-col p-8 mt-28">
        <h2 className="mb-4 text-3xl font-bold text-center">Login</h2>
        <form
          action=""
          onSubmit={handleLogin}
          className="flex flex-col max-w-2xl mx-auto space-x-4"
        >
          <input
            type="email"
            className=""
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className=""
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Login</button>
          <div className="flex py-2 text-center text-gray-500 space-x-1">
            <p>Don't have an account yet?</p>
            <Link to="/signup" className="text-black underline">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
