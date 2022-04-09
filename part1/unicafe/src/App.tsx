import React, { useState } from 'react'

type buttonProps ={
    handleClick:React.MouseEventHandler,
    text:string
}
const Button = ({handleClick, text}:buttonProps)=>
    <button onClick={handleClick}>
        {text}
    </button>

type resultProps ={
    value:number,
    text:string
}

const StatisticsLine = ({value,text}:resultProps)=> <><td>{text} </td><td>{value} {text ==="positive" ? "%" : ""}</td></>


type statisticsProps ={
    good:number,
    neutral:number,
    bad:number
}
const Statistics =({good,neutral,bad}:statisticsProps) =>{
    if (good===0 && bad===0 && neutral==0){
        return (
            <p>No feedback given.</p>
        );
    }
    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tr><StatisticsLine value={good} text={"good"}/></tr>
                <tr><StatisticsLine value={neutral} text={"neutral"}/></tr>
                <tr><StatisticsLine value={bad} text={"bad"}/></tr>
                <tr><StatisticsLine value={bad+good+neutral} text={"all"}/></tr>
                <tr><StatisticsLine value={(good+bad*-1)/(good+bad+neutral)} text={"average"}/></tr>
                <tr><StatisticsLine value={(good*100)/(good+bad+neutral)} text={"positive"}/></tr>
            </table>

        </div>
    )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
      <div>
          <h1>give feedback</h1>
          <Button handleClick={()=>{setGood(good+1)}} text={"good"}/>
          <Button handleClick={()=>{setNeutral(neutral+1)}} text={"neutral"}/>
          <Button handleClick={()=>{setBad(bad+1)}} text={"bad"}/>
          <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  )
}

export default App