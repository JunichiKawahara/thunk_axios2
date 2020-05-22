import { connect } from 'react-redux'
import TasksList from './presentation'
import { fetchTasksList } from '../../redux/tasks/actions'

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDisptachProps = dispatch => {
    return {
        fetch: () => {
            dispatch(fetchTasksList());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDisptachProps
)(TasksList)