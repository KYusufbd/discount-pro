import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";

const TopBrands = ({ coupons, brands }) => {
  return (
    <div className="section py-4">
      <Marquee pauseOnHover={true} speed={75}>
        {brands?.map((b) => {
          const brand = coupons.find((c) => c.brand_name === b);
          return (
            <button
              key={brand._id}
              className="h-24 p-4 btn border-y-2 border-accent"
            >
              <img
                src={brand.brand_logo_URL}
                alt="brand-logo"
                className="h-full"
              />
            </button>
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
