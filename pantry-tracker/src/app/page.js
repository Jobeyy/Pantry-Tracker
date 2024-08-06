"use client";
import Image from "next/image";
import { UserAuth } from "./context/AuthContext";

import PantryList from "./components/PantryList";

export default function Home() {
  const { user } = UserAuth();
  return (
    <>
    <div className="flex h-screen w-screen justify-center justify-items-center align-middle items-center">
        {!user ? (
          <h1>Please Sign in</h1>
        ) : (
          <div className="flex flex-col justify-between items-center">
            <div className="m-10">
              <h1 className="text-6xl">Pantry Tracker</h1>
            </div>
            <div>
              <PantryList />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
