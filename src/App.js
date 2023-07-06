import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {
        // <Counter></Counter>
        <Users></Users>
      }
    </div>
  );
}

// user data comes from jeson placeholder Api

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div>
      {
        users.map(user => <DisplayUser name={user.name} adress={user.address.city} email={user.email}></DisplayUser>)
      }
    </div>
  )
}

// display user information

function DisplayUser(props) {
  return (
    <div className='product'>
      <h4>Name: {props.name}</h4>
      <p>Adress: {props.adress}</p>
      <i>Email: {props.email}</i>
    </div>
  )
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
