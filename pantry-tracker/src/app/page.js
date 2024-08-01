'use client'
import Image from "next/image";
import { UserAuth } from "./context/AuthContext";
import { useState } from "react";

export default function Home() {
  const {user} = UserAuth()
  return (
    <>
      <div className="p-2 h-full w-full flex border-2 items-center justify-center">
        <div>Pantry</div>
      </div>
    </>
  );
}
