import { IFormField } from "@/types/formField";
import React from "react";
import Compare from "../FormFieldCompare";
import Dropdown from "../FormFieldDropdown";
import { useRef } from 'react';

interface Props {
    id: string,
    elementIndex: number,
    name: string,
    field: IFormField,
    updateForm: (idx: number, newValue: string) => void
}


export default function FormElement(props: Props) {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        //alert(props.key);
        console.log(`${props.elementIndex} = ${event.target.value}`);
        props.updateForm(props.elementIndex, event.target.value);
    }

    let inputType;
    switch (props.field.type) {
        case 'text':
            inputType = <input id={props.id} name={props.name} type={props.field.context} onChange={handleChange} />
            break;
        case 'select':
            inputType = <Dropdown id={props.id} name={props.name} options={props.field.context} />
            break;
        case 'checkbox':
            inputType = <input type="checkbox" />
            break;
        case 'compare':
            inputType = <Compare id={props.id} name={props.name} comparables={props.field.context} />
        default:
            inputType = <input type="text" />
            break;
    }

    return (
        <li>
            <div>
                <div>
                    {props.field.label}
                </div>
                <div>
                    {inputType}
                </div>
            </div>
        </li>
    )
}
