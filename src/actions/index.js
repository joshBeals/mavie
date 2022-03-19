import authless from "../apis/authless";

export const login = (formValues) => dispatch => {
    const req = authless.post('/user/login', formValues)
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