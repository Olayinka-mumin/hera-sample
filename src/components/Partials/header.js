import './style.scss';
import React from 'react';
import { useSelector } from 'react-redux';

const getSubstring = (user) => {
  const sub1 = user && user.firstName && user.firstName.substring(0, 1);
  const sub2 = user && user.lastName && user.lastName.substring(0, 1);
  return `${sub1 || ''}${sub2 || ''}`;
};

export default () => {
  const user = useSelector((s) => s.user);

  return (
    <section className="head-wrap">
      <div className="logo-wrap">
        <img
          className="logo"
          src="https://img1.wsimg.com/isteam/ip/9588e2bc-8edb-45a3-899e-1bfe97858dc8/Hera%20Logo.png/:/rs=w:432,h:400,cg:true,m/cr=w:432,h:400/qt=q:95"
          alt="logo"
        />
      </div>
      {user && user.firstName && (
        <div className="user-logo">
          <p className="logo-txt">{getSubstring(user)}</p>
        </div>
      )}
    </section>
  );
};
