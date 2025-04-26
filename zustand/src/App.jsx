import { useCounterStore } from './stores/useCountStore';
import './App.css'

function App() {

  const {count, increment, decrement} = useCounterStore();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}

export default App
