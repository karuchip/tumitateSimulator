"use client"

import Link from 'next/link';
import TemporaryDrawer from './menu';

const Header = () => {
  return(
    <>
      <div className='headerContent'>
        <Link href="/"><h1>コーストFIREシミュレーター</h1></Link>
        <TemporaryDrawer/>
      </div>
    </>
  )
}

export default Header
