import React from 'react'
import CompositeLabel from '../CompositeLabel'
import { IContextDictionary, ILabel } from '@/types/formField'
import { dictToILabels } from '@/types/formField'

interface Props {
    id: string,
    name: string,
    labelsDict: IContextDictionary
}

export default function FormFieldOptions(props: Props) {
    let labels = dictToILabels(props.labelsDict.infoDictionary);
    return (
        <>{labels.map((label, index) => (
            <div key={index}>
                <input type="checkbox" />
                <CompositeLabel {...label} />
            </div>
        ))}</>
    )
}