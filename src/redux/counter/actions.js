export const COUNTER_RESET = 'COUNTER_RESET'
export const COUNTER_ADD = 'COUNTER_ADD'

export const counterReset = () => {
    return {
        type: COUNTER_RESET,
    }
}

export const counterAdd = (addition) => {
    return {
        type: COUNTER_ADD,
        payload: addition
    }
}