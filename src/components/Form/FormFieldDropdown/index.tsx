interface Props {
    id: string,
    name: string,
    options: string[]
}

export default function FormFieldDropdown( props: Props ) {
    return (
        <div>
            <select>
                {props.options.map((option, index) => (
                    <option key={index}>{option}</option>
                ))}
            </select>
        </div>
    )
}