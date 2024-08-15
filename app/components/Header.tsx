"use client";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image'

const Header = () => {
    const {data: session} = useSession();
  return (
    <div className='flex justify-end mr-7 mt-2'>
        {session ? 
        <div className='flex align-bottom'>
            
            {<Image src={session.user?.image || '/icons/default-profile.png'} width={40} height={10} alt="profile image" className='rounded-full h-10 mr-5 my-auto'/>}
            <Link href="/api/auth/signout?callbackUrl=/" className="bg-errorRed rounded-full p-3  text-white font-Epilogue font-bold my-auto hover:drop-shadow-xl">Log Out</Link> 
        </div>
        : <div></div>}
    </div>
  )
}

export default Header