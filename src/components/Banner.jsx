import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-full bg-base-200">
      <div className="section">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay
        >
          <SwiperSlide>
            <Slide
              h="Big Savings Await!"
              p1="Unlock exclusive discounts from your favorite online stores!"
              p2="Up to 50% OFF on fashion, electronics, and more."
              p3="🔥 Grab your coupon now!"
              img="banner-1-img.png"
              bg="bg-primary"
              text="text-primary-content"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              h="Flash Deals & Limited-Time Offers!"
              p1="Hurry! Coupons expire soon!"
              p2="Save more on Daraz, AjkerDeal, Pickaboo, and more."
              p3="Redeem your deal before it's gone!"
              img="banner-2-img.png"
              bg="bg-secondary"
              text="text-secondary-content"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              h="Shop More, Pay Less!"
              p1="Use our exclusive coupons for maximum savings!"
              p2="Get free shipping, flat discounts & cashback!"
              p3="Browse now and start saving!"
              img="banner-3-img.png"
              bg="bg-accent"
              text="text-accent-content"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              h="Mega Sale is Live!"
              p1="Verified coupons from Bangladesh's top e-commerce sites!"
              p2="Extra discounts on fashion, gadgets, and home essentials!"
              p3="Don't miss out - shop smart today!"
              img="banner-4-img.png"
              bg="bg-primary"
              text="text-primary-content"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              h="Never Miss a Discount Again!"
              p1="Get alerts on the best deals and coupons!"
              p2="Save your favorite offers for later!"
              p3="Redeem instantly & shop smarter!"
              img="banner-5-img.png"
              bg="bg-secondary"
              text="text-secondary-content"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
