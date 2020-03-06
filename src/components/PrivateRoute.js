import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
          {...rest}
          render = {() => {
              return window.localStorage.getItem('token') ?
              (<Component />) : (<Redirect to = 'sign-in' />);
          }}
        />  
    );
}

export default PrivateRoute;