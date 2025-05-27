import React from 'react'
import Form from "../../components/Form";
import FormTemplates from "../../components/Form/FormTemplates.json";
import { IFormField } from "@/types/formField";
import style from "./auth.module.scss"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../app/firebase';

const authTemplateData = FormTemplates.login;
const registerTemplateData = FormTemplates.register;

const authTemplate = authTemplateData.fields as IFormField[];
const registerTemplate = registerTemplateData.fields as IFormField[];

const Auth = () => {

    const handleLogin = (values: string[]) => {
        const email = values[0];
        const password = values[1];
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Signed In");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error ${errorCode}: ${errorMessage}
                    Email: ${email} Password: ${password}`);
                return
            });
    }

    const handleRegister = (values: string[]) => {
        const email = values[0];
        const password = values[1];
        const confirmPassword = values[2];
        alert(`Email: ${email}
                Password: ${password}
                Confirm Password: ${password}`);
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Signed Up");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error ${errorCode}: ${errorMessage}
                    Email: ${email} Password: ${password}`);
                return
            });
    }


    return (
        <div className={style.authContainer}>
            <div className={style.signInContainer}>
                <p>Sign In</p>
                <Form fields={authTemplate} submit={handleLogin} submitText="Sign In" />
            </div>
            <div className={style.divider}></div>
            <div className={style.registerContainer}>
                <p>Register</p>
                <Form fields={registerTemplate} submit={handleRegister} submitText="Register" />
            </div>

        </div>
    )
}

export default Auth;