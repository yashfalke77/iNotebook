import {createContext} from "react"

export const NoteContext = createContext()

export function NoteProvider(props) {
    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
    
}