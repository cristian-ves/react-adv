import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { TextInput } from '../components';

import '../styles/styles.css'

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must contain 15 characters or less')
                        .min(2, 'Must contain 2 characters or more')
                        .required('Required'),
                    email: Yup.string()
                        .email('Email must be a valid email')
                        .required('Required'),
                    password1: Yup.string()
                        .min(2, 'Must contain 6 characters or more')
                        .required('Required'),
                    password2: Yup.string()
                        .oneOf([Yup.ref('password1')], 'Passwords must match')
                        .required('Required'),
                })}
            >
                {
                    ({ handleReset }) => (

                        <Form noValidate>

                            <TextInput
                                label='Name'
                                name='name'
                                autoComplete="off"
                                placeholder='Alejandro'
                            />

                            <TextInput
                                label='Email'
                                name='email'
                                autoComplete="off"
                                placeholder='email@email.com'
                            />

                            <TextInput
                                label='Password'
                                name='password1'
                                type='password'
                            />

                            <TextInput
                                label='Confirm password'
                                type='password'
                                name='password2'
                            />

                            <button type="submit">
                                Create
                            </button>
                            <button type="submit" onClick={handleReset}>
                                Reset Form
                            </button>
                        </Form>
                    )}

            </Formik>
        </div >);
};
