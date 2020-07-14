import data from './store/background-img'

const backGroundImgs = (state = data, action) => {
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

export default backGroundImgs;