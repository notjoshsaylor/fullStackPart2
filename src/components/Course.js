const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({name}) => {
  return <h1>{name}</h1>
}

const Content = ({parts}) => {
  return(
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )
    )
  }
    </div>
  )
}

const Part = ({name, exercises}) => {
  return(
    <h2>
      {name} {exercises}
    </h2>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)
  return <h3>Total of {total} exercises</h3>
}
export default Course