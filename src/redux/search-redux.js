const searchReducer = (state = '', action) => {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return state + action.payload;
        default:
            return state;
    }

}
export default searchReducer;