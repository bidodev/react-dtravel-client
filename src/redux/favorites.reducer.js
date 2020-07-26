const INITIAL_STATE = [

]

const anotherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return [...state, action.payload];
        default:
            return state;
    }

}
export default anotherReducer;