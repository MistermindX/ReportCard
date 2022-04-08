import React from 'react'
import ScoresList from '../components/ScoresList'

function ScoresInput(props) {
  return (
    <div>
      <ScoresList studentList={props.studentList} />
    </div>
  )
}

export default ScoresInput
