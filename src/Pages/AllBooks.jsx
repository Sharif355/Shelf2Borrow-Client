import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllBooks = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const allBooksData = useLoaderData();

  const booksArray = Object.values(allBooksData);

  const filterBooks = () => {
    if (isFilterActive) {
      setIsFilterActive(false);
    } else {
      const filterData = booksArray.filter((book) => book.quantity > 0);
      setIsFilterActive(true);
      setFilteredBooks(filterData);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold">List of All Books Here.</h1>
        <p className="text-gray-400">
          Click the &apos;Available Books&apos; to Show the books available to
          Borrow.
        </p>
        <button onClick={filterBooks} className="btn btn-success normal-case">
          {isFilterActive
            ? `All Books: ${booksArray.length}`
            : `Available Books: ${filteredBooks.length}`}
        </button>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 my-16"
        data-aos="zoom-in"
      >
        <Helmet>
          <title> Shelf2Borrow ||AllBook</title>
        </Helmet>
        {isFilterActive
          ? filteredBooks?.map((book) => (
              <div
                className="max-w-md border space-y-3"
                key={book._id}
                data-aos="fade-up"
              >
                <img
                  className="w-96 h-96 object-fill"
                  src={book.image}
                  alt=""
                />
                <div className="flex justify-between items-center px-2">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {book.name}
                  </h5>
                  <div className="mb-2 mt-2 flex items-center">
                    <svg
                      className="h-5 w-5 mx-2 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className=" rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                      5.0
                    </span>
                  </div>
                </div>
                <div className=" flex justify-between  font-semibold items-center px-2 ">
                  <h5>{book.author} </h5>
                  <h5 className=""> {book.category} </h5>
                </div>

                <div className="flex items-center justify-between px-2">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${book.price}
                  </span>
                  <Link to={`/update/${book._id}`}>
                    <button className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            ))
          : booksArray?.map((book) => (
              <div
                className="max-w-md border space-y-3"
                key={book._id}
                data-aos="fade-up"
              >
                <img
                  className="w-96 h-96 object-fill"
                  src={book.image}
                  alt=""
                />
                <div className="flex justify-between items-center px-2">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {book.name}
                  </h5>
                  <div className="mb-2 mt-2 flex items-center">
                    <svg
                      className="h-5 w-5 mx-2 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className=" rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                      5.0
                    </span>
                  </div>
                </div>
                <div className=" flex justify-between  font-semibold items-center px-2 ">
                  <h5>{book.author} </h5>
                  <h5 className=""> {book.category} </h5>
                </div>

                <div className="flex items-center justify-between px-2">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${book.price}
                  </span>
                  <Link to={`/update/${book._id}`}>
                    <button className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllBooks;
