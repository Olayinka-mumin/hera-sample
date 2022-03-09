import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const CustomToast = ({ title, message, close }) => (
  <Alert variant="danger" onClose={close} dismissible>
    <Alert.Heading>{message}</Alert.Heading>
    <p>
      {title}
    </p>
  </Alert>
);

CustomToast.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default CustomToast;
