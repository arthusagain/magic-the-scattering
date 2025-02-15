import React from 'react'
import CompositeLabel from '../CompositeLabel'
import { ILabel } from '@/types/formField'

export default function FormFieldOptions({labels}: {labels: ILabel[]}) {
    return (
        <>{labels.map((label, index) => (
            <div key={index}>
                <input type="checkbox" />
                <CompositeLabel {...label} />
            </div>
        ))}</>
    )
}