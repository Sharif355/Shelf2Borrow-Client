import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AOS from "aos";
import "aos/dist/aos.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Categories = () => {
  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "       https://library-management-server-fu7b5hy3i-sharif355.vercel.app/categories"
      )
      .then((response) => {
        setLoadedData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-up">
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
        navigation={{
          hideOnClick: false,
        }}
        modules={[Navigation, Pagination]}
        className="max-w-[90%] lg:max-w-full my-10"
      >
        {loadedData?.map((data) => (
          <SwiperSlide
            className="rounded-lg border w-60 lg:w-56 space-y-3"
            key={data._id}
          >
            <Link to={`/categories/${data.category}`}>
              <img
                className="w-[453.8px] h-[300px]  "
                src={data.image}
                alt={data.category}
              />
              <h2 className="text-xl font-semibold pl-3"> {data.category} </h2>
              <button className=" text-cyan-500 pl-3 font-semibold my-2">
                Show Books
              </button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
