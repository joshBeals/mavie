
import _ from "lodash";

export default (state = { isLoading: true, data: {} }, action) => {
    switch(action.type){
        case 'FETCH_WEIGHTS':
            return { isLoading: false, data: {...state.data, ..._.mapKeys(action.payload, '_id')} };
        case 'FETCH_WEIGHT':
            return { isLoading: false, data: {...state.data, [action.payload._id]: action.payload} };
        case 'CREATE_WEIGHT':
            return { isLoading: true, data: {...state.data, [action.payload._id]: action.payload} };
        case 'DELETE_WEIGHT':
            return { isLoading: false, data: {..._.omit(state.data, action.payload)} };
        default:
            return state;
    }
}