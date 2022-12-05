
const Course = ({course}) =>{
  console.log(course)
  const parts = course.parts.map(part =>
    <li key={part.id}>{part.name} -- {part.exercises}</li> 
  )
    console.log(parts)
    return(
      <div>
        <h1>{course.name}  </h1>
        <h2>{parts}</h2>  
      </div>
    )
  }

export default Course