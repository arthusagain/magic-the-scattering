import FormFieldDropdown from "../FormFieldDropdown"
import { useState, useId } from "react";

interface Props {
    id: string,
    name: string,
    options: string[]
}

export default function FormFieldTextList(props: Props) {
    const [listSize, setListSize] = useState(1);

    const handleIncreaseListSize = () => {
        setListSize(listSize + 1);
    };

    const handleDecreaseListSize = () => {
        if (listSize > 1) {
            setListSize(listSize - 1);
        }
    };

    /*if (props.options.length === 0) {
        listContent = <input type="text" id={props.id} name={props.name} />
    }
    else listContent = <FormFieldDropdown id={props.id} name={props.name} options={props.options} />;*/
    const listContent = props.options.length === 0 ? (
        <input type="text" id={props.id} name={props.name} />
    ) : (
        <FormFieldDropdown id={props.id} name={props.name} options={props.options} />
    );

    return (
        <>
            <ul>
                {Array.from({ length: listSize }, (_, index) => (
                    <li key={index}>{listContent}</li>
                ))}
            </ul>
            <button onClick={handleIncreaseListSize}>+</button>
            <button onClick={handleDecreaseListSize} disabled={listSize <= 1}>-</button>
        </>
    )
}