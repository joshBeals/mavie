import mavie from "../apis/mavie";

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