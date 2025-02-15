import React from "react";
import SymbolPicker from "../SymbolPicker";

export default function FormFieldSymbol(symbolDictionary : Record<string, string>) {
    return (
        <div>
            <SymbolPicker symbolDictionary= {symbolDictionary}/>
        </div>
    );
}