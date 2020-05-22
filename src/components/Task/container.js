import { connect } from 'react-redux'
import Task from './presentation'
import { asyncFetchItem } from '../../redux/task/effects'

const mapStateToProps = state => ({
    task: state.task
})

const mapDispatchToProps = dispatch => ({
    fetchTask: id => {
        dispatch(asyncFetchItem(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Task)