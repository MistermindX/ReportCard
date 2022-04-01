const Student = function (
  firstName,
  lastName,
  grade,
  currentClass,
  setting,
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
  let firstName = prompt(`First Name?`)
  let lastName = prompt(`Last Name?`)
  let grade = prompt(`Grade?`)
  let currentClass = prompt(`Current Class?`)
  let setting = prompt(``)
  let q1 = prompt(``)
  let q2 = prompt(``)
  let q3 = prompt(``)
  let absent = prompt(``)
  let tardy = prompt(``)
  let pronouns = prompt(``)
  let focus = prompt(``)
  let askQuestions = prompt(``)
  let turnInWork = prompt(``)
  let intellegence = prompt(``)
  let distraction = prompt(``)
  let selfStarter = prompt(``)
  let perseverence = prompt(``)
  let bestModeOfLearning = prompt(``)
  let socialInteractions = prompt(``)
  let fluencyWithTechnology = prompt(``)
  let camera = prompt(``)
  let responsivenessOnline = prompt(``)
  let language = prompt(``)
  let placement = prompt(``)
  let result = prompt(``)
}
