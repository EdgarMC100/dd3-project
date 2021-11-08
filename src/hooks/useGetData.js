import { useState, useEffect } from 'react'

const API = process.env.API;
console.log(API)

const useGetData = (type) => {
  const [data, setData] = useState([]);
  useEffect( () => {
    fetch(API+`/${type}/properties`)
    .then(response => {
      return response.json()
    })
    .then(data => {
        return setData(data)
      }
    )
  },[])
  return data;
}

export default useGetData;