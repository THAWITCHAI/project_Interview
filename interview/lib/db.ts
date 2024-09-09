import mysql2 from 'mysql2'

export const mysqlPool = mysql2.createPool(String(process.env.MYSQL_URI))