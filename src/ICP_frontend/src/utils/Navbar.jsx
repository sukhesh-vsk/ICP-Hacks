import React from 'react'
import notification_icon from '../assets/img/notification-bell.png'
import avatar from '../assets/img/people.png'


export const Navbar = () => {
  return (
    <div className='dash-nav px-5 py-4 flex justify-end border-b'>
        <form className="max-w-md me-20 flex-1">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 dark:text-dim-prime" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full px-4 py-3 ps-10 text-sm rounded-lg bg-gray-50 dark:bg-prime dark:placeholder-dim-prime dark:text-prime-text dark:focus:border-prime-text" placeholder="Search Hackathons, Profiles..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 focus:ring-2 focus:outline-none focus:ring-dim-prime font-medium rounded-lg text-sm px-4 py-1 dark:bg-btn-prime dark:hover:bg-dim-prime dark:focus:bg-dim-prime">Search</button>
            </div>
        </form>
        <img className='h-8 w-8 me-5 my-auto' src={notification_icon} alt='notifications'/>
        <img className='h-8 w-8 me-5 my-auto' src={avatar} alt='avatar'/>
    </div>
  )
}

