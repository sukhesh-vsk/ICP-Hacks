import React, { useState } from 'react'
import { Datas } from '../data/Datas';
import project_ico from '../assets/img/project_ico.png';
import like_icon from '../assets/img/likee.png';

export const ViewProjects = () => {
    const projects = Datas.projects;
    const [liked, setLiked] = useState(Array(projects.length).fill(false));

    const toggleLike = (index) => {
        const newLiked = Array(projects.length).fill(false);
        newLiked[index] = true;
        setLiked(newLiked);
    }

    return (
        <section className='grid grid-cols-4 gap-4 p-5'>
            {projects.map((data, index) => (
                <a href="/results/viewprojects#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover rounded-lg w-16 ms-3 me-1" src={project_ico} alt="projects" />
                    <div class="flex flex-col justify-between p-4 pe-0 leading-normal">
                        <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
                        <p class="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
                        <button href="#" className={`flex w-24 items-center px-3 py-1 text-sm font-medium text-center text-prime-text ring-1 ring-prime-text rounded-lg focus:outline-none dark:bg-prime`} onClick={() => toggleLike(index)}>
                            {liked[index] ? 'Liked' : 'Like'} &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumbs-up" fill='red' className='w-5 h-5 ms-1'>
                                <path d="M7.5 23.501h-7a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5zm-6.5-1h6v-11H1v11z"
                                    fill='#025514'></path>
                                <path d="M19.75 22.501H10.5c-.925 0-2.605-.398-3.354-1.146a.5.5 0 0 1 .707-.707c.473.473 1.834.854 2.646.854h9.25c.689 0 1.25-.561 1.25-1.25 0-.344-.14-.666-.395-.907a.499.499 0 0 1 .286-.859A1.249 1.249 0 0 0 22 17.251c0-.344-.14-.666-.395-.907a.499.499 0 0 1 .286-.859A1.247 1.247 0 0 0 23 14.251c0-.466-.262-.89-.684-1.106a.497.497 0 0 1-.034-.87c.449-.278.718-.754.718-1.274 0-.827-.673-1.5-1.5-1.5h-7a.502.502 0 0 1-.468-.677c.01-.027.968-2.564.968-4.323 0-1.637-1.452-3-2-3-.431 0-.792.157-1 .272v3.228a.501.501 0 0 1-.046.209l-3 6.5a.506.506 0 0 1-.23.238l-1 .5a.5.5 0 0 1-.447-.895l.843-.421L11 4.891v-3.39c0-.152.069-.295.188-.391A3.13 3.13 0 0 1 13 .501c1.157 0 3 1.831 3 4 0 1.368-.49 3.071-.795 4H21.5c1.378 0 2.5 1.122 2.5 2.5 0 .631-.235 1.223-.65 1.675.411.413.65.974.65 1.575a2.24 2.24 0 0 1-1.235 2 2.24 2.24 0 0 1-1 3 2.253 2.253 0 0 1-2.015 3.25z"
                                    fill='#025514' class="color000000 svgShape">
                                </path>
                            </svg>
                        </button>
                    </div>
                </a>
            ))}
        </section>
    )
}