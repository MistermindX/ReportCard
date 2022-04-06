import './styles/App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import StudentInput from './pages/StudentInput'

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
        </Routes>
      </main>
    </div>
  )
}

export default App
