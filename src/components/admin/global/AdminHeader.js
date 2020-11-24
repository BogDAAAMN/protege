import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase/firebase'

import AdminHeaderNav from './AdminHeaderNav'

import Logo from '../../../assets/images/protegeLogo.svg'

const AdminHeader = () => {
  return (
    <header className='bg-gray-200 h-screen flex flex-col p-6 w-56 fixed'>
      <Link to='/' className='mb-12'>
        <img src={Logo} alt='Protege.dev Logo' />
      </Link>

      <AdminHeaderNav />

      <button
        onClick={() => auth.signOut()}
        className='bg-teal-500 w-full py-2 text-white text-xs uppercase'
        type='button'
      >
        Sign Out
      </button>
    </header>
  )
}

export default AdminHeader
