import { CardBody, CardHeader, Typography } from "@material-tailwind/react";
import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Parallax, Virtual, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const NewArrival = () => {
  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "     https://library-management-server-k3pz7vyws-sharif355.vercel.app/newArrivals"
      )
      .then((res) => {
        setLoadData(res.data);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <div
        className="flex flex-col justify-center items-center my-5"
        data-aos="fade-up"
      >
        <p className="p-2  font-medium border uppercase bg-[#F8F9FA] dark:bg-black">
          Read New
        </p>
        <h2 className="text-3xl font-bold">New Arrivals</h2>
        <p className="text-lg text-gray-600 dark:text-gray-200">
          Reading helps you developing your communication skills
        </p>
      </div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        parallax={{
          enabled: true,
        }}
        virtual={{
          enabled: true,
        }}
        autoplay={{
          delay: 4000,

          disableOnInteraction: false,
        }}
        modules={[Keyboard, Parallax, Virtual, Autoplay]}
      >
        <div data-aos="fade-up">
          {loadData?.map((data) => (
            <SwiperSlide className="max-w-sm" key={data._id}>
              <Card className="mt-6 w-72 md:w-96 h-[480px] dark:bg-black">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img src={data.image} alt={data.name} loading="lazy" />
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
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default NewArrival;
