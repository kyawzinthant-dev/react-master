import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';
import TestPlaceInput from './TestPlaceInput';

function Sandbox() {
    const [target,setTarget] = useState(null);
    const data = useSelector(state => state.test.data);
    const dispatch = useDispatch();
    const {loading} = useSelector(state=>state.async);

    return (
        <div>
            <h1>Testing 123</h1>
            <h3>The data is: {data} </h3>
            <Button 
            name='increment' 
            loading={loading && target=== 'increment'} 
            content="Increment" 
            color="green" 
            onClick={(e)=> {dispatch(increment(10))
                setTarget(e.target.name)
            }}></Button>
            <Button 
            name='decrement' 
            loading={loading && target=== 'decrement'} 
            content="Decrement" 
            color="red" 
            onClick={(e)=> {dispatch(decrement(10))
                setTarget(e.target.name)
            }}></Button>
            <Button 
            content="Open Modal" color="teal" onClick={()=> dispatch(openModal({modalType:'TestModal', modalProps:{data}}))}></Button>
            <div style={{marginTop: 15}}>
                <TestPlaceInput/>
            </div>
        </div>
    )
}

export default Sandbox
