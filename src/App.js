
import React from "react";

const hstyle = {
  padding:"25px 0px 15px 25px" 
}
const hstyle2 = {
  padding:"0px 0px 15px 25px" 
}

function App() {
  return (
    <div className="App">
      <h1 style={hstyle}>Hello Dojo!</h1>
      <h3 style={hstyle2}>Things I need to do:</h3>

      <ul>
        <li>Learn React</li>
        <li>Climb Mt.Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>

      </ul>
    </div>
  );    
}

export default App;
