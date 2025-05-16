import React from "react";
import style from "./form.module.scss"
import { IFormField } from "@/types/formField";
import FormElement from "./FormElement";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    fields: IFormField[],
    submit: (values: { [key: string]: string }) => void
    submitText: string
}

export default function Form({ fields, submit, submitText }: Props) {

    if (!Array.isArray(fields)) {
        throw new Error(typeof fields);
    }

    const formAnswers = new Array(fields.length).fill('');
    let submitedValues = '';

    const updateField = (idx: number, newValue: string) => {
        formAnswers[idx] = newValue;
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
        submitedValues = formAnswers.toString();
        //submit(values);
    };

    return (
        <form onSubmit={handleSubmit} className={style.formContainer} >
            <ul className={style.formContentList}>
                {fields.map(field =>

                    <FormElement id={uuidv4()} name={field.label} key={field.label} field={field} updateForm={updateField}/>)}
            </ul>
            <button type="submit" className={style.submitButton}>{submitText}</button>
        </form>

    )
}