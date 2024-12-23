import { FieldType, IFormField } from "@/types/formField";

export default function FormElement({ field }: { field: IFormField }) {
    let compareStat = [
        "Mana value",
        "Power",
        "Toughness",
        "Loyalty"
    ]
    
    let compareOperator = [
        "equal to",
        "less than",
        "greater than",
        "less than or equal to",
        "greater than or equal to",
        "not equal to"
    ]

    let inputType;
    switch (field.type) {
        case FieldType.text:
            inputType = <input type="text" />
            break;
        case FieldType.password:
            inputType = <input type="password" />
            break;
        case FieldType.select:
            inputType = <select></select>
            break;
        case FieldType.checkbox:
            inputType = <input type="checkbox" />
            break;
        case FieldType.compare:
            inputType = <input type="text" />
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
