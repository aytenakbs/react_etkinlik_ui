import React, { useEffect } from 'react'
import { baseService } from '../../../api/baseService'

function List() {
    const [activity, setactivity] = useState([])
useEffect(() => {
 baseService.getAll("activity")
 .then((res)=>{
setactivity(res.data)
 })
.catch((err)=>{
    console.log(err)
})

}, [])

  return <>
  
  </>
}

export default List