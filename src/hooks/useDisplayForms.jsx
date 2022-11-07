import { useState } from "react"

export const useDisplayForms = () => {
    const [displayForm, setDisplayForm] = useState(false)
    const [id, setId] = useState(0)
    const showForm = (id) => {
        setDisplayForm(true)
        setId(id)
    }
    const closeForm = () => {
        setDisplayForm(false)
        setId(0)
    }
    return {
        id,
        displayForm,
        showForm,
        closeForm
    }
}