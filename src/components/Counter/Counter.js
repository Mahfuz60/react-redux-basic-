import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Counter.css';
import { increment, decrement, reset, log_in, log_out } from '../../Redux/Action/ActionCounter';
function Counter(props) {
  const count = useSelector((state) => state.counterReducer.count);
  const auth = useSelector((state) => state.authReducer.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 style={{ fontSize: '30px', color: 'green', fontWeight: 'bold' }}>Count Me:{count}</h1>
      <div className='contanier'>
        <div>
          <h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
          </h1>
          <h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
          </h1>
          <h1>
            <button onClick={() => dispatch(reset())}>Reset</button>
          </h1>
        </div>
        <div>
          <h1 style={{ fontSize: '30px', color: 'green', fontWeight: 'bold' }}>User is Login{auth}</h1>
          <button onClick={()=>dispatch(log_in())}>LogIn</button>
          <button onClick={()=>dispatch(log_out())}>LogOut</button>
          
          
        </div>
      </div>
    </div>
  );
}

export default Counter;
