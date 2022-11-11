
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css"

import { Pagination, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";

function Carousel() {

    var items = [
        { img: "https://i.imgur.com/kuqXPMk.png"},
        { img: "https://i.imgur.com/Drs9cJV.png"},
        { img: "https://i.imgur.com/pDkXCke.png"},
        { img: "https://i.imgur.com/eMMZ8Ih.png" }
    ]

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >

                {
                    items.map((item) => (
                        <SwiperSlide>
                            <img src={item.img} alt="Imagem" />
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </>
    )
}

export default Carousel;
