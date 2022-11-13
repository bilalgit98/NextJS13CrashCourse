import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='p-5 bg-purple-400'>
<Link href={'/'} className='px-2 py-1 bg-white rounded-lg'>Homepage</Link>
    </header>
  )
}

export default Header