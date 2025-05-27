'use client'
import React from 'react'
import Form from "../../components/Form";
import FormTemplates from "../../components/Form/FormTemplates.json";
import { IFormField } from "@/types/formField";
import style from "./auth.module.scss"


const cardTemplateData = FormTemplates.newCard;

const newCardTemplate = cardTemplateData.fields as IFormField[];

const CardCreate = () => {
    const handleNewCard = () => { 
        //firebase add to database
    }
    return (
        <>
            <h1>Create a card</h1>
            <Form fields={newCardTemplate} submit={() => { }} submitText="Submit" />
        </>
    )
}

export default CardCreate;