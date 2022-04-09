const Header = (props : {course:string}) =>{
    return (
        <h1>{props.course}</h1>
    )
}

type partProps = {
    part:string,
    exercise:number
}
const Part = ({part,exercise}:partProps) =>
    <p>{part} {exercise}</p>

type contentProps = {
    part1:string,
    part2:string,
    part3:string,
    exercises1:number,
    exercises2:number,
    exercises3:number
}

const Content = ({part1,part2,part3,exercises1,exercises2,exercises3}:contentProps)=>{
    return (
        <div>
            <Part part={part1} exercise={exercises1}/>
            <Part part={part2} exercise={exercises2}/>
            <Part part={part3} exercise={exercises3}/>
        </div>
    )
}
type totalProps = {
    exercises1:number,
    exercises2:number,
    exercises3:number
}
const Total = ({exercises1,exercises2,exercises3}:totalProps)=>
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
      <div>
        <Header course={course}/>
        <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
        <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      </div>
  )
}

export default App