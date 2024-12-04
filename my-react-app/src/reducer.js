const initialState ={
    count: 0
}
const rootReducer =(state= initialState, action) => {
    switch(action.type){
        case "Increment" : 
        return {...state, count: state.count + 1}
        case "Decrement" : 
        return {...state, count: state.count - 1}
        default: // This is the correct usage for the default case
        return state;
    }
}

export default rootReducer