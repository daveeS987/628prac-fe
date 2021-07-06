import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from '../store/counterSlice';

export default function Counter() {
  let count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <>
      <h2>This is counter component</h2>
      <h3>
        This is current count <span>{count}</span>
      </h3>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
        Increment by
      </button>
      <button onClick={() => dispatch(incrementAsync(incrementAmount))}>
        Async Increment by
      </button>
    </>
  );
}
