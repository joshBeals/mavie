
import _ from "lodash";

export default (state = { isLoading: true, data: {} }, action) => {
    switch(action.type){
        case 'FETCH_MEMORIES':
            return { isLoading: false, data: {...state.data, ..._.mapKeys(action.payload, '_id')} };
        case 'FETCH_MEMORY':
            return { isLoading: false, data: {...state.data, [action.payload._id]: action.payload} };
        case 'CREATE_MEMORY':
            return { isLoading: true, data: {...state.data, [action.payload._id]: action.payload} };
        case 'DELETE_MEMORY':
            return { isLoading: true, data: {..._.omit(state.data, action.payload)} };
        default:
            return state;
    }
}