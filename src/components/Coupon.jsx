import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import CouponContext from "../contexts/CouponContext";

const Coupon = () => {
  const brandId = useParams().id;
  const { coupons } = useContext(CouponContext);
  const [couponObj, setCouponObj] = useState({});

  useEffect(() => {
    setCouponObj(coupons.find((e) => e._id === brandId));
  }, [coupons, brandId]);

  console.log(couponObj);

  return <div></div>;
};

export default Coupon;
