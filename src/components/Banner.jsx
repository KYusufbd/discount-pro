import { Carousel } from "react-responsive-carousel";
import Slide from "./Slide";

const Banner = () => {
  return (
    <div className="section">
      <Carousel showArrows={true} axis="horizontal" autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <Slide
          h="Big Savings Await!"
          p1="Unlock exclusive discounts from your favorite online stores!"
          p2="Up to 50% OFF on fashion, electronics, and more."
          p3="🔥 Grab your coupon now!"
          img="banner-1-img.png"
        />
        <Slide
          h="Flash Deals & Limited-Time Offers!"
          p1="Hurry! Coupons expire soon!"
          p2="Save more on Daraz, AjkerDeal, Pickaboo, and more."
          p3="Redeem your deal before it's gone!"
          img="banner-1-img.png"
        />
      </Carousel>
    </div>
  );
};

export default Banner;
