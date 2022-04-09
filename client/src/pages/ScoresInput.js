import React from 'react'
import ScoresList from '../components/ScoresList'

function ScoresInput(props) {
  return (
    <div>
      <ScoresList
        studentList={props.studentList}
        paramsList={props.paramsList}
      />
    </div>
  )
}

export default ScoresInput
