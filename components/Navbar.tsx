"use client";
import { useRouter, usePathname } from "next/navigation"

export default function Navbar() {
  const router = useRouter();
  
  const pathname = usePathname();




  return (
    <div className={`w-[80%] h-[80px] bg-ping-black backdrop-blur-none mt-5 rounded-xl flex items-center border-2 border-neutral-800`}>
      <div className={`h-full flex flex-shrink justify-center items-center bg-gradient-to-r from-ping-gradient-begin to-ping-gradient-end bg-clip-text text-transparent`}>
        <button
          disabled={pathname === "/"}
          onClick={() => router.push("/")}
          className={`text-4xl font-nexa-heavy pb-3 ml-4`}
        >
          @ping
        </button>
      </div>
      <div className={`flex flex-grow justify-around`}>
        <button
          disabled={pathname === "/hack"}
          onClick={() => router.push("/hack")}
          className={`font-nexa-extralight text-xl px-2 ${pathname == "/hack" && "border-b-2"}`}
        > 
          hack
        </button>
        <button
          disabled={pathname === "/leaderboards"}
          onClick={() => router.push("/leaderboards")}
          className={`font-nexa-extralight text-xl px-2 ${pathname == "/leaderboards" && "border-b-2"}`}
        > 
          leaderboards
        </button>
        <button
          disabled={pathname === "/profile"}
          onClick={() => router.push("/profile")}
          className={`font-nexa-extralight text-xl px-2 ${pathname == "/profile" && "border-b-2"}`}
        > 
          profile
        </button>
        <button
          disabled={pathname === "/about"}
          onClick={() => router.push("/about")}
          className={`font-nexa-extralight text-xl px-2 ${pathname == "/about" && "border-b-2"}`}
        > 
          about
        </button>
      </div>
    </div>
  )
}