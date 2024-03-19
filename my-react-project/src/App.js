// import './App.css';
import "./App1.css"
import {useState} from "react"
function App() {

const [count,setCount] = useState(0)

  function decreaseHandler(){
    setCount(count-1);

  }
  function increaseHandler(){
    setCount(count+1);

  }
  function resetHandler(){
    setCount(0);

  }

  return (
    <div className="ankit">
    <div className="ank">Increment and Decrement</div>
    <div className="ank1">
      <button onClick = {decreaseHandler} className= "ank2">-</button>
      <div  className="ank4">
    {count}
      </div>
      <button onClick = {increaseHandler} className="ank3">+</button>
    </div>

    <button onClick = {resetHandler}  className="ank5" >Reset</button>

    </div>
  
  );
}

export default App;
