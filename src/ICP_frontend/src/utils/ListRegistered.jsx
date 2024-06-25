import React from 'react'
import { useState } from 'react'
import { Datas } from '../data/Datas'
import { RegisterHacks } from './RegisterHacks';

export const ListRegistered = () => {
    const registered = Datas.registered;

    const [isVisible, setIsVisible] = useState("false");

    const handleAddPlanBtn = () => {
      setIsVisible((isVisible === "false") ? "true" : "false");
    }

    return (
        <section className='hackathon-display p-8 grid grid-cols-3 gap-4'>
            {registered.map((data, index) => (
                <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-prime dark:border-gray-700" onClick={handleAddPlanBtn}>
                    <a href="/projects#">
                        <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-prime-text">{data.name}</h5>
                        <p className="mb-0 text-base tracking-tight text-gray-900 dark:text-dim-prime">{data.sponsor}</p>
                        <p className="mb-3 text-base tracking-tight text-gray-900 dark:text-dim-prime">{data.date}</p>
                    </a>
                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-dim-prime">{data.description}</p>
                    {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:outline-none dark:bg-btn-prime dark:hover:bg-dim-prime">
                        Register
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a> */}
                    <p className='inline text-sm font-semibold bg-trans-prime text-prime-text rounded-md px-2 py-1'>{data.progress}</p>
                </div>
            ))}
            <RegisterHacks  visible={isVisible} toggleVisible={handleAddPlanBtn}/>
        </section>
  )
}
