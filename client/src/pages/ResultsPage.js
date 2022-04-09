import React from 'react'

function ResultsPage(props) {
  return (
    <div>
      <ul>
        {props.studentList.map((Student) => (
          <li key={Student.id}>
            {Student.result}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResultsPage
