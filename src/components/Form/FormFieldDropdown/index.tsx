import { IContextArray, IContextDictionary } from "@/types/formField"

interface Props {
    id: string,
    name: string,
    context: IContextDictionary;
}

export default function FormFieldDropdown( props: Props ) {
    console.log(props.context.infoDictionary)
    return (
        <div>
            <select value = {props.context.info}>
                {Object.keys(props.context.infoDictionary).map((optionText, index) => (
                    <option key={index} value={props.context.infoDictionary[optionText]} >{optionText}</option>
                ))}
            </select>
        </div>
    )
}