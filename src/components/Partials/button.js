import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({
  loading,
  press,
  disabled,
  title,
  type,
}) => (
  <button
    /* eslint-disable-next-line react/button-has-type */
    type={type}
    className={`custom-btn ${loading && 'loading'} ${disabled && disabled}`}
    disabled={disabled}
    onClick={loading || disabled ? () => {} : press}
  >
    {loading ? 'Please wait..' : title}
  </button>
);

Btn.propTypes = {
  loading: PropTypes.bool.isRequired,
  press: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

Btn.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Btn;
