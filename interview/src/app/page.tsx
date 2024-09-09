"use client";
import React, { useState } from "react";

export default function List() {
  const [type_leave, setType_leave] = useState("");
  const [form, setForm] = useState({});

  const handleChang = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async() => {
    const data = Object.assign({}, form, { other_leave: type_leave });
    console.log([data]);
    if(Object.keys(form).length<8){
      return alert('กรุณากรอกให้ครบ !!')
    }else{
      const res = await fetch('/api/insert',{
        method:'POST',
        body:JSON.stringify(data)
      })
      if(res.ok){
        const resp = await res.json()
        return alert(resp['massage'])
      }
    }
    return;
  };
  return (
    <div className="w-full h-fit flex justify-center items-center my-5 ">
      <div className="shadow-lg w-[30%] h-fit p-5">
        <form action="" className="w-full h-fit" method="post">
          <h1 className="h-[4rem] w-full flex justify-center items-center text-3xl mx-6">
            กรอกข้อมูลการลาหยุด
          </h1>
          <li className="mb-2">ข้อมูลส่วนตัว</li>
          <input
            onChange={handleChang}
            name="name"
            className="border outline-none w-full h-[3rem] mb-4 rounded-md px-2"
            type="text"
            placeholder="ชื่อ-นามสกุล"
          />
          <input
            name="role"
            onChange={handleChang}
            className="border outline-none w-full h-[3rem] mb-4 rounded-md px-2"
            type="text"
            placeholder="สังกัด/ตำแหน่ง"
          />
          <input
            onChange={handleChang}
            name="email"
            className="border outline-none w-full h-[3rem] mb-4 rounded-md px-2"
            type="text"
            placeholder="อีเมล์"
          />
          <input
            onChange={handleChang}
            name="phone_number"
            className="border outline-none w-full h-[3rem] mb-4 rounded-md px-2"
            type="text"
            placeholder="เบอร์โทร"
          />
          <li className="mb-2">ประเภทการลา</li>
          <select
            name="type_leave"
            id=""
            className="border rounded-md w-[40%] h-[3rem] my-4 outline-none"
            onChange={(e) => {
              setType_leave(e.target.value);
              handleChang(e);
            }}
          >
            <option value="ลาป่วย" className="text-center">
              ลาป่วย
            </option>
            <option value="ลากิจ" className="text-center">
              ลากิจ
            </option>
            <option value="พักร้อน" className="text-center">
              พักร้อน
            </option>
            <option value="อื่นๆ" className="text-center">
              อื่นๆ
            </option>
          </select>
          {type_leave === "อื่นๆ" && (
            <input
            onChange={handleChang}
              name="type_other"
              className="border outline-none w-full h-[3rem] mb-4 rounded-md px-2"
              type="text"
              placeholder="ระบุ"
            />
          )}
          <input
            onChange={handleChang}
            name="cause_leave"
            className="border outline-none w-full h-[3rem] mb-4 rounded-md px-2"
            type="text"
            placeholder="สาเหตุการลา"
          />
          <li className="mb-4">วันที่ขอลา</li>
          <div className="flex justify-between items-center w-full h-fit">
            <input
              onChange={handleChang}
              name="date_s"
              className="border outline-none w-[45%] h-[3rem] mb-4 rounded-md px-2"
              type="date"
              placeholder="ระบุ"
            />
            <span className="h-fit w-fit flex justify-center items-center">
              ถึง
            </span>
            <input
              onChange={handleChang}
              name="date_e"
              className="border outline-none w-[45%] h-[3rem] mb-4 rounded-md px-2"
              type="date"
              placeholder="ระบุ"
            />
          </div>
          <div className="w-full h-[7rem] flex justify-between items-center">
            <button onClick={()=>{
              setForm({})
              setType_leave('')
            }}
              type="reset"
              className="rounded-md bg-red-500 w-[49%] h-1/2 text-white text-lg hover:bg-red-600 active:scale-90 transition-all ease-in-out"
            >
              รีเซ็ต
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              type="submit"
              className="rounded-md bg-blue-500 w-[49%] h-1/2 text-white text-lg hover:bg-blue-600 active:scale-90 transition-all ease-in-out"
            >
              ยืนยันการลา
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
