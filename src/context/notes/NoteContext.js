import axios from "axios"
import { createContext, useState } from "react"

export const NoteContext = createContext()

export function NoteProvider(props) {

    const HOST = "http://localhost:8080"

    const initialNotes = []

    const [notes, setNotes] = useState(initialNotes)

    const fetch = async () => {
        const config = { headers: { 'Content-Type': 'application/json', 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5NWY0YTljZmRjMDM3MjMwN2E4ZmI3In0sImlhdCI6MTYzNzU3MTcyMH0.5jmI_aMwcbQETgTSXUjup-vh8uITQTV8j1tqnGJSWPo' } }
        const resp = await axios.get(`${HOST}/api/notes/`, config)
        setNotes(resp.data)
    }

    const add = async (newNotes) => {
        const config = { headers: { 'Content-Type': 'application/json', 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5NWY0YTljZmRjMDM3MjMwN2E4ZmI3In0sImlhdCI6MTYzNzU3MTcyMH0.5jmI_aMwcbQETgTSXUjup-vh8uITQTV8j1tqnGJSWPo' } }
        const resp = await axios.post(`${HOST}/api/notes/`, newNotes, config)
        console.log(resp)
        setNotes([...notes, newNotes])
    }

    const remove = async(removeId) => {
        const config = { headers: { 'Content-Type': 'application/json', 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5NWY0YTljZmRjMDM3MjMwN2E4ZmI3In0sImlhdCI6MTYzNzU3MTcyMH0.5jmI_aMwcbQETgTSXUjup-vh8uITQTV8j1tqnGJSWPo' } }
        const resp = await axios.delete(`${HOST}/api/notes/${removeId}`, config)
        console.log(resp)
        setNotes(notes.filter(note => (
            note._id !== removeId
        )))
    }

    const edit = async (title, description, tag, id) => {
        const config = { headers: { 'Content-Type': 'application/json', 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5NWY0YTljZmRjMDM3MjMwN2E4ZmI3In0sImlhdCI6MTYzNzU3MTcyMH0.5jmI_aMwcbQETgTSXUjup-vh8uITQTV8j1tqnGJSWPo' } }
        const resp = await axios.put(`${HOST}/api/notes/${id}`, config)
        setNotes(notes.map(note => (
            note.id === id ? { ...note, title, description, tag } : note
        )))
    }

    return (
        <NoteContext.Provider value={{ notes, add, remove, edit, fetch }}>
            {props.children}
        </NoteContext.Provider>
    )

}