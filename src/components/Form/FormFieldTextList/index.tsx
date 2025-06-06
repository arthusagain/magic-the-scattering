import FormFieldDropdown from "../FormFieldDropdown"
import { useState, useId, useEffect, useRef } from "react";
import { IContextDictionary } from "@/types/formField";

interface Props {
    id: string,
    name: string,
    context: IContextDictionary,
    updateState: (newState: string) => void
}

export default function FormFieldTextList(props: Props) {
    const [listSize, setListSize] = useState(1);
    const [listState, setListState] = useState([""]);
    const listRef = useRef<HTMLUListElement>(null);
    const listLimit = (props.context.info === undefined || isNaN(parseInt(props.context.info))) ? undefined : parseInt(props.context.info);

    function arrayToRawString(arr: string[]) {
        return '[ ' + arr.join(', ') + ' ]';
    }

    useEffect(() => {
        props.updateState(arrayToRawString(listState));
    }, [listState]);

    const handleIncreaseListSize = () => {
        if ((listLimit === undefined) || listSize < listLimit) {
            setListSize(listSize + 1);
            let newListState = [...listState];
            newListState[listSize - 1] = "";
            setListState(newListState);
        }
    };

    const handleDecreaseListSize = () => {
        if (listSize > 1) {
            let currIdx = getCurrentELementIndex();
            if (currIdx != -1) {
                let newListState = [...listState];
                newListState.splice(listSize - 1, 1);
                setListState(newListState);

                setListSize(listSize - 1);;
            }
        }
    };

    /*if (props.options.length === 0) {
        listContent = <input type="text" id={props.id} name={props.name} />
    }
    else listContent = <FormFieldDropdown id={props.id} name={props.name} options={props.options} />;*/
    const listContent = (Object.keys(props.context.infoDictionary).length === 0) ? (
        <input type="text" id={useId()} name={props.name} onChange={handleInputChange} />
    ) : (
        <FormFieldDropdown id={useId()} name={props.name} context={props.context} updateState={handleChange} />
    );

    function getCurrentELementIndex() {
        return Array.prototype.indexOf.call(listRef.current?.children, listRef.current?.lastElementChild);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        let currIdx = getCurrentELementIndex();
        if (currIdx != -1) {
            let newListState = [...listState];
            newListState[currIdx] = event.target.value;
            setListState(newListState);
        }
    }

    function handleChange(newValue: string) {
        let currIdx = getCurrentELementIndex();
        if (currIdx != -1) {
            let newListState = [...listState];
            newListState[currIdx] = newValue;
            setListState(newListState);
        }
    }

    return (
        <>
            <ul ref={listRef}>
                {Array.from({ length: listSize }, (_, index) => (
                    <li key={index}>
                        {listContent}
                        <button onClick={handleDecreaseListSize} disabled={listSize <= 1}>-</button>
                    </li>

                ))}
            </ul>
            <button onClick={handleIncreaseListSize} disabled={listLimit !== undefined && listSize >= listLimit}>+</button>

        </>
    )
}