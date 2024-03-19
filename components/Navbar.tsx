"use client";
import { Code, Info, Menu, Trophy, User } from "lucide-react";
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {

  const router = useRouter();
  const pathname = usePathname();
  
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 767px)'); // Adjust the breakpoint as needed

    const handleMobileChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener('change', handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    return () => {
      mobileMediaQuery.removeEventListener('change', handleMobileChange);
    };
  }, []);

  if (isMobile) {
    return (
      <div className={`w-[80%] h-[50px] bg-ping-black mt-5 rounded-xl backdrop-blur-none border-2 border-neutral-800 flex justify-between items-center`}>
        <div className={`h-full flex flex-shrink justify-center items-center bg-gradient-to-r from-ping-gradient-begin to-ping-gradient-end bg-clip-text text-transparent`}>
          <button
            disabled={pathname === "/"}
            onClick={() => router.push("/")}
            className={`text-xl font-nexa-heavy  ml-4`}
          >
            @ping
          </button>
        </div>
        <div className={`h-full flex justify-center items-center mr-4`}>
          <Sheet>
            <SheetTrigger>
              <Menu
                color="#CFD1D4"
              />
            </SheetTrigger>
            <SheetContent
              className={`bg-ping-black border-l-2 border-neutral-800 text-ping-white font-nexa-extralight text-xl`}
            >
              <div className={`flex flex-col gap-4 mt-10`}>
                <div
                  className={`${pathname == "/hack" && "border-2"} flex items-center gap-2 bg-neutral-800 py-2 px-2 rounded-xl`}
                >
                  <Code color="#E7E8E9"/>
                  <button
                    disabled={pathname === "/hack"}
                    onClick={() => router.push("/hack")}
                    className={`flex-grow text-left`}
                  >
                   hack
                  </button>
                </div>

                <div
                  className={`${pathname == "/leaderboards" && "border-2"} flex items-center gap-2 bg-neutral-800 py-2 px-2 rounded-xl`}
                >
                  <Trophy color="#E7E8E9"/>
                  <button
                    disabled={pathname === "/leaderboards"}
                    onClick={() => router.push("/leaderboards")}
                    className={`flex-grow text-left`}
                  >
                    leaderboards
                  </button>
                </div>

                <div
                  className={`${pathname == "/profile" && "border-2"} flex items-center gap-2 bg-neutral-800 py-2 px-2 rounded-xl`}
                >
                  <User color="#E7E8E9"/>
                  <button
                    disabled={pathname === "/profile"}
                    onClick={() => router.push("/profile")}
                    className={`flex-grow text-left`}
                  >
                    profile
                  </button>
                </div>

                <div
                  className={`${pathname == "/about" && "border-2"} flex items-center gap-2 bg-neutral-800 py-2 px-2 rounded-xl`}
                >
                  <Info color="#E7E8E9"/>
                  <button
                    disabled={pathname === "/about"}
                    onClick={() => router.push("/about")}
                    className={`flex-grow text-left`}
                  >
                    about
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    )
  } 
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