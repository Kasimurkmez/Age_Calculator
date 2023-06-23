import { useState } from "react";
import PropTypes from "prop-types";

function AgeCalculatorForm({ calculateAge }) {
  const [birthDate, setBirthDate] = useState("");

  console.log(birthDate);
  const handleChangeDate = (event) => {
    setBirthDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateAge(birthDate);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={birthDate} type="date" onChange={handleChangeDate} />
      <button disabled={!birthDate} type="submit">
        calculate Age
      </button>
    </form>
  );
}

AgeCalculatorForm.propTypes = {
  calculateAge: PropTypes.func.isRequired,
};
export default AgeCalculatorForm;
