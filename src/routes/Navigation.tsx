import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import logo from '../logo.svg';
import { routes } from "../01-lazyload/routes/routes";


export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            {routes.map(({path, name}) => (
              <li>
                <NavLink to={path} activeClassName="nav-active" exact>{name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          {routes.map(({path, Component}) => (
            <Route path={path}>
              <Component/>
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}
