import mavie from "../apis/mavie";

// Auth Actions
export const login = (formValues) => dispatch => {
    const req = mavie.post('/user/login', formValues)
    .then(response => {
        dispatch({ 
            type: 'LOGIN',
            payload: response.data
        });
    }).catch(err => {
        dispatch({ 
            type: 'LOGIN',
            payload: err.response.data
        });
    });
    
}

export const getUser = (token) => async dispatch => {
    const req = mavie.get('/user', {
        headers: {
            'auth-token': token
        }
    })
    .then(response => {
        dispatch({ 
            type: 'GET_DETAILS',
            payload: response.data
        });
    }).catch(err => {
        dispatch({ 
            type: 'GET_DETAILS',
            payload: err.response.data
        });
    });
}

// Notes Actions
export const fetchNotes = (token) => async dispatch => {
    const response =  await mavie.get('/note/user', {
        headers: {
            'auth-token': token
        }
    });
    dispatch({ 
        type: 'FETCH_NOTES',
        payload: response.data
    });
}

export const addNote = (token, formValues) => async dispatch => {
    const response = await mavie.post('/note/new', formValues, {
        headers: {
            'auth-token': token
        }
    });
    dispatch({ 
        type: 'CREATE_NOTE',
        payload: response.data
    });
    
}