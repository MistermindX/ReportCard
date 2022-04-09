import React, { useEffect } from 'react'
import ScoresList from '../components/ScoresList'

function ScoresInput(props) {
  useEffect(() => {})

  return (
    <div>
      <ScoresList studentList={props.studentList} />
    </div>
  )
}

export default ScoresInput
