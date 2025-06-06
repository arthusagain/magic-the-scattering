import React from 'react'

interface Props {
    id: string,
    name: string,
    accept: string[],
    multiple?: boolean,
    updateState: (newState: string) => void
}

export default function FormFileUpload(props : Props) {
    const acceptString = props.accept.join(', ');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        props.updateState(event.target.value);
    }
    return (
        <>
            <input type="file" accept={acceptString} onChange={ handleChange }/>
        </>
    )
}