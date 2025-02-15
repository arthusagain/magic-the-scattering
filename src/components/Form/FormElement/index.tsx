import { FieldType, IFormField } from "@/types/formField";
import React from "react";
import Compare from "../FormFieldCompare";
import Dropdown from "../FormFieldDropdown";

export default function FormElement({ field }: { field: IFormField }) {

    let inputType;
    switch (field.type) {
        case FieldType.text:
            inputType = <input type={field.context}/>
            break;
        case FieldType.select:
            inputType = <Dropdown options={field.context} />
            break;
        case FieldType.checkbox:
            inputType = <input type="checkbox" />
            break;
        case FieldType.compare:
            inputType = <Compare comparables={field.context} />
        default:
            inputType = <input type="text" />
            break;
    }

    return (
        <li>
            <div>
                <div>
                    {field.label}
                </div>
                <div>
                    {inputType}
                </div>
            </div>
        </li>
    )
}
