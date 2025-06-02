import React from "react";
import SymbolPicker from "../SymbolPicker";
import { IContextDictionary } from "@/types/formField";

interface Props {
    id: string,
    name: string,
    symbolDictionary: IContextDictionary
    readonly ?: boolean
}
export default function FormFieldSymbol(props : Props) {

    return (
        <div>
            <input type="text" id={props.id} name={props.name} readOnly={props.readonly}/>
            <SymbolPicker id={props.id} name={props.name} symbolDictionary= {props.symbolDictionary.infoDictionary}/>
        </div>
    );
}