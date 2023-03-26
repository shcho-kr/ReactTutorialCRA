import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { func } from 'prop-types';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {

  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

/* 
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
    .then(response => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  })
  return (
    <div>
      <h1>Coins data API</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => <li key={coin.id}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price}</li>)}
      </ul>
    </div>
  );
}
 */
/* 
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder='Write your to do' />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}
 */
/* 
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("all time");
  useEffect(() => {
    console.log("Call the api");
  }, []);
  useEffect(() => {
    if (keyword !== "") console.log("Search "+ keyword);
  }, [keyword]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder='Search here...' />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
 */

/* 
function Hello() {
  useEffect(() => {
    console.log("created!");
    return () => console.log("destroyed");
  }, []);
  // function byeFn() {
  //   console.log("bye");
  // }
  // function hiFn() {
  //   console.log("hi");
  //   return byeFn;
  // }
  // useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
 */

export default App;
