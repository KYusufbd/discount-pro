import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const BrandsOnSale = ({ coupons }) => {
  const [brandsOnSale, setbrandsOnSale] = useState([]);

  useEffect(() => {
    const b = [];
    coupons.map((c) => c.isSaleOn && b.push(c));
    setbrandsOnSale(b);
  }, [coupons]);

  return (
    <div className="w-full bg-base-200">
      <div className="w-full bg-primary text-primary-content py-4">
        <div className="section flex flex-row justify-between">
          <h1 className="text-start font-bold text-3xl">Brands On Sale</h1>
        </div>
      </div>
      <div className="section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {brandsOnSale.map((b) => {
          return (
            <div
              key={b._id}
              className="card bg-base-100 w-full shadow-sm rounded-2xl overflow-hidden"
            >
              <figure className="w-full h-40 px-4 py-6">
                <img
                  src={b.brand_logo_URL}
                  alt="brand-logo"
                  className="rounded-xl max-h-full max-w-full"
                />
              </figure>
              <div className="card-body items-center text-center w-full bg-primary text-primary-content">
                <h2 className="card-title text-3xl font-bold text-secondary-content">
                  {b.brand_name}
                </h2>
                <div className="text-xl opacity-75">
                  <p>Total Coupons: {b.coupons.length}</p>
                  <p>Calegory: {b.category}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

BrandsOnSale.propTypes = {
  coupons: PropTypes.array.isRequired,
};

export default BrandsOnSale;
