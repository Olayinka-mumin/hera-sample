import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, useHistory } from 'react-router-dom';
import PublicRouteContainer from 'containers/PublicRouteContainer';
import AuthenticatedRouteContainer from 'containers/AuthenticatedRouteContainer';
import HomeContainer from 'containers/HomeContainer';
import RegisterContainer from 'containers/AuthContainer/register';
import { clearErrorsAction } from 'js/actions/errorActions';
import { resetLoadingAction } from 'js/actions/loadingActions';

const RootContainer = (props) => {
  const { clearErrors, resetLoading } = props;

  const history = useHistory();

  useEffect(() => history.listen(() => {
    clearErrors();
    resetLoading();
  }), []);

  return (
    <div className="full-height">
      <Switch>
        <AuthenticatedRouteContainer path="/home">
          <HomeContainer />
        </AuthenticatedRouteContainer>
        <PublicRouteContainer path="/">
          <RegisterContainer />
        </PublicRouteContainer>
      </Switch>
    </div>
  );
};

RootContainer.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  resetLoading: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrorsAction()),
  resetLoading: () => dispatch(resetLoadingAction()),
});

export default connect(
  null,
  mapDispatchToProps,
)(RootContainer);
