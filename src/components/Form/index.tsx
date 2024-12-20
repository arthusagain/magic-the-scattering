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
    return (
        <form>
            <ul>
                {fields.map(field =>
                    <FormElement key={field.label} field={field}/>)}
            </ul>
            <button onClick={submit}>{submitText}</button>;
        </form>
    )
}