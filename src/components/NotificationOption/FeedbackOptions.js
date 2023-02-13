import {
  FeedbackOptionsList,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {options.map(key => {
        return (
          <FeedbackOptionsButton
            type="button"
            key={key}
            onClick={() => onLeaveFeedback(key)}
          >
            {key}
          </FeedbackOptionsButton>
        );
      })}
    </FeedbackOptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
