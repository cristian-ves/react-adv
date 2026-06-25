import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import formJson from '../data/custom-form.json'
import { Select, TextInput } from '../components';

const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value;
    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required("This field is required");
        }

        if (rule.type === 'minLength') {
            const minNumber = (rule as any).value || 1;
            schema = schema.min(minNumber, `Min ${minNumber} characters or more`)
        }

        if (rule.type === 'email') {
            schema = schema.email('Must be a valid email')
        }

        // ...other rules
    }

    requiredFields[input.name] = schema;

}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
    return (
        <div>
            <h1>DynamicForm</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form noValidate>
                        {
                            formJson.map(({ label, name, type, placeholder, options }) => {

                                if (type === 'text' || type === 'password' || type === 'email')

                                    return (
                                        <TextInput
                                            label={label}
                                            name={name}
                                            type={type as any}
                                            placeholder={placeholder}
                                            key={name}
                                        />
                                    );

                                else if (type === 'select') {
                                    return (
                                        <Select
                                            key={name}
                                            label={label}
                                            name={name}
                                        >
                                            <option value="">Select an option</option>
                                            {options?.map(({ id, label }) => (
                                                <option key={id} value={id}>{label}</option>
                                            ))}
                                        </Select>
                                    )
                                }

                                throw new Error(`Type: ${type} not supported`)
                            })
                        }

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};