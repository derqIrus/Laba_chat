import { ValidationErrors } from "final-form";
// @ts-ignore
import React from "react";
import { Form as FinalForm, Field } from 'react-final-form'
import { ValidationError } from "yup";
// @ts-ignore
import styles from "./Form.css";
import * as yup from 'yup';
import {Link, useNavigate, useParams} from "react-router-dom";

type FormValues = {
    login: string;
    password: string;
}

const validationSchema = yup.object({
    login: yup
        .string()
        .matches(/^([a-z0-9]{6,20})$/, "Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.")
        .required("Логин не может быть пустым."),
    password: yup
        .string()
        .required("Пароль не может быть пустым."),
});

const validate = async (
    values: FormValues
): Promise<ValidationErrors | undefined> => {
    try {
        await validationSchema.validate(values, {abortEarly: false})
    } catch (error: any) {
        const errors: { [value: string]: string } = {};
        error.inner.forEach((e: ValidationError) => {
            if (e.path) {
                errors[e.path] = e.message;
            }
        });
        return errors;
    }
}



export default function Form() {

    const navigate = useNavigate();

    const onSubmit = (values: FormValues) => {
        // отправка данных на сервер
        console.log(values);

        navigate(`Loged/${values.login}`)
    };

    return <>

        <FinalForm
            onSubmit={onSubmit}
    validate={validate}
    render={({handleSubmit}) => (
        <form onSubmit={handleSubmit}>

        <Field name="login">
            {({input, meta}) => (
        <div>
            <label>Логин:
    <input  type="text" {...input} placeholder="Логин"/>
        </label>
    {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
        </div>
    )}
    </Field>
    <Field name="password">
        {({input, meta}) => (
        <div>
            <label>Пароль:
    <input type="password" {...input} placeholder="Пароль"/>
        </label>
    {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
        </div>
    )}
    </Field>
    <button type="submit">Войти</button>
        </form>
)}>
    </FinalForm>
        <p>
            <Link to="/">Go to the home page</Link>
        </p>
    </>;
}