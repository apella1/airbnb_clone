export {};
import { Link } from "react-router-dom";
import { Header } from "../../components";

export default function Login() {
  return (
    <div className="flex flex-col p-4">
      <Header />
      <div className="flex flex-col p-8 mt-28">
        <h2 className="mb-4 text-3xl font-bold text-center">Login</h2>
        <form action="" className="flex flex-col max-w-2xl mx-auto space-x-4">
          <input type="email" className="" placeholder="email address" />
          <input type="password" className="" placeholder="password" />
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
