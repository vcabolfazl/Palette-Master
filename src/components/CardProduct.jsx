import React from 'react'

export default function CardProduct({ bg, title, desc, bgBtn ,img}) {

 return (
  <div className=" w-fit rounded-lg" style={{ background: bg }}>
   <div className="flex p-2 gap-1">
    <div className="">
     <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
     <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
     <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
    </div>
   </div>
   <div className="card__content">
    <img src={`/assets/Images/web/p${img}.png`} alt="product" />
    <div className="text-black">
     <p className='mb-2 text-lg font-semibold' style={{ color: title }}>Lorem ipsum dolor sit</p>
     <span className='px-2 sm:px-5 text-left line-clamp-3' style={{ color: desc }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad reprehenderit amet!</span>
     <button type="button" className="rounded-lg text-sm px-5 py-2.5 my-2 mx-auto block text-white" style={{ background: bgBtn }}>Buy </button>
    </div>
   </div>
  </div>
 )
}