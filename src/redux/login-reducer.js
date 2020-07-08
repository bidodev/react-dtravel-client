const INITIAL_STATE = {
    logged: false
}

const anotherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TEST_ACTION':
            return {
                ...state,
                logged: action.payload
            };
        default:
            return state;
    }

}
export default anotherReducer;