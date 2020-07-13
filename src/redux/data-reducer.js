import data from './store/data.json'

const destinationsReducer = (state = data, action) => {
    switch (action.type) {
        case 'ADD_DESTINATION':
            return {
                ...state,
                logged: action.payload
            };
        default:
            return state;
    }

}
export default destinationsReducer;