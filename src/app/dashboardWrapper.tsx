import React from 'react'
import Navbar from '@/app/(components)/Navbar'
import Sidebar from '@/app/(components)/Navbar/Sidebar'




const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-100 text-gray-900'>
        <Sidebar/>
        <main className={`dark:bg-dark-bg flex w-full flex-col bg-gray-100 md:pl-64`}>
            
            <Navbar/>
            
            {children}

        </main>


    </div>
  )
}

export default DashboardWrapper