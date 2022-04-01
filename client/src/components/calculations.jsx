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

let stuArr = []

let numStudents = prompt(`How many students?`)

for (let i = 0; i < numStudents; i++) {
  alert(`Student Number ${i + 1}`)
  let firstName = prompt(`First Name?`)
  let lastName = prompt(`Last Name?`)
  let grade = prompt(`Grade?`)
  let currentClass = prompt(`Current Class?`)
  let setting = prompt(`Setting?`)
  let yearGrade = prompt(`yearGrade?`)
  let q1 = prompt(`Q1 Grade?`)
  let q2 = prompt(`Q2 Grade?`)
  let q3 = prompt(`Q3 Grade?`)
  let absent = prompt(`Absenses?`)
  let tardy = prompt(`Tardies?`)
  let pronouns = prompt(`Pronouns?`)
  let focus = prompt(`Focus?`)
  let askQuestions = prompt(`Ask Questions?`)
  let turnInWork = prompt(`Turns in Work?`)
  let intellegence = prompt(`Intellengence?`)
  let distraction = prompt(`Distraction?`)
  let selfStarter = prompt(`Self Starter?`)
  let perseverence = prompt(`Perseverence?`)
  let bestModeOfLearning = prompt(`Learning Mode?`)
  let socialInteractions = prompt(`Social?`)
  let fluencyWithTechnology = prompt(`Tech?`)
  let camera = prompt(`Camera?`)
  let responsivenessOnline = prompt(`Responsive?`)
  let language = prompt(`Language?`)
  let placement = prompt(`Placement?`)
  let result = ``

  stuArr[i] = new Student(
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
  )
}
console.log(stuArr)
