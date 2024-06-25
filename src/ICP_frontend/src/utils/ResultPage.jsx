import React, { useState } from 'react'
import { Datas } from '../data/Datas';

export const ResultPage = () => {
    const result = Datas.result;    

    return (
        <section className='hackathon-display p-8 grid grid-cols-3 gap-4'>
            {result.map((data, index) => (
                <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-prime dark:border-gray-700">
                    <a href="/results/viewprojects">
                        <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-prime-text">{data.name}</h5>
                        <p className="mb-0 text-base tracking-tight text-gray-900 dark:text-dim-prime">{data.sponsor}</p>
                        <p className="mb-3 text-base tracking-tight text-gray-900 dark:text-dim-prime">{data.date}</p>
                    </a>
                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-dim-prime">{data.description}</p>
                </div>
            ))}

        </section>
    )
}