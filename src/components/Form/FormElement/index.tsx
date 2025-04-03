import { FieldType, IFormField } from "@/types/formField";
import React from "react";
import Compare from "../FormFieldCompare";
import Dropdown from "../FormFieldDropdown";

interface Props {
    id: string,
    name: string,
    field: IFormField
}

export default function FormElement(props: Props) {

    let inputType;
    switch (props.field.type) {
        case 'text':
            inputType = <input id ={props.id} name={props.name} type={props.field.context}/>
            break;
        case 'select':
            inputType = <Dropdown id ={props.id} name={props.name} options={props.field.context} />
            break;
        case 'checkbox':
            inputType = <input type="checkbox" />
            break;
        case 'compare':
            inputType = <Compare id ={props.id} name={props.name} comparables={props.field.context} />
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
