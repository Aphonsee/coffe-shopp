import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function SignupForm  (){
    

    const [username ,setUserName]=useState('');
    const [password ,setPassword]=useState('');
    const [email ,setEmail]=useState('');

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post(`http://localhost:3001/signup`,{
                username,email,password
            })
        }
        catch(e){
            console.log(e)
        }

    }


  return (
    
<form onSubmit={submit}>
<div class="mb-6">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
    <input type="text"  onChange={(e) => {setUserName(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  
    "  required/>
  </div>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
    <input type="email"  onChange={(e) => {setEmail(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  
     " placeholder="name@flowbite.com" required/>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
    <input type="password"  onChange={(e) => {setPassword(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  
    " required/>
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input  type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:border-gray-600  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
</form>

    
  )
}
