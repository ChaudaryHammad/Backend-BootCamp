import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slices/counter";

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  console.log(count);
  
  return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>Count is {count}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </>
  );
}

export default App;
