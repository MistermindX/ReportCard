import React, { useEffect } from 'react'
import ScoresList from '../components/ScoresList'

function ScoresInput(props) {
  useEffect(() => {})

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
