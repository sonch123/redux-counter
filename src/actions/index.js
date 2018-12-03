/*
    Declare action creators instead of making action object.
    In this case,  () => ({}) is same as function() { return { } }
    It is used for convenience regardless scope issue
*/

import * as types from './ActionTypes';

export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

// Unlike other action creators, it has parameter.
export const setColor = () => ({
    type: types.SET_COLOR,
    color
});

/* Note: Redux should be consisted of pure function 
which means it will always return same results. */