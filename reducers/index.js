import * as types from '../actions/ActionTypes';

// Initialize initial State
const initialState = {
    color: 'black',
    number: 0
};

/** 
 * Define the reducer function. Reducer will take state and action parameter.
 * If the state is undefined when the store is creating, 
 * it will use initialState as default state.
 * I will create new state and return it, 
 * also it does different actions depending on action.type.
 * Note that the state must not be modified directly,
 * You must create and return a new object that overwrites 
 * the existing state value with the desired value.
*/


function counter(state = initialState, action) {
    switch(action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1
            };
        case types.DECREMENT:
            return{
                ...state,
                number: state.number - 1
            };
        case types.SET_COLOR:
            return{
                ...state,
                color: action.color
            };   
        default:
            return state;
    }
};
export default counter;