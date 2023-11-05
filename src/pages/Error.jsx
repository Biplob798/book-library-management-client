import { Link } from "react-router-dom";
import banner from "../assets/images/erro page.jpg";

const Error = () => {
  return (
    <div>
      <div className=" flex justify-center items-center my-12">
        <img src={banner} alt="" />
      </div>
      <Link to="/">
        <p className="text-center">Back Home</p>
      </Link>
    </div>
  );
};

export default Error;
