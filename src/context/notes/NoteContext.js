import { createContext, useReducer} from "react"
import reducer from "../../reducers/notesReducer"

export const NoteContext = createContext()

export const DispatchContext = createContext()

export function NoteProvider(props) {

    const initialNotes = [
        {
            _id: "619602e4c8706674b12f15ee",
            title: "Notessss",
            description: "Notes is a notetaking app developed by Apple. It is provided on their iOS and macOS operating systems, the latter starting with OS X 10.8 Mountain Lion. It functions as a service for making short text notes, which can be synchronised between devices using Apple's iCloud service.",
            tag: "#notes #yash #notes-details",
            user: "6195f4a9cfdc0372307a8fb7",
            createdAt: "2021-11-18T07:38:12.265Z",
            updatedAt: "2021-11-18T07:38:12.265Z",
            __v: 0
        },
        {
            _id: "6196032dc8706674b12f15f0",
            title: "python",
            description: "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects",
            tag: "#python #yash #py #programming",
            user: "6195f4a9cfdc0372307a8fb7",
            createdAt: "2021-11-18T07:39:25.944Z",
            updatedAt: "2021-11-18T07:39:25.944Z",
            __v: 0
        }
    ]

    const [notes, dispatch] = useReducer(reducer, initialNotes)

    return (
        <NoteContext.Provider value={{ notes }}>
            <DispatchContext.Provider value={{dispatch}}>
                {props.children}
            </DispatchContext.Provider>
        </NoteContext.Provider>
    )

}