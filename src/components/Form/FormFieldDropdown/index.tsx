interface Props {
    id: string,
    name: string,
    options: string[]
}

export default function FormFieldDropdown( props: Props ) {
    console.log(props.options)
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