import { Suspense } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { routes } from "./routes";

import logo from "../logo.svg";

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React logo" />
                        <ul>
                            {routes.map((route) => (
                                <li key={route.to}>
                                    <NavLink
                                        to={route.to}
                                        className={({ isActive }) =>
                                            isActive ? "nav-active" : ""
                                        }
                                    >
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <Routes>
                        {routes.map((route) => (
                            <Route
                                key={route.to}
                                path={route.path}
                                element={<route.Component />}
                            />
                        ))}

                        <Route
                            path="/*"
                            element={<Navigate to="/lazy1" replace />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};
