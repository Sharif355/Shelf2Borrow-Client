import { Link, useLoaderData, useParams } from "react-router-dom";

const Books = () => {
  const { category } = useParams();
  console.log(category);
  const loadedData = useLoaderData();
  console.log(typeof loadedData);

  const dataArray = Object.values(loadedData);

  const findData = dataArray?.filter((data) => data.category === category);
  console.log(findData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 my-16">
      {findData?.map((data) => (
        <div key={data._id} className="max-w-md border dark:bg-black space-y-3">
          <img className="w-[370px] h-96 object-fill" src={data.image} alt="" />
          <div className="flex justify-between px-2">
            <h5 className="text-lg  tracking-tight text-gray-500 dark:text-white">
              {data.category}
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
          <h5 className="text-xl text-justify font-semibold px-2">
            {" "}
            {data.name}{" "}
          </h5>
          <div className=" flex justify-between  font-semibold px-2 ">
            <h5>
              {" "}
              <span className="text-gray-400">By</span> {data.author}{" "}
            </h5>
          </div>

          <div className="flex items-center justify-between px-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${data.price}
            </span>
            <Link to={`/books/${data._id}`}>
              <button className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                See Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
