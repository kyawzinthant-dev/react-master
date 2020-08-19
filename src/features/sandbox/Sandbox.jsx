import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';

function Sandbox() {
    const data = useSelector(state => state.test.data);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Testing 123</h1>
            <h3>The data is: {data} </h3>
            <Button content="Increment" color="green" onClick={()=> dispatch(increment(10))}></Button>
            <Button content="Decrement" color="red" onClick={()=> dispatch(decrement(10))}></Button>
        </div>
    )
}

export default Sandbox
