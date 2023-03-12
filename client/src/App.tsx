export {};
import { Home } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

export default function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}
