import React from 'react'
import CompositeLabel from '../CompositeLabel'
import { ILabel } from '@/types/formField'

interface Props {
    id: string,
    name: string,
    labels: ILabel[]
}

export default function FormFieldOptions(props: Props) {
    return (
        <>{props.labels.map((label, index) => (
            <div key={index}>
                <input type="checkbox" />
                <CompositeLabel {...label} />
            </div>
        ))}</>
    )
}