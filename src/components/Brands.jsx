import { useContext } from "react";
import CouponContext from "../contexts/CouponContext";

const Brands = () => {
  const coupons = useContext(CouponContext);

  return (
    <div>
      <div className="w-full bg-primary text-primary-content py-4">
        <div className="section">
          <h1 className="text-start font-bold text-3xl">All Brands</h1>
        </div>
      </div>
      <div className="section">
        
      </div>
    </div>
  );
};

export default Brands;
