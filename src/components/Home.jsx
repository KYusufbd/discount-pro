import { useContext } from "react";
import Banner from "./Banner";
import BrandsOnSale from "./BrandsOnSale";
import TopBrands from "./TopBrands";
import CouponContext from "../contexts/CouponContext";
import PopularShops from "./PopularShops";
import Categories from "./Categories";

const Home = () => {
  const { coupons, brands } = useContext(CouponContext);
  return (
    <div>
      <Banner />
      <TopBrands coupons={coupons} brands={brands} />
      <BrandsOnSale coupons={coupons} brands={brands} />
      <Categories coupons={coupons} />
      <PopularShops coupons={coupons} />
    </div>
  );
};

export default Home;
