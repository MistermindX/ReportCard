import './styles/App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import StudentInput from './pages/StudentInput'
import ScoresInput from './pages/ScoresInput'

function App() {
  const [studentList, setStudentList] = useState([])
  return (
    <div className="App">
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <StudentInput
                studentList={studentList}
                setStudentList={setStudentList}
              />
            }
          />
          <Route
            path="/scores"
            element={
              <ScoresInput
                studentList={studentList}
                setStudentList={setStudentList}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
