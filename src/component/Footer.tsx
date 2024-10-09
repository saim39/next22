import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return(
     <div className='fixed bottom-0 left-0 flex justify-center bg-slate-400 p-3 w-full'>
        <Link href="#"className="pl-3 pr-3">privacy</Link>
        <Link href="#"className="pl-3 pr-3">contact</Link>
        <Link href="#"className="pl-3 pr-3">terms</Link>
     </div>
  )
}

export default Footer