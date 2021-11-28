import { createContext, useState } from "react"

export const AlertContext = createContext()

export function AlertProvider(props) {
    const [alert, setAlert] = useState(null)

    const [open, setOpen] = useState(false)

    const showAlert = (message, type) => {
        setOpen(true)
        setAlert({ message, type })
    }

    return (
        <AlertContext.Provider value={{ showAlert, alert, open, setOpen}}>
            {props.children}
        </AlertContext.Provider>
    )
}