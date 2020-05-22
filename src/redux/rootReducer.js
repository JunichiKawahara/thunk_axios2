import { combineReducers } from 'redux'
import counterReducer from './counter/reducer'
import tasksListReducer from './tasks/reducer'
import taskReducer from './task/reducer'

const rootReducer = combineReducers({
    counter: counterReducer,
    tasks: tasksListReducer,
    task: taskReducer
})

export default rootReducer