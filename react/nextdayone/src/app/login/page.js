
import React from 'react'
import NavBar from '../components/navbar/page'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <NavBar/>
        Login Page
     <br/>
      Don't have an account? <Link href="/login">Sign Up </Link>
    </div>
  )
}

export default page