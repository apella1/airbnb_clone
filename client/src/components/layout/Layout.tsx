import { Outlet } from "react-router-dom";
import Header from "../header/Header";

export default function Layout() {
  return (
    <div className="flex flex-col p-4">
      <Header />
      <Outlet />
    </div>
  );
}
