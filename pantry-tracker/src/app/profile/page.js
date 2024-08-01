'use client'
import { UserAuth } from "../context/AuthContext"
import { useEffect, useState } from "react"
import spinner from "../components/spinner"


export default function Profile (){
  const {user} = UserAuth()
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const checkAuthentication = async ()=>{
      await new Promise((resolve) => setTimeout(resolve, 50))
      setLoading(false)
    }
    checkAuthentication()
  }, [user])


  return(
    <>

      <div className="p-4">
        {loading ? (<spinner/>) : user ? (
          <p>Welcome, {user.displayName} - you are logged in to the profile</p>
        ) : (<p>You must be logged in to view this page</p>)}
        
      </div>
    </>
  )
}