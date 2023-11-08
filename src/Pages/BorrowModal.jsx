import { useState } from "react";

const BorrowModal = ({ onClose, onBorrow }) => {
  const [returnDate, setReturnDate] = useState("");

  const handleBorrow = () => {
    if (returnDate) {
      onBorrow(returnDate);
      onClose();
    }
  };

  return (
    <div className="border w-60 h-60 flex flex-col space-y-2 py-5 items-center">
      <h2 className="text-xl font-semibold text-center">Borrow Book</h2>
      <label className="" htmlFor="returnDate">
        Return Date:
      </label>
      <input
        className="block dark:text-black"
        type="date"
        id="returnDate"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />
      <div className="flex gap-3">
        <button
          className="btn btn-sm normal-case bg-green-400 "
          onClick={handleBorrow}
        >
          Borrow
        </button>
        <button
          className="btn btn-sm  normal-case bg-red-400"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BorrowModal;
