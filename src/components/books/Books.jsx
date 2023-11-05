import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Books = ({ booksCard }) => {
  const { category, image } = booksCard;

  console.log(booksCard);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div
        className="card p-6 shadow-md bg-white"
        data-aos="fade-bottom"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <figure className="px-10 pt-10 border ">
          <img src={image} alt="brandsName" className="rounded-x w-96 h-56" />
        </figure>
        <hr className="mt-6 " />
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold text-gray-700">
            {category}!
          </h2>

          <div className="card-actions ">
            {" "}
            <button className="btn btn-outline bg-teal-600">Collection</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
Books.propTypes = {
  booksCard: PropTypes.object,
};
