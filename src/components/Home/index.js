import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import './styles.scss';
import Btn from '../Partials/button';
import { logOutAction } from '../../js/actions/userActions';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);

  const signOut = () => dispatch(logOutAction());

  return (
    <Container fluid className="home-container">
      <div>
        <h1>Hello, {user && user.fullName}!</h1>
      </div>
      <div>
        <h3>Welcome To HERA!</h3>
      </div>
      <div className="btn-spacer">
        <Btn loading={false} press={signOut} title="Sign Out" />
      </div>
    </Container>
  );
};

export default Home;
