import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/action';

const Counter = () => {
  const count = useSelector((state) => state.count); // Get state from the Redux store
  const dispatch = useDispatch(); // Dispatch actions to the Redux store

  return (
    <section className="landing-section">
        <div style={{display:'flex', flexDirection:'column'}}>
            <div className="heading">Counter</div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
                <button className="btn btn-primary" onClick={() => dispatch(increment())}>+</button>
                <h2>{count}</h2>
                <button className="btn btn-primary" onClick={() => dispatch(decrement())}>-</button>
            </div>
      </div>
    </section>
  );
};

export default Counter;
