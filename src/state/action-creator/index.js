
export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        });
    }
}


export const withdrawMoney = (amount) => {
    console.log(amount, "Lol")
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    }
}

export const addUser = (User) => {
    return (dispatch) => {
        dispatch({
            type: "addUser",
            payload: User
        });
    }
}

export const addProd = (addProd) => {
    return (dispatch) => {
        dispatch({
            type: "addProd",
            payload: addProd
        });
    }
}