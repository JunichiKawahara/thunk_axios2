import { connect } from 'react-redux'
import Counter from './presentation'
import {
    counterAdd,
    counterReset
} from '../../redux/counter/actions'

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: addition => {
            dispatch(counterAdd(addition));
        },
        reset: () => {
            dispatch(counterReset());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)