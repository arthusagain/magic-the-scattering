import React from "react";
import style from "./form.module.scss"
import { IFormField } from "@/types/formField";
import FormElement from "./FormElement";

interface Props {
    fields: IFormField[],
    submit: (values: { [key: string]: string }) => void
    submitText: string
}

export default function Form({ fields, submit, submitText }: Props) {

    if (!Array.isArray(fields)) {
        throw new Error(typeof fields);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        /*const values = fields.reduce((acc: { [key: string]: string }, field) => {
            acc[field.label] = (event.target as HTMLFormElement)[field.label].value;
            return acc;
        }, {});
        submit(values);*/
        const values = Object.fromEntries(fields.map((field) => {
            const element = document.getElementById(field.label);
            if (element instanceof HTMLInputElement) {
                return [field.label, element.value];
            } else {
                return [field.label, ''];
            }
        }));
        submit(values);
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {fields.map(field =>
                    <FormElement id={field.label} name={field.label} key={field.label} field={field} />)}
            </ul>
            <button type="submit" >{submitText}</button>
        </form>
    )
}