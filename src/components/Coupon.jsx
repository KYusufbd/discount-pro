import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import CouponContext from "../contexts/CouponContext";
import StarRatings from "react-star-ratings";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";

const Coupon = () => {
  const brandId = useParams().id;
  const { coupons } = useContext(CouponContext);
  const [couponObj, setCouponObj] = useState({});

  useEffect(() => {
    setCouponObj(coupons.find((e) => e._id === brandId));
  }, [coupons, brandId]);

  return (
    <div className="flex flex-col">
      <div className="w-full bg-primary text-primary-content py-4">
        <div className="section flex flex-row justify-center items-center gap-4">
          <h1 className="text-start font-bold text-3xl">
            {couponObj?.brand_name}
          </h1>
          <div className="h-12 bg-white rounded-xl overflow-hidden px-4">
            <img
              src={couponObj?.brand_logo_URL}
              alt="brand-logo"
              className="h-full"
            />
          </div>
          <div className="flex flex-row items-center gap-2 flex-wrap">
            <StarRatings
              rating={couponObj?.rating}
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
              starDimension="28px"
              starSpacing="3px"
            />
            <p className="text-xl font-semibold">({couponObj?.rating})</p>
          </div>
        </div>
      </div>
      <div className="section p-6 bg-base-200 flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">All Coupons:</h3>
        <div className="grid grid-cols-3 gap-6 ">
          {couponObj?.coupons?.map((e) => {
            return (
              <div
                key={couponObj.coupons.indexOf(e)}
                className="flex flex-col justify-between gap-8 text-lg shadow rounded-2xl px-6 py-4 bg-primary-content text-primary"
              >
                <div className="flex flex-col gap-4 text">
                  <p className="">
                    <strong> Coupon Code:</strong> {e.coupon_code}
                  </p>
                  <p className="">
                    <strong> Description:</strong> {e.description}
                  </p>
                  <p className="">
                    <strong> Expiry Date:</strong> {e.expiry_date}
                  </p>
                  <p className="">
                    <strong> Condition:</strong> {e.condition}
                  </p>
                  <p className="">
                    <strong> Coupon Type:</strong> {e.coupon_type}
                  </p>
                </div>
                <div className="flex flex-row gap-6 mt-auto">
                  <CopyToClipboard
                    text={e.coupon_code}
                    onCopy={() => toast("Coupon code copied successfully!")}
                  >
                    <button className="btn btn-accent text-lg">
                      Copy Code
                    </button>
                  </CopyToClipboard>
                  <a
                    href={couponObj.shop_link}
                    target="_blank"
                    className="btn btn-accent text-lg"
                  >
                    Use Now
                  </a>
                </div>
                <ToastContainer position="top-center" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Coupon;
