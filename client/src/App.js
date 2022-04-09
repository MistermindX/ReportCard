import './styles/App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import StudentInput from './pages/StudentInput'
import ScoresInput from './pages/ScoresInput'
import ResultsPage from './pages/ResultsPage'

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
          <Route
            path="/results"
            element={<ResultsPage studentList={studentList} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
