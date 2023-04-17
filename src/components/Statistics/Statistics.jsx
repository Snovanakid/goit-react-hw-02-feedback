import s from './Statistics.module.css';
// import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({stat, total, positiveFeedbackPercentage}) => {
    const { good, neutral, bad } = stat
    return (
        <div>
            
                    <p>
                        Good:
                        <span className={s.statNumber}>{good}</span>
                    </p>
                    <p>  
                        Neutral:
                        <span className={s.statNumber}>{neutral}</span>
                    </p>
                    <p>
                        Bad:
                        <span className={s.statNumber}>{bad}</span>
                    </p>
                    <p>
                        Total:
                        <span className={s.statNumber}>{total}</span>
                    </p>  
                    <p>
                        Positive feedback:
                        <span className={s.statNumber}>
                            {positiveFeedbackPercentage}%
                        </span>
                    </p>
            
        </div>
    );
}

Statistics.propTypes = {
    stat: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    total: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;