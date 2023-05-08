import React, { useEffect, useState } from 'react'

const Chapter5 = () => {

    const [date,setDate] = useState(new Date())

    
    // useEffect(()=>{
    //     const id = setInterval(()=>{
    //         setDate(new Date())
    //     },1)
    //     console.log(id)
    // },[])

  return (
    <div>
      <h1>{date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+":"+date.getMilliseconds()}</h1>
    </div>
  )
}

export default Chapter5
