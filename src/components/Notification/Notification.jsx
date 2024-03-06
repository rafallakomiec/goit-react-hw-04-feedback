import propTypes from 'prop-types';

export const Notification = props => {
  const { message } = props;
  return <p>{message}</p>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
