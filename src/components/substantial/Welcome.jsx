// IMPORT
import { useEffect, useState } from 'react'

// EXPORT
export default function Welcome ({ f }) {
   const [hello, setHello] = useState(["Hello visitor, welcome to Ciwin Portofolio.", ""])
   useEffect(() => { 
      f(hello, setHello) 
   }, [])
   return(
      <div className="welcome">
         <p className="titleText">{ hello[1] }</p>
      </div>
   )
}