"use client";
import React, { useEffect, useState } from "react";

export default function Show_data() {
  const [data, setData] = useState([]);
  // const [search,setSearch] = useState('')

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("/api/insert")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  // const result = data.filter((item)=>item[''])
  return (
    <div className="w-full h-[90%] border p-10">
      <div className="w-full h-[5rem] my-10 flex justify-center items-center">

        <input
          type="text"
          placeholder="ค้นหา"
          className="outline-none border w-1/2 h-1/2 rounded-md px-2"
        />

      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ชื่อ
              </th>
              <th scope="col" className="px-6 py-3">
                สังกัด/ตำแหน่ง
              </th>
              <th scope="col" className="px-6 py-3">
                อีเมล์
              </th>
              <th scope="col" className="px-6 py-3">
                เบอร์โทร
              </th>
              <th scope="col" className="px-6 py-3">
                ประเภทการลา
              </th>
              <th scope="col" className="px-6 py-3">
                สาเหตุการลา
              </th>
              <th scope="col" className="px-6 py-3">
                วันที่ขอลา - ถึงวันที่
              </th>
              <th scope="col" className="px-6 py-3">
                วันเวลาที่บันทึกข้อมูล
              </th>
              <th scope="col" className="px-6 py-3">
                สถานะ
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <td className="px-6 py-4">{item["name"]}</td>
                  <td className="px-6 py-4">{item["role"]}</td>
                  <td className="px-6 py-4">{item["email"]}</td>
                  <td className="px-6 py-4">{item["phone_number"]}</td>
                  <td className="px-6 py-4">{item["type_leave"]}</td>
                  <td className="px-6 py-4">{item["cause_leave"]}</td>
                  <td className="px-6 py-4">
                    {item["date_s"]} ถึง {item["date_e"]}
                  </td>
                  <td className="px-6 py-4">{item["create_at"]}</td>
                  <td className="px-6 py-4">{item["sname"]}</td>
                  <td className="px-6 py-4">
                    <button className="bg-blue-500 text-white w-[5rem] h-[3rem] rounded-md mx-3">
                      เพิ่มเติม
                    </button>
                    <button
                      className="bg-red-500 text-white w-[5rem] h-[3rem] rounded-md"
                      onClick={async () => {
                        const res = await fetch("/api/insert", {
                          method: "DELETE",
                          body: JSON.stringify({ id: item["id"] }),
                        });
                        if (res.ok) {
                          const resp = await res.json();
                          getData()
                          alert(resp['massage'])
                          return 
                        }
                        return
                      }}
                    >
                      ลบ
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
