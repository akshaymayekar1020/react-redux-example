const initialState = {
    name:'akshay',
    age:'26',
    class:12,
    products:[],
    personalDetails:{
        id:0,
        likes:0,
        dislike:0,
        posts:[]
    }
};

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "addUser":
            return {
                name:action.payload.name,
                age:action.payload.age,
                class:action.payload.class,
            }
        default:
            return state
    }
}

export default reducer;