import { CardBody, CardHeader, Typography } from "@material-tailwind/react";
import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

const NewArrival = () => {
  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/newArrivals").then((res) => {
      setLoadData(res.data);
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center my-5">
        <p className="p-2  font-medium border uppercase bg-[#F8F9FA] dark:bg-black">
          Read New
        </p>
        <h2 className="text-3xl font-bold">New Arrivals</h2>
        <p className="text-lg text-gray-600 dark:text-gray-200">
          Reading helps you developing your communication skills
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loadData?.map((data) => (
          <Card key={data._id} className="mt-6 w-96 dark:bg-black">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={data.image} alt={data.name} />
            </CardHeader>
            <CardBody>
              <Typography>{data.category}</Typography>
              <Typography variant="h5" color="blue-gray" className="">
                {data.name}
              </Typography>
              <Typography>
                {" "}
                <span className="text-gray-400">By</span> {data.author}
              </Typography>
              <Typography className="text-lg font-semibold">
                {" "}
                ${data.price}{" "}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
