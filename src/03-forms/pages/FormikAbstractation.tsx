import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'
import { TextInput, Checkbox, Select } from '../components';

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation Tutorial</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must contain 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(15, 'Must contain 15 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Email must be a valid email')
                        .required('Required'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Must accept terms and conditions'),
                    jobType: Yup.string()
                        .notOneOf(['it-jr'], 'This option is not allowed')
                        .required('Requried')
                })}
            >
                {
                    (formik) => (

                        <Form noValidate>
                            <TextInput
                                label='First Name'
                                name='firstName'
                                autoComplete="off"
                                placeholder='Alejandro'
                            />

                            <TextInput
                                label='Last Name'
                                name='lastName'
                                autoComplete="off"
                                placeholder='Vasquez'
                            />

                            <TextInput
                                label='Email Address'
                                name='email'
                                autoComplete="off"
                                placeholder='john@deer.com'
                            />


                            <Select label={'Job Type'} name='jobType' >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">It Jr.</option>
                            </Select>

                            <hr />
                            <Checkbox label="Terms & conditions" name="terms" />

                            <button type="submit">
                                Submit
                            </button>
                        </Form>

                    )
                }


            </Formik>


        </div>
    )
}