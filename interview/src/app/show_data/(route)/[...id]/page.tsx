'use client'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../../../lib/GlobalApi'

type Props = any
interface List_Leaves {
  id: string;
  name: string;
  email: string;
  role: string;
  phone_number: string;
  type_leave: string;
  type_other: string;
  cause_leave: string;
  date_s: string;
  date_e: string;
  other_leave: string;
  create_at: string;
  sname: string;
}

export default function Detail({ params }: Props) {
  const { id } = params
  const [data, setData] = useState<List_Leaves[]>([])
  useEffect(() => {
    GlobalApi.getData().then(item => setData(item))
  }, [])


  const filData = data.filter((item) => item.id == id)

  return (
    <div className='w-full h-[90%] flex flex-col justify-center items-center'>
      <div className='w-[25rem] h-[45rem] shadow-lg rounded-md p-5 flex flex-col justify-start items-center'>
        {filData.map((item, index) => {
          return (
            <div key={index} className='w-fit h-fit'>
              <h1 className='my-5 p-5 text-center text-xl text-green-500'>รายละเอียดการลาของบุคคล</h1>
              <p className='my-5 w-fit h-fit text-ms text-center'>ชื่อ - นามสกุล : {item.name}</p>
              <p className='my-5 w-fit h-fit text-ms text-center'>อีเมล์ : {item.email}</p>
              <p className='my-5 w-fit h-fit text-ms text-center'>ตำแหน่ง : {item.role}</p>
              <p className='my-5 w-fit h-fit text-ms text-center'>เบอร์โทร : {item.phone_number}</p>
              <p className='my-5 w-fit h-fit text-ms text-center'>ประเภทการลา : {item.type_leave}</p>
              <p className='my-5 w-fit h-fit text-ms text-center'>ประเภทอื่นๆ : {item.type_other}</p>
              <p className='my-5 w-fit h-fit text-ms text-center'>สาเหตุการลา : {item.cause_leave}</p>
              <p className='my-5 w-fit h-fit text-ms text-center'>วันลา : {item.date_s}</p>
              <p className='my-5 w-fit h-fit text-ms text-center'>ลาถึงวัน : {item.date_e}</p>
              <p className='my-5 w-fit h-fit text-ms text-center'>สถานะการลา : {item.sname}</p>
              <p className='my-5 w-fit h-fit text-ms text-center'>วันที่สร้าง : {item.create_at}</p>
              <div className='w-full h-[5rem] py-5  flex flex-row justify-between items-center'>
                <button className='w-[49%] h-full bg-yellow-400 hover:bg-yellow-500 transition-all ease-in-out rounded-md text-white' onClick={()=>history.back()}>กลับไป</button>
                <button className='w-[49%] h-full bg-green-400 hover:bg-green-500 transition-all ease-in-out rounded-md text-white'>แก้ไข</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}