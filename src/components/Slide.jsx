import PropTypes from "prop-types";

const Slide = ({ h, p1, p2, p3, img, bg, text }) => {
  return (
    <div
      className={`w-full ${bg} grid grid-cols-1 md:grid-cols-2 p-4 md:p-5 lg:p-6`}
    >
      <div
        className={`flex flex-col justify-center gap-4 md:gap-6 lg:gap-10 p-8 ${text}`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">{h}</h1>
        <div className="flex flex-col gap-2 w-full font-semibold text-xl opacity-70">
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
      </div>
      <div className="w-ful flex flex-col py-8 justify-center items-center">
        <img src={img} alt="" className="h-72 md:h-80 lg:h-96 " />
        <p className="text-3xl text-primary-content font-bold text-center mx-8">
          {p3}
        </p>
      </div>
    </div>
  );
};

export default Slide;

Slide.propTypes = {
  h: PropTypes.string.isRequired,
  p1: PropTypes.string.isRequired,
  p2: PropTypes.string.isRequired,
  p3: PropTypes.string,
  img: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
