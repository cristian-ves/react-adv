import { BrowserRouter, NavLink, Routes, Route, Navigate } from "react-router-dom";

import {
    FromikBasicPage,
    FromikComponents,
    FromikYupPage,
    RegisterPage,
    FormikAbstractation,
    RegisterFormikPage,
    DynamicForm,
} from "../03-forms/pages";

import logo from "../logo.svg";

export const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React logo" />
                        <ul>
                            <li>
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Register
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/formik-basic"
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Formik Basic
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/formik-yup"
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Formik Yup
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/formik-components"
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Formik Components
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/formik-abstractation"
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Formik Abstractation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/formik-register"
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Register formik
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dynamic-form"
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Dynamic Form
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/users"
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Users
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="about" element={<h1>about page</h1>} />
                        <Route path="formik-basic" element={<FromikBasicPage />} />
                        <Route path="formik-yup" element={<FromikYupPage />} />
                        <Route path="formik-components" element={<FromikComponents />} />
                        <Route path="formik-abstractation" element={<FormikAbstractation />} />
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="formik-register" element={<RegisterFormikPage />} />
                        <Route path="dynamic-form" element={<DynamicForm />} />

                        <Route
                            path="/*"
                            element={<Navigate to="/register" replace />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};
