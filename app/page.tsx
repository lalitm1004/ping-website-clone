import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`text-white h-screen w-screen bg-center flex flex-col justify-start items-center overflow-hidden`}>
      <Navbar />
      <div
        className={`flex flex-col justify-center items-center p-4 bg-ping-black w-[80%] h-[80%] mt-4 backdrop-blur-none rounded-xl border-neutral-800 border-2 overflow-y-auto`}
      >
        <div className={`flex flex-col flex-shrink justify-center items-center bg-gradient-to-r from-ping-gradient-begin to-ping-gradient-end bg-clip-text text-transparent`}>
          <p className={`text-7xl md:text-9xl font-nexa-heavy`}>
            @ping
          </p>
          <hr className={`mt-6 md:mt-10 w-full`} />
        </div>
        <div>
          <p className={`text-3xl md:text-6xl mt-3 md:mt-6 font-chintzy-regular text-ping-white`}>
            10h:20m:54s
          </p>
        </div>
        <div className={`flex justify-between font-chintzy-regular h-[35px]`}>
          <Link href={"/"} className={`text-neutral-500 mt-2 hover:text-ping-white hover:border-b-2 border-ping-white`}>join</Link>
        </div>
      </div>
    </div>
  );
}