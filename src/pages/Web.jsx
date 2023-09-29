import React, { useState } from 'react'
import UseInput from '@/hooks/useInput'
import Alert from '@/components/Alert'
export default function Web() {
 const [background, setBackground] = useState("#282828")
 const [text, setText] = useState("#ffffff")
 const [activeLink, setActiveLink] = useState("#3E5EfA")
 const [header, setHeader] = useState("#2C363F")
 const [title, setTitle] = useState("#f1f1f1")
 const [bgCard, setBgCard] = useState("#FBFBFB")
 const [bgtitleCard, setTitleCard] = useState("#093824")
 const [description, setDescription] = useState("#6b7280")
 const [firstButton, setFirstButton] = useState("#be123c")
 const [secondButton, setSecondButton] = useState("#8a5663")
 const [footer, setFooter] = useState("#2C363F")
 return (
  <div className='container'>
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
   
  </div>
 )
}
