import ProgressBar from "react-bootstrap/ProgressBar";
import PropTypes from "prop-types";

export default function WithLabelExample({ progressRate, skillName }) {
  const now = progressRate;
  return (
    <>
      <h6>{skillName}</h6>
      <div className="d-flex align-items-center">
        <ProgressBar now={now} className="flex-grow-1 mr-2" />
        <span>{`${now}%`}</span>
      </div>
    </>
  );
}

WithLabelExample.propTypes = {
  progressRate: PropTypes.string.isRequired,
  skillName: PropTypes.string.isRequired,
};
