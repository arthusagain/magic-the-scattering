export default function FormFieldDropdown( {options}: {options: string[]} ) {
    return (
        <div>
            <select>
                {options.map((option, index) => (
                    <option key={index}>{option}</option>
                ))}
            </select>
        </div>
    )
}