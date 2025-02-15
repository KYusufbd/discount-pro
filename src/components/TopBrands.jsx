import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const TopBrands = ({ coupons, brands }) => {
  return (
    <div className="section py-4">
      <Marquee pauseOnHover={true} speed={75}>
        {brands?.map((b) => {
          const brand = coupons.find((c) => c.brand_name === b);
          return (
            <Link
              to={`/brand/${brand._id}`}
              key={brand._id}
              className="h-24 p-4 btn border-y-2 border-accent"
            >
              <img
                src={brand.brand_logo_URL}
                alt="brand-logo"
                className="h-full"
              />
            </Link>
          );
        })}
      </Marquee>
    </div>
  );
};

TopBrands.propTypes = {
  coupons: PropTypes.array.isRequired,
  brands: PropTypes.array.isRequired,
};

export default TopBrands;
