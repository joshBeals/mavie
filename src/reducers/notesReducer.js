
import _ from "lodash";

export default (state = { isLoading: true, data: {} }, action) => {
    switch(action.type){
        case 'FETCH_NOTES':
            return { isLoading: false, data: {...state.data, ..._.mapKeys(action.payload, '_id')} };
        case 'FETCH_NOTE':
            return { isLoading: false, data: {...state.data, [action.payload._id]: action.payload} };
        case 'CREATE_NOTE':
            return { isLoading: true, data: {...state.data, [action.payload._id]: action.payload} };
        case 'EDIT_NOTE':
            return { isLoading: true, data: {...state.data, [action.payload._id]: action.payload} };
        case 'DELETE_NOTE':
            return { isLoading: true, data: {..._.omit(state.data, action.payload)} };
        default:
            return state;
    }
}