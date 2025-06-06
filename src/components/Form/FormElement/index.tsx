import { IContextArray, IContextDictionary, IFormField } from "@/types/formField";
import { arrayAsDictionary } from "@/types/formField";
import React from "react";
import FormFieldCompare from "../FormFieldCompare";
import FormFieldDropdown from "../FormFieldDropdown";
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


    function handleFormChange(newValue: string) {
        //alert(props.key);
        props.updateForm(props.elementIndex, newValue);
    }

    function handleTextInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        //alert(props.key);
        props.updateForm(props.elementIndex, event.target.value);
    }

    let inputType = <></>;
    console.log(props.field.context);
    switch (props.field.type) {
        case 'text':
            inputType = <input id={props.id} name={props.name} type={props.field.context.info} onChange={handleTextInputChange} />
            break;
        case 'select':
            if ( 'infoDictionary' in props.field.context) {
                inputType = <FormFieldDropdown id={props.id} name={props.name} updateState={handleFormChange}  context={props.field.context as IContextDictionary} />
            } else if ('infoList' in props.field.context) {
                inputType = <FormFieldDropdown id={props.id} name={props.name} updateState={handleFormChange} context={{ info: props.field.context.info, infoDictionary: arrayAsDictionary((props.field.context as IContextArray).infoList) }} />
            } else {
                inputType = <FormFieldDropdown id={props.id} name={props.name} updateState={handleFormChange} context={{ info: props.field.context.info, infoDictionary: arrayAsDictionary([]) }} />
            }
            break;
        case 'checkbox':
            if ('infoDictionary' in props.field.context) {
                inputType = <FormFieldOptions id={props.id} name={props.name} updateState={handleFormChange} labelsDict={props.field.context as IContextDictionary} />
            } else {
                inputType = <FormFieldOptions id={props.id} name={props.name} updateState={handleFormChange} labelsDict={{ info: props.field.context.info, infoDictionary: { [props.field.context.info]: props.field.context.info } }} />
            }
            break;
        case 'compare':
            if ('infoList' in props.field.context) {
                inputType = <FormFieldCompare id={props.id} name={props.name}  updateState={handleFormChange} comparables={props.field.context as IContextArray} />
            }
            else {
                inputType = <FormFieldCompare id={props.id} name={props.name} updateState={handleFormChange} comparables={{ info: props.field.context.info, infoList: [] }} />
            }
            break;
        case 'file':
            if ('infoList' in props.field.context) {
                inputType = <FormFileUpload id={props.id} name={props.name} updateState={handleFormChange} accept={(props.field.context as IContextArray).infoList} />
            } else {
                inputType = <FormFileUpload id={props.id} name={props.name} updateState={handleFormChange} accept={[props.field.context.info]} />

            }
            break;
        case 'symbol':
            if ('infoDictionary' in props.field.context) {
                inputType = <FormFieldSymbol id={props.id} name={props.name} updateState={handleFormChange} symbolDictionary={props.field.context as IContextDictionary} />
            }
            else if ('infoList' in props.field.context) {
                inputType = <FormFieldSymbol id={props.id} name={props.name} updateState={handleFormChange} symbolDictionary={{ info: props.field.context.info, infoDictionary: arrayAsDictionary((props.field.context as IContextArray).infoList) }} />
            }
            else {
                inputType = <FormFieldSymbol id={props.id} name={props.name} updateState={handleFormChange} symbolDictionary={{ info: props.field.context.info, infoDictionary: arrayAsDictionary([]) }} />
            }
            break;
        case 'textList':
            if ('infoDictionary' in props.field.context) {
                inputType = <FormFieldTextList id={props.id} name={props.name} updateState={handleFormChange} context={props.field.context as IContextDictionary} />
            } else if ('infoList' in props.field.context) {
                inputType = <FormFieldTextList id={props.id} name={props.name} updateState={handleFormChange} context={{ info: props.field.context.info, infoDictionary: arrayAsDictionary((props.field.context as IContextArray).infoList) }} />
            } else {
                inputType = <FormFieldTextList id={props.id} name={props.name} updateState={handleFormChange} context={{ info: props.field.context.info, infoDictionary: arrayAsDictionary([]) }} />
            }
            break;
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
