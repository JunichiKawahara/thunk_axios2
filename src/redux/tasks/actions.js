import axios from "axios"

export const TASKS_FETCH_START = 'TASKS_FETCH_START'
export const TASKS_FETCH_SUCCESS = 'TASKS_FETCH_SUCCESS'
export const TASKS_FETCH_FAILURE = 'TASKS_FETCH_FAILURE'

const fetchStart = () => {
    return {
        type: TASKS_FETCH_START
    }
}

const fetchSuccess = (result) => {
    return {
        type: TASKS_FETCH_SUCCESS,
        payload: result
    }
}

const fetchFailure = (error) => {
    return {
        type: TASKS_FETCH_FAILURE,
        payload: error
    }
}

export const fetchTasksList = () => async(dispatch) => {
    dispatch(fetchStart())

    await axios.get('http://localhost:3000/api/list')
    .then(result => {
        dispatch(fetchSuccess(result.data))
    })
    .catch(error => {
        dispatch(fetchFailure(error))
    })
}