import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Grid } from "swiper/modules";

const PopularShops = ({ coupons }) => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const s = [];
    coupons.map((c) => s.includes(c.shop_link) || s.push(c.shop_link));
    setShops(s);
  }, [coupons]);

  console.log(shops);

  return (
    <div className="flex flex-col gap-4 w-full py-8 bg-accent-content">
      <div className="w-full text-accent">
        <div className="section flex flex-row justify-center">
          <h1 className="text-center font-bold text-3xl">
            Popular E-Commerce Shops
          </h1>
        </div>
      </div>
      <div className="section">
        <Swiper
          modules={[Autoplay, Grid, FreeMode]}
          grid
          autoplay
          freeMode
          spaceBetween={12}
        >
          {shops.map((s) => {
            return (
              <SwiperSlide key={shops.indexOf(s)}>
                <div className="bg-base-200 text-secondary py-12 px-8 rounded-2xl text-center text-lg md:text-2xl lg:text-3xl font-bold max-w-180 mx-auto">
                  <a href={s} target="_blank">
                    {s}
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

PopularShops.propTypes = {
  coupons: PropTypes.string.isRequired,
};

export default PopularShops;
