export const TASK_SET_LOADING = 'TASK_SET_LOADING'
export const TASK_FETCH_ITEM = 'TASK_FETCH_ITEM'
export const TASK_FETCH_ERROR = 'TASK_FETCH_ERROR'

export const taskSetLoading = () => ({
    type: TASK_SET_LOADING
})

export const taskFetchItem = payload => ({
    type: TASK_FETCH_ITEM,
    payload
})

export const taskFetchError = error => ({
    type: TASK_FETCH_ERROR,
    error: error
})