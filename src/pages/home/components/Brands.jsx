import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import { Autoplay } from "swiper";

const Index = ({ data }) => {
  const brandImages = data.fields.brandimgs;
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <Swiper
      loop={sliderLoop}
      spaceBetween={30}
      slidesPerView={2}
      autoplay={{ delay: 2500, disableOnInteraction: true }}
      className="swiper-wrapper d-flex align-items-center"
      breakpoints={{
        // when window width is >= 1200px
        1200: {
          slidesPerView: 6,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 5,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
        },
        // when window width is >= 576px
        576: {
          slidesPerView: 3,
        },
      }}
    >
      {brandImages.map((image, i) => (
        <SwiperSlide key={i}>
          <div className="tp-brand-icon text-center">
            <img src={image.fields.file.url} alt="" width="100" height="80" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Index;
