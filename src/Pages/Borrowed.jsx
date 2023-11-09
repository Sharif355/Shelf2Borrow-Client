import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Borrowed = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `      https://library-management-server-fu7b5hy3i-sharif355.vercel.app/borrowedBooks?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBorrowedBooks(data);
      });
  }, []);

  const handleDelete = (_id) => {
    axios
      .delete(
        `      https://library-management-server-fu7b5hy3i-sharif355.vercel.app/borrowedBooks/${_id}`
      )
      .then((res) => {
        if (res.data.deletedCount) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Book returned successfully",
          });
          const remaining = borrowedBooks.filter((book) => book._id !== _id);
          setBorrowedBooks(remaining);
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title> Shelf2Borrow ||Borrowed</title>
      </Helmet>
      <h1 className="text-xl font-semibold text-center">
        All borrowed books here : {borrowedBooks.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {borrowedBooks?.map((book) => (
          <div key={book._id} className="max-w-sm border p-4 space-y-2">
            <img src={book.findData.image} alt="" />
            <h4 className=" font-medium"> {book.findData.category} </h4>
            <h4 className="text-xl font-semibold"> {book.findData.name} </h4>
            <h4 className=" font-medium"> By {book.findData.author} </h4>
            <h4 className=" font-medium"> Return Date: {book.returnDate} </h4>
            <button
              onClick={() => handleDelete(book._id)}
              className="btn w-full normal-case"
            >
              Return
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Borrowed;
