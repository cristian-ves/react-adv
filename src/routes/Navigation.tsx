import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

import logo from '../logo.svg';
import { routes } from "../01-lazyload/routes/routes";


export const Navigation = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink to={path} activeClassName="nav-active" exact>{name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Switch>
            {routes.map(({ path, component: Component }) => (
              <Route path={path} key={path}>
                <Component />
              </Route>
            ))}

            <Redirect to={routes[0].path} />

          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}
