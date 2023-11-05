import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        setLoadedData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 my-10">
      {loadedData?.map((data) => (
        <div
          className="rounded-lg border w-60 lg:w-56 space-y-3"
          key={data._id}
        >
          <img
            className="w-[222px] h-[148px] "
            src={data.image}
            alt={data.name}
          />
          <h2 className="text-xl font-semibold pl-3"> {data.name} </h2>
          <button className="pl-3 font-semibold">
            <Link to={`/categories/${data._id}`}>Show Books</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Categories;
