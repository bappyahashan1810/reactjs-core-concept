import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      {
        <Counter></Counter>
      }
    </div>
  );
}
function Counter() {
  const [count, countState] = useState(55);
  function Increase() { countState(count + 1) };
  function Decrease() { countState(count - 1) };
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrese</button>
    </div>
  );
}


function Product(props) {
  return (
    <div className='product'>
      <h4>Product_name:{props.name}</h4>
      <p>Product_Price:{props.price}</p>
    </div>
  );
}

export default App;
