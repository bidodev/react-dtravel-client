const INITIAL_STATE = {
    input: null
}

const quizReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_QUIZ_INPUT':
            return {
                ...state,
                input: action.payload
            };
        default:
            return state;
    }

}
export default quizReducer;