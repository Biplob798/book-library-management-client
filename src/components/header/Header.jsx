import logo from "../../assets/images/logo (2).png";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <div>
      <div
        className="flex
       justify-center items-center border"
      >
        <img className="h-16" src={logo} alt="" />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
