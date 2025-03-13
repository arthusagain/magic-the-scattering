import React from "react";
import SymbolPicker from "../SymbolPicker";

interface Props {
    id: string,
    name: string,
    symbolDictionary: Record<string, string>
    readonly ?: boolean
}
export default function FormFieldSymbol(props : Props) {

    return (
        <div>
            <input type="text" id={props.id} name={props.name} readOnly={props.readonly}/>
            <SymbolPicker id={props.id} name={props.name} symbolDictionary= {props.symbolDictionary}/>
        </div>
    );
}