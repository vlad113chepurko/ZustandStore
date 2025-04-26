import { useCounterStore } from "./stores/useCountStore";
import { useNameStore } from "./stores/useNameStore";
import './App.css'

function App() {

  const {count, increment, decrement} = useCounterStore();
  const {name, setName, deleteName} = useNameStore();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>

      <h2>{name}</h2>
      <input
       value={name}
       onChange={(e) => setName(e.target.value)}
       type="text"
       placeholder="Enter name"/>
      <button onClick={deleteName}>Delete name</button>
    </div>
  );
}

export default App
