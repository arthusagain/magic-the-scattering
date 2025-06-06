import { IContextArray, IContextDictionary } from "@/types/formField"

interface Props {
    id: string,
    name: string,
    context: IContextDictionary;
    updateState: (newState: string) => void
}

export default function FormFieldDropdown( props: Props ) {
    console.log(props.context.info)
    console.log(props.context.infoDictionary)

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        props.updateState(event.target.value);
    }

    return (
        <div>
            <select onChangeCapture={handleChange} id={props.id} name={props.name} value = {props.context.info} onChange={handleChange}>
                {Object.keys(props.context.infoDictionary).map((optionText, index) => (
                    <option key={index} value={props.context.infoDictionary[optionText]} >{optionText}</option>
                ))}
            </select>
        </div>
    )
}