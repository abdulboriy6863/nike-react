// import React from "react";

// export default function Advertisement() {
//   return (
//     <div className="ads-frame">
//       <video
//         className="ads-video"
//         autoPlay={true}
//         loop
//         muted
//         playsInline
//         data-video-media
//       >
//         <source
//           type="video/mp4"
//           src="https://www.shutterstock.com/shutterstock/videos/3641098169/preview/stock-footage-fiumicino-rome-italy-september-view-of-the-large-shelves-full-of-boxes-displaying-the.webm"
//         />
//       </video>
//     </div>
//   );
// }

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "../../../css/styles.css";

// // import required modules
// import { EffectFade, Navigation, Pagination } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         effect={"fade"}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[EffectFade, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

/* boshqa swiper */

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards";

// import "../../../css/styles.css";

// // import required modules
// import { EffectCards } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         effect={"cards"}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>
//           <img src="/img/nike-brand-logo.png" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
/* boshqa swiper */

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { Autoplay, Pagination, Navigation } from "swiper";
// import { Stack } from "@mui/material";

// export default function Advertisement() {
//   return (
//     <>
//       <Stack className="ads-frame">
//         <Stack className="ads-main">
//           <Swiper
//             className="my-swiper"
//             spaceBetween={30}
//             centeredSlides={true}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             // navigation={true}
//             modules={[Autoplay, Pagination, Navigation]}
//           >
//             <Stack className="img-swiper">
//               <SwiperSlide className="img-1">
//                 <img src="/img/kskfallaldlk.png" alt="" />
//               </SwiperSlide>
//               <SwiperSlide className="img-1">
//                 <img src="/img/kskfallaldlk.png" alt="" />
//               </SwiperSlide>
//               <SwiperSlide className="img-1">
//                 <img src="/img/kskfallaldlk.png" alt="" />
//               </SwiperSlide>
//               <SwiperSlide className="img-1">
//                 <img src="/img/kskfallaldlk.png" alt="" />
//               </SwiperSlide>
//               <SwiperSlide className="img-1">
//                 {" "}
//                 <img src="/img/kskfallaldlk.png" alt="" />
//               </SwiperSlide>
//               <SwiperSlide className="img-1">
//                 {" "}
//                 <img src="/img/kskfallaldlk.png" alt="" />
//               </SwiperSlide>
//               <SwiperSlide className="img-1">
//                 {" "}
//                 <img src="/img/kskfallaldlk.png" alt="" />
//               </SwiperSlide>
//               <SwiperSlide className="img-1">
//                 {" "}
//                 <img src="/img/kskfallaldlk.png" alt="" />
//               </SwiperSlide>
//               <SwiperSlide className="img-1">
//                 {" "}
//                 <img src="/img/kskfallaldlk.png" alt="" />
//               </SwiperSlide>
//             </Stack>
//           </Swiper>
//         </Stack>
//       </Stack>
//     </>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../../../css/styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
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
            modules={[Autoplay, Pagination, Navigation]}
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
