const Header = (props : {course:string}) =>{
    return (
        <h1>{props.course}</h1>
    )
}
type partProps = {
    name:string,
    exercise:number
}
const Part = ({name,exercise}:partProps) =>
    <p>{name} {exercise}</p>

type contentProps = {
    parts:
        {
            name:string,
            exercises:number
        }[]
}

const Content = ({parts}:contentProps)=>{
    return(
    <>
        {parts.map(p=>{
        return <Part name={p.name} exercise={p.exercises}/>
    })}
    </>)
}
const Total = ({parts}:contentProps)=>{
    const total = parts.map(p=> p.exercises).reduce((partialSum, a) => partialSum + a, 0);
    return (
        <p>Number of exercises {total}</p>
    )
}


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

  return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
  )
}

export default App