import {asyncActionError, asyncActionFinish, asyncActionStart} from '../../app/async/asyncReducer';
import { delay } from '../../app/common/util/util';
import {toast} from 'react-toastify';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const initialState = {
    data: 42
}

export function increment(amount){
    return async function(dispatch){
        dispatch(asyncActionStart());

        try {
            await delay(1000);
            dispatch({
                type:INCREMENT,
                payload:amount
            })
            dispatch(asyncActionFinish());
        } catch (error) {
            dispatch(asyncActionError(error))
            toast.error(error);
        }
       
    }
}

export function decrement(amount){
    return async function(dispatch){
        dispatch(asyncActionStart());

        try {
            await delay(1000);
            dispatch({
                type:DECREMENT,
                payload:amount
            })
            dispatch(asyncActionFinish());
        } catch (error) {
            dispatch(asyncActionError(error))
        }
       
    }
}
export default function testReducer(state=initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return {...state,data:state.data + action.payload}
        case 'DECREMENT':
            return {...state,data:state.data - action.payload}
        default:
            return state;
    }
}