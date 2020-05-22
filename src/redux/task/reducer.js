import {
    TASK_FETCH_ITEM,
    TASK_SET_LOADING
} from './actions'

const initItem = {
    id: 0,
    title: '',
    description: ''
}

const init = {
    item: initItem,
    isLoading: false
}

const taskReducer = (state = init, action) => {
    const { type, payload } = action;

    switch (type) {
    case TASK_FETCH_ITEM:
        return {
            ...state,
            isLoading: false,
            item: payload
        }
    case TASK_SET_LOADING:
        return {
            ...state,
            isLoading: true,
            item: initItem
        }
    default:
        return state;
    }
}

export default taskReducer;