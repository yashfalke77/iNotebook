const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            console.log(action.note, "hiii")
            return [...state, action.note]
    
        default:
            return state;
    }
}

export default reducer