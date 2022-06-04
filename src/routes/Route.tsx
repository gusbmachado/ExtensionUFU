import React from 'react';
import {
  Route as ReactRoute,
  RouteProps as ReactRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../providers/Auth/AuthProvider';

export interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
}

const Route: React.FC<RouteProps> = ({ isPrivate, ...rest }: RouteProps) => {
  const { getCredentials } = useAuth();
  const { token } = getCredentials();
  if (isPrivate && !token) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: rest.location },
        }}
      />
    );
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ReactRoute {...rest} />;
};

export default Route;
