import React from "react";
import style from "./form.module.scss"
import { IFormField } from "@/types/formField";
import FormElement from "./FormElement";

interface Props {
    fields: IFormField[],
    submit: () => void
    submitText: string
}

export default function Form({ fields, submit, submitText }: Props) {
    if (!Array.isArray(fields)) {
        throw new Error(typeof fields);
    }
    return (
        <form>
            <ul>
                {fields.map(field =>
                    <FormElement id={field.label} name={field.label} key={field.label} field={field}/>)}
            </ul>
            <button onClick={submit}>{submitText}</button>
        </form>
    )
}