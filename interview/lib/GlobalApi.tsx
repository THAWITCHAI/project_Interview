
const getData = async() =>{
    const data = await fetch('/api/insert')
    return await data.json()
}

export default{
    getData
}