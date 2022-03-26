import mavie from "../apis/mavie";
import history from "../helpers/history";

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

export const register = (formValues) => dispatch => {
    const req = mavie.post('/user/register', formValues)
    .then(response => {
        dispatch({ 
            type: 'REGISTER',
            payload: response.data
        });
    }).catch(err => {
        dispatch({ 
            type: 'REGISTER',
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
        payload: response.data.data
    });
}

export const fetchNote = (token, id) => async dispatch => {
    const response =  await mavie.get(`/note/${id}`, {
        headers: {
            'auth-token': token
        }
    });
    dispatch({ 
        type: 'FETCH_NOTE',
        payload: response.data.data[0]
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
        payload: response.data.data
    });
    history.push('/notes');
}

export const editNote = (id, token, formValues) => async dispatch => {
    const response = await mavie.put(`/note/edit/${id}`, formValues, {
        headers: {
            'auth-token': token
        }
    });
    dispatch({ 
        type: 'EDIT_NOTE',
        payload: response.data.data
    });
    history.push('/notes');
    
}

export const deleteNote = (id, token) => async dispatch => {
    const response = await mavie.delete(`/note/delete/${id}`, {
        headers: {
            'auth-token': token
        }
    });
    dispatch({ 
        type: 'DELETE_NOTE',
        payload: id
    });
    history.push('/notes');
    
}


// Memory Actions
export const fetchMemories = (token) => async dispatch => {
    const response =  await mavie.get('/memory/user', {
        headers: {
            'auth-token': token
        }
    });
    dispatch({ 
        type: 'FETCH_MEMORIES',
        payload: response.data.data
    });
}

export const fetchMemory = (token, id) => async dispatch => {
    const response =  await mavie.get(`/memory/${id}`, {
        headers: {
            'auth-token': token
        }
    });
    dispatch({ 
        type: 'FETCH_MEMORY',
        payload: response.data.data[0]
    });
}

export const addMemory = (token, formValues) => async dispatch => {
    const response = await mavie.post('/memory/new', formValues, {
        headers: {
            'auth-token': token
        }
    });
    dispatch({ 
        type: 'CREATE_MEMORY',
        payload: response.data.data
    });
    history.push('/memories');
    
}

export const deleteMemory = (id, token) => async dispatch => {
    const response = await mavie.delete(`/memory/delete/${id}`, {
        headers: {
            'auth-token': token
        }
    });
    dispatch({ 
        type: 'DELETE_MEMORY',
        payload: id
    });
    history.push('/memories');
    
}


// WEIGHT Actions
export const fetchWeights = (token) => async dispatch => {
    const response =  await mavie.get('/weight/user', {
        headers: {
            'auth-token': token
        }
    });
    dispatch({ 
        type: 'FETCH_WEIGHTS',
        payload: response.data.data
    });
}

export const fetchWeight = (token, id) => async dispatch => {
    const response =  await mavie.get(`/weight/${id}`, {
        headers: {
            'auth-token': token
        }
    });
    dispatch({ 
        type: 'FETCH_WEIGHT',
        payload: response.data.data[0]
    });
}

export const addWeight = (token, formValues) => async dispatch => {
    const response = await mavie.post('/weight/new', formValues, {
        headers: {
            'auth-token': token
        }
    });
    dispatch({ 
        type: 'CREATE_WEIGHT',
        payload: response.data.data
    });
    history.push('/weight');
    
}

export const deleteWeight = (id, token) => async dispatch => {
    const response = await mavie.delete(`/weight/delete/${id}`, {
        headers: {
            'auth-token': token
        }
    });
    dispatch({ 
        type: 'DELETE_WEIGHT',
        payload: id
    });
    
}