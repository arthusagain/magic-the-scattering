import React from "react";
import FormFieldDropdown from "../FormFieldDropdown";
import { IContextDictionary } from "@/types/formField";
import { useState, useRef, useEffect } from "react";

interface Props {
    id: string,
    name: string,
    symbolDictionary: IContextDictionary,
    readonly?: boolean,
    updateState: (newState: string) => void
}
export default function FormFieldSymbol(props: Props) {

    const inputref = useRef<HTMLInputElement>(null);
    const [inputText, setInputText] = useState('');


    useEffect(() => {
        inputref.current ? props.updateState(inputref.current.value) : props.updateState('');
    }, [inputText]);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputText(event.target.value);
    }

    function handleChange(newSymbol: string) {
        if (inputref.current) {
            inputref.current.value += newSymbol;
            props.updateState(inputref.current.value);
        }
    }

    return (
        <div>
            <input type="text" id={props.id} name={props.name} readOnly={props.readonly} ref={inputref} onChange={handleInputChange} />
            <FormFieldDropdown id={props.id} name={props.name} context={props.symbolDictionary} updateState={handleChange} />
        </div>
    );
}