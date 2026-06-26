import React from 'react'
import HomePage from './HomePage.jsx'
import CreatePage from './CreatePage.jsx'
import Notes from './Notes.jsx'
import { Routes, Route } from 'react-router-dom'
import { Toaster,toast } from 'react-hot-toast'
import './App.css'
const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/createpage' element={<CreatePage />} />
        <Route path='/notes/:id' element={<Notes />} />
      </Routes>
      {/* <button onClick={()=> toast.success('clicked successfully')} className='btn btn-success'>Click here</button> */}
    </div>
  )
}

export default App 