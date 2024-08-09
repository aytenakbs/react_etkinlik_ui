import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import DashboardLayout from './components/DashboardLayout';
import './App.css';
import ActivityDetail from './pages/ActivityDetail';
import { Favorite } from '@mui/icons-material';



function App() {
  return <>
  <DashboardLayout>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/:activityId" element={<ActivityDetail/>}/>
    <Route path="/category/:categoryId" element={<CategoryPage/>}/>
    <Route path="/favorite" element={<Favorite/>}/>
  </Routes>
  </DashboardLayout>
  </>
}

export default App