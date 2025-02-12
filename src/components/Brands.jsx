import { useContext } from "react";
import CouponContext from "../contexts/CouponContext";

const Brands = () => {
  const {coupons, brands} = useContext(CouponContext);

  return (
    <div>
      <div className="w-full bg-primary text-primary-content py-4">
        <div className="section">
          <h1 className="text-start font-bold text-3xl">All Brands</h1>
        </div>
      </div>
      <div className="section">
        {brands?.map(b => {
          const brand = coupons.find(c => c.brand_name === b);
          return (
            <div key={`brand${brand._id}`}>
              <h1 >{brand.brand_name}</h1>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Brands;

console.log("Remove the lines bellow when the project is complete.");
/**
 * These lines must be removed after the project is complete:
 * {
    "_id": "2",
    "description": "Limited-time deal! Save $15 on the AXON X-136 High-Power Hearing Aid for enhanced hearing support.",
    "shop_link": "https://ajkerdeal.com",
    "brand_name": "AXON",
    "brand_logo_URL": "https://ajkerdeal.com/axon_logo.png",
    "category": "Health",
    "rating": 4,
    "coupons": [
        {
            "coupon_code": "HEALTH15",
            "description": "Save $15 on this high-power hearing aid.",
            "expiry_date": "2025-06-15",
            "condition": "Valid for new customers only.",
            "coupon_type": "Flat Discount"
        },
        {
            "coupon_code": "FREESHIPHEALTH",
            "description": "Get free shipping on health products over $50.",
            "expiry_date": "2025-04-30",
            "condition": "Applies to selected health products.",
            "coupon_type": "Free Shipping"
        }
    ],
    "isSaleOn": true
}
*/
