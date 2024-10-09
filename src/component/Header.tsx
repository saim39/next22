import React from 'react'
import Link from 'next/link'

const Header = () => {
  return(
     <div className='flex p-3 bg-slate-4-- gap-3'>
        <Link href="#">contact</Link>
        <Link href="#">home</Link>
        <Link href="#">about</Link>
     </div>
  )
}

export default Header