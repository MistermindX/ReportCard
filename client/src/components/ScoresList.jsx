import React from 'react'

function ScoresList(props) {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(props.studentList[0].parameters)
    // for (let i = 0; i < e.target.length; i++) {
    //   props.studentList[i].grade = e.target[i].value
    //   console.log(e.target[i].value)
    // }
  }

  //  Object.keys(props.studentList[i]).length

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          {props.studentList.map((Student) => (
            <li key={Student.id}>
              {Student.firstName} {Student.lastName} Grade:{' '}
              <select id="grade">
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
              Current Class: <input id="currentClass" />
              Setting: <input id="setting" />
            </li>
          ))}
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ScoresList
