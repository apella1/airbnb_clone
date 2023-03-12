export {};
import { Home, Login, Signup } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
