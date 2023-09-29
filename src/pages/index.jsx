import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="zoom absolute top-0 left-0 right-0 bottom-0 w-full h-full inset-0 bg-black/40">
        <div className="text-center">
          <h2 className="mb-10 text-2xl md:text-5xl">Select the palette design environment</h2>
          <div className="flex flex-wrap gap-7 items-center justify-center">
            <Link href={"/Web"} className="px-10 py-3 bg-yellow-400 rounded-xl md:text-3xl">Web Design</Link>
            <Link href={"/Mobile"} className="px-10 py-3 bg-rose-400 rounded-xl md:text-3xl">Mobile Design</Link>
          </div>
        </div>
      </div>
    </>
  )
}
