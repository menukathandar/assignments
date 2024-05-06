// import NavBar from '../components/navbar/page';
import React from 'react'
import {Button,Input} from "@nextui-org/react";

const page = () => {
  return (
    <div>
      {/* <NavBar/> */}
        <div className="flex justify-center">
          <div className= 'border border-black m-7 w-72 p-2'>
          <Input type="text" label="Fullname" />
          <Input type="text" label="Address" />
          <Input type="date" label="Date of birth" />
          <Input type="text" label="Username" />
          <Input type="Password" label="Password" />
          <Input type="email" label="Email" />
          <Button radius="full" className="bg-gradient-to-tr from-green-500 to-blue-500 text-white shadow-lg">
            Sign Up
          </Button>
          </div>
        </div>
    </div>
  )
}

export default page