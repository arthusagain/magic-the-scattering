import { IContextArray } from "@/types/formField";
import FormFieldDropdown from "../FormFieldDropdown"
import { useRef, useState, useEffect } from "react";
import { arrayAsDictionary } from "@/types/formField";

interface Props {
    id: string,
    name: string,
    comparables: IContextArray
    updateState: (newState: string) => void
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

    const comparableID = `${props.id}_Comparable`;
    const operatorID = `${props.id}_Operator`;
    const comparableName = `${props.name}_Comparable`;
    const operatorName = `${props.name}_Operator`

    const inputRef = useRef<HTMLInputElement>(null);
    const [selComparable, setComparable] = useState<string>("");
    const [selOperator, setOperator] = useState<string>("");
    useEffect(() => {
        handleFormChange();
    }, [selComparable, selOperator]);


    function handleFormChange() {
        let newValue = `${selComparable} ${selOperator} ${inputRef.current?.value}`
        //alert(props.key);
        props.updateState(newValue);
    }

    return (
        <div>
            <FormFieldDropdown id={comparableID} name={comparableName} context={ {info: "Select", infoDictionary: arrayAsDictionary(props.comparables.infoList)} } updateState={setComparable} />
            <FormFieldDropdown id={operatorID} name={operatorName} context={ {info: "Select", infoDictionary: arrayAsDictionary(compareOperator)} } updateState={setOperator} />
            <input id ={props.id} name={props.name}  type="number" onChange={handleFormChange} ref={inputRef} />
        </div>
    )
}