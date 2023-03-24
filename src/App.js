import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { func } from 'prop-types';
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

export default App;
