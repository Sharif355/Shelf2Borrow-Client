import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";

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
    <div>
      <h1 className="text-2xl font-bold">Featured Categories</h1>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[90%] lg:max-w-full my-10"
      >
        {loadedData?.map((data) => (
          <SwiperSlide
            className="rounded-lg border w-60 lg:w-56 space-y-3"
            key={data._id}
          >
            <img
              className="w-[453.8px] h-[300px]  "
              src={data.image}
              alt={data.name}
            />
            <h2 className="text-xl font-semibold pl-3"> {data.name} </h2>
            <button className=" text-cyan-500 pl-3 font-semibold my-2">
              {" "}
              <Link to={`/categories/${data.name}`}>Show Books</Link>{" "}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
