import React from 'react'
import StudentList from '../components/StudentList'

function StudentInput(props) {
  return (
    <div>
      <StudentList
        {...props}
        studentList={props.studentList}
        enterSite={props.setStudentList}
      />
    </div>
  )
}

export default StudentInput
