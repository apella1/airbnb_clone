export {};
import axios from "axios";
import { Home, Login, Signup } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

axios.defaults.baseURL = `http://localhost:5000`;

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

export default function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}
