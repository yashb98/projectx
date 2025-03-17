'use client'

import { LockIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'


const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [showPriority, setShowPriority] = useState(true);

    const sidebaeClasNames = `fixed flex flex-col h-[100%] justify-between shadow-xl 
        transition-all diration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white 
        w-64     
    `

  return (
    <div className={sidebaeClasNames}>
        <div className='flex h-[100%] w-full flex-col justify-start'>
            {/* TOP LOGO */}
            <div className='z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black'>
                <div className='text-xl font-bold text-gray-800 dark:text-white'>
                    This is sidebar
                    
                </div>
                
            </div>
            {/* Team */}
            <div className='flex items-center gap-2 border-y-1 border-gray-300 px-4 py-1 dark:border-gray-800'>
                <Image  
                    src="/logopx.png"
                    alt= 'logo'
                    width={60}
                    height={60}
                />
                <div>
                    <h3  className='text-md font-bold tracking-wide dark:text-gray-200 pb-1 '>
                        ProjectX
                    </h3>
                    <div className='flex items-start gap-2'>
                        <LockIcon  className='mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400'/>
                        <p className='text-xs text-gray-500 '>Private</p>

                    </div>
                </div>
            </div>
            {/* Navbar Links */}
            
        </div>
    </div>
  )
}

export default Sidebar;