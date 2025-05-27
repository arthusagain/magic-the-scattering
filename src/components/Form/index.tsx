'use client'
import React from "react";
import style from "./form.module.scss"
import { IFormField } from "@/types/formField";
import FormElement from "./FormElement";
import { useId, useState } from "react";

interface Props {
    fields: IFormField[],
    submit: (values: Array<string>) => void
    submitText: string
}

export default function Form({ fields, submit, submitText }: Props) {

    if (!Array.isArray(fields)) {
        throw new Error(typeof fields);
    }

    const [formAnswers, setFormAnswers] = useState(new Array<string>(fields.length).fill(''));

    const updateField = (idx: number, newValue: string) => {
        const newFormAnswers = [...formAnswers];
        newFormAnswers[idx] = newValue;
        setFormAnswers(newFormAnswers);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submit(formAnswers);
    };

    return (
        <form onSubmit={handleSubmit} className={style.formContainer} >
            <ul className={style.formContentList}>
                {fields.map((field, index) =>
                    <FormElement id={useId()} name={field.label} elementIndex={index} field={field} updateForm={updateField} />)}
            </ul>
            <button type="submit" className={style.submitButton}>{submitText}</button>

        </form>
    )
}