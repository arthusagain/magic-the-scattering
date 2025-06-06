import React from 'react'
import CompositeLabel from '../CompositeLabel'
import { IContextDictionary, ILabel } from '@/types/formField'
import { dictToILabels } from '@/types/formField'

interface Props {
    id: string,
    name: string,
    labelsDict: IContextDictionary,
    updateState: (newState: string) => void
}


export default function FormFieldOptions(props: Props) {
    let labels = dictToILabels(props.labelsDict.infoDictionary);
    let finalValue = '';

    function toggleStringContains(newString: string ){
        if (finalValue.includes(newString)){
            finalValue = finalValue.replace(newString, '');
        } else {
            finalValue += newString;
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        toggleStringContains(event.target.value);
        props.updateState(finalValue);
    }
    return (
        <>{labels.map((label, index) => (
            <div key={index}>
                <input type="checkbox" onChange={handleChange} id={props.id} name={props.name} value={props.labelsDict.infoDictionary[label.text]} />
                <CompositeLabel {...label} />
            </div>
        ))}</>
    )
}