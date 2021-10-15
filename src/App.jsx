import React, { lazy, Suspense, useEffect } from "react";
import AppBar from "./components/AppBar/AppBar";
import './App.css';
import { Redirect, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
const HomeView = lazy(() => import('./components/HomeView/HomeView'))
const Login = lazy(() => import('./components/Login/Login'));
const Register = lazy(() => import('./components/Register/Register'));
const Contacts = lazy(() => import('./components/Contacts/Contacts'));

function App() {
  const dispatch = useDispatch();
  let fetchingCurrentUser = useSelector(authSelectors.getFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !fetchingCurrentUser &&
        <>
          <AppBar />
          
          <Switch>
            <Suspense fallback={<p>Loading</p>}>
              <PublicRoute exact path="/">
                <HomeView/>
              </PublicRoute>
              <PublicRoute path="/login" restricted>
                <Login/>
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <Register/>
              </PublicRoute>
              <PrivateRoute path="/contacts">
                <Contacts/>
              </PrivateRoute>
              <Redirect to="/"/>
            </Suspense>
          </Switch>
        </>
    )
}

export default App;
