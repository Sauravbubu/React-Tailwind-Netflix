import React from 'react'
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <>
    <div>
    <img  className='bg-black/100 w-full absolute h-full' src='https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/eceef24d-4920-430f-988b-d2f48f8ad060/IN-en-20220620-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/'></img>
    <div className='bg-black/40 w-full absolute  mx-auto justify-center align-middle text-center items-center h-full flex'>
   
    <div className='bg-black/80 w-[500px]  mt-[100px] h-[550px] flex flex-col p-[50px] gap-5'>
    <h1 className='text-white text-[30px]'>Sign Up</h1>
    <input className='p-3  bg-gray-800' type="text" placeholder="Enter Full Name"/>
<input className='p-3  bg-gray-800' type="email" placeholder="Enter Email"/>
<input className='p-3 bg-gray-800'  type="Password" placeholder="Enter Password"/>
<button className='bg-red-800 px-3 py-4 text-white'>Sign Up</button>

<h1 className='text-white'>Already Have an Account? <Link to={'/signin'}> <span>Login</span></Link></h1>
</div>
    </div>
   
    </div>
   
    </> 
  )
}

export default Signup