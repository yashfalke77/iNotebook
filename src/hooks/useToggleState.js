import {useState} from 'react'

function useToggleState(defaultVal) {

    const [state, setState] = useState(defaultVal)

    const toggleState = () => {
        setState(!state)
    }

    return [state, toggleState]
    
}

export default useToggleState
