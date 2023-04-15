import s from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({onAddFeedback}) => {
    return (
        <div className={s.buttonWrap}>
            <button
                type="button"
                id="good"
                className={s.btn}
                onClick={onAddFeedback}
            >
                Good
            </button>
            <button
                type="button"
                id="neutral"
                className={s.btn}
                onClick={onAddFeedback}
            >
                Neutral
            </button>
            <button
                type="button"
                id="bad"
                className={s.btn}
                onClick={onAddFeedback}
            >
                Bad
            </button>
        </div>
    )
}

Feedback.propTypes = {
    onAddFeedback: PropTypes.func.isRequired,
};

export default Feedback;