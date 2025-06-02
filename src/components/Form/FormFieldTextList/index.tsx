import { list } from "postcss";
import FormFieldDropdown from "../FormFieldDropdown"
import { useState, useId } from "react";
import { IContextDictionary } from "@/types/formField";

interface Props {
    id: string,
    name: string,
    context: IContextDictionary
}

export default function FormFieldTextList(props: Props) {
    const [listSize, setListSize] = useState(1);
    const listLimit = (props.context.info === undefined || isNaN(parseInt(props.context.info)))? undefined:parseInt(props.context.info);   
    const handleIncreaseListSize = () => {
        if ((listLimit === undefined) || listSize < listLimit) {
            setListSize(listSize + 1);
        }
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
    const listContent = (Object.keys(props.context.infoDictionary).length === 0) ? (
        <input type="text" id={props.id} name={props.name} />
    ) : (
        <FormFieldDropdown id={props.id} name={props.name} context={props.context} />
    );

    return (
        <>
            <ul>
                {Array.from({ length: listSize }, (_, index) => (
                    <li key={index}>{listContent}</li>
                ))}
            </ul>
            <button onClick={handleIncreaseListSize} disabled={listLimit !== undefined && listSize >= listLimit}>+</button>
            <button onClick={handleDecreaseListSize} disabled={listSize <= 1}>-</button>
        </>
    )
}