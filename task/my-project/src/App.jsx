import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useParams, } from 'react-router-dom';
import Task from './components/task';

function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route path='/' exact element={<Task />} />

        </Routes>

      </Router>
    </>
  )
}

export default App
