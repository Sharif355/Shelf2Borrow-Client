import { Card } from "flowbite-react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const BooksDetails = () => {
  const { id } = useParams();
  console.log(id);
  const loadedData = useLoaderData();
  const dataArray = Object.values(loadedData);

  const findData = dataArray.find((data) => data._id == id);
  console.log(findData);

  return (
    <div className="my-16 flex justify-center">
      <Card
        className="max-w-md dark:bg-black"
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
          <Link to={`/books/${findData._id}`}>
            <button className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Read
            </button>
          </Link>
          <Link to={`/books/${findData._id}`}>
            <button className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Borrow
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default BooksDetails;
