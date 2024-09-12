'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Menu() {
const [open, setOpen] = useState(false)
  return (
    <div>
    <Image 
        src="/menu.png" 
        alt="menu" 
        width={28} 
        height={28} 
        className='cursor-pointer'
        onClick={() => setOpen(prev=>!prev)}
    />{
        open && (
            <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
                <Link href="/">Homepage</Link>
                <Link href="/">Mais Vendidos</Link>
                <Link href="/">Sobre</Link>
                <Link href="/">Contato</Link>
                <Link href="/">Logout</Link>
                <Link href="/">Carrinho</Link>
            </div>
        )
    }
    </div>
  )
}

export default Menu