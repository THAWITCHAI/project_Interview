import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../lib/db";

 
 export async function POST(req:any){
    const data = await req.json();
    const PromisePool = mysqlPool.promise()
    PromisePool.query('INSERT INTO list_leaves set ?',[data])
    return NextResponse.json({massage:'Successfully'},{status:200})
 }
 
 export async function GET(){
    const PromisePool = mysqlPool.promise()
    const [res] = await PromisePool.query(`SELECT * FROM list_leaves L JOIN status S ON L.sid = S.sid`)
    return NextResponse.json(res)
 }

 export async function DELETE(req:any){
   const {id} = await req.json();
   console.log(id)
   const PromisePool = mysqlPool.promise()
   PromisePool.query(`DELETE FROM list_leaves WHERE id = ${id}`)
   return NextResponse.json({massage:'Successfully'},{status:200})
}
