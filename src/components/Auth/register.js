import './style.scss';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Btn from '../Partials/button';
import CustomToast from '../Partials/toast';
import Input, { ErrorTxt } from '../Partials/input';
import { signUpAction } from '../../js/actions/userActions';

const fetchEmailError = (error) => (error && error.errors
    && error.errors.email
  && error.errors.email.length
  ? error.errors.email[0]
  : '');

const Register = ({
  signUp,
  error,
  loading,
}) => {
  const [toastEnabled, setToastEnabled] = useState(false);
  const submit = (values) => signUp(values);

  useEffect(() => {
    setToastEnabled(!!error);
  }, [error]);

  return (
    <section>
      {toastEnabled && (
        <CustomToast message="Failed" title={error} close={() => setToastEnabled(false)} />
      )}
      <section className="wrap">
        <div className="inner-box">
          <p className="title">Welcome to HERA!</p>
          <p className="detail-txt">
            Join our community, and get assistance from your comfort zone.
          </p>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
              agree: false,
            }}
            onSubmit={submit}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().required('This field is required'),
              lastName: Yup.string().required('This field is required'),
              email: Yup.string().email('Invalid email').required('This field is required'),
              password: Yup.string().min(6, 'Password should be more than 5 characters').required('This field is required'),
              confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required('Re-Enter password'),
              agree: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
            })}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              touched,
              errors,
            }) => (
              <>
                <div className="input-wrap">
                  <Input
                    type="text"
                    label="First Name"
                    value={values.firstName}
                    change={handleChange}
                    name="firstName"
                  />
                  {touched.firstName && errors.firstName && (
                    <ErrorTxt error={errors.firstName} />
                  )}
                </div>
                <div className="input-wrap">
                  <Input
                    type="text"
                    label="Last Name"
                    value={values.lastName}
                    change={handleChange}
                    name="lastName"
                  />
                  {touched.lastName && errors.lastName && (
                    <ErrorTxt error={errors.lastName} />
                  )}
                </div>
                <div className="input-wrap">
                  <Input
                    type="email"
                    label="Email Address"
                    value={values.email}
                    change={handleChange}
                    name="email"
                  />
                  {touched.email && errors.email && (
                    <ErrorTxt error={errors.email} />
                  )}
                </div>
                <div className="input-wrap">
                  <Input
                    type="password"
                    label="Password"
                    value={values.password}
                    change={handleChange}
                    name="password"
                  />
                  {touched.password && errors.password && (
                    <ErrorTxt error={errors.password} />
                  )}
                </div>
                <div className="input-wrap">
                  <Input
                    type="password"
                    label="Re-enter Password"
                    value={values.confirmPassword}
                    change={handleChange}
                    name="confirmPassword"
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <ErrorTxt error={errors.confirmPassword} />
                  )}
                </div>
                <div className="agree-wrap">
                  <span className="agree-txt">I agree to Terms of Service</span>
                  <input
                    type="checkbox"
                    id="hera-check"
                    name="agree"
                    onChange={handleChange}
                    value={values.agree}
                    checked={values.agree}
                  />
                </div>
                {touched.agree && errors.agree && (
                  <ErrorTxt error={errors.agree} />
                )}
                <div className="btn-wrap">
                  <Btn
                    type="submit"
                    loading={loading}
                    press={handleSubmit}
                    title="Register"
                  />
                </div>
              </>
            )}
          </Formik>
        </div>
      </section>
    </section>
  );
};

Register.propTypes = {
  signUp: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

Register.defaultProps = {
  error: '',
};

const mapStateToProps = (state) => {
  const {
    errors: { signUpError },
    loading: { isSignUpLoading },
  } = state;
  return {
    loading: isSignUpLoading,
    error: fetchEmailError(signUpError),
  };
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(signUpAction(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
