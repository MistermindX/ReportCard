import React from 'react'

function ScoresList(props) {
  return (
    <div>
      <ul>
        {props.studentList.map((Student) => (
          <li key={Student.firstName}>
            <h3>
              {Student.firstName} {Student.lastName}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ScoresList
