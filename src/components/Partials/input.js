import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  type,
  name,
  placeholder,
  plain,
  value,
  change,
}) => (
  <div>
    <label className="label" htmlFor={name}>{label && label}</label>
    <input
      className="input"
      id={name}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={
        plain
          ? (e) => change(e.target.value)
          : change
      }
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  plain: PropTypes.bool,
  change: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  plain: false,
};

export const ErrorTxt = ({ error }) => (<span className="errorTxt">{error}</span>);

ErrorTxt.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Input;
