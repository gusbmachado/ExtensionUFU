import React from 'react';
import { Switch, useLocation, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  Login,
  Dashboard,
  NotFound,
  Register,
  Clients,
  Licenses,
  Devices,
  Profile,
} from '../pages';
import Route from './Route';

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location}>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/" exact isPrivate>
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" exact isPrivate>
          <Dashboard />
        </Route>
        <Route path="/clients" exact isPrivate>
          <Clients />
        </Route>
        <Route path="/licenses" exact isPrivate>
          <Licenses />
        </Route>
        <Route path="/devices" exact isPrivate>
          <Devices />
        </Route>
        <Route path="/profile" exact isPrivate>
          <Profile />
        </Route>
        <Route path="*" exact isPrivate>
          <NotFound />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
