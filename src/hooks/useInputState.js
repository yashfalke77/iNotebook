import {useState} from 'react'

function useInputState(initialVal) {

    const [state, setState] = useState(initialVal)

    const handleChange = (evt) => {
        setState(evt.target.value)
    }

    const reset = (evt) => {
        setState("")
    }


    return [state, handleChange, reset]
}

export default useInputState
