import React, { useState } from 'react'
import UseInput from '@/hooks/useInput'
import Alert from '@/components/Alert'
import CardProduct from '@/components/CardProduct'
export default function Web() {
  const [background, setBackground] = useState("#282828")
  const [text, setText] = useState("#FFFFFF")
  const [activeLink, setActiveLink] = useState("#3E5EfA")
  const [header, setHeader] = useState("#2C363F")
  const [title, setTitle] = useState("#F1F1F1")
  const [bgCard, setBgCard] = useState("#FBFBFB")
  const [bgtitleCard, setTitleCard] = useState("#093824")
  const [description, setDescription] = useState("#6B7280")
  const [firstButton, setFirstButton] = useState("#bE123C")
  const [secondButton, setSecondButton] = useState("#8A5663")
  const [footer, setFooter] = useState("#2C363F")
  return (
    <div className='px-2 md:px-0 container'>
      <form className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-11 gap-6 mt-16 mb-8'>
        <h2 className='col-span-full text-2xl font-semibold'>Enter the desired colors</h2>
        {/* Background */}
        <div className='bg-white shadow-2xl flex flex-col rounded-md'>
          <input type="color" className='w-full h-24' value={background} onChange={e => setBackground(e.target.value)} />
          <div className='p-1 text-black'>
            <p className='text-sm'>background</p>
            <p className='text-xs'>Color</p>
            <p className='cursor-pointer bg-gray-100 text-xs mt-1.5 text-center flex items-center justify-center gap-1' onClick={() => {
              navigator.clipboard.writeText(background)
              Alert("The color code was copied")
            }}>{background} <svg className="w-4 h-4">
                <use href='#copy'></use>
              </svg></p>
          </div>
        </div>
        {/* Text */}
        <UseInput
          title={"Text"}
          valueBg={text}
          setBg={setText}
        />
        {/* Active Link */}
        <UseInput
          title={"Active Link"}
          valueBg={activeLink}
          setBg={setActiveLink}
        />
        {/* Header */}
        <UseInput
          title={"bg Header"}
          valueBg={header}
          setBg={setHeader}
        />
        {/* title */}
        <UseInput
          title={"Title"}
          valueBg={title}
          setBg={setTitle}
        />
        {/* bg product card */}
        <UseInput
          title={"bg card"}
          valueBg={bgCard}
          setBg={setBgCard}
        />
        {/* title product card */}
        <UseInput
          title={"title card"}
          valueBg={bgtitleCard}
          setBg={setTitleCard}
        />
        {/* description */}
        <UseInput
          title={"description"}
          valueBg={description}
          setBg={setDescription}
        />

        {/* First Button */}
        <UseInput
          title={"F Button"}
          valueBg={firstButton}
          setBg={setFirstButton}
        />
        {/* Second button */}
        <UseInput
          title={"S Button"}
          valueBg={secondButton}
          setBg={setSecondButton}
        />
        {/* Footer */}
        <UseInput
          title={"Footer"}
          valueBg={footer}
          setBg={setFooter}
        />

      </form>

      <div className={`rounded-2xl mt-10`} style={{ background: background, color: text }}>
        <nav className="rounded-t-2xl" style={{ background: header }}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
              <img src="/assets/images/logo.svg" className="h-8 mr-3" alt="Palette Master Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Palette Master</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden " aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5">
                <use href='#menu'></use>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4   rounded md:bg-transparent md:p-0 font-semibold" style={{ color: activeLink }} aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 ">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 ">Services</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 ">Pricing</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 ">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="flex items-center justify-between mx-10">
          <p className=' text-2xl my-8 font-extrabold' style={{ color: title }}>The latest store products</p>
          <button type="button" className={`rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border`} style={{ border: `1px solid ${secondButton}`, color: secondButton }}>Second button</button>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center justify-center px-4 text-center">
          {
            Array.from({ length: 4 }, (_, index) => index + 1).map(item => (
              <CardProduct key={item} bg={bgCard} title={bgtitleCard} desc={description} bgBtn={secondButton} />

            ))
          }
        </div>

        <div className="w-full flex items-center justify-center my-9 ">
          <button type="button" className="rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 " style={{ background: firstButton }}>First button</button>
        </div>

        <footer className="rounded-b-2xl" style={{ background: footer }}>
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="/" className="flex items-center">
                  <img src="/assets/images/logo.svg" className="h-8 mr-3" alt="Palette Master Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:">Palette Master</span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase" style={{ color: title }}>Resources</h2>
                  <ul className=" font-medium" style={{ color: description }}>
                    <li className="mb-4">
                      <a href="/" className="hover:underline">Palette Master</a>
                    </li>
                    <li>
                      <a href="/" className="hover:underline">Tailwind CSS</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase" style={{ color: title }}>Follow us</h2>
                  <ul className="  font-medium" style={{ color: description }}>
                    <li className="mb-4">
                      <a href="/" className="hover:underline ">Github</a>
                    </li>
                    <li>
                      <a href="/" className="hover:underline">Discord</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase" style={{ color: title }}>Legal</h2>
                  <ul className="  font-medium" style={{ color: description }}>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-center" style={{ color: title }}>
              <span className="text-sm text-center ">© 2023 <a href="/" className="hover:underline">Palette Master™</a>. All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
