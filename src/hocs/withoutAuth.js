import React from 'react';
import { Redirect } from 'react-router-dom';

export default function withoutAuth(Component) {
  const displayName = `withAuth(${Component.displayName})`;
  const C = (props) => {
    const token = localStorage.getItem('token');

    if (token !== null) {
      return <Redirect to="/" />;
    }

    return <Component {...props} token={token} />;
  };

  C.displayName = displayName;

  return C;
}
