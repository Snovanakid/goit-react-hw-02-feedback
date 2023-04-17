import s from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ onAddFeedback, state }) => {
  const feedbackTypes = Object.keys(state);

  return (
    <div className={s.buttonWrap}>
      {feedbackTypes.map((type) => (
        <button
          key={type}
          type="button"
          id={type}
          className={s.btn}
          onClick={onAddFeedback}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  onAddFeedback: PropTypes.func.isRequired,
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Feedback;