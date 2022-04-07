// IMPORT
import { useEffect, useState } from 'react'

// EXPORT
export default function Introduction ({ f }) {
   const [hello, setHello] = useState(["Intro is in development, coming soon.", ""])
   useEffect(() => { 
      f(hello, setHello) 
   }, [])
   return(
      <div className="welcome">
         <p className="titleText">{ hello[1] }</p>
      </div>
   )
}