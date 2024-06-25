import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Drawer, HackathonDisplay, ListRegistered, Navbar, ResultPage, ViewProjects } from '../utils';

export const Dashboard = () => {
  return (
    <Router>
      <section className='flex h-full'>
        <Drawer />
        <div className='dash-content flex-1'>
          <Navbar />
            <Routes>
              <Route path='/' element={<HackathonDisplay />} />
              <Route path='/projects' element={<ListRegistered />} />
              <Route path='/results' element={<ResultPage />} />
              <Route path='/results/viewprojects' element={<ViewProjects />} />
            </Routes>
        </div>
      </section>
    </Router>
  )
}