export {};
import { Link } from "react-router-dom";
import { Header } from "../../components";

export default function Signup() {
  return (
    <div className="flex flex-col p-4">
      <Header />
      <div className="flex flex-col p-8 mt-8">
        <h2 className="mb-4 text-3xl font-bold text-center">Register</h2>
        <form action="" className="flex flex-col max-w-2xl mx-auto space-x-4">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
          <input type="email" placeholder="email address" />
          <input type="email" placeholder="confirm email address" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
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
