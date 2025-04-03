import React from 'react'
import Form from "../components/Form";
import FormTemplates from "../components/Form/FormTemplates.json";
import { IFormField } from "@/types/formField";
import style from "./auth.module.scss"

const authTemplateData = FormTemplates.login;
const registerTemplateData = FormTemplates.register;

const authTemplate = authTemplateData.fields as IFormField[];
const registerTemplate = registerTemplateData.fields as IFormField[];

const Auth = () => {

    const handleLogin = () => {
        //learn firebase auth   
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
                <Form fields={registerTemplate} submit={handleLogin} submitText="Register" />
            </div>

        </div>
    )
}

export default Auth;