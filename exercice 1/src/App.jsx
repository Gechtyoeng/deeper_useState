import React, { useState } from "react";

export default function App() {
   //get the input value
    const [input,setInput] = useState(0);

    //handle enter
    function handleEnter(e){
      setInput(e.target.value*10);
      console.log(input);
    }
  
    const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${input}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if(input > 0 && input <5){
      
    }
    else if(input >=5 && input <=10){
      scoreColor = `#9cc54b`;
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };
 

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={handleEnter}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
