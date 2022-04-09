import './styles/App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import StudentInput from './pages/StudentInput'
import ScoresInput from './pages/ScoresInput'

function App() {
  const [studentList, setStudentList] = useState([])
  const [paramsList, setParamsList] = useState([])
  return (
    <div className="App">
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <StudentInput
                setStudentList={setStudentList}
                setParamsList={setParamsList}
              />
            }
          />
          <Route
            path="/scores"
            element={
              <ScoresInput studentList={studentList} paramsList={paramsList} />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
