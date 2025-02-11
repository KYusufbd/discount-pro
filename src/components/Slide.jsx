import PropTypes from "prop-types";

const Slide = ({ h, p1, p2, p3, img }) => {
  return (
    <div className="w-full bg-primary grid grid-cols-1 md:grid-cols-2 p-4 md:p-5 lg:p-6 rounded-4xl">
      <div className="flex flex-col justify-center items-center gap-10 p-4 text-primary-content">
        <h1 className="text-6xl font-extrabold">{h}</h1>
        <div className="flex flex-col gap-3 font-semibold text-xl opacity-70">
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
      </div>
      <div className="w-ful flex flex-col py-8 justify-center items-center text-secondary">
        <p className="text-3xl font-bold">{p3}</p>
        <img src={img} alt="" className="w-full " />
      </div>
    </div>
  );
};

export default Slide;

Slide.propTypes = {
  h: PropTypes.string.isRequired,
  p1: PropTypes.string.isRequired,
  p2: PropTypes.string.isRequired,
  p3: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
