import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute' >
    <Link  to={"/"}><h1 className='text-red-600 cursor-pointer font-bold text-4xl'>NETFLIX</h1></Link>

<div className='text-white flw my-2 py-2'>
<Link  to={"/signup"}><button className='bg-red-600 px-6 rounded cursor-pointer  py-3 mx-3'>Sign Up</button></Link>
<Link  to={"/signin"}><button>Sign In</button></Link>

</div>
    </div>
  )
}

export default NavBar