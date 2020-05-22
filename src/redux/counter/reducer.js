import { COUNTER_RESET, COUNTER_ADD } from './actions'

const init = {
    value: 0,
    message: 'start'
}

const counterReducer = (state = init, {type, payload}) => {
    switch(type) {
    case COUNTER_RESET:
        return {
            ...state,
            value: 0,
            message: 'Reset'
        }
    case COUNTER_ADD:
        const message = payload > 0 ? 'Increment' : 'Decrement'
        return {
            ...state,
            value: state.value + payload,
            message: message
        }
    default:
        return state
    }
}

export default counterReducer