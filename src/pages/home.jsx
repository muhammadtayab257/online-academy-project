import "../assets/css/home.css";
import Header from "../reuseable-components/header";
import Footer from "../reuseable-components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

function Home() {
  return (
    <>
      <Header />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="slide-1">
          <div className="slider-text">
            <h6>Largest Online Madrasah</h6>
            <h1>Islamic Online Mudarsa</h1>
            <p>
              Islamic online madrasah is an ISO certified educational
              institution of international standards
            </p>
            <button className="btn">Find The Courses</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-2">
          <div className="slider-text">
            <h6>Largest Online Madrasah</h6>
            <h1>Islamic Online Mudarsa</h1>
            <p>
              Islamic online madrasah is an ISO certified educational
              institution of international standards
            </p>
            <button className="btn">Find The Courses</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;
