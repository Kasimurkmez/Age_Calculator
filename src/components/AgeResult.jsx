import PropTypes from "prop-types";

const AgeResult = ({ age }) => {
  return (
    <h4 className="mt-10 text-4xl font-normal leading-normal  mb-2 text-pink-800">
      You are <span className="text-lime-800">{age.years}</span> years,
      <span className="text-cyan-800">{age.months}</span> months, and{" "}
      <span className="text-yellow-800">{age.days}</span> days old.
    </h4>
  );
};

AgeResult.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
  }),
};

export default AgeResult;
