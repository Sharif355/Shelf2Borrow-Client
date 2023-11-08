import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedAuthors = () => {
  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/featuredAuthors").then((res) => {
      setLoadData(res.data);
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="my-10" data-aos="fade-up">
      <div className="flex flex-col justify-center items-center my-5">
        <p className="p-2  font-medium border uppercase bg-[#F8F9FA] dark:bg-black">
          THIS MONT&apos;S
        </p>
        <h2 className="text-3xl font-bold">Featured Authors</h2>
        <p className="text-lg text-gray-600 dark:text-gray-100">
          Hand picked by our expert Editors
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {loadData?.map((data) => (
          <Card key={data._id} className="w-72 md:w-96">
            <CardHeader floated={false} className="h-80">
              <img src={data.image} alt={data.name} />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {data.name}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                {data.type}
              </Typography>
              <Typography className="text-justify">
                {" "}
                {data.description}{" "}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2  ">
              <FaFacebook></FaFacebook>
              <FaInstagram></FaInstagram>
              <FaTwitch></FaTwitch>
              <FaTwitter></FaTwitter>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAuthors;
