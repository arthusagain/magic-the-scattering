import React from "react";
import style from "./form.module.scss"
import { IFormField } from "@/types/formField";

interface Props {
    fields: IFormField[],
    submit: () => void
    submitText: string
}
export default function Form({ fields, submit, submitText }: Props) {
    return (
        <form>
            <ul>
                {fields.map(field =>
                    <li key={field.label}>{field.label}</li>)}
            </ul>
            <button onClick={submit}>{submitText}</button>;
        </form>
    )
}