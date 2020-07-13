const searchReducer = (state = null, action) => {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return state = action.payload;
        default:
            return state;
    }

}
export default searchReducer;