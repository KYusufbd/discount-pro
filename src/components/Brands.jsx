import { useContext } from "react";
import CouponContext from "../contexts/CouponContext";
import StarRatings from "react-star-ratings";
import { motion } from "framer-motion";

const Brands = () => {
  const { coupons, brands } = useContext(CouponContext);

  return (
    <div>
      <div className="w-full bg-primary text-primary-content py-4">
        <div className="section">
          <h1 className="text-start font-bold text-3xl">All Brands</h1>
        </div>
      </div>
      <div className="section flex flex-col gap-4 bg-base-200 py-8">
        {brands?.map((b) => {
          const brand = coupons.find((c) => c.brand_name === b);
          return (
            <div
              key={`brand${brand._id}`}
              className="bg-white card grid grid-cols-6"
            >
              <div className="col-span-2 flex flex-col justify-center items-center py-4">
                <h1 className="text-2xl font-semibold">{brand.brand_name}</h1>
                <div className="h-28 w-40 flex justify-center items-center">
                  <img
                    src={brand.brand_logo_URL}
                    alt="brand-logo"
                    className="max-h-full w-full m-auto"
                  />
                </div>
                <div className="flex flex-row items-center gap-3">
                  <StarRatings
                    rating={brand.rating}
                    starRatedColor="orange"
                    numberOfStars={5}
                    name="rating"
                    starDimension="28px"
                    starSpacing="3px"
                  />
                  <p className="text-xl font-semibold">({brand.rating})</p>
                </div>
              </div>
              <div className="col-span-3 flex flex-col gap-4 justify-center items-start">
                <h5 className="text-2xl font-semibold">
                  Brand Name: {brand.brand_name}
                </h5>
                <p className="text-xl">Description: {brand.description}</p>
              </div>
              <div className="col-span-1 flex flex-col p-4">
                <button className="btn btn-primary">View Coupons</button>
                {brand.isSaleOn && (
                  <motion.p
                    initial={{ y: 0 }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                    className="text-center font-bold text-3xl text-secondary pt-12"
                  >
                    Sale is on!
                  </motion.p>
                )}
              </div>
            </div>
          );
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
