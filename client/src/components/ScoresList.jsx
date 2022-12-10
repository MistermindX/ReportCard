import React from 'react'
import { useNavigate } from 'react-router-dom'

function ScoresList(props) {
  let navigate = useNavigate()
  const findResult = (i) => {
    let heshethey = 'they'
    let HeSheThey = 'They'
    let himherthem = 'them'
    let hishertheir = 'their'
    let himselfherselftheirself = 'theirself'
    switch (props.paramsList[i].gender) {
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
    ].result = `${props.studentList[i].firstName} ${props.studentList[i].lastName} is completing the ${props.paramsList[i].grade} Grade. ${HeSheThey}'s currently taking ${props.paramsList[i].currentClass} in a ${props.paramsList[i].setting} setting. Thus far, ${props.studentList[i].firstName} has a ${props.paramsList[i].yearGrade} average for the year, with a ${props.paramsList[i].q1} in the 1st quarter, a ${props.paramsList[i].q2} in the 2nd quarter, and a ${props.paramsList[i].q3} in the 3rd quarter. ${HeSheThey} has been marked absent ${props.paramsList[i].absent} times this year, and been marked tardy ${props.paramsList[i].tardy} times this year through 3 marking periods. `

    let top = props.studentList[i].firstName

    switch (props.paramsList[i].punctuality) {
      case '1':
        props.studentList[
          i
        ].result += `${top} is late to class on a regular basis. `
        break
      case '2':
        props.studentList[i].result += `${top} is occasionally late to class. `
        break
      case '3':
        props.studentList[i].result += `${top} is usually on time to class. `
        break
      case '4':
        props.studentList[
          i
        ].result += `${top} is always on time to class, barring unforeseen circumstances. `
        break
      default:
        break
    }

    props.paramsList[i].punctuality > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].intelligence) {
      case '1':
        props.studentList[
          i
        ].result += `${top} is very intelligent, and capable of doing the work when properly motivated and focused. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${top} is very intelligent, and should be encouraged to work on problems ${himselfherselftheirself} before asking for help. `
        break
      case '3':
        props.studentList[
          i
        ].result += `${top} is very intelligent, and should be given extra work to keep ${himherthem} occupied and challenged. `
        break
      case '4':
        props.studentList[
          i
        ].result += `${top} is very intelligent, and should be encouraged to help others during class. `
        break
      default:
        break
    }

    props.paramsList[i].intelligence > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].focus) {
      case '1':
        props.studentList[
          i
        ].result += `${top} requires a paraprofessional to help keep ${himselfherselftheirself} focused during class. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${top} can focus with some re-direction a few times during class. `
        break
      case '3':
        props.studentList[
          i
        ].result += `${top} for most part stays focused in class, but does need re-direction on occasion. `
        break
      case '4':
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

    switch (props.paramsList[i].selfStarter) {
      case '1':
        props.studentList[
          i
        ].result += `${top} requires assistance starting work before ${heshethey} is able to complete it ${himselfherselftheirself}. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${top} will usually need help getting started on work in class before ${heshethey} can complete it ${himselfherselftheirself}. `
        break
      case '3':
        props.studentList[
          i
        ].result += `${top} will sometimes need help getting started on work before being able to complete it ${himselfherselftheirself}, but not always. `
        break
      case '4':
        props.studentList[
          i
        ].result += `${top} has the ability to get started on work in class without much assistance. `
        break
      default:
        break
    }

    props.paramsList[i].selfStarter > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].perseverence) {
      case '1':
        props.studentList[
          i
        ].result += `${top} will stop working if and when ${heshethey} doesn't know how to continue a problem. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${top} often has issues persevering to solve problems in class. `
        break
      case '3':
        props.studentList[
          i
        ].result += `${top} will occasionally require help when ${heshethey} gets stuck while solving a problem. `
        break
      case '4':
        props.studentList[
          i
        ].result += `${top} has the ability to persevere through issues solving problems to complete them. `
        break
      default:
        break
    }

    props.paramsList[i].perseverence > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].askQuestions) {
      case '1':
        props.studentList[
          i
        ].result += `${top} very rarely asks questions when they ${heshethey} does not understand something in class, so ${hishertheir} understanding needs to be gauged regularly. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${top} will only ask questions when solicited, so ${hishertheir} understanding needs to be gauged regularly. `
        break
      case '3':
        props.studentList[
          i
        ].result += `${top} will usually ask questions when necessary, but not always. `
        break
      case '4':
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

    switch (props.paramsList[i].distraction) {
      case '1':
        props.studentList[
          i
        ].result += `${top} has a habit of distracting others in class when not properly occupied. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${top} will occasionally distract others in class if not properly occupied. `
        break
      case '3':
        props.studentList[
          i
        ].result += `${top} when paired with certain peers, can be a distraction to others. `
        break
      case '4':
        props.studentList[
          i
        ].result += `${top} will rarely, if ever, distract others in class. `
        break
      default:
        break
    }

    props.paramsList[i].distraction > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].handingInWork) {
      case '1':
        props.studentList[
          i
        ].result += `${top} regularly hands in assignments after the due date. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${top} will usually need to be reminded to hand ${hishertheir} assignments in on time. `
        break
      case '3':
        props.studentList[
          i
        ].result += `${top} will occasionally turn in assignments after they're due, but for the most part hands work in on time. `
        break
      case '4':
        props.studentList[
          i
        ].result += `${top} always turns in ${hishertheir} assignments on time. `
        break
      default:
        break
    }

    props.paramsList[i].handingInWork > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].bestModeOfLearning) {
      case '1':
        props.studentList[
          i
        ].result += `${top} learns best when ${heshethey} has a teacher or paraprofessional to sit with ${himherthem} while they work to provide guidance and redirection. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${top} learns best by having a problem modeled for ${himherthem} before attempting it ${himselfherselftheirself}. `
        break
      case '3':
        props.studentList[
          i
        ].result += `${top} learns best by working in a group with others to work out solutions. `
        break
      case '4':
        props.studentList[
          i
        ].result += `${top} learns best by trying a problem ${himselfherselftheirself}, learning from ${hishertheir} mistakes, and asking questions about the problem afterwards. `
        break
      default:
        break
    }

    props.paramsList[i].bestModeOfLearning > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].socialInteractions) {
      case '1':
        props.studentList[
          i
        ].result += `${top} has a difficult time interacting with others in class in a healthy and appropriate way. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${props.studentList[i].firstName}'s social interactions with others can vary and are something they need to have monitored. `
        break
      case '3':
        props.studentList[
          i
        ].result += `For the most part, ${props.studentList[i].firstName} has healthy social interactions with others in the classroom. `
        break
      case '4':
        props.studentList[
          i
        ].result += `${top} has normal, appropriate social interactions with ${hishertheir} peers and staff in the classroom. `
        break
      default:
        break
    }

    props.paramsList[i].socialInteractions > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].technologyLiteracy) {
      case '1':
        props.studentList[
          i
        ].result += `${top} generally has a difficult time using technology in class and usually requires help in this area. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${top} has the ability to learn new computer skills, but does require help occasionally. `
        break
      case '3':
        props.studentList[
          i
        ].result += `${top} has a solid grasp of technology and can learn computer skills quickly. `
        break
      case '4':
        props.studentList[
          i
        ].result += `${top} has a strong grasp of technology, learns new skills quickly, and has the ability to assist others in this area. `
        break
      default:
        break
    }

    props.paramsList[i].technologyLiteracy > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].onlineLearning) {
      case '1':
        props.studentList[
          i
        ].result += `${top} is regularly late or absent during remote instruction. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${top} has a difficult time logging in for class on Zoom regularly during remote instruction. `
        break
      case '3':
        props.studentList[
          i
        ].result += `${top} will sometimes log in for class on Zoom when necessary during remote instruction, but not always. `
        break
      case '4':
        props.studentList[
          i
        ].result += `${top} will log in to Zoom on time during remote instruction `
        break
      default:
        break
    }

    props.paramsList[i].onlineLearning > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].onlineResponsiveness) {
      case '1':
        props.studentList[
          i
        ].result += `${top} is usually unresponsive during remote instruction. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${top} is sometimes unresponsive during remote instruction. `
        break
      case '3':
        props.studentList[
          i
        ].result += `${top} is usually responsive during remote instruction. `
        break
      case '4':
        props.studentList[
          i
        ].result += `${top} is always responsive during remote instruction. `
        break
      default:
        break
    }

    props.paramsList[i].onlineResponsiveness > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].cameraMicrophone) {
      case '1':
        props.studentList[
          i
        ].result += `${top} rarely, if ever, turns on ${hishertheir} camera and microphone during remote instruction. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${top} will only turn on ${hishertheir} camera or microphone when specifically asked to do so. `
        break
      case '3':
        props.studentList[
          i
        ].result += `${top} will usually have ${hishertheir} camera and microphone on during remote instruction when appropriate. `
        break
      case '4':
        props.studentList[
          i
        ].result += `${top} will always have ${hishertheir} camera and microphone on during remote instruction when appropriate.`
        break
      default:
        break
    }

    props.paramsList[i].cameraMicrophone > 0 &&
    top === props.studentList[i].firstName
      ? (top = HeSheThey)
      : (top = props.studentList[i].firstName)

    switch (props.paramsList[i].language) {
      case '1':
        props.studentList[
          i
        ].result += `${top} has a difficult time understanding content being delivered in English during class. `
        break
      case '2':
        props.studentList[
          i
        ].result += `${top} will occasionally have misunderstandings in class while learning in English. `
        break
      case '3':
        props.studentList[
          i
        ].result += `${top} does very well in class even while learning in English. `
        break
      case '4':
        props.studentList[
          i
        ].result += `${top} has no issue learning content in English. `
        break
      default:
        break
    }

    switch (props.paramsList[i].placement) {
      case '1':
        props.studentList[
          i
        ].result += `I believe ${props.studentList[i].firstName} would be appropriately placed in a Pull Out Replacement setting.`
        break
      case '2':
        props.studentList[
          i
        ].result += `I believe ${props.studentList[i].firstName} could be appropriately placed in an Inclusion setting or a Pull Out Replacement setting.`
        break
      case '3':
        props.studentList[
          i
        ].result += `I believe ${props.studentList[i].firstName} would be appropriately placed in an Inclusion setting if not for the fact they are continuing to learn English. Given that, I believe they are appropriately placed in a Pull Out Replacement setting.`
        break
      case '4':
        props.studentList[
          i
        ].result += `I believe ${props.studentList[i].firstName} would be appropriately placed in an Inclusion setting if not for their social skills. Given that, I believe they are appropriately placed in a Pull Out Replacement setting.`
        break
      case '5':
        props.studentList[
          i
        ].result += `I believe ${props.studentList[i].firstName} would be appropriately placed in an Inclusion setting.`
        break
      default:
        break
    }
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
    navigate('/results')
  }

  return (
    <div>
      <p className="instructions">
        <b>Instructions:</b> Input the information and scores for each student.
        Click <b>Submit</b> to continue.{' '}
      </p>
      <form onSubmit={handleSubmit}>
        <ul>
          {props.studentList.map((Student) => (
            <li key={Student.id}>
              <p className="name">
                {Student.firstName} {Student.lastName}
              </p>
              <br />
              Grade:&nbsp;&nbsp;
              <select id="grade">
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
              <br />
              Current Class:&nbsp;&nbsp;
              <select id="currentClass">
                <option></option>
                <option value="Pre-Algebra">Pre-Algebra</option>
                <option value="Algebra I">Algebra I</option>
                <option value="Geometry">Geometry</option>
                <option value="Algebra II">Algebra II</option>
                <option value="Precalculus">Precalculus</option>
                <option value="Calculus">Calculus</option>
                <option value="Introduction to College Algebra">
                  Introduction to College Algebra
                </option>
                <option value="Trigonometry & Elementary Functions">
                  Trigonometry & Elementary Functions
                </option>
              </select>
              <br />
              Setting:&nbsp;&nbsp;
              <select id="setting">
                <option value="Pull Out Replacement">
                  Pull Out Replacement
                </option>
                <option value="Inclusion">Inclusion</option>
                <option value="General Education">General Education</option>
                <option value="Honors">Honors</option>
              </select>
              <br />
              Year Grade:&nbsp;&nbsp;
              <input id="yearGrade" />
              <br />
              Q1 Grade:&nbsp;&nbsp;
              <input id="q1" />
              <br />
              Q2 Grade:&nbsp;&nbsp;
              <input id="q2" />
              <br />
              Q3 Grade:&nbsp;&nbsp;
              <input id="q3" />
              <br />
              Absent:&nbsp;&nbsp;
              <input id="absent" />
              <br />
              Tardy:&nbsp;&nbsp;
              <input id="tardy" />
              <br />
              Gender:&nbsp;&nbsp;
              <select id="gender">
                <option value="m">Male</option>
                <option value="f">Female</option>
                <option value="o">Other</option>
              </select>
              <br />
              Punctuality:&nbsp;&nbsp;
              <select id="punctuality">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student is late to class on a regular basis.
                </option>
                <option value="2">
                  2 - Student is occasionally late to class.
                </option>
                <option value="3">
                  3 - Student is usually on time to class.
                </option>
                <option value="4">
                  4 - Student is always on time to class, barring unforeseen
                  circumstances.
                </option>
              </select>
              <br />
              Intelligence:&nbsp;&nbsp;
              <select id="intelligence">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student is very intelligent, and capable of doing the work
                  when properly motivated and focused.
                </option>
                <option value="2">
                  2 - Student is very intelligent, and should be encouraged to
                  work on problems themselves before asking for help.{' '}
                </option>
                <option value="3">
                  3 - Student is very intelligent, and should be given extra
                  work to keep them occupied and challenged.
                </option>
                <option value="4">
                  4 - Student is very intelligent, and should be encouraged to
                  help others during class.
                </option>
              </select>
              <br />
              Focus:&nbsp;&nbsp;
              <select id="focus">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student requires help from a paraprofessional to keep them
                  focused throughout class.
                </option>
                <option value="2">
                  2 - Student is able to focus with redirection throughout
                  class.
                </option>
                <option value="3">
                  3 - Student only requires occasional redirection throughout
                  class to remain focused.
                </option>
                <option value="4">
                  4 - Student always remains focused throughout class without
                  any redirection.
                </option>
              </select>
              <br />
              Self Starter:&nbsp;&nbsp;
              <select id="selfStarter">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student requires assistance starting work before they are
                  able to complete it themselves.
                </option>
                <option value="2">
                  2 - Student will usually need help getting started on work in
                  class before they can complete it themselves.
                </option>
                <option value="3">
                  3 - Student will sometimes need help getting started on work
                  before being able to complete it themselves, but not always.
                </option>
                <option value="4">
                  4 - Student has the ability to get started on work in class
                  without much assistance.
                </option>
              </select>
              <br />
              Perseverence:&nbsp;&nbsp;
              <select id="perseverence">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student will stop working if and when they don’t know how
                  to continue a problem.
                </option>
                <option value="2">
                  2 - Student often has issues persevering to solve problems in
                  class.
                </option>
                <option value="3">
                  3 - Student will occasionally require help when they get stuck
                  while solving a problem.
                </option>
                <option value="4">
                  4 - Student has the ability to persevere through issues
                  solving problems to complete them.
                </option>
              </select>
              <br />
              Asks Questions:&nbsp;&nbsp;
              <select id="askQuestions">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student very rarely asks questions when they do not
                  understand something in class, so their understanding needs to
                  be gauged regularly.
                </option>
                <option value="2">
                  2 - Student will only ask questions when solicited, so their
                  understanding needs to be gauged regularly.
                </option>
                <option value="3">
                  3 - Student will usually ask questions when necessary, but not
                  always.
                </option>
                <option value="4">
                  4 - Student asks great questions that also benefit others in
                  class.
                </option>
              </select>
              <br />
              Distraction:&nbsp;&nbsp;
              <select id="distraction">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student has a habit of distracting others in class when
                  not properly occupied.
                </option>
                <option value="2">
                  2 - Student will occasionally distract others in class if not
                  properly occupied.
                </option>
                <option value="3">
                  3 - Student when paired with certain peers, can be a
                  distraction to others.
                </option>
                <option value="4">
                  4 - Student will rarely, if ever, distract others in class.
                </option>
              </select>
              <br />
              Handing in Work:&nbsp;&nbsp;
              <select id="handingInWork">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student regularly hands in assignments after the due date.
                </option>
                <option value="2">
                  2 - Student will usually need to be reminded to hand their
                  assignments in on time.
                </option>
                <option value="3">
                  3 - Student will occasionally turn in assignments after
                  they're due, but for the most part hands work in on time.
                </option>
                <option value="4">
                  4 - Student always turns in their assignments on time.
                </option>
              </select>
              <br />
              Best Mode Of Learning:&nbsp;&nbsp;
              <select id="bestModeOfLearning">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student learns best when they have a teacher or
                  paraprofessional to sit with them while they work to provide
                  guidance and redirection.
                </option>
                <option value="2">
                  2 - Student learns best by having a problem modeled for them
                  before attempting themselves.
                </option>
                <option value="3">
                  3 - Student learns best by working in a group with others to
                  work out solutions.
                </option>
                <option value="4">
                  4 - Student learns best by trying a problem themselves,
                  learning from their mistakes, and asking questions about the
                  problem afterwards.
                </option>
              </select>
              <br />
              Social Interactions:&nbsp;&nbsp;
              <select id="socialInteractions">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student has a difficult time interacting with others in
                  class in a healthy and appropriate way.
                </option>
                <option value="2">
                  2 - Student's social interactions with others can vary and are
                  something they need to have monitored.
                </option>
                <option value="3">
                  3 - For the most part, student has healthy social interactions
                  with others in the classroom.
                </option>
                <option value="4">
                  4 - Student has normal, appropriate social interactions with
                  their peers and staff in the classroom.
                </option>
              </select>
              <br />
              Technology Literacy:&nbsp;&nbsp;
              <select id="technologyLiteracy">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student generally has a difficult time using technology in
                  class and usually requires help in this area.
                </option>
                <option value="2">
                  2 - Student has the ability to learn new computer skills, but
                  does require help occasionally.
                </option>
                <option value="3">
                  3 - Student has a solid grasp of technology and can learn
                  computer skills quickly.
                </option>
                <option value="4">
                  4 - Student has a strong grasp of technology, learns new
                  skills quickly, and has the ability to assist others in this
                  area.
                </option>
              </select>
              <br />
              Online Learning:&nbsp;&nbsp;
              <select id="onlineLearning">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student is regularly late or absent during remote
                  instruction.
                </option>
                <option value="2">
                  2 - Student has a difficult time logging in for class on Zoom
                  regularly during remote instruction.
                </option>
                <option value="3">
                  3 - Student will sometimes log in for class on Zoom when
                  necessary during remote instruction, but not always.
                </option>
                <option value="4">
                  4 - Student will log in to Zoom on time during remote
                  instruction.
                </option>
              </select>
              <br />
              Online Responsiveness:&nbsp;&nbsp;
              <select id="onlineResponsiveness">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student is usually unresponsive during remote instruction.
                </option>
                <option value="2">
                  2 - Student is sometimes unresponsive during remote
                  instruction.
                </option>
                <option value="3">
                  3 - Student is usually responsive during remote instruction.
                </option>
                <option value="4">
                  4 - Student is always responsive during remote instruction.
                </option>
              </select>
              <br />
              Camera/Microphone:&nbsp;&nbsp;
              <select id="cameraMicrophone">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student rarely, if ever, turns on their camera and
                  microphone during remote instruction.
                </option>
                <option value="2">
                  2 - Student will only turn on their camera or microphone when
                  specifically asked to do so.
                </option>
                <option value="3">
                  3 - Students will usually have their camera and microphone on
                  during remote instruction when appropriate.
                </option>
                <option value="4">
                  4 - Student will always have their camera and microphone on
                  during remote instruction when appropriate.
                </option>
              </select>
              <br />
              Language:&nbsp;&nbsp;
              <select id="language">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - Student has a difficult time understanding content being
                  delivered in English during class.
                </option>
                <option value="2">
                  2 - Student will occasionally have misunderstandings in class
                  while learning in English.
                </option>
                <option value="3">
                  3 - Student does very well in class even while learning in
                  English.{' '}
                </option>
                <option value="4">
                  4 - Student has no issue learning content in English.
                </option>
              </select>
              <br />
              Placement:&nbsp;&nbsp;
              <select id="placement">
                <option value="0">0 - Skip Prompt</option>
                <option value="1">
                  1 - I believe student would be appropriately placed in a Pull
                  Out Replacement setting.
                </option>
                <option value="2">
                  2 - I believe student could be appropriately placed in an
                  Inclusion setting or a Pull Out Replacement setting.
                </option>
                <option value="3">
                  3 - I believe student would be appropriately placed in an
                  Inclusion setting if not for the fact they are continuing to
                  learn English. Given that, I believe they are appropriately
                  placed in a Pull Out Replacement setting.
                </option>
                <option value="4">
                  4 - I believe student would be appropriately placed in an
                  Inclusion setting if not for their social skills. Given that,
                  I believe they are appropriately placed in a Pull Out
                  Replacement setting.
                </option>
                <option value="5">
                  5 - I believe student would be appropriately placed in an
                  Inclusion setting.
                </option>
              </select>
            </li>
          ))}
        </ul>
        <button type="submit" className="scoresSubmit">
          Submit
        </button>
      </form>
      <br />
      <br />
    </div>
  )
}

export default ScoresList
