import React from 'react'

function ScoresList(props) {
  const findResult = (i) => {
    let heshethey = 'they'
    let HeSheThey = 'They'
    let himherthem = 'them'
    let hishertheir = 'their'
    let himselfherselftheirself = 'theirself'
    switch (props.paramsList[i].pronouns) {
      case 'm':
        heshethey = 'he'
        HeSheThey = 'He'
        himherthem = 'him'
        hishertheir = 'his'
        himselfherselftheirself = 'himself'
        break
      case 'f':
        heshethey = 'she'
        HeSheThey = 'She'
        himherthem = 'her'
        hishertheir = 'her'
        himselfherselftheirself = 'herself'
        break
      default:
        break
    }

    props.studentList[
      i
    ].result += `${props.studentList[i].firstName} ${props.studentList[i].lastName} is completing the ${props.paramsList[i].grade} Grade. ${HeSheThey}’s currently taking ${props.paramsList[i].currentClass} in a ${props.paramsList[i].setting} setting. Thus far, ${props.studentList[i].firstName} has a ${props.paramsList[i].yearGrade} average for the year, with a ${props.paramsList[i].q1} in the 1st quarter, a ${props.paramsList[i].q2} in the 2nd quarter, and a ${props.paramsList[i].q3} + in the 3rd quarter. ${HeSheThey} has been marked absent ${props.paramsList[i].absent} times this year, and been marked tardy ${props.paramsList[i].tardy} times this year through 3 marking periods. `

    let top = props.studentList[i].firstName

    switch (props.paramsList[i].focus) {
      case 1:
        props.studentList[
          i
        ].result += `${top} requires a paraprofessional to help keep ${himselfherselftheirself} focused during class. `
        break
      case 2:
        props.studentList[
          i
        ].result += `${top} can focus with some re-direction a few times during class. `
        break
      case 3:
        props.studentList[
          i
        ].result += `${top} for most part stays focused in class, but does need re-direction on occasion. `
        break
      case 4:
        props.studentList[
          i
        ].result += `${top} always remains focused in class. `
        break
      default:
        break
    }

    props.paramsList[i].focus > 0 && top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].askQuestions) {
      case 1:
        props.studentList[
          i
        ].result += `${top} very rarely asks questions when ${heshethey} do not understand something. `
        break
      case 2:
        props.studentList[
          i
        ].result += `${top} needs to be checked in on regularly, but will ask questions when solicited. `
        break
      case 3:
        props.studentList[
          i
        ].result += `${top} will sometimes ask questions when necessary, but not always. `
        break
      case 4:
        props.studentList[
          i
        ].result += `${top} asks great questions that also benefit others in class. `
        break
      default:
        break
    }

    props.paramsList[i].askQuestions > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].turnInWork) {
      case 1:
        props.studentList[
          i
        ].result += `${top} has a hard time handing in work on time. `
        break
      case 2:
        props.studentList[
          i
        ].result += `${top} will usually need to be reminded to hand ${hishertheir} work in on time. `
        break
      case 3:
        props.studentList[
          i
        ].result += `${top} will occasionally turn work in late, but for the most part is punctual handing in work. `
        break
      case 4:
        props.studentList[
          i
        ].result += `${top} always turns ${hishertheir} work in promptly. `
        break
      default:
        break
    }

    props.paramsList[i].turnInWork > 0 && top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].intelligence) {
      case 1:
        props.studentList[
          i
        ].result += `${top} is very intelligent. I will usually encourage them to work on things themselves before asking for help. `
        break
      case 2:
        props.studentList[
          i
        ].result += `${top} is very intelligent, and capable of doing the work when properly motivated. `
        break
      default:
        break
    }

    props.paramsList[i].intelligence > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    console.log(props.studentList[i].result, top)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let j = 0
    for (let i = 0; i < props.studentList.length; i++) {
      for (const key in props.paramsList[i]) {
        props.paramsList[i][key] =
          e.target[i * Object.keys(props.paramsList[i]).length + j].value
        j++
      }
      j = 0
      findResult(i)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          {props.studentList.map((Student) => (
            <li key={Student.id}>
              {Student.firstName}
              {Student.lastName}
              Grade:
              <select id="grade">
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
              Current Class: <input id="currentClass" />
              Setting: <input id="setting" />
              Year Grade: <input id="yearGrade" />
              Q1 Grade: <input id="q1" />
              Q2 Grade: <input id="q2" />
              Q3 Grade: <input id="q3" />
              Absent: <input id="absent" />
              Tardy: <input id="tardy" />
              Pronouns:
              <select id="pronouns">
                <option value="m">He/Him</option>
                <option value="f">She/Her</option>
                <option value="t">They/Them</option>
              </select>
              Focus:
              <select id="focus">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              Asks Questions:
              <select id="askQuestions">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              Turn In Work:
              <select id="turnInWork">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              Intelligence:
              <select id="intelligence">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              Distraction:
              <select id="distraction">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              Self Starter:
              <select id="selfStarter">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              Perseverence:
              <select id="perseverence">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              Best Mode Of Learning:
              <select id="bestModeOfLearning">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              Social Interactions:
              <select id="socialInteractions">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              Fluency With Technology:
              <select id="fluencyWithTechnology">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              Camera:
              <select id="focus">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              Responsiveness Online:
              <select id="responsivenessOnline">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              Language:
              <select id="language">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              Placement:
              <select id="placement">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </li>
          ))}
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ScoresList
