import Dropdown from "../FormFieldDropdown"

export default function FormFieldCompare({comparables}: {comparables: string[]}) {

    let compareOperator = [
        "equal to",
        "less than",
        "greater than",
        "less than or equal to",
        "greater than or equal to",
        "not equal to"
    ]

    return (
        <div>
            <Dropdown options={comparables}/>
            <Dropdown options={compareOperator}/>
            <input type="number" />
        </div>
    )
}