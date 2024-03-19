import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className={`text-white h-screen w-screen bg-center flex flex-col justify-start items-center overflow-hidden`}>
      <Navbar />
      <div
        className={`p-4  bg-ping-black w-[80%] h-[80%] mt-4 backdrop-blur-none rounded-xl border-neutral-800 border-2 overflow-y-auto`}
      >
      </div>
    </div>
  );
}