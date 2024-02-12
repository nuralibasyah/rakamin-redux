import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from './actions';

const CounterComponent = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default CounterComponent;