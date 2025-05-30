import { IFormField } from "@/types/formField";
import React from "react";
import Compare from "../FormFieldCompare";
import Dropdown from "../FormFieldDropdown";
import FormFieldOptions from "../FormFieldOptions";
import FormFileUpload from "../FormFileUpload";
import FormFieldSymbol from "../FormFieldSymbol";
import FormFieldTextList from "../FormFieldTextList";

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
        props.updateForm(props.elementIndex, event.target.value);
    }

    let inputType = <></>;
    switch (props.field.type) {
        case 'text':
            inputType = <input id={props.id} name={props.name} type={props.field.context.toString()} onChange={handleChange} />
            break;
        case 'select':
            inputType = <Dropdown id={props.id} name={props.name} options={props.field.context} />
            break;
        case 'checkbox':
            inputType = <FormFieldOptions id={props.id} name={props.name} labels={props.field.context} />
            //inputType = <input type="checkbox" id={props.id} name={props.name} onChange={handleChange}/>
            break;
        case 'compare':
            inputType = <Compare id={props.id} name={props.name} comparables={props.field.context} />
            break;
        case 'file':
            inputType = <FormFileUpload id={props.id} name={props.name} accept={props.field.context.toString()} />
            break;
        case 'symbol':
            inputType = <FormFieldSymbol id={props.id} name={props.name} symbolDictionary={props.field.context} />
            break;
        case 'textList':
            inputType = <FormFieldTextList id={props.id} name={props.name} options={props.field.context} />
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
