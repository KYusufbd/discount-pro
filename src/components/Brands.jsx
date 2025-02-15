import { useContext, useEffect, useState } from "react";
import CouponContext from "../contexts/CouponContext";
import StarRatings from "react-star-ratings";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router";

const Brands = () => {
  const { coupons, brands } = useContext(CouponContext);
  const [brandsToDisplay, setBrandsToDisplay] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    const filteredByCateg = [];
    category &&
      coupons.map(
        (c) => c.category === category && filteredByCateg.push(c.brand_name),
      );
    filteredByCateg.length
      ? setBrandsToDisplay(filteredByCateg)
      : setBrandsToDisplay(brands);
  }, [brands, category, coupons]);

  return (
    <div>
      <div className="w-full bg-primary text-primary-content py-4">
        <div className="section flex flex-row justify-between">
          <h1 className="text-start font-bold text-3xl">Brands</h1>
          <label className="input w-1/3 bg-accent text-accent-content">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow bg-accent text-accent-content text-lg"
              placeholder="Search"
            />
          </label>
        </div>
      </div>
      <div className="section flex flex-col gap-5 bg-base-200 py-8">
        {brandsToDisplay?.map((b) => {
          const brand = coupons.find((c) => c.brand_name === b);
          return (
            <div
              key={`brand${brand._id}`}
              className="bg-base-100 card grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 p-4 gap-4"
            >
              <div className="col-span-1 flex flex-col justify-center items-center py-4">
                <h1 className="text-2xl font-semibold">{brand.brand_name}</h1>
                <div className="h-28 w-40 flex justify-center items-center">
                  <img
                    src={brand.brand_logo_URL}
                    alt="brand-logo"
                    className="max-h-full w-full m-auto"
                  />
                </div>
                <div className="flex flex-row items-center gap-2 flex-wrap">
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
              <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-4 justify-center items-start">
                <h5 className="text-2xl text-primary font-bold">
                  Brand: {brand.brand_name}
                </h5>
                <p className="text-xl opacity-70 font-medium">
                  {brand.description}
                </p>
              </div>
              <div className="col-span-1 flex flex-col p-4">
                <Link
                  to={`/brand/${brand._id}`}
                  className="btn btn-primary text-lg font-semibold"
                >
                  View Coupons
                </Link>
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
