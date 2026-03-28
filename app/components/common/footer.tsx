"use client"
import Link from 'next/link';

const Footer = () => {
  return(
    <>
      <div className='h-[80px] bg-[#E8E7E7] flex justify-center items-center'>
        <Link href="/privacypolicy" className="text-sm text-gray-500 hover:underline hover:text-[#111111]">
          プライバシーポリシー
        </Link>
      </div>
    </>
  )
}

export default Footer
