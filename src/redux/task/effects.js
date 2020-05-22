import {
    taskSetLoading,
    taskFetchItem,
    taskFetchError
} from './actions'

import axios from 'axios'

export const asyncFetchItem = (id) => async dispatch => {
    dispatch(taskSetLoading());
    const path = `http://localhost:3000/api/task/${id}`

    await axios.get(path)
        .then(result => {
            dispatch(taskFetchItem(result.data))
        })
        .catch(error => {
            dispatch(taskFetchError(error))
        })
}