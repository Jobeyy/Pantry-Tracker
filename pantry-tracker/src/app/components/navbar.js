'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async ()=> {
    try{
      await googleSignIn()
    } catch(error){
      console.log(error)
    }
  }

  const handleSignOut = async ()=>{
    try{
      await logOut()
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    const checkAuthentication = async ()=>{
      await new Promise((resolve) => setTimeout(resolve, 50))
      setLoading(false)
    }
    checkAuthentication()
  }, [user])

  
  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        
        {!user ? (null) : (<li className="p-2 cursor-pointer">
          <Link href="/profile">Profile</Link>
        </li>)}
        
      </ul>
      {loading ? null : !user ? (<ul className="flex">
        <li onClick={handleSignIn} className="p-2 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold mr-4 py-2 px-4 rounded">Sign Up</li>
        <li onClick={handleSignIn} className="p-2 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold mr-4 py-2 px-4 rounded">Login</li>
      </ul>) : (
        <div className="flex flex-col">
          
          <p className="">Welcome, {user.displayName}</p>
          <button className=" cursor-pointer  bg-blue-500 hover:bg-blue-700 text-white font-bold mr-4 py-2 px-6 rounded"onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
      
    </div>
  );
};

export default Navbar;