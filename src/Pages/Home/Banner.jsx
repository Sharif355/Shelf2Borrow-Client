import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="mb-20 " data-aos="fade-up">
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,

          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="max-w-[90%] lg:max-w-full"
      >
        {/* slide1 */}
        <SwiperSlide>
          <div className="flex justify-between ">
            <div className="flex flex-col justify-center items-center my-5 w-full space-y-5">
              <p className="p-2  font-medium border uppercase bg-[#F8F9FA] dark:bg-black">
                VAST ONLINE BOOKS
              </p>
              <h2 className="text-3xl font-bold">
                Explore <span>Millions of </span> Books
              </h2>
              <p className="text-lg text-gray-600">
                Read wide varieties of books from your favorite authors.
              </p>
            </div>
            <img
              className="w-[273px] md:w-[463px] lg:w-[1441px] h-[172px] md:h-[463px] lg:h-[594px] rounded-lg"
              src="https://i.ibb.co/PwWKsCC/banner5.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        {/* slide2 */}
        <SwiperSlide>
          <div className="flex justify-between bg-[]">
            <div className="flex flex-col justify-center items-center my-5 space-y-5 ">
              <p className="p-2  font-medium border uppercase bg-[#F8F9FA] dark:bg-black">
                EMBED PDF FEATURE
              </p>
              <h2 className="text-3xl font-bold">
                Read <span>PDF Books</span> Online{" "}
              </h2>
              <p className="text-lg text-gray-600">
                Read Books online without leaving the website.
              </p>
            </div>
            <img
              className="w-[273px] md:w-[463px] lg:w-[941px] h-[172px] md:h-[463px] lg:h-[594px] rounded-lg"
              src="https://i.ibb.co/PDxvNhz/banner1-removebg-preview.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        {/* slide3 */}
        <SwiperSlide>
          <div className="flex justify-between">
            <div className="flex flex-col justify-center items-center my-5 space-y-5">
              <p className="p-2  font-medium border uppercase bg-[#F8F9FA] dark:bg-black">
                LARGEST CATALOG
              </p>
              <h2 className="text-3xl font-bold">
                Unleash <span>Your Reading</span> Passion
              </h2>
              <p className="text-lg text-gray-600">
                Ignite Love for Reading and Dive into a World of books.
              </p>
            </div>
            <img
              className="w-[273px] md:w-[463px] lg:w-[941px] h-[172px] md:h-[463px] lg:h-[594px] rounded-lg"
              src="https://i.ibb.co/znGrrjm/banner2-removebg-preview.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
