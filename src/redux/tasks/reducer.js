import {
    TASKS_FETCH_START,
    TASKS_FETCH_SUCCESS,
    TASKS_FETCH_FAILURE
} from './actions'

const init = {
    items: [],
    message: 'none'
}

const tasksListReducer = (state = init, action) => {
    switch(action.type) {
    case TASKS_FETCH_START:
        return {
            ...state,
            items: [],
            message: 'fetch start'
        }
    case TASKS_FETCH_SUCCESS:
        return {
            ...state,
            items: action.payload,
            message: 'success'
        }
    case TASKS_FETCH_FAILURE:
        return {
            ...state,
            items: [],
            message: action.payload
        }
    default:
        return state
    }
}

export default tasksListReducer