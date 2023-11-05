import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto my-4">
      <Header />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Root;
