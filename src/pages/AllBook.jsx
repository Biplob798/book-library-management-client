import AllBooksCard from "../components/AllBooksCard";
import { useEffect, useState } from "react";
// import useAxios from "../hooks/useAxios";

const AllBook = () => {
  const [allBook, setAllBook] = useState([]);
  const url = "http://localhost:5000/allBooks";
  // const url = "/allBooks";

  // const axiosSecure = useAxios();

  // useEffect(() => {
  //   axiosSecure.get(url).then((res) => setAllBook(res.data));
  // }, [axiosSecure]);

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setAllBook(data));
  }, [url]);

  return (
    <div>
      <div className="text-center font-bold text-2xl md:text-5xl p-4 border-y-2 shadow-md my-6">
        <h2>
          Our All <span className="text-orange-500">Books</span> Collection
        </h2>
      </div>
      <p className="p-4 text-center my-4 border-y-2">
        Library is all-encompassing collection caters to diverse tastes.
        Spanning genres and eras, these books promise endless exploration,
        knowledge, and entertainment for every reader is preference
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {allBook?.slice(6, 22).map((book) => (
          <AllBooksCard key={book.id} AllBooksCard={book}></AllBooksCard>
        ))}
      </div>
    </div>
  );
};

export default AllBook;
