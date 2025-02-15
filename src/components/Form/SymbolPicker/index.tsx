import React from 'react'
import FormFieldDropdown from '../FormFieldDropdown'

type symbolPickerProps = {
    symbolDictionary: Record<string, string>
}

export default function SymbolPicker({ symbolDictionary} : symbolPickerProps) {
    const dropdownOptions = Object.keys(symbolDictionary)

    return (
        <>
            <FormFieldDropdown options={dropdownOptions}/>
        </>
    )
}