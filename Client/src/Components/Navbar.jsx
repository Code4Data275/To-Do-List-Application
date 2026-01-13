import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='bg-amber-400 shadow-md'>
        <nav className='max-w-6xl mx-auto px-4 py-4'>
            <Link to='/'>
                <h1 className='text-3xl font-bold text-gray-900'>To Do List Application</h1>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar
