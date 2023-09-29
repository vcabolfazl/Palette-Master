import Alert from '@/components/Alert'
import React from 'react'
export default function UseInput({ title, valueBg, setBg }) {
 return (
  <div className='bg-white shadow-2xl flex flex-col rounded-md'>
   <input type="color" className='w-full h-24' value={valueBg} onChange={e => setBg(e.target.value)} />
   <div className='p-1 text-black'>
    <p className='text-sm'>{title}</p>
    <p className='text-xs'>Color</p>
    <p className='cursor-pointer bg-gray-100  text-xs  mt-1.5 text-center flex items-center justify-center gap-1' onClick={() => {
     navigator.clipboard.writeText(valueBg)
     Alert("The color code was copied")
    }}>{valueBg}
     <svg className="w-4 h-4">
      <use href='#copy'></use>
     </svg></p>
   </div>
  </div>
 )
}
