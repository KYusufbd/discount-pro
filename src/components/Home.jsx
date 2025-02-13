import { useContext } from "react";
import Banner from "./Banner";
import BrandsOnSale from "./BrandsOnSale";
import TopBrands from "./TopBrands";
import CouponContext from "../contexts/CouponContext";

const Home = () => {
  const { coupons, brands } = useContext(CouponContext);
  return (
    <div>
      <Banner />
      <TopBrands coupons={coupons} brands={brands} />
      <BrandsOnSale coupons={coupons} brands={brands} />
    </div>
  );
};

export default Home;
