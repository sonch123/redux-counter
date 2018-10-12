import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect }  from 'react-redux';
import { getRandomColor } from '../src/utils';

//Connect state value in store with props
const mapStateToProps = (state) =>({
    color: state.color,
    number: state.number
});

/** Create actions with action creator,
 * and then create dispatch function that dispatch those actions
 * and connect it to props.
*/

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

// Container component for Counter component
// Purpose for Container component is binding Counter component with data layer of application.

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;