import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp"


const uiConfig = {
  signInSuccessURL: "/",

  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID]
}