import propTypes from 'prop-types';

export default FeedbackOptions = (props) => {
  const {option, onLeaveFeedback} = props;
  return (
    <button type="button" onClick={onLeaveFeedback}>
      {option}
    </button>
  );
}

FeedbackOptions.propTypes = {
  option: propTypes.oneOf(['Good', 'Bad', 'Neutral']).isRequired,
  onLeaveFeedback: propTypes.func.isRequired
};