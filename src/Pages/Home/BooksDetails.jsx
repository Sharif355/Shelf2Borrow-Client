import { Card } from "flowbite-react";
import { useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import PdfViewer from "../PdfViewer";
import BorrowModal from "../BorrowModal";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const BooksDetails = () => {
  const { id } = useParams();
  const loadedData = useLoaderData();
  const dataArray = Object.values(loadedData);
  const findData = dataArray.find((data) => data._id == id);
  const [showPDF, setShowPDF] = useState(false);
  const [showBorrowModal, setShowBorrowModal] = useState(false);
  const { user } = useContext(AuthContext);

  const openPDF = () => {
    setShowPDF(true);
  };

  const openBorrowModal = () => {
    setShowBorrowModal(true);
  };

  const closeBorrowModal = () => {
    setShowBorrowModal(false);
  };

  const handleBorrow = (returnDate) => {
    const borrowedData = {
      findData,
      returnDate: returnDate,
      email: user.email,
      userName: user.displayName,
    };
    console.log(borrowedData);
    axios
      .post(
        "         https://library-management-server-enennbyw6-sharif355.vercel.app/borrowedBooks",
        borrowedData
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Book Borrowed Successfully",
        }).catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
          });
        });
      });
  };

  return (
    <div className="my-16 flex justify-center">
      <Card
        className="max-w-md dark:bg-black relative"
        imgAlt={findData.name}
        imgSrc={findData.image}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {findData.name}
        </h5>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {findData.author}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {findData.long_description}
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={openPDF}
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Read
          </button>
          <button
            onClick={openBorrowModal}
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover-bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Borrow
          </button>
        </div>
      </Card>
      {showPDF && <PdfViewer pdfFile={findData.pdf} />}
      {showBorrowModal && (
        <div className="absolute -bottom-20 bg-gray-300">
          <BorrowModal onClose={closeBorrowModal} onBorrow={handleBorrow} />
        </div>
      )}
    </div>
  );
};

export default BooksDetails;
