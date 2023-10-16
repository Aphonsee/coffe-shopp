import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function SigninForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
 
  const navi = useNavigate();

  

  async function submit(e) {
    e.preventDefault();
    
      await axios
        .post(`http://localhost:3001/signin`, {username,password})
        .then((result) => {
          console.log(result);
          if (result.data === "Success") {
            navi("/productList");
          }
        })
        .catch((e) => console.log(e));
    
  }

  return (
    <form onSubmit={submit}>
      <div class="mb-6">
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">
          Name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  
    "
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your password
        </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  
    "
          required
        />
      </div>
      
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
        Submit
      </button>
    </form>
  );
}
