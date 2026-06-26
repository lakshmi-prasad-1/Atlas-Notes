import React from 'react'
import { Link } from 'react-router-dom'
import CreatePage from './CreatePage'
const Navbar = () => {
  return (
    <header className='bg-amber-950 border-b '>
      <div>
        <h2>Daily Notes</h2>
        <Link to='CreatePage' className='btn btn-primary'>
          New Notes
        </Link>
      </div>
    </header>
  )
}

export default Navbar
