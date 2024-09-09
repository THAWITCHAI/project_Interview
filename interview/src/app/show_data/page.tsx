"use client";
import React, { useEffect, useState } from "react";

interface Interveiw {
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
  sid: string;
  sname: string;
}

export default function Show_data() {
  const [data, setData] = useState<Interveiw[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("/api/insert")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  const result = data.filter((item) => {
    return (
      (String(item.id) &&
        String(item.id).toUpperCase().includes(search.toUpperCase())) ||
      item.name.toUpperCase().includes(search.toUpperCase()) ||
      item.role.toUpperCase().includes(search.toUpperCase()) ||
      String(item.other_leave).toUpperCase().includes(search.toUpperCase()) ||
      String(item.email).toUpperCase().includes(search.toUpperCase()) ||
      item.phone_number.includes(search) ||
      String(item.sname).toUpperCase().includes(search.toUpperCase())
    );
  });
  return (
    <div className="w-full h-[90%] border p-10">
      <div className="w-full h-[5rem] my-10 flex justify-center items-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="ค้นหา"
          className="outline-none border w-1/2 h-1/2 rounded-md px-2"
        />
      </div>
      <div className="relative overflow-y-scroll h-[30rem] ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
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
            {search === "" &&
              data.map((item, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#00000017] transition-all ease-in-out"
                    key={index}
                  >
                    <td className="px-6 py-4">{item["name"]}</td>
                    <td className="px-6 py-4">{item["role"]}</td>
                    <td className="px-6 py-4">{item["email"]}</td>
                    <td className="px-6 py-4">{item["phone_number"]}</td>
                    <td className="px-6 py-4">{item["type_leave"]}</td>
                    <td className="px-6 py-4">{item["cause_leave"]}</td>
                    <td className="px-6 py-4">
                      {item["date_s"]} - {item["date_e"]}
                    </td>
                    <td className="px-6 py-4">{item["create_at"]}</td>
                    <td className="px-6 py-4 text-yellow-500">
                      {item["sname"]}
                    </td>
                    <td className="px-6 py-4">
                      <button className="bg-blue-500 text-white w-[5rem] h-[3rem] rounded-md mx-3 active:scale-90 transition-all ease-in-out">
                        เพิ่มเติม
                      </button>
                      <button
                        className="bg-red-500 text-white w-[5rem] h-[3rem] rounded-md active:scale-90 transition-all ease-in-out"
                        onClick={async () => {
                          const res = await fetch("/api/insert", {
                            method: "DELETE",
                            body: JSON.stringify({ id: item["id"] }),
                          });
                          if (res.ok) {
                            getData();
                            return;
                          }
                          return;
                        }}
                      >
                        ลบ
                      </button>
                    </td>
                  </tr>
                );
              })}

            {search !== "" &&
              result.map((item, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#00000017] transition-all ease-in-out"
                    key={index}
                  >
                    <td className="px-6 py-4">{item["name"]}</td>
                    <td className="px-6 py-4">{item["role"]}</td>
                    <td className="px-6 py-4">{item["email"]}</td>
                    <td className="px-6 py-4">{item["phone_number"]}</td>
                    <td className="px-6 py-4">{item["type_leave"]}</td>
                    <td className="px-6 py-4">{item["cause_leave"]}</td>
                    <td className="px-6 py-4">
                      {item["date_s"]} - {item["date_e"]}
                    </td>
                    <td className="px-6 py-4">{item["create_at"]}</td>
                    <td className="px-6 py-4 text-yellow-500">
                      {item["sname"]}
                    </td>
                    <td className="px-6 py-4">
                      <button className="bg-blue-500 text-white w-[5rem] h-[3rem] rounded-md mx-3 active:scale-90 transition-all ease-in-out">
                        เพิ่มเติม
                      </button>
                      <button
                        className="bg-red-500 text-white w-[5rem] h-[3rem] rounded-md active:scale-90 transition-all ease-in-out"
                        onClick={async () => {
                          const res = await fetch("/api/insert", {
                            method: "DELETE",
                            body: JSON.stringify({ id: item["id"] }),
                          });
                          if (res.ok) {
                            getData();
                            return;
                          }
                          return;
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
