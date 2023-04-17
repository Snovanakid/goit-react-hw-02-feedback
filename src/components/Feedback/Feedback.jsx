import s from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ onAddFeedback }) => {
const state = {
    good: 0,
    neutral: 0,
    bad: 0,
}

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
};

export default Feedback;