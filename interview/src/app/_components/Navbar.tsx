import Link from 'next/link'
import React from 'react'


export default function Navbar() {
  return (
    <div className='shadow-md w-full h-[5rem] flex justify-center items-center'>
        <div className='cursor-pointer w-[10%] mx-2 flex justify-center items-center rounded-md transition-all ease-in-out h-[70%] hover:ring-1 hover:ring-blue-500'><Link href={'/'}></Link>กรอกข้อมูล </div>
        <div className='cursor-pointer w-[10%] mx-2 flex justify-center items-center rounded-md transition-all ease-in-out h-[70%] hover:ring-1 hover:ring-blue-500'>บันทึกข้อมูลการขอลาหยุด</div>
    </div>
  )
}