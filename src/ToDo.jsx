import React from 'react'




const [studentsState, setStudentsState] = useState(students);

function ToDo() {



    return (
        <>
          
          <h1>To lists</h1>
          
          <ul>
            {studentsState.map((student, idx) => {
              return (
                <li key={idx}>
                  {student.name}, {student.age}{" "}
                  <button onClick={()=>handleDelete(student.id)}>delete</button>
                </li>
              );
            })}
          </ul>
         
        </>
      );}
export default ToDo