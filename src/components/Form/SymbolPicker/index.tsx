import React from 'react'
import FormFieldDropdown from '../FormFieldDropdown'

interface Props {
    id: string,
    name: string,
    symbolDictionary: Record<string, string>
}


export default function SymbolPicker(props : Props) {
    const dropdownOptions = Object.keys(props.symbolDictionary);
    let buttonID = `${props.id}_button`;
    let buttonName = `${props.name}_button`;


    return (
        <>
            <FormFieldDropdown id={buttonID} name={buttonName} options={dropdownOptions}/>
        </>
    )
}