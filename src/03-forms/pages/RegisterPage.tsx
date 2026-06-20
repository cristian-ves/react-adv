
import { useForm } from '../hooks/useForm';

import '../styles/styles.css'

export const RegisterPage = () => {

    const { name, email, password1, password2, onChange, onSubmit, resetForm, isValidEmail } = useForm({
        name: "",
        email: "",
        password1: "",
        password2: "",
    });



    return (<div>
        <h1>Register Page</h1>

        <form noValidate onSubmit={onSubmit}>
            <input
                onChange={onChange}
                type="text"
                value={name}
                placeholder="name"
                name="name"
                className={`${name.trim().length <= 0 && 'has-error'}`}
            />
            {name.trim().length <= 0 && <span>This field is required</span>}
            <input
                onChange={onChange}
                type="email"
                value={email}
                placeholder="Email"
                name='email'
                className={`${!isValidEmail(email) && 'has-error'}`}
            />
            {!isValidEmail(email) && <span>Email is not vailid</span>}

            <input
                onChange={onChange}
                type="password"
                value={password1}
                placeholder="Password"
                name='password1'
            />
            {password1.trim().length <= 0 && <span>This field is required</span>}
            {password1.trim().length < 6 && password1.trim().length > 0 && <span>The paassword must contain at least 6 characters</span>}

            <input
                onChange={onChange}
                type="password"
                value={password2}
                placeholder="Repeat password"
                name='password2'
            />
            {password2.trim().length <= 0 && <span>This field is required</span>}
            {password2.trim().length > 0 && password2 !== password2 && <span>Passwords must be equal</span>}

            <button type="submit">Create</button>

            <button type="button" onClick={resetForm}>Reset</button>
        </form>
    </div>);
};
