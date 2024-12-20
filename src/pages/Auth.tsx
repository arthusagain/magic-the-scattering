import React from 'react'
import Form from "../components/Form";

export const Auth = () => {
    const formFields = [{
        label: "Login",
        type: "text",
    },
    {
        label: "Password",
        type: "password",
    }]

    const handleLogin = () => { 
     //learn firebase auth   
    }

    return (
        <>
            <Form fields={formFields} submit={handleLogin} submitText="Login" />
        </>
    )
}