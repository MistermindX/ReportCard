import React from 'react'
import { useNavigate } from 'react-router-dom'

function StudentList(props) {
  let navigate = useNavigate()
  const Student = function (
    firstName,
    lastName,
    grade,
    currentClass,
    setting,
    yearGrade,
    q1,
    q2,
    q3,
    absent,
    tardy,
    pronouns,
    focus,
    askQuestions,
    turnInWork,
    intellegence,
    distraction,
    selfStarter,
    perseverence,
    bestModeOfLearning,
    socialInteractions,
    fluencyWithTechnology,
    camera,
    responsivenessOnline,
    language,
    placement,
    result
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = grade
    this.currentClass = currentClass
    this.setting = setting
    this.yearGrade = yearGrade
    this.q1 = q1
    this.q2 = q2
    this.q3 = q3
    this.absent = absent
    this.tardy = tardy
    this.pronouns = pronouns
    this.focus = focus
    this.askQuestions = askQuestions
    this.turnInWork = turnInWork
    this.intellegence = intellegence
    this.distraction = distraction
    this.selfStarter = selfStarter
    this.perseverence = perseverence
    this.bestModeOfLearning = bestModeOfLearning
    this.socialInteractions = socialInteractions
    this.fluencyWithTechnology = fluencyWithTechnology
    this.camera = camera
    this.responsivenessOnline = responsivenessOnline
    this.language = language
    this.placement = placement
    this.result = result
  }

  const makeStudentList = (e) => {
    e.preventDefault()
    const firstsAndLasts = []
    const arrayOfStudentObjects = []
    const arrayOfStudents = e.target.listOfStudents.value.split(`, `)
    for (let i = 0; i < arrayOfStudents.length; i++) {
      firstsAndLasts[i] = arrayOfStudents[i]?.split(' ')
      arrayOfStudentObjects[i] = new Student(
        firstsAndLasts[i][0],
        firstsAndLasts[i][1]
      )
    }
    props.setStudentList(arrayOfStudentObjects)
    navigate('/scores')
  }

  return (
    <div>
      <h2>Insert List of Students</h2>
      <form onSubmit={makeStudentList}>
        <input name="listOfStudents" placeholder="Enter Students Here" />
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default StudentList
