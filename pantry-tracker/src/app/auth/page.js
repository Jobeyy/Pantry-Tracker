import React from "react"
import firebase from "../firebase/clientApp"


const uiConfig = {
  signInSuccessURL: "/",

  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID]
}