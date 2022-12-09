import React from 'react'
import { useNavigate } from 'react-router-dom'

function StudentList(props) {
  let navigate = useNavigate()
  const Student = function (firstName, lastName, result, id) {
    this.firstName = firstName
    this.lastName = lastName
    this.result = result
    this.id = id
  }

  const Parameters = function (
    grade,
    currentClass,
    setting,
    yearGrade,
    q1,
    q2,
    q3,
    absent,
    tardy,
    gender,
    punctuality,
    intelligence,
    focus,
    selfStarter,
    perseverence,
    askQuestions,
    distraction,
    handingInWork,
    bestModeOfLearning,
    socialInteractions,
    technologyLiteracy,
    onlineLearning,
    onlineResponsiveness,
    cameraMicrophone,
    language,
    placement
  ) {
    this.grade = grade
    this.currentClass = currentClass
    this.setting = setting
    this.yearGrade = yearGrade
    this.q1 = q1
    this.q2 = q2
    this.q3 = q3
    this.absent = absent
    this.tardy = tardy
    this.gender = gender
    this.punctuality = punctuality
    this.intelligence = intelligence
    this.focus = focus
    this.selfStarter = selfStarter
    this.perseverence = perseverence
    this.askQuestions = askQuestions
    this.distraction = distraction
    this.handingInWork = handingInWork
    this.bestModeOfLearning = bestModeOfLearning
    this.socialInteractions = socialInteractions
    this.technologyLiteracy = technologyLiteracy
    this.onlineLearning = onlineLearning
    this.onlineResponsiveness = onlineResponsiveness
    this.cameraMicrophone = cameraMicrophone
    this.language = language
    this.placement = placement
  }

  const makeStudentList = (e) => {
    e.preventDefault()
    const firstsAndLasts = []
    const arrayOfStudentObjects = []
    const arrayOfStudentParams = []
    const arrayOfStudents = e.target.listOfStudents.value.split(`, `)
    for (let i = 0; i < arrayOfStudents.length; i++) {
      firstsAndLasts[i] = arrayOfStudents[i]?.split(' ')
      arrayOfStudentObjects[i] = new Student(
        firstsAndLasts[i][0],
        firstsAndLasts[i][1],
        '',
        i
      )
      arrayOfStudentParams[i] = new Parameters(
        '',
        '',
        '',
        0,
        0,
        0,
        0,
        0,
        0,
        '',
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      )
    }
    props.setStudentList(arrayOfStudentObjects)
    props.setParamsList(arrayOfStudentParams)
    navigate('/scores')
  }

  return (
    <div class="studentName">
      <h2>Insert List of Students</h2>
      <p className="instructions">
        <b>Instructions:</b> Put your list of students in with a comma and a
        space between each one. Then click <b>Submit</b> to continue.{' '}
      </p>
      <form onSubmit={makeStudentList}>
        <textarea
          cols="50"
          rows="10"
          name="listOfStudents"
          placeholder="Enter Students Here"
        />
        <br />
        <br />
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default StudentList
