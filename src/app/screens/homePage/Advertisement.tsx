import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { Stack } from "@mui/material";

export default function Advertisement() {
  return (
    <>
      <Stack className="ads-frame">
        <Stack className="ads-main">
          <Swiper
            className="my-swiper img-swiper"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide className="img-1">
              <img src="/img/kskfallaldlk.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="img-1">
              <img src="/img/kskfallaldlk.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="img-1">
              <img src="/img/kskfallaldlk.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="img-1">
              <img src="/img/kskfallaldlk.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="img-1">
              <img src="/img/kskfallaldlk.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="img-1">
              <img src="/img/kskfallaldlk.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="img-1">
              <img src="/img/kskfallaldlk.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="img-1">
              <img src="/img/kskfallaldlk.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="img-1">
              <img src="/img/kskfallaldlk.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </Stack>
      </Stack>
    </>
  );
}
