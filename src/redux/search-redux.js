const INITIAL_STATE = {
    input: "tropical"
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return {
                ...state,
                input: action.payload
            };
        default:
            return state;
    }

}
export default searchReducer;