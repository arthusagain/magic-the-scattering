import React from 'react'

interface Props {
    id: string,
    name: string,
    accept: string[],
    multiple?: boolean
}

export default function FormFileUpload(props : Props) {
    const acceptString = props.accept.join(', ');
    return (
        <>
            <input type="file" accept={acceptString}/>
        </>
    )
}