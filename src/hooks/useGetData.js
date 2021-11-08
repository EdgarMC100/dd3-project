import { useState, useEffect } from 'react'

const API = process.env.API;
console.log(API)

const useGetData = (type) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect( () => {
    fetch(API+`/${type}/properties`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setTimeout(()=>{
        setLoading(false)
        setData(data)
      },2000)
    })
  },[])
  return { data, loading};
}

export default useGetData;