import React from 'react'
import Form from "../components/Form";

export const Auth = () => {
    const authFields = [{
        label: "Username: ",
        type: "text",
    },
    {
        label: "Password: ",
        type: "password",
    }]

    const registerFields = [{
        label: "Email:",
        type: "text",
    },{
        label: "Username:",
        type: "text",
    },
    {
        label: "Password: ",
        type: "password",
    },
    {
        label: "Confirm Password: ",
        type: "password",
    }]

    const handleLogin = () => {
        //learn firebase auth   
    }

    return (
        <div>
            <div>
                Sign In
                <Form fields={authFields} submit={handleLogin} submitText="Sign In" />
            </div>
            <div>
                Register
                <Form fields={registerFields} submit={handleLogin} submitText="Register" />
            </div>

        </div>
    )
}