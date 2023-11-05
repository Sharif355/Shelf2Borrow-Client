import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FreeMode, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mb-20">
      <h1 className="text-3xl font-bold text-center">Banner Section</h1>
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
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-full"
      >
        {/* slide1 */}
        <SwiperSlide>
          <img
            className="w-[500px] lg:h-[680px] md:h-[450px] rounded-lg"
            src="https://i.ibb.co/Sfqs78X/book1.jpg"
            alt=""
          />
        </SwiperSlide>
        {/* slide2 */}
        <SwiperSlide>
          <img
            className="w-[456px] lg:h-[640px] md:h-[420px] rounded-lg object-cover"
            src="https://i.ibb.co/wwQ3bKv/book4.jpg"
            alt=""
          />
        </SwiperSlide>
        {/* slide3 */}
        <SwiperSlide>
          <img
            className="w-[500px] lg:h-[680px] md:h-[450px] rounded-lg object-cover"
            src="https://i.ibb.co/89DZs8k/book2.jpg"
            alt=""
          />
        </SwiperSlide>
        {/* slide4 */}
        <SwiperSlide>
          <img
            className="w-[456px] lg:h-[640px] md:h-[420px] rounded-lg object-cover"
            src="https://i.ibb.co/hL7X7p8/book3.jpg"
            alt=""
          />
        </SwiperSlide>
        {/* slide5 */}
        <SwiperSlide>
          <img
            className="w-[500px] lg:h-[680px] md:h-[450px] rounded-lg object-cover"
            src="https://i.ibb.co/SdX8pbP/book5.jpg"
            alt=""
          />
        </SwiperSlide>
        {/* slide6 */}
        <SwiperSlide>
          <img
            className="w-[456px] lg:h-[640px] md:h-[420px] rounded-lg object-cover"
            src="https://i.ibb.co/25S6YXH/book6.jpg"
            alt=""
          />
        </SwiperSlide>
        {/* slide7 */}
        <SwiperSlide>
          <img
            className="w-[500px] lg:h-[680px] md:h-[450px] rounded-lg object-cover"
            src="https://i.ibb.co/pXNt9W9/book7.jpg"
            alt=""
          />
        </SwiperSlide>
        {/* slide8 */}
        <SwiperSlide>
          <img
            className="w-[456px] lg:h-[640px] md:h-[420px] rounded-lg object-cover"
            src="https://i.ibb.co/cD8tDBY/book9.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
