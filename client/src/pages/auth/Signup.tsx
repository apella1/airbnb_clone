export {};
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components";

function registerUser(e) {
  e.preventDefault();
  let firstName, lastName, email, password;
  // the default base url has been defined in App.tsx
  axios.post(`/register`, {
    firstName,
    lastName,
    email,
    password,
  });
}

export default function Signup() {
  type Name = string;
  const [firstName, setFirstName] = useState<Name>("");
  const [lastName, setLastName] = useState<Name>("");
  const [email, setEmail] = useState<Name>("");
  const [emailConfirm, setEmailConfirm] = useState<Name>("");
  const [password, setPassword] = useState<Name>("");
  const [passwordConfirm, setPasswordConfirm] = useState<Name>("");
  return (
    <div className="flex flex-col p-4">
      <Header />
      <div className="flex flex-col p-8 mt-8">
        <h2 className="mb-4 text-3xl font-bold text-center">Register</h2>
        <form
          action=""
          className="flex flex-col max-w-2xl mx-auto space-x-4"
          onSubmit={registerUser}
        >
          <input
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="email"
            placeholder="confirm email address"
            value={emailConfirm}
            onChange={(e) => setEmailConfirm(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <button className="primary">Register</button>
          <div className="flex py-2 text-center text-gray-500 space-x-1">
            <p>Already have an account?</p>
            <Link to="/login" className="text-black underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
