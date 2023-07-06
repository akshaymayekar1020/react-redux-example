const initialState = {
    arr:[]
}

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "addProd":
            return {
                ...state,
                arr: [...state.arr, action.payload]
            }
        default:
            return state
    }
}

export default reducer;