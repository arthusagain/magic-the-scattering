import Dropdown from "../FormFieldDropdown"

interface Props {
    id: string,
    name: string,
    comparables: string[]
}

export default function FormFieldCompare(props: Props) {

    let compareOperator = [
        "equal to",
        "less than",
        "greater than",
        "less than or equal to",
        "greater than or equal to",
        "not equal to"
    ]
    let comparableID = `${props.id}_Comparable`;
    let operatorID = `${props.id}_Operator`;
    let comparableName = `${props.name}_Comparable`;
    let operatorName = `${props.name}_Operator`;

    return (
        <div>
            <Dropdown id={comparableID} name={comparableName} options={props.comparables}/>
            <Dropdown id={operatorID} name={operatorName} options={compareOperator}/>
            <input id ={props.id} name={props.name}  type="number" />
        </div>
    )
}