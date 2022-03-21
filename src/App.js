import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { IncrementNumber, DecrementNumber } from './Redux/Action/index';

function App() {
  const ownState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1 style={{ color: 'goldenRod', fontWeight: 'bold', fontSize: '50px' }}>Increment/Decrement Counter</h1>
      <h1 style={{ color: 'blue', fontWeight: 'bold' }}>Using React and Redux</h1>

      <div>
        <button className='increment' onClick={() => dispatch(IncrementNumber(5))}>
          Increment
          <span>++</span>
        </button>

        <input className='inputBox' value={ownState} />

        <button className='decrement' onClick={() => dispatch(DecrementNumber(5))}>
          Decrement
          <span>---</span>
        </button>
      </div>
    </div>
  );
}

export default App;
