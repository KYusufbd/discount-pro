import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

const Categories = ({ coupons }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const c = [];
    coupons.map((e) => c.includes(e.category) || c.push(e.category));
    setCategories(c);
  }, [coupons]);

  return (
    <div className="bg-base-300 flex flex-col gap-6 py-8">
      <div className="section bg-secondary text-secondary-content py-4">
        <h1 className="text-3xl font-bold text-center">Categories</h1>
      </div>
      <div className="section flex flex-row flex-wrap gap-4 justify-between">
        {categories.map((c) => {
          return (
            <Link to={`/category/${c}`}
              key={categories.indexOf(c)}
              className="btn btn-secondary text-lg md:text-xl lg:text-2xl"
            >
              {c}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

Categories.propTypes = {
  coupons: PropTypes.array.isRequired,
};

export default Categories;
