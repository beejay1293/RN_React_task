import { SUCCESS, LOADING, }  from '../constants';

const initialState = {
    details : [],
    isLoading: false,
}

export default (state= initialState, action) => {
    switch(action.type){
        case SUCCESS:
        return {
            ...state,
            isLoading: false, 
            details: action.payload.data,
        }
        case LOADING:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state;
    }
}